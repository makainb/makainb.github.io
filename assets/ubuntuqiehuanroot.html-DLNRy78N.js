import{_ as a,c as n,a as e,o as t}from"./app-BBfrr_IE.js";const i={};function l(o,s){return t(),n("div",null,s[0]||(s[0]=[e(`<h1 id="ubuntu-切换root用户" tabindex="-1"><a class="header-anchor" href="#ubuntu-切换root用户"><span>ubuntu 切换root用户</span></a></h1><h2 id="设置root用户密码" tabindex="-1"><a class="header-anchor" href="#设置root用户密码"><span>设置root用户密码</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> <span class="token function">passwd</span> root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="允许root用户远程连接" tabindex="-1"><a class="header-anchor" href="#允许root用户远程连接"><span>允许root用户远程连接</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> <span class="token function">vim</span> /etc/ssh/sshd_config</span>
<span class="line"></span>
<span class="line">PermitRootLogin <span class="token function">yes</span></span>
<span class="line">StrictModes <span class="token function">yes</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重启sshd" tabindex="-1"><a class="header-anchor" href="#重启sshd"><span>重启sshd</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> /etc/init.d/ssh restart</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,7)]))}const d=a(i,[["render",l],["__file","ubuntuqiehuanroot.html.vue"]]),c=JSON.parse('{"path":"/blogs/ops/ubuntu/ubuntuqiehuanroot.html","title":"ubuntu 切换root用户","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"设置root用户密码","slug":"设置root用户密码","link":"#设置root用户密码","children":[]},{"level":2,"title":"允许root用户远程连接","slug":"允许root用户远程连接","link":"#允许root用户远程连接","children":[]},{"level":2,"title":"重启sshd","slug":"重启sshd","link":"#重启sshd","children":[]}],"git":{"createdTime":1734079710000,"updatedTime":1734106988000,"contributors":[{"name":"makainb","email":"makai325@gmail.com","commits":1}]},"filePathRelative":"blogs/ops/ubuntu/ubuntu切换root.md"}');export{d as comp,c as data};