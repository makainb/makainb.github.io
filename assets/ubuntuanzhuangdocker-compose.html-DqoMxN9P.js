import{_ as l,c as i,b as a,d as e,e as t,a as c,o as r,r as o}from"./app-BBfrr_IE.js";const d={},p={href:"https://github.com/docker/compose/releases",target:"_blank",rel:"noopener noreferrer"};function u(m,s){const n=o("ExternalLinkIcon");return r(),i("div",null,[a("p",null,[s[1]||(s[1]=e("从 ")),a("a",p,[s[0]||(s[0]=e("这里")),t(n)]),s[2]||(s[2]=e(" 下载最新 Docker Compose 。"))]),s[3]||(s[3]=c(`<p>当我在写这篇文章时，最新版本是 <strong>2.30.3</strong> 。</p><p>运行下列命令安装最新稳定的 Docker Compose 文件：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/v2.30.3/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果有更新版本，只需要将上述命令中的 <strong>v2.30.3</strong> 替换为最新的版本号即可。请不要忘记数字前的 <strong>&quot;v&quot;</strong> 。如果你不能开启魔法，那就随便找个地方下载一下，改名并上传到/usr/local/bin/中</p><p>最后，使用下列命令赋予二进制文件可执行权限：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>运行下列命令检查安装的 Docker Compose 版本：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">docker-compose</span> version</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="docker-compose常用命令" tabindex="-1"><a class="header-anchor" href="#docker-compose常用命令"><span>docker-compose常用命令</span></a></h2><h3 id="_1-创建并启动" tabindex="-1"><a class="header-anchor" href="#_1-创建并启动"><span>1 创建并启动</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 启动并运行 docker-compose.yml 文件中定义的所有服务。</span></span>
<span class="line"><span class="token function">docker-compose</span> up</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-停止并移除" tabindex="-1"><a class="header-anchor" href="#_2-停止并移除"><span>2 停止并移除</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 停止并移除所有与当前环境相关的容器、网络、卷和镜像。</span></span>
<span class="line"><span class="token function">docker-compose</span> down</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看列表" tabindex="-1"><a class="header-anchor" href="#查看列表"><span>查看列表</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 列出所有由当前 Compose 项目管理的容器及其状态。</span></span>
<span class="line"><span class="token function">docker-compose</span> <span class="token function">ps</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志" tabindex="-1"><a class="header-anchor" href="#日志"><span>日志</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 查看由 Compose 管理的所有服务的日志输出。</span></span>
<span class="line"><span class="token function">docker-compose</span> logs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动"><span>启动</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 启动已停止的服务容器。</span></span>
<span class="line"><span class="token function">docker-compose</span> start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="停止" tabindex="-1"><a class="header-anchor" href="#停止"><span>停止</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 停止运行的容器，但不会移除它们。</span></span>
<span class="line"><span class="token function">docker-compose</span> stop</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重启" tabindex="-1"><a class="header-anchor" href="#重启"><span>重启</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 重启服务容器。</span></span>
<span class="line"><span class="token function">docker-compose</span> restart</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行" tabindex="-1"><a class="header-anchor" href="#执行"><span>执行</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 在已启动的容器中执行命令</span></span>
<span class="line"><span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,25))])}const b=l(d,[["render",u],["__file","ubuntuanzhuangdocker-compose.html.vue"]]),v=JSON.parse('{"path":"/blogs/ops/docker/ubuntuanzhuangdocker-compose.html","title":"ubuntu安装docker-compose","lang":"en-US","frontmatter":{"title":"ubuntu安装docker-compose","date":"2024/12/14"},"headers":[{"level":2,"title":"docker-compose常用命令","slug":"docker-compose常用命令","link":"#docker-compose常用命令","children":[{"level":3,"title":"1 创建并启动","slug":"_1-创建并启动","link":"#_1-创建并启动","children":[]},{"level":3,"title":"2 停止并移除","slug":"_2-停止并移除","link":"#_2-停止并移除","children":[]},{"level":3,"title":"查看列表","slug":"查看列表","link":"#查看列表","children":[]},{"level":3,"title":"日志","slug":"日志","link":"#日志","children":[]},{"level":3,"title":"启动","slug":"启动","link":"#启动","children":[]},{"level":3,"title":"停止","slug":"停止","link":"#停止","children":[]},{"level":3,"title":"重启","slug":"重启","link":"#重启","children":[]},{"level":3,"title":"执行","slug":"执行","link":"#执行","children":[]}]}],"git":{"createdTime":1734106988000,"updatedTime":1734108247000,"contributors":[{"name":"makainb","email":"makai325@gmail.com","commits":2}]},"filePathRelative":"blogs/ops/docker/ubuntu安装docker-compose.md"}');export{b as comp,v as data};