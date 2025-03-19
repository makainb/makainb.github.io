import{_ as n,c as a,a as e,o as l}from"./app-BZ33XHo8.js";const i={};function p(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="证书有效期续99年" tabindex="-1"><a class="header-anchor" href="#证书有效期续99年"><span>证书有效期续99年</span></a></h1><p>注：推荐大家一年更新一次k8s版本</p><h2 id="证书更新-一年" tabindex="-1"><a class="header-anchor" href="#证书更新-一年"><span>证书更新(一年)</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 查看证书有效期</span></span>
<span class="line">kubeadm certs check-expiration</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 备份原有的证书：</span></span>
<span class="line"><span class="token function">cp</span> <span class="token parameter variable">-rf</span> /etc/kubernetes/pki/ /opt/pki.bak</span>
<span class="line"></span>
<span class="line"><span class="token comment"># master 更新证书有效期</span></span>
<span class="line">kubeadm certs renew all</span>
<span class="line"></span>
<span class="line"><span class="token comment"># master 重启以启用整个k8s集群</span></span>
<span class="line">systemctl restart kubelet</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="证书更新-99年" tabindex="-1"><a class="header-anchor" href="#证书更新-99年"><span>证书更新（99年）</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">kubeadm version</span>
<span class="line"><span class="token comment"># 下载k8s源码</span></span>
<span class="line"><span class="token function">git</span> clone https://gitee.com/mirrors/kubernetes.git</span>
<span class="line"><span class="token comment"># 切换分支到自己的k8s版本</span></span>
<span class="line"><span class="token function">git</span> checkout v1.28.2</span>
<span class="line"><span class="token comment"># 启动一个golang环境的容器</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">pwd</span><span class="token variable">\`</span></span>:/go/src/ registry.cn-beijing.aliyuncs.com/dotbalo/golang:kubeadm <span class="token function">bash</span></span>
<span class="line"><span class="token comment"># 以下容器内操作</span></span>
<span class="line"><span class="token builtin class-name">cd</span> /go/src/</span>
<span class="line">go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct</span>
<span class="line">go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOSUMDB</span><span class="token operator">=</span>off</span>
<span class="line"><span class="token function">grep</span> <span class="token string">&quot;365&quot;</span> cmd/kubeadm/app/constants/constants.go</span>
<span class="line"><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s#365#365 * 100#g&#39;</span> cmd/kubeadm/app/constants/constants.go</span>
<span class="line"><span class="token function">grep</span> <span class="token string">&quot;365&quot;</span> cmd/kubeadm/app/constants/constants.go</span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> _output/</span>
<span class="line"><span class="token function">chmod</span> <span class="token number">777</span> <span class="token parameter variable">-R</span> _output/</span>
<span class="line"><span class="token function">make</span> <span class="token assign-left variable">WHAT</span><span class="token operator">=</span>cmd/kubeadm</span>
<span class="line"><span class="token function">cp</span> _output/bin/kubeadm ./kubeadm</span>
<span class="line"><span class="token builtin class-name">exit</span></span>
<span class="line"></span>
<span class="line"><span class="token function">cp</span> ./kubeadm  /opt/</span>
<span class="line">/opt/kubeadm version</span>
<span class="line">/opt/kubeadm certs renew all</span>
<span class="line">kubeadm certs check-expiration</span>
<span class="line"><span class="token function">scp</span> /opt/kubeadm k8s-master-02:/opt/</span>
<span class="line"><span class="token function">scp</span> /opt/kubeadm k8s-master-03:/opt/</span>
<span class="line"><span class="token comment"># 在master-02和03执行</span></span>
<span class="line">systemctl restart kubelet</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>`,7)]))}const r=n(i,[["render",p],["__file","k8s-010.html.vue"]]),o=JSON.parse('{"path":"/docs/ops/k8s-010.html","title":"证书有效期续99年","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"证书更新(一年)","slug":"证书更新-一年","link":"#证书更新-一年","children":[]},{"level":2,"title":"证书更新（99年）","slug":"证书更新-99年","link":"#证书更新-99年","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"git":{"createdTime":1721579913000,"updatedTime":1721579913000,"contributors":[{"name":"makai","email":"makai3@126.com","commits":1}]},"filePathRelative":"docs/ops/k8s-010.md"}');export{r as comp,o as data};
