import{_ as n,c as a,a as e,o as i}from"./app-BZ33XHo8.js";const l={};function c(p,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h2 id="内核升至4-18-rocky不需要安装" tabindex="-1"><a class="header-anchor" href="#内核升至4-18-rocky不需要安装"><span>内核升至4.18 (Rocky不需要安装)</span></a></h2><p>我用的是RockyLinux9.4 内核为 /boot/vmlinuz-5.14.0-427.24.1.el9_4.x86_64 查看 <code>grubby --default-kernel</code></p><h2 id="所有节点安装ipvsadm" tabindex="-1"><a class="header-anchor" href="#所有节点安装ipvsadm"><span>所有节点安装ipvsadm</span></a></h2><p>yum install ipvsadm ipset sysstat conntrack libseccomp -y</p><h2 id="所有节点配置-ipvs-模块-在内核4-19版本-nfconntrack-ipv4-已经改为-nf-conntrack" tabindex="-1"><a class="header-anchor" href="#所有节点配置-ipvs-模块-在内核4-19版本-nfconntrack-ipv4-已经改为-nf-conntrack"><span>所有节点配置 ipvs 模块，在内核4.19版本 nfconntrack_ipv4 已经改为 nf_conntrack .</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">modprobe -- ip_vs</span>
<span class="line">modprobe -- ip_vs_rr</span>
<span class="line">modprobe -- ip_vs_wrr</span>
<span class="line">modprobe -- ip_vs_sh</span>
<span class="line">modprobe -- nf_conntrack</span>
<span class="line"></span>
<span class="line"><span class="token function">vim</span> /etc/modules-load.d/ipvs.conf</span>
<span class="line"><span class="token comment"># 加入以下内容</span></span>
<span class="line">ip_vs</span>
<span class="line">ip_vs_lc</span>
<span class="line">ip_vs_wlc</span>
<span class="line">ip_vs_rr</span>
<span class="line">ip_vs_wrr</span>
<span class="line">ip_vs_lblc</span>
<span class="line">ip_vs_lblcr</span>
<span class="line">ip_vs_dh</span>
<span class="line">ip_vs_sh</span>
<span class="line">ip_vs_fo</span>
<span class="line">ip_vs_nq</span>
<span class="line">ip_vs_sed</span>
<span class="line">ip_vs_ftp</span>
<span class="line">ip_vs_sh</span>
<span class="line">nf_conntrack</span>
<span class="line">ip_tables</span>
<span class="line">ip_set</span>
<span class="line">xt_set</span>
<span class="line">ipt_set</span>
<span class="line">ipt_rpfilter</span>
<span class="line">ipt_REJECT</span>
<span class="line">ipip</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token function">vim</span> /lib/systemd/system/systemd-modules-load.service</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Install<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行 <code>systemctl enable --now systemd-modules-load.service</code> 即可（报错不用管）</p><h2 id="所有节点-开启一些k8s集群中必须的内核参数-所有节点配置k8s内核" tabindex="-1"><a class="header-anchor" href="#所有节点-开启一些k8s集群中必须的内核参数-所有节点配置k8s内核"><span>所有节点 开启一些k8s集群中必须的内核参数，所有节点配置k8s内核：</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">cat &lt;&lt;EOF &gt; /etc/sysctl.d/k8s.conf</span>
<span class="line">net.ipv4.ip_forward = 1</span>
<span class="line">net.bridge.bridge-nf-call-iptables = 1</span>
<span class="line">net.bridge.bridge-nf-call-ip6tables = 1</span>
<span class="line">fs.may_detach_mounts = 1</span>
<span class="line">net.ipv4.conf.all.route_localnet = 1</span>
<span class="line">vm.overcommit_memory=1</span>
<span class="line">vm.panic_on_oom=0</span>
<span class="line">fs.inotify.max_user_watches=89100</span>
<span class="line">fs.file-max=52706963</span>
<span class="line">fs.nr_open=52706963</span>
<span class="line">net.netfilter.nf_conntrack_max=2310720</span>
<span class="line"></span>
<span class="line">net.ipv4.tcp_keepalive_time = 600</span>
<span class="line">net.ipv4.tcp_keepalive_probes = 3</span>
<span class="line">net.ipv4.tcp_keepalive_intvl =15</span>
<span class="line">net.ipv4.tcp_max_tw_buckets = 36000</span>
<span class="line">net.ipv4.tcp_tw_reuse = 1</span>
<span class="line">net.ipv4.tcp_max_orphans = 327680</span>
<span class="line">net.ipv4.tcp_orphan_retries = 3</span>
<span class="line">net.ipv4.tcp_syncookies = 1</span>
<span class="line">net.ipv4.tcp_max_syn_backlog = 16384</span>
<span class="line">net.ipv4.ip_conntrack_max = 65536</span>
<span class="line">net.ipv4.tcp_max_syn_backlog = 16384</span>
<span class="line">net.ipv4.tcp_timestamps = 0</span>
<span class="line">net.core.somaxconn = 16384</span>
<span class="line">EOF</span>
<span class="line">sysctl --system</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="所有节点配置完内核后-重启服务器-保证重启后内核依旧加载" tabindex="-1"><a class="header-anchor" href="#所有节点配置完内核后-重启服务器-保证重启后内核依旧加载"><span>所有节点配置完内核后，重启服务器，保证重启后内核依旧加载</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">reboot</span>
<span class="line">lsmod | grep --color=auto -e ip_vs -e nf_conntrack</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="然后检查内核是不是-4-19" tabindex="-1"><a class="header-anchor" href="#然后检查内核是不是-4-19"><span>然后检查内核是不是 4.19</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">uname -a</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,13)]))}const t=n(l,[["render",c],["__file","k8s-002.html.vue"]]),v=JSON.parse('{"path":"/docs/ops/k8s-002.html","title":"k8s-002-内核配置","lang":"en-US","frontmatter":{"title":"k8s-002-内核配置","date":"2024/07/13"},"headers":[{"level":2,"title":"内核升至4.18 (Rocky不需要安装)","slug":"内核升至4-18-rocky不需要安装","link":"#内核升至4-18-rocky不需要安装","children":[]},{"level":2,"title":"所有节点安装ipvsadm","slug":"所有节点安装ipvsadm","link":"#所有节点安装ipvsadm","children":[]},{"level":2,"title":"所有节点配置 ipvs 模块，在内核4.19版本 nfconntrack_ipv4 已经改为 nf_conntrack .","slug":"所有节点配置-ipvs-模块-在内核4-19版本-nfconntrack-ipv4-已经改为-nf-conntrack","link":"#所有节点配置-ipvs-模块-在内核4-19版本-nfconntrack-ipv4-已经改为-nf-conntrack","children":[]},{"level":2,"title":"所有节点  开启一些k8s集群中必须的内核参数，所有节点配置k8s内核：","slug":"所有节点-开启一些k8s集群中必须的内核参数-所有节点配置k8s内核","link":"#所有节点-开启一些k8s集群中必须的内核参数-所有节点配置k8s内核","children":[]},{"level":2,"title":"所有节点配置完内核后，重启服务器，保证重启后内核依旧加载","slug":"所有节点配置完内核后-重启服务器-保证重启后内核依旧加载","link":"#所有节点配置完内核后-重启服务器-保证重启后内核依旧加载","children":[]},{"level":2,"title":"然后检查内核是不是 4.19","slug":"然后检查内核是不是-4-19","link":"#然后检查内核是不是-4-19","children":[]}],"git":{"createdTime":1720801946000,"updatedTime":1720801946000,"contributors":[{"name":"makai","email":"makai3@126.com","commits":1}]},"filePathRelative":"docs/ops/k8s-002.md"}');export{t as comp,v as data};
