import{_ as n,c as a,a as e,o as l}from"./app-BZ33XHo8.js";const p={};function i(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">├── conf</span>
<span class="line">│   └── my.cnf  # MySQL配置文件</span>
<span class="line">├── db # 数据库数据文件目录</span>
<span class="line">├── docker-compose.yml # docker-compose.yml文件</span>
<span class="line">└── logs # 日志存放目录</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml"><span>docker-compose.yml</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">mysql</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always</span>
<span class="line">    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">8.0</span></span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql8</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ./db<span class="token punctuation">:</span>/var/lib/mysql</span>
<span class="line">      <span class="token punctuation">-</span> ./conf<span class="token punctuation">:</span>/etc/mysql/conf.d</span>
<span class="line">      <span class="token punctuation">-</span> ./logs<span class="token punctuation">:</span>/logs</span>
<span class="line">    <span class="token key atrule">command</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span><span class="token punctuation">-</span>character<span class="token punctuation">-</span>set<span class="token punctuation">-</span>server=utf8mb4</span>
<span class="line">      <span class="token punctuation">-</span><span class="token punctuation">-</span>collation<span class="token punctuation">-</span>server=utf8mb4_general_ci</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span></span>
<span class="line">      <span class="token key atrule">MYSQL_INITDB_SKIP_TZINFO</span><span class="token punctuation">:</span> <span class="token string">&quot;Asia/Shanghai&quot;</span></span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span></span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> <span class="token string">&quot;bridge&quot;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.4 容器操作</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 启动容器（守护进程）</span></span>
<span class="line"><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span></span>
<span class="line"><span class="token comment"># 查看容器</span></span>
<span class="line"><span class="token function">docker-compose</span> <span class="token function">ps</span></span>
<span class="line"><span class="token comment"># 重启容器</span></span>
<span class="line"><span class="token function">docker-compose</span> restart</span>
<span class="line"><span class="token comment"># 清理容器</span></span>
<span class="line"><span class="token function">docker-compose</span> down</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const o=n(p,[["render",i],["__file","docker-composeanzhuangmysql8.html.vue"]]),r=JSON.parse('{"path":"/blogs/ops/docker/docker-composeanzhuangmysql8.html","title":"docker-compose安装mysql8","lang":"en-US","frontmatter":{"title":"docker-compose安装mysql8","date":"2024/12/14"},"headers":[{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"docker-compose.yml","slug":"docker-compose-yml","link":"#docker-compose-yml","children":[]}],"git":{"createdTime":1734079710000,"updatedTime":1734108247000,"contributors":[{"name":"makainb","email":"makai325@gmail.com","commits":2}]},"filePathRelative":"blogs/ops/docker/docker-compose安装mysql8.md"}');export{o as comp,r as data};
