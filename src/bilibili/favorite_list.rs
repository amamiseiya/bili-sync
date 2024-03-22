use std::rc::Rc;

use async_stream::stream;
use futures_core::stream::Stream;
use serde_json::Value;

use crate::bilibili::BiliClient;
use crate::Result;
pub struct FavoriteList {
    client: Rc<BiliClient>,
    fid: String,
}

#[allow(dead_code)]
#[derive(Debug, serde::Deserialize)]
pub struct FavoriteListInfo {
    id: u64,
    title: String,
}

#[derive(Debug, serde::Deserialize)]
pub struct VideoInfo {
    pub title: String,
    #[serde(rename = "type")]
    pub vtype: u64,
    pub bvid: String,
    pub intro: String,
    pub cover: String,
    pub upper: Upper,
    pub ctime: u64,
    pub fav_time: u64,
}

#[derive(Debug, serde::Deserialize)]
pub struct Upper {
    pub mid: u64,
    pub name: String,
}
impl FavoriteList {
    pub fn new(client: Rc<BiliClient>, fid: String) -> Self {
        Self { client, fid }
    }

    pub async fn get_info(&self) -> Result<FavoriteListInfo> {
        let mut res = self
            .client
            .request(
                reqwest::Method::GET,
                "https://api.bilibili.com/x/v3/fav/folder/info",
            )
            .query(&[("media_id", &self.fid)])
            .send()
            .await?
            .json::<serde_json::Value>()
            .await?;
        Ok(serde_json::from_value(res["data"].take())?)
    }

    async fn get_videos(&self, page: u32) -> Result<Value> {
        let res = self
            .client
            .request(
                reqwest::Method::GET,
                "https://api.bilibili.com/x/v3/fav/resource/list",
            )
            .query(&[
                ("media_id", self.fid.as_str()),
                ("pn", &page.to_string()),
                ("ps", "20"),
                ("order", "mtime"),
                ("type", "0"),
                ("tid", "0"),
            ])
            .send()
            .await?
            .json::<serde_json::Value>()
            .await?;
        if res["code"] != 0 {
            return Err(format!("get favorite videos failed: {}", res["message"]).into());
        }
        Ok(res)
    }

    // 拿到收藏夹的所有权，返回一个收藏夹下的视频流
    pub fn into_video_stream(self) -> impl Stream<Item = VideoInfo> {
        stream! {
            let mut page = 1;
            loop {
                let Ok(mut videos) = self.get_videos(page).await else{
                    break;
                };
                let Ok(videos_info) = serde_json::from_value::<Vec<VideoInfo>>(videos["data"]["medias"].take()) else{
                    break;
                };
                for video_info in videos_info.into_iter(){
                    yield video_info;
                }
                if videos["data"]["has_more"].is_boolean() && videos["data"]["has_more"].as_bool().unwrap(){
                    page += 1;
                    continue;
                }
                break;
            }
        }
    }
}