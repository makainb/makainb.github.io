import{_ as n,c as e,a,o as i}from"./app-BZ33XHo8.js";const l={};function p(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h2 id="所有-master-节点安装-haprox-和-keepalived" tabindex="-1"><a class="header-anchor" href="#所有-master-节点安装-haprox-和-keepalived"><span>所有 master 节点安装 HAProx 和 Keepalived</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">yum install keepalived haproxy -y</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="所有-master-节点配置haproxy-所有-master-节点的-haproxy-配置相同" tabindex="-1"><a class="header-anchor" href="#所有-master-节点配置haproxy-所有-master-节点的-haproxy-配置相同"><span>所有 master 节点配置HAProxy，所有 Master 节点的 HAProxy 配置相同</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">mkdir /etc/haproxy</span>
<span class="line"></span>
<span class="line">cat &lt;&lt; EOF &gt; /etc/haproxy/haproxy.cfg</span>
<span class="line">global</span>
<span class="line">  maxconn  2000</span>
<span class="line">  ulimit-n  16384</span>
<span class="line">  log  127.0.0.1 local0 err</span>
<span class="line">  stats timeout 30s</span>
<span class="line"></span>
<span class="line">defaults</span>
<span class="line">  log global</span>
<span class="line">  mode  http</span>
<span class="line">  option  httplog</span>
<span class="line">  timeout connect 5000</span>
<span class="line">  timeout client  50000</span>
<span class="line">  timeout server  50000</span>
<span class="line">  timeout http-request 15s</span>
<span class="line">  timeout http-keep-alive 15s</span>
<span class="line"></span>
<span class="line">frontend monitor-in</span>
<span class="line">  bind *:33305</span>
<span class="line">  mode http</span>
<span class="line">  option httplog</span>
<span class="line">  monitor-uri /monitor</span>
<span class="line"></span>
<span class="line">frontend k8s-master</span>
<span class="line">  bind 0.0.0.0:16443</span>
<span class="line">  bind 127.0.0.1:16443</span>
<span class="line">  mode tcp</span>
<span class="line">  option tcplog</span>
<span class="line">  tcp-request inspect-delay 5s</span>
<span class="line">  default_backend k8s-master</span>
<span class="line"></span>
<span class="line">backend k8s-master</span>
<span class="line">  mode tcp</span>
<span class="line">  option tcplog</span>
<span class="line">  option tcp-check</span>
<span class="line">  balance roundrobin</span>
<span class="line">  default-server inter 10s downinter 5s rise 2 fall 2 slowstart 60s maxconn 250 maxqueue 256 weight 100</span>
<span class="line">  server k8s-master-01  192.168.0.201:6443  check</span>
<span class="line">  server k8s-master-02  192.168.0.202:6443  check</span>
<span class="line">  server k8s-master-03  192.168.0.203:6443  check</span>
<span class="line">EOF</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="所有-master-节点配置keepalived-配置不一样-注意区分每个节点的ip和网卡" tabindex="-1"><a class="header-anchor" href="#所有-master-节点配置keepalived-配置不一样-注意区分每个节点的ip和网卡"><span>所有 master 节点配置KeepAlived，配置不一样，注意区分每个节点的IP和网卡</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">mkdir /etc/keepalived</span>
<span class="line">vim /etc/keepalived/keepalived.conf</span>
<span class="line"></span>
<span class="line">! Configuration File for keepalived</span>
<span class="line">global_defs {</span>
<span class="line">    router_id LVS_DEVEL</span>
<span class="line">script_user root</span>
<span class="line">    enable_script_security</span>
<span class="line">}</span>
<span class="line">vrrp_script chk_apiserver {</span>
<span class="line">    script &quot;/etc/keepalived/check_apiserver.sh&quot;</span>
<span class="line">    interval 5</span>
<span class="line">    weight -5</span>
<span class="line">    fall 2  </span>
<span class="line">rise 1</span>
<span class="line">}</span>
<span class="line">vrrp_instance VI_1 {</span>
<span class="line">    state MASTER</span>
<span class="line">    interface 修改成你的网卡名称</span>
<span class="line">    mcast_src_ip 修改成你的IP地址</span>
<span class="line">    virtual_router_id 51</span>
<span class="line">    priority 101</span>
<span class="line">    advert_int 2</span>
<span class="line">    authentication {</span>
<span class="line">        auth_type PASS</span>
<span class="line">        auth_pass K8SHA_KA_AUTH</span>
<span class="line">    }</span>
<span class="line">    virtual_ipaddress {</span>
<span class="line">        修改成你的VIP</span>
<span class="line">    }</span>
<span class="line">    track_script {</span>
<span class="line">       chk_apiserver</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="所有-master-节点-配置-keepalived健康检查文件" tabindex="-1"><a class="header-anchor" href="#所有-master-节点-配置-keepalived健康检查文件"><span>所有 master 节点 配置 KeepAlived健康检查文件</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">cat &lt;&lt; EOF &gt; /etc/keepalived/check_apiserver.sh </span>
<span class="line">#!/bin/bash</span>
<span class="line">err=0</span>
<span class="line">for k in $(seq 1 3)</span>
<span class="line">do</span>
<span class="line">    check_code=$(pgrep haproxy)</span>
<span class="line">    if [[ $check_code == &quot;&quot; ]]; then</span>
<span class="line">        err=$(expr $err + 1)</span>
<span class="line">        sleep 1</span>
<span class="line">        continue</span>
<span class="line">    else</span>
<span class="line">        err=0</span>
<span class="line">        break</span>
<span class="line">    fi</span>
<span class="line">done</span>
<span class="line"></span>
<span class="line">if [[ $err != &quot;0&quot; ]]; then</span>
<span class="line">    echo &quot;systemctl stop keepalived&quot;</span>
<span class="line">    /usr/bin/systemctl stop keepalived</span>
<span class="line">    exit 1</span>
<span class="line">else</span>
<span class="line">    exit 0</span>
<span class="line">fi</span>
<span class="line">EOF</span>
<span class="line"># 赋予可执行权限</span>
<span class="line">chmod +x /etc/keepalived/check_apiserver.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="所有-master-节点-启动haproxy和keepalived并加入开机启动" tabindex="-1"><a class="header-anchor" href="#所有-master-节点-启动haproxy和keepalived并加入开机启动"><span>所有 master 节点 启动haproxy和Keepalived并加入开机启动</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">systemctl daemon-reload</span>
<span class="line"><span class="token comment"># systemctl start haproxy</span></span>
<span class="line"><span class="token comment"># systemctl start keepalived</span></span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> haproxy</span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> keepalived</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">telnet k8s-master-vip 16443</span>
<span class="line">ping k8s-master-vip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 haproxy 报错，用 <code>setsebool -P haproxy_connect_any=1</code></p>`,13)]))}const r=n(l,[["render",p],["__file","k8s-003.html.vue"]]),t=JSON.parse('{"path":"/docs/ops/k8s-003.html","title":"k8s-003-高可用组件安装","lang":"en-US","frontmatter":{"title":"k8s-003-高可用组件安装","date":"2024/07/13"},"headers":[{"level":2,"title":"所有 master 节点安装 HAProx 和 Keepalived","slug":"所有-master-节点安装-haprox-和-keepalived","link":"#所有-master-节点安装-haprox-和-keepalived","children":[]},{"level":2,"title":"所有 master 节点配置HAProxy，所有 Master 节点的 HAProxy 配置相同","slug":"所有-master-节点配置haproxy-所有-master-节点的-haproxy-配置相同","link":"#所有-master-节点配置haproxy-所有-master-节点的-haproxy-配置相同","children":[]},{"level":2,"title":"所有 master 节点配置KeepAlived，配置不一样，注意区分每个节点的IP和网卡","slug":"所有-master-节点配置keepalived-配置不一样-注意区分每个节点的ip和网卡","link":"#所有-master-节点配置keepalived-配置不一样-注意区分每个节点的ip和网卡","children":[]},{"level":2,"title":"所有 master 节点 配置 KeepAlived健康检查文件","slug":"所有-master-节点-配置-keepalived健康检查文件","link":"#所有-master-节点-配置-keepalived健康检查文件","children":[]},{"level":2,"title":"所有 master 节点 启动haproxy和Keepalived并加入开机启动","slug":"所有-master-节点-启动haproxy和keepalived并加入开机启动","link":"#所有-master-节点-启动haproxy和keepalived并加入开机启动","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"git":{"createdTime":1720801946000,"updatedTime":1720801946000,"contributors":[{"name":"makai","email":"makai3@126.com","commits":1}]},"filePathRelative":"docs/ops/k8s-003.md"}');export{r as comp,t as data};
