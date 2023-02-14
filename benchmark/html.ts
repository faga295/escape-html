export default `<!DOCTYPE HTML>
<html lang="en" class="sidebar-visible no-js light">
<head>

<meta charset="UTF-8">
<title>正则表达式 - Rust Cookbook 中文版</title>

<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta name="description" content="Rust Cookbook 是 Rust 官方图书的中文翻译版，由一系列简单程序示例构成，展示了 Rust 实际开发场景的良好实践。">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#ffffff" />
<link rel="icon" href="../favicon.svg">
<link rel="shortcut icon" href="../favicon.png">
<link rel="stylesheet" href="../css/variables.css">
<link rel="stylesheet" href="../css/general.css">
<link rel="stylesheet" href="../css/chrome.css">
<link rel="stylesheet" href="../css/print.css" media="print">

<link rel="stylesheet" href="../FontAwesome/css/font-awesome.css">
<link rel="stylesheet" href="../fonts/fonts.css">

<link rel="stylesheet" href="../highlight.css">
<link rel="stylesheet" href="../tomorrow-night.css">
<link rel="stylesheet" href="../ayu-highlight.css">

<link rel="stylesheet" href="../theme/custom.css">
</head>
<body>

<script type="a8a5bc8f9e27a8d280a4868d-text/javascript">
            var path_to_root = "../";
            var default_theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "navy" : "light";
        </script>

<script type="a8a5bc8f9e27a8d280a4868d-text/javascript">
            try {
                var theme = localStorage.getItem('mdbook-theme');
                var sidebar = localStorage.getItem('mdbook-sidebar');

                if (theme.startsWith('"') && theme.endsWith('"')) {
                    localStorage.setItem('mdbook-theme', theme.slice(1, theme.length - 1));
                }

                if (sidebar.startsWith('"') && sidebar.endsWith('"')) {
                    localStorage.setItem('mdbook-sidebar', sidebar.slice(1, sidebar.length - 1));
                }
            } catch (e) { }
        </script>

<script type="a8a5bc8f9e27a8d280a4868d-text/javascript">
            var theme;
            try { theme = localStorage.getItem('mdbook-theme'); } catch(e) { }
            if (theme === null || theme === undefined) { theme = default_theme; }
            var html = document.querySelector('html');
            html.classList.remove('no-js')
            html.classList.remove('light')
            html.classList.add(theme);
            html.classList.add('js');
        </script>

<script type="a8a5bc8f9e27a8d280a4868d-text/javascript">
            var html = document.querySelector('html');
            var sidebar = 'hidden';
            if (document.body.clientWidth >= 1080) {
                try { sidebar = localStorage.getItem('mdbook-sidebar'); } catch(e) { }
                sidebar = sidebar || 'visible';
            }
            html.classList.remove('sidebar-visible');
            html.classList.add("sidebar-" + sidebar);
        </script>
<nav id="sidebar" class="sidebar" aria-label="Table of contents">
<div class="sidebar-scrollbox">
<ol class="chapter"><li class="chapter-item expanded affix "><a href="../intro.html">总览</a></li><li class="chapter-item expanded affix "><a href="../about.html">关于本书</a></li><li class="chapter-item expanded "><a href="../algorithms.html"><strong aria-hidden="true">1.</strong> 算法</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../algorithms/randomness.html"><strong aria-hidden="true">1.1.</strong> 生成随机值</a></li><li class="chapter-item expanded "><a href="../algorithms/sorting.html"><strong aria-hidden="true">1.2.</strong> Vector 排序</a></li></ol></li><li class="chapter-item expanded "><a href="../cli.html"><strong aria-hidden="true">2.</strong> 命令行</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../cli/arguments.html"><strong aria-hidden="true">2.1.</strong> 参数解析</a></li><li class="chapter-item expanded "><a href="../cli/ansi_terminal.html"><strong aria-hidden="true">2.2.</strong> ANSI 终端</a></li></ol></li><li class="chapter-item expanded "><a href="../compression.html"><strong aria-hidden="true">3.</strong> 压缩</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../compression/tar.html"><strong aria-hidden="true">3.1.</strong> 使用 tar 包</a></li></ol></li><li class="chapter-item expanded "><a href="../concurrency.html"><strong aria-hidden="true">4.</strong> 并发/并行</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../concurrency/threads.html"><strong aria-hidden="true">4.1.</strong> 显式线程</a></li><li class="chapter-item expanded "><a href="../concurrency/parallel.html"><strong aria-hidden="true">4.2.</strong> 数据并行</a></li></ol></li><li class="chapter-item expanded "><a href="../cryptography.html"><strong aria-hidden="true">5.</strong> 密码学</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../cryptography/hashing.html"><strong aria-hidden="true">5.1.</strong> 散列（哈希）</a></li><li class="chapter-item expanded "><a href="../cryptography/encryption.html"><strong aria-hidden="true">5.2.</strong> 加密</a></li></ol></li><li class="chapter-item expanded "><a href="../data_structures.html"><strong aria-hidden="true">6.</strong> 数据结构</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../data_structures/bitfield.html"><strong aria-hidden="true">6.1.</strong> 位域</a></li></ol></li><li class="chapter-item expanded "><a href="../database.html"><strong aria-hidden="true">7.</strong> 数据库</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../database/sqlite.html"><strong aria-hidden="true">7.1.</strong> SQLite</a></li><li class="chapter-item expanded "><a href="../database/postgres.html"><strong aria-hidden="true">7.2.</strong> Postgres</a></li></ol></li><li class="chapter-item expanded "><a href="../datetime.html"><strong aria-hidden="true">8.</strong> 日期及时间</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../datetime/duration.html"><strong aria-hidden="true">8.1.</strong> 期间和计算</a></li><li class="chapter-item expanded "><a href="../datetime/parse.html"><strong aria-hidden="true">8.2.</strong> 解析与显示</a></li></ol></li><li class="chapter-item expanded "><a href="../development_tools.html"><strong aria-hidden="true">9.</strong> 开发工具</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../development_tools/debugging.html"><strong aria-hidden="true">9.1.</strong> 调试工具</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../development_tools/debugging/log.html"><strong aria-hidden="true">9.1.1.</strong> 日志信息</a></li><li class="chapter-item expanded "><a href="../development_tools/debugging/config_log.html"><strong aria-hidden="true">9.1.2.</strong> 日志配置</a></li></ol></li><li class="chapter-item expanded "><a href="../development_tools/versioning.html"><strong aria-hidden="true">9.2.</strong> 版本控制</a></li><li class="chapter-item expanded "><a href="../development_tools/build_tools.html"><strong aria-hidden="true">9.3.</strong> 构建工具</a></li></ol></li><li class="chapter-item expanded "><a href="../encoding.html"><strong aria-hidden="true">10.</strong> 编码</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../encoding/strings.html"><strong aria-hidden="true">10.1.</strong> 字符集</a></li><li class="chapter-item expanded "><a href="../encoding/csv.html"><strong aria-hidden="true">10.2.</strong> CSV 处理</a></li><li class="chapter-item expanded "><a href="../encoding/complex.html"><strong aria-hidden="true">10.3.</strong> 结构化数据</a></li></ol></li><li class="chapter-item expanded "><a href="../errors.html"><strong aria-hidden="true">11.</strong> 错误处理</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../errors/handle.html"><strong aria-hidden="true">11.1.</strong> 处理错误变量</a></li></ol></li><li class="chapter-item expanded "><a href="../file.html"><strong aria-hidden="true">12.</strong> 文件系统</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../file/read-write.html"><strong aria-hidden="true">12.1.</strong> 文件读写</a></li><li class="chapter-item expanded "><a href="../file/dir.html"><strong aria-hidden="true">12.2.</strong> 目录遍历</a></li></ol></li><li class="chapter-item expanded "><a href="../hardware.html"><strong aria-hidden="true">13.</strong> 硬件支持</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../hardware/processor.html"><strong aria-hidden="true">13.1.</strong> 处理器</a></li></ol></li><li class="chapter-item expanded "><a href="../mem.html"><strong aria-hidden="true">14.</strong> 内存管理</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../mem/global_static.html"><strong aria-hidden="true">14.1.</strong> 全局静态/全局堆栈</a></li></ol></li><li class="chapter-item expanded "><a href="../net.html"><strong aria-hidden="true">15.</strong> 网络</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../net/server.html"><strong aria-hidden="true">15.1.</strong> 服务器</a></li></ol></li><li class="chapter-item expanded "><a href="../os.html"><strong aria-hidden="true">16.</strong> 操作系统</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../os/external.html"><strong aria-hidden="true">16.1.</strong> 外部命令</a></li></ol></li><li class="chapter-item expanded "><a href="../science.html"><strong aria-hidden="true">17.</strong> 科学计算</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../science/mathematics.html"><strong aria-hidden="true">17.1.</strong> 数学</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../science/mathematics/linear_algebra.html"><strong aria-hidden="true">17.1.1.</strong> 线性代数</a></li><li class="chapter-item expanded "><a href="../science/mathematics/trigonometry.html"><strong aria-hidden="true">17.1.2.</strong> 三角学</a></li><li class="chapter-item expanded "><a href="../science/mathematics/complex_numbers.html"><strong aria-hidden="true">17.1.3.</strong> 复数</a></li><li class="chapter-item expanded "><a href="../science/mathematics/statistics.html"><strong aria-hidden="true">17.1.4.</strong> 统计学</a></li><li class="chapter-item expanded "><a href="../science/mathematics/miscellaneous.html"><strong aria-hidden="true">17.1.5.</strong> 其它数学计算</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="../text.html"><strong aria-hidden="true">18.</strong> 文本处理</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../text/regex.html" class="active"><strong aria-hidden="true">18.1.</strong> 正则表达式</a></li><li class="chapter-item expanded "><a href="../text/string_parsing.html"><strong aria-hidden="true">18.2.</strong> 字符串解析</a></li></ol></li><li class="chapter-item expanded "><a href="../web.html"><strong aria-hidden="true">19.</strong> Web 编程</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../web/scraping.html"><strong aria-hidden="true">19.1.</strong> 提取链接</a></li><li class="chapter-item expanded "><a href="../web/url.html"><strong aria-hidden="true">19.2.</strong> URL</a></li><li class="chapter-item expanded "><a href="../web/mime.html"><strong aria-hidden="true">19.3.</strong> 媒介类型</a></li><li class="chapter-item expanded "><a href="../web/clients.html"><strong aria-hidden="true">19.4.</strong> 客户端</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="../web/clients/requests.html"><strong aria-hidden="true">19.4.1.</strong> 请求处理</a></li><li class="chapter-item expanded "><a href="../web/clients/apis.html"><strong aria-hidden="true">19.4.2.</strong> Web API 调用</a></li><li class="chapter-item expanded "><a href="../web/clients/download.html"><strong aria-hidden="true">19.4.3.</strong> 下载</a></li><li class="spacer"></li></ol></li></ol></li></ol>
</div>
<div id="sidebar-resize-handle" class="sidebar-resize-handle"></div>
</nav>
<div id="page-wrapper" class="page-wrapper">
<div class="page">
<div id="menu-bar-hover-placeholder"></div>
<div id="menu-bar" class="menu-bar sticky bordered">
<div class="left-buttons">
<button id="sidebar-toggle" class="icon-button" type="button" title="Toggle Table of Contents" aria-label="Toggle Table of Contents" aria-controls="sidebar">
<i class="fa fa-bars"></i>
</button>
<button id="theme-toggle" class="icon-button" type="button" title="Change theme" aria-label="Change theme" aria-haspopup="true" aria-expanded="false" aria-controls="theme-list">
<i class="fa fa-paint-brush"></i>
</button>
<ul id="theme-list" class="theme-popup" aria-label="Themes" role="menu">
<li role="none"><button role="menuitem" class="theme" id="light">Light (default)</button></li>
<li role="none"><button role="menuitem" class="theme" id="rust">Rust</button></li>
<li role="none"><button role="menuitem" class="theme" id="coal">Coal</button></li>
<li role="none"><button role="menuitem" class="theme" id="navy">Navy</button></li>
<li role="none"><button role="menuitem" class="theme" id="ayu">Ayu</button></li>
</ul>
<button id="search-toggle" class="icon-button" type="button" title="Search. (Shortkey: s)" aria-label="Toggle Searchbar" aria-expanded="false" aria-keyshortcuts="S" aria-controls="searchbar">
<i class="fa fa-search"></i>
</button>
</div>
<h1 class="menu-title">Rust Cookbook 中文版</h1>
<div class="right-buttons">
<a href="../print.html" title="Print this book" aria-label="Print this book">
<i id="print-button" class="fa fa-print"></i>
</a>
<a href="https://github.com/rust-lang-cn/rust-cookbook-cn" title="Git repository" aria-label="Git repository">
<i id="git-repository-button" class="fa fa-github"></i>
</a>
<a href="https://github.com/rust-lang-cn/rust-cookbook-cn/edit/master/src/text/regex.md" title="Suggest an edit" aria-label="Suggest an edit">
<i id="git-edit-button" class="fa fa-edit"></i>
</a>
</div>
</div>
<div id="search-wrapper" class="hidden">
<form id="searchbar-outer" class="searchbar-outer">
<input type="search" id="searchbar" name="searchbar" placeholder="Search this book ..." aria-controls="searchresults-outer" aria-describedby="searchresults-header">
</form>
<div id="searchresults-outer" class="searchresults-outer hidden">
<div id="searchresults-header" class="searchresults-header"></div>
<ul id="searchresults">
 </ul>
</div>
</div>

<script type="a8a5bc8f9e27a8d280a4868d-text/javascript">
                    document.getElementById('sidebar-toggle').setAttribute('aria-expanded', sidebar === 'visible');
                    document.getElementById('sidebar').setAttribute('aria-hidden', sidebar !== 'visible');
                    Array.from(document.querySelectorAll('#sidebar a')).forEach(function(link) {
                        link.setAttribute('tabIndex', sidebar === 'visible' ? 0 : -1);
                    });
                </script>
<div id="content" class="content">
<main>
<h1 id="正则表达式"><a class="header" href="#正则表达式">正则表达式</a></h1>

<h2 id="验证并提取电子邮件登录信息"><a class="header" href="#验证并提取电子邮件登录信息">验证并提取电子邮件登录信息</a></h2>

<p><a href="https://docs.rs/regex/"><img src="https://badge-cache.kominick.com/crates/v/regex.svg?label=regex" alt="regex-badge" /></a> <a href="https://docs.rs/lazy_static/"><img src="https://badge-cache.kominick.com/crates/v/lazy_static.svg?label=lazy_static" alt="lazy_static-badge" /></a> <a href="https://crates.io/categories/text-processing"><img src="https://badge-cache.kominick.com/badge/text_processing--x.svg?style=social" alt="cat-text-processing-badge" /></a></p>
<p>验证电子邮件地址的格式是否正确，并提取 @ 符号之前的所有内容。</p>
<pre><pre class="playground"><code class="language-rust edition2018">use lazy_static::lazy_static;

use regex::Regex;

fn extract_login(input: &amp;str) -&gt; Option&lt;&amp;str&gt; {
    lazy_static! {
        static ref RE: Regex = Regex::new(r&quot;(?x)
            ^(?P&lt;login&gt;[^@\s]+)@
            ([[:word:]]+\.)*
            [[:word:]]+$
            &quot;).unwrap();
    }
    RE.captures(input).and_then(|cap| {
        cap.name(&quot;login&quot;).map(|login| login.as_str())
    })
}

fn main() {
    assert_eq!(extract_login(r&quot;I❤<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="6f0a020e06032f0a170e021f030a410c0002">[email&#160;protected]</a>&quot;), Some(r&quot;I❤email&quot;));
    assert_eq!(
        extract_login(r&quot;<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="8af9eeeca1f9eef9ecf9eea4ebf9a4f9eef9eecae0e2e1e1a4eea4f8e6">[email&#160;protected]</a>&quot;),
        Some(r&quot;sdf+sdsfsd.as.sdsd&quot;)
    );
    assert_eq!(extract_login(r&quot;<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="92dffde0f7d2c6faf3fc">[email&#160;protected]</a>@<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="024d6c674263762c616d6f">[email&#160;protected]</a>&quot;), None);
    assert_eq!(extract_login(r&quot;Not an <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="3a5f575b53567a5f575b5356">[email&#160;protected]</a>&quot;), None);
}
</code></pre></pre>
<h2 id="从文本提取标签元素唯一的列表"><a class="header" href="#从文本提取标签元素唯一的列表">从文本提取标签元素唯一的列表</a></h2>

<p><a href="https://docs.rs/regex/"><img src="https://badge-cache.kominick.com/crates/v/regex.svg?label=regex" alt="regex-badge" /></a> <a href="https://docs.rs/lazy_static/"><img src="https://badge-cache.kominick.com/crates/v/lazy_static.svg?label=lazy_static" alt="lazy_static-badge" /></a> <a href="https://crates.io/categories/text-processing"><img src="https://badge-cache.kominick.com/badge/text_processing--x.svg?style=social" alt="cat-text-processing-badge" /></a></p>
<p>本实例展示从文本中提取、排序和去除标签列表的重复元素。</p>
<p>这里给出的标签正则表达式只捕获以字母开头的拉丁语标签，完整的 <a href="https://github.com/twitter/twitter-text/blob/c9fc09782efe59af4ee82855768cfaf36273e170/java/src/com/twitter/Regex.java#L255">twitter 标签正则表达式</a>要复杂得多。</p>
<pre><pre class="playground"><code class="language-rust edition2018">use lazy_static::lazy_static;

use regex::Regex;
use std::collections::HashSet;

fn extract_hashtags(text: &amp;str) -&gt; HashSet&lt;&amp;str&gt; {
    lazy_static! {
        static ref HASHTAG_REGEX : Regex = Regex::new(
                r&quot;\#[a-zA-Z][0-9a-zA-Z_]*&quot;
            ).unwrap();
    }
    HASHTAG_REGEX.find_iter(text).map(|mat| mat.as_str()).collect()
}

fn main() {
    let tweet = &quot;Hey #world, I just got my new #dog, say hello to Till. #dog #forever #2 #_ &quot;;
    let tags = extract_hashtags(tweet);
    assert!(tags.contains(&quot;#dog&quot;) &amp;&amp; tags.contains(&quot;#forever&quot;) &amp;&amp; tags.contains(&quot;#world&quot;));
    assert_eq!(tags.len(), 3);
}
</code></pre></pre>
<h2 id="从文本提取电话号码"><a class="header" href="#从文本提取电话号码">从文本提取电话号码</a></h2>

<p><a href="https://docs.rs/regex/"><img src="https://badge-cache.kominick.com/crates/v/regex.svg?label=regex" alt="regex-badge" /></a> <a href="https://crates.io/categories/text-processing"><img src="https://badge-cache.kominick.com/badge/text_processing--x.svg?style=social" alt="cat-text-processing-badge" /></a></p>
<p>使用 <a href="https://docs.rs/regex/*/regex/struct.Regex.html#method.captures_iter"><code>Regex::captures_iter</code></a> 处理一个文本字符串，以捕获多个电话号码。这里的例子中是美国电话号码格式。</p>
<pre><pre class="playground"><code class="language-rust edition2018"><span class="boring">use error_chain::error_chain;
</span>
use regex::Regex;
use std::fmt;
<span class="boring">
</span><span class="boring">error_chain!{
</span><span class="boring">    foreign_links {
</span><span class="boring">        Regex(regex::Error);
</span><span class="boring">        Io(std::io::Error);
</span><span class="boring">    }
</span><span class="boring">}
</span>
struct PhoneNumber&lt;'a&gt; {
    area: &amp;'a str,
    exchange: &amp;'a str,
    subscriber: &amp;'a str,
}

impl&lt;'a&gt; fmt::Display for PhoneNumber&lt;'a&gt; {
    fn fmt(&amp;self, f: &amp;mut fmt::Formatter) -&gt; fmt::Result {
        write!(f, &quot;1 ({}) {}-{}&quot;, self.area, self.exchange, self.subscriber)
    }
}

fn main() -&gt; Result&lt;()&gt; {
    let phone_text = &quot;
    +1 505 881 9292 (v) +1 505 778 2212 (c) +1 505 881 9297 (f)
    (202) 991 9534
    Alex 5553920011
    1 (800) 233-2010
    1.299.339.1020&quot;;

    let re = Regex::new(
        r#&quot;(?x)
          (?:\+?1)?                       # 国家代码，可选项
          [\s\.]?
          (([2-9]\d{2})|\(([2-9]\d{2})\)) # 地区代码
          [\s\.\-]?
          ([2-9]\d{2})                    # 交换代码
          [\s\.\-]?
          (\d{4})                         # 用户号码&quot;#,
    )?;

    let phone_numbers = re.captures_iter(phone_text).filter_map(|cap| {
        let groups = (cap.get(2).or(cap.get(3)), cap.get(4), cap.get(5));
        match groups {
            (Some(area), Some(ext), Some(sub)) =&gt; Some(PhoneNumber {
                area: area.as_str(),
                exchange: ext.as_str(),
                subscriber: sub.as_str(),
            }),
            _ =&gt; None,
        }
    });

    assert_eq!(
        phone_numbers.map(|m| m.to_string()).collect::&lt;Vec&lt;_&gt;&gt;(),
        vec![
            &quot;1 (505) 881-9292&quot;,
            &quot;1 (505) 778-2212&quot;,
            &quot;1 (505) 881-9297&quot;,
            &quot;1 (202) 991-9534&quot;,
            &quot;1 (555) 392-0011&quot;,
            &quot;1 (800) 233-2010&quot;,
            &quot;1 (299) 339-1020&quot;,
        ]
    );

    Ok(())
}
</code></pre></pre>
<h2 id="通过匹配多个正则表达式来筛选日志文件"><a class="header" href="#通过匹配多个正则表达式来筛选日志文件">通过匹配多个正则表达式来筛选日志文件</a></h2>

<p><a href="https://docs.rs/regex/"><img src="https://badge-cache.kominick.com/crates/v/regex.svg?label=regex" alt="regex-badge" /></a> <a href="https://crates.io/categories/text-processing"><img src="https://badge-cache.kominick.com/badge/text_processing--x.svg?style=social" alt="cat-text-processing-badge" /></a></p>
<p>读取名为 <code>application.log</code> 的文件，并且只输出包含下列内容的行：“version X.X.X”、端口为 443 的 IP 地址（如 “192.168.0.1:443”）、特定警告。</p>
<p>正则表达集构造器 <a href="https://docs.rs/regex/*/regex/struct.RegexSetBuilder.html"><code>regex::RegexSetBuilder</code></a> 构建了正则表达式集 <a href="https://docs.rs/regex/*/regex/struct.RegexSet.html"><code>regex::RegexSet</code></a>。由于反斜杠在正则表达式中非常常见，因此使用<a href="https://rustwiki.org/zh-CN/reference/tokens.html#%E5%AD%97%E9%9D%A2%E9%87%8F">原始字符串字面量</a>可以使它们更具可读性。</p>
<pre><pre class="playground"><code class="language-rust edition2018 no_run"><span class="boring">use error_chain::error_chain;
</span>
use std::fs::File;
use std::io::{BufReader, BufRead};
use regex::RegexSetBuilder;

<span class="boring">error_chain! {
</span><span class="boring">    foreign_links {
</span><span class="boring">        Io(std::io::Error);
</span><span class="boring">        Regex(regex::Error);
</span><span class="boring">    }
</span><span class="boring">}
</span><span class="boring">
</span>fn main() -&gt; Result&lt;()&gt; {
    let log_path = &quot;application.log&quot;;
    let buffered = BufReader::new(File::open(log_path)?);

    let set = RegexSetBuilder::new(&amp;[
        r#&quot;version &quot;\d\.\d\.\d&quot;&quot;#,
        r#&quot;\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:443&quot;#,
        r#&quot;warning.*timeout expired&quot;#,
    ]).case_insensitive(true)
        .build()?;

    buffered
        .lines()
        .filter_map(|line| line.ok())
        .filter(|line| set.is_match(line.as_str()))
        .for_each(|x| println!(&quot;{}&quot;, x));

    Ok(())
}
</code></pre></pre>
<h2 id="文本模式替换"><a class="header" href="#文本模式替换">文本模式替换</a></h2>

<p><a href="https://docs.rs/regex/"><img src="https://badge-cache.kominick.com/crates/v/regex.svg?label=regex" alt="regex-badge" /></a> <a href="https://docs.rs/lazy_static/"><img src="https://badge-cache.kominick.com/crates/v/lazy_static.svg?label=lazy_static" alt="lazy_static-badge" /></a> <a href="https://crates.io/categories/text-processing"><img src="https://badge-cache.kominick.com/badge/text_processing--x.svg?style=social" alt="cat-text-processing-badge" /></a></p>
<p>将所有出现的国际标准 ISO 8601 日期模式 <em>YYYY-MM-DD</em> 替换为具有斜杠的等效美式英语日期模式。例如： <code>2013-01-15</code> 替换为 <code>01/15/2013</code>。</p>
<p><a href="https://docs.rs/regex/*/regex/struct.Regex.html#method.replace_all"><code>Regex::replace_all</code></a> 方法将替换整个正则表示匹配的所有内容。<code>&amp;str</code> 实现了 <code>Replacer</code> trait，它允许类似 <code>$abcde</code> 的变量引用相应的搜索匹配模式（search regex）中的命名捕获组 <code>(?P&lt;abcde&gt;REGEX)</code>。有关示例和转义的详细信息，请参阅<a href="https://docs.rs/regex/*/regex/struct.Regex.html#replacement-string-syntax">替换字符串语法</a>。</p>
<blockquote>
<p>译者注：正则表达式的使用，需要了解匹配规则：全文匹配（match regex）、搜索匹配（search regex）、替换匹配（replace regex）。</p>
</blockquote>
<pre><pre class="playground"><code class="language-rust edition2018">use lazy_static::lazy_static;

use std::borrow::Cow;
use regex::Regex;

fn reformat_dates(before: &amp;str) -&gt; Cow&lt;str&gt; {
    lazy_static! {
        static ref ISO8601_DATE_REGEX : Regex = Regex::new(
            r&quot;(?P&lt;y&gt;\d{4})-(?P&lt;m&gt;\d{2})-(?P&lt;d&gt;\d{2})&quot;
            ).unwrap();
    }
    ISO8601_DATE_REGEX.replace_all(before, &quot;$m/$d/$y&quot;)
}

fn main() {
    let before = &quot;2012-03-14, 2013-01-15 and 2014-07-05&quot;;
    let after = reformat_dates(before);
    assert_eq!(after, &quot;03/14/2012, 01/15/2013 and 07/05/2014&quot;);
}
</code></pre></pre>




</main>
<nav class="nav-wrapper" aria-label="Page navigation">

<a rel="prev" href="../text.html" class="mobile-nav-chapters previous" title="Previous chapter" aria-label="Previous chapter" aria-keyshortcuts="Left">
<i class="fa fa-angle-left"></i>
</a>
<a rel="next" href="../text/string_parsing.html" class="mobile-nav-chapters next" title="Next chapter" aria-label="Next chapter" aria-keyshortcuts="Right">
<i class="fa fa-angle-right"></i>
</a>
<div style="clear: both"></div>
</nav>
</div>
</div>
<nav class="nav-wide-wrapper" aria-label="Page navigation">
<a rel="prev" href="../text.html" class="nav-chapters previous" title="Previous chapter" aria-label="Previous chapter" aria-keyshortcuts="Left">
<i class="fa fa-angle-left"></i>
</a>
<a rel="next" href="../text/string_parsing.html" class="nav-chapters next" title="Next chapter" aria-label="Next chapter" aria-keyshortcuts="Right">
<i class="fa fa-angle-right"></i>
</a>
</nav>
</div>
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script type="a8a5bc8f9e27a8d280a4868d-text/javascript">
            window.playground_copyable = true;
        </script>
<script src="../elasticlunr.min.js" type="a8a5bc8f9e27a8d280a4868d-text/javascript" charset="utf-8"></script>
<script src="../mark.min.js" type="a8a5bc8f9e27a8d280a4868d-text/javascript" charset="utf-8"></script>
<script src="../searcher.js" type="a8a5bc8f9e27a8d280a4868d-text/javascript" charset="utf-8"></script>
<script src="../clipboard.min.js" type="a8a5bc8f9e27a8d280a4868d-text/javascript" charset="utf-8"></script>
<script src="../highlight.js" type="a8a5bc8f9e27a8d280a4868d-text/javascript" charset="utf-8"></script>
<script src="../book.js" type="a8a5bc8f9e27a8d280a4868d-text/javascript" charset="utf-8"></script>

<script type="a8a5bc8f9e27a8d280a4868d-text/javascript" src="../language.js"></script>
<script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="a8a5bc8f9e27a8d280a4868d-|49" defer=""></script></body>
</html>`