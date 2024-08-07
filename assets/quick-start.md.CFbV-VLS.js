import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.Bsyxd66g.js";const g=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"quick-start.md","filePath":"quick-start.md","lastUpdated":1722700140000}'),l={name:"quick-start.md"},t=n(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><p>程序使用 Rust 编写，不需要 Runtime 且并为各个平台提供了预编译文件，绝大多数情况下是没有使用障碍的。</p><h2 id="程序获取" tabindex="-1">程序获取 <a class="header-anchor" href="#程序获取" aria-label="Permalink to &quot;程序获取&quot;">​</a></h2><p>程序为各个平台提供了预构建的二进制文件，并且打包了 <code>Linux/amd64</code> 与 <code>Linux/arm64</code> 两个平台的 Docker 镜像。用户可以自行选择使用哪种方式运行。</p><h3 id="其一-下载平台二进制文件运行" tabindex="-1">其一：下载平台二进制文件运行 <a class="header-anchor" href="#其一-下载平台二进制文件运行" aria-label="Permalink to &quot;其一：下载平台二进制文件运行&quot;">​</a></h3><div class="caution custom-block github-alert"><p class="custom-block-title">CAUTION</p><p>如果你使用这种方式运行，请确保 FFmpeg 已被正确安装且位于 PATH 中，可通过执行 <code>ffmpeg</code> 命令访问。</p></div><p>在<a href="https://github.com/amtoaer/bili-sync/releases" target="_blank" rel="noreferrer">程序发布页</a>选择最新版本中对应机器架构的压缩包，解压后会获取一个名为 <code>bili-sync-rs</code> 的可执行文件，直接双击执行。</p><h3 id="其二-使用-docker-compose-运行" tabindex="-1">其二： 使用 Docker Compose 运行 <a class="header-anchor" href="#其二-使用-docker-compose-运行" aria-label="Permalink to &quot;其二： 使用 Docker Compose 运行&quot;">​</a></h3><p>Linux/amd64 与 Linux/arm64 两个平台可直接使用 Docker 或 Docker Compose 运行，此处以 Compose 为例：</p><blockquote><p>请注意其中的注释，有不清楚的地方可以先继续往下看。</p></blockquote><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  bili-sync-rs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 不推荐使用 latest 这种模糊的 tag，最好直接指明版本号</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">amtoaer/bili-sync-rs:latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">unless-stopped</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    network_mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bridge</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 该选项请仅在日志终端支持彩色输出时启用，否则日志中可能会出现乱码</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    tty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 非必需设置项，推荐设置为宿主机用户的 uid 及 gid (\`$uid:$gid\`)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 可以执行 \`id \${user}\` 获取 \`user\` 用户的 uid 及 gid</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 程序下载的所有文件权限将与此处的用户保持一致，不设置默认为 Root</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1000:1000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    hostname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bili-sync-rs</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bili-sync-rs</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${你希望存储程序配置的目录}:/app/.config/bili-sync</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 还需要有一些其它必要的挂载，包括 up 主信息位置、视频下载位置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 这些目录不是固定的，只需要确保此处的挂载与 bili-sync-rs 的配置文件相匹配</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 如果你使用的是群晖系统，请移除最后的 logging 配置，否则会导致日志不显示</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    logging</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      driver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;local&quot;</span></span></code></pre></div><p>使用该 compose 文件，执行 <code>docker compose up -d</code> 即可运行。</p><h2 id="程序配置" tabindex="-1">程序配置 <a class="header-anchor" href="#程序配置" aria-label="Permalink to &quot;程序配置&quot;">​</a></h2><p>你是否遇到了程序的 panic？别担心，这是正常情况。</p><p>程序默认会将配置文件存储于 <code>\${config_dir}/bili-sync/config.toml</code>，数据库文件存储于 <code>\${config_dir}/bili-sync/data.sqlite</code>。</p><div class="caution custom-block github-alert"><p class="custom-block-title">CAUTION</p><p></p><p>请注意，<code>config_dir</code> 的实际位置与操作系统和用户名有关。</p><p>对于名为 Alice 的用户，<code>config_dir</code> 指向的位置是：</p><ul><li>Lin: <code>/home/Alice/.config</code></li><li>Win: <code>C:\\Users\\Alice\\AppData\\Roaming</code></li><li>Mac: <code>/Users/Alice/Library/Application Support</code></li></ul><p>特别的，在 Docker 环境中，<code>config_dir</code> 会被展开为 <code>/app/.config</code>。</p></div><p>在启动时程序会尝试加载配置文件，如果发现不存在会新建并写入默认配置。</p><p>获得配置内容后，程序会对其做一次简单的校验，因为默认配置中不包含凭据信息与要下载的收藏夹、视频合集/视频列表，因此程序会拒绝运行而发生 panic。我们只需要在程序生成的默认配置上做一些简单修改即可成功运行。</p><p>当前版本的默认示例文件如下：</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">video_name = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{title}}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">page_name = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{bvid}}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">interval = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1200</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upper_path = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/Users/amtoaer/Library/Application Support/bili-sync/upper_face&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nfo_time_type = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;favtime&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">credential</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sessdata = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bili_jct = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">buvid3 = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dedeuserid = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ac_time_value = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter_option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">video_max_quality = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Quality8k&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">video_min_quality = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Quality360p&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">audio_max_quality = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;QualityHiRES&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">audio_min_quality = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Quality64k&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">codecs = [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;AV1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;HEV&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;AVC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">no_dolby_video = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">no_dolby_audio = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">no_hdr = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">no_hires = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">danmaku_option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">duration = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15.0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">font = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;黑体&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">font_size = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">width_ratio = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">horizontal_gap = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20.0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lane_size = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">32</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float_percentage = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bottom_percentage = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">opacity = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">76</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bold = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">outline = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time_offset = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">favorite_list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">collection_list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch_later</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">enabled = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">path = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span></code></pre></div><p>虽然配置文件看起来很长，但绝大部分选项是不需要做修改的。一般来说，我们只需要关注其中的少数几个，以下逐条说明。</p><h3 id="interval" tabindex="-1"><code>interval</code> <a class="header-anchor" href="#interval" aria-label="Permalink to &quot;\`interval\`&quot;">​</a></h3><p>表示程序每次执行扫描下载的间隔时间，单位为秒。</p><h3 id="upper-path" tabindex="-1"><code>upper_path</code> <a class="header-anchor" href="#upper-path" aria-label="Permalink to &quot;\`upper_path\`&quot;">​</a></h3><p>UP 主头像和信息的保存位置。对于使用 Emby、Jellyfin 媒体服务器的用户，需确保此处路径指向 Emby、Jellyfin 配置中的 <code>/metadata/people/</code> 才能够正常在媒体服务器中显示 UP 主的头像。</p><h3 id="credential" tabindex="-1"><code>credential</code> <a class="header-anchor" href="#credential" aria-label="Permalink to &quot;\`credential\`&quot;">​</a></h3><p>哔哩哔哩账号的身份凭据，请参考<a href="https://nemo2011.github.io/bilibili-api/#/get-credential" target="_blank" rel="noreferrer">凭据获取流程</a>获取并对应填写至配置文件中，后续 bili-sync 会在必要时自动刷新身份凭据，不再需要手动管理。</p><p>推荐使用匿名窗口获取，避免潜在的冲突。</p><h3 id="codecs" tabindex="-1"><code>codecs</code> <a class="header-anchor" href="#codecs" aria-label="Permalink to &quot;\`codecs\`&quot;">​</a></h3><p>这是 bili-sync 选择视频编码的优先级顺序，优先级按顺序从高到低。此处对编码格式做一个简单说明：</p><ul><li><p>AVC 又称 H.264，是目前使用最广泛的视频编码格式，绝大部分设备可以使用硬件解码播放该格式的视频（也因此播放普遍流畅），但是同等画质下视频体积较大。</p></li><li><p>HEV(C) 又称 H.265，与 AV1 都是新一代的视频编码格式。这两种编码相比 AVC 有更好的压缩率，同等画质下视频体积更小，但由于相对较新，硬件解码支持不如 AVC 广泛。如果你的播放设备不支持则只能使用软件解码播放，这种情况下可能导致播放卡顿、机器发热等问题。</p></li></ul><p>建议查阅自己常用播放设备对这三种编码的硬件解码支持情况以选择合适的编码格式，如果硬件支持 HEV 或 AV1，那么可以将其优先级调高。</p><p>而如果你的设备不支持，或者单纯懒得查询，那么推荐将 AVC 放在第一位以获得最好的兼容性。</p><h3 id="favorite-list" tabindex="-1"><code>favorite_list</code> <a class="header-anchor" href="#favorite-list" aria-label="Permalink to &quot;\`favorite_list\`&quot;">​</a></h3><p>你想要下载的收藏夹与想要保存的位置。简单示例：</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3115878158 = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/home/amtoaer/Downloads/bili-sync/测试收藏夹&quot;</span></span></code></pre></div><p>收藏夹 ID 的获取方式可以参考<a href="/favorite">这里</a>。</p><h3 id="collection-list" tabindex="-1"><code>collection_list</code> <a class="header-anchor" href="#collection-list" aria-label="Permalink to &quot;\`collection_list\`&quot;">​</a></h3><p>你想要下载的视频合集/视频列表与想要保存的位置。注意“视频合集”与“视频列表”是两种不同的类型。在配置文件中需要做区分：</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot;series:387051756:432248&quot; = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/home/amtoaer/Downloads/bili-sync/测试视频列表&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot;season:1728547:101343&quot; = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/home/amtoaer/Downloads/bili-sync/测试合集&quot;</span></span></code></pre></div><p>具体说明可以参考<a href="/collection">这里</a>。</p><h3 id="watch-later" tabindex="-1"><code>watch_later</code> <a class="header-anchor" href="#watch-later" aria-label="Permalink to &quot;\`watch_later\`&quot;">​</a></h3><p>设置稍后再看的扫描开关与保存位置。</p><p>如果你希望下载稍后再看列表中的视频，可以将 <code>enabled</code> 设置为 <code>true</code>，并填写 <code>path</code>。</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">enabled = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">path = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/home/amtoaer/Downloads/bili-sync/稍后再看&quot;</span></span></code></pre></div><h2 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h2><p>在配置文件填写完毕后，我们可以直接运行程序。如果配置文件无误，程序会自动开始下载收藏夹中的视频。并每隔 <code>interval</code> 秒重新扫描一次。</p><p>如果你希望了解更详细的配置项说明，可以查询<a href="/configuration">这里</a>。</p>`,48),e=[t];function p(h,k,o,d,r,c){return a(),i("div",null,e)}const y=s(l,[["render",p]]);export{g as __pageData,y as default};
