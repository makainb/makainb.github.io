import{_ as n,c as s,a,o as t}from"./app-BBfrr_IE.js";const i={};function l(d,e){return t(),s("div",null,e[0]||(e[0]=[a(`<h2 id="安装containerd" tabindex="-1"><a class="header-anchor" href="#安装containerd"><span>安装ContainerD</span></a></h2><p>所有节点 安装docker-ce-20.10</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">yum install docker-ce-20.10.* docker-ce-cli-20.10.* -y</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以无需启动docker, 只需要配置和启动 Containerd 即可。</p><p>所有节点 配置 Containerd 所需的模块</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">cat &lt;&lt; EOF | sudo tee /etc/modules-load.d/containerd.conf</span>
<span class="line">overlay</span>
<span class="line">br netfilter</span>
<span class="line">EOF</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有节点 加载模块</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">modprobe -- overlay</span>
<span class="line">modprobe -- br_netfilter</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>所有节点 配置 Containerd 所需的内核：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">cat &lt;&lt;EOF | sudo tee /etc/sysctl.d/99-kubernetes-cri.conf</span>
<span class="line">net.bridge.gridge-nf-call-iptables = 1</span>
<span class="line">net.ipv4.ip_forward = 1</span>
<span class="line">net.bridge.gridge-nf-call-ip6tables = 1</span>
<span class="line">EOF</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有节点 加载内核</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">sysctl --system</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>所有节点 配置 Containerd 的配置文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">mkdir -p /etc/containerd</span>
<span class="line">containerd config default | tee /etc/containerd/config.toml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>所有节点 将 Containerd 的 Cgroup 改为 Systemd</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">vim /etc/containerd/config.toml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>找到 containerd.runtimes.runc.options ，添加或修改 SystemdCgroup = true 修改 sandbox_image = &quot;registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.8&quot;</p><p>所有节点 启动 Containerd ，并配置开机自启动：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">systemctl daemon-reload</span>
<span class="line">systemctl enable --now containerd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>所有节点 配置 crictl 客户端连接的运行时位置：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">cat &gt; /etc/crictl.yaml &lt;&lt;EOF</span>
<span class="line">runtime-endpoint: unix:///run/containerd/containerd.sock</span>
<span class="line">image-endpoint: unix:///run/containerd/containerd.sock</span>
<span class="line">timeout: 10</span>
<span class="line">debug: false</span>
<span class="line">EOF</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">ctr plugin ls</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="安装-kubernetes-组件" tabindex="-1"><a class="header-anchor" href="#安装-kubernetes-组件"><span>安装 kubernetes 组件</span></a></h2><p>首先在 master-01 节点查看最新的kubernetes版是是多少：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">yum list kubeadm.x86_64 --showduplicates | sort -r</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我选的是 1.28.2</p><p>所有节点 安装 1.28 最新版本 kubeadm、kubelet 和 kubectl:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">yum install kubeadm-1.28* kubelet-1.28* kubectl-1.28* -y</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>所有节点 设置 kubelet 开机自 启动（由于还未初始化，没有 kubelet 的配置文件，此时 kubelet 无法启动，无需管理）：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">systemctl daemon-reload</span>
<span class="line">systemctl enable --now kubelet</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时 kubelet 是起不来的，日志会有报错不影响</p>`,32)]))}const c=n(i,[["render",l],["__file","k8s-004.html.vue"]]),p=JSON.parse('{"path":"/docs/ops/k8s-004.html","title":"k8s-004-Runtime和k8s核心组件安装","lang":"en-US","frontmatter":{"title":"k8s-004-Runtime和k8s核心组件安装","date":"2024/07/14"},"headers":[{"level":2,"title":"安装ContainerD","slug":"安装containerd","link":"#安装containerd","children":[]},{"level":2,"title":"安装 kubernetes 组件","slug":"安装-kubernetes-组件","link":"#安装-kubernetes-组件","children":[]}],"git":{"createdTime":1720801946000,"updatedTime":1720989410000,"contributors":[{"name":"makai","email":"makai3@126.com","commits":3}]},"filePathRelative":"docs/ops/k8s-004.md"}');export{c as comp,p as data};