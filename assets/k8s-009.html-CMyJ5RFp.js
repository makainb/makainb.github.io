import{_ as e,c as n,a,o as l}from"./app-BZ33XHo8.js";const i={};function t(c,s){return l(),n("div",null,s[0]||(s[0]=[a(`<p>https://kubernetes.io/zh-cn/docs/reference/kubectl/quick-reference/</p><h2 id="安装自动补全" tabindex="-1"><a class="header-anchor" href="#安装自动补全"><span>安装自动补全</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 安装 &quot;bash-completion&quot; </span></span>
<span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> bash-completion</span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">source</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span>kubectl completion <span class="token function">bash</span><span class="token punctuation">)</span> <span class="token comment"># 在 bash 中设置当前 shell 的自动补全，要先安装 bash-completion 包</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;source &lt;(kubectl completion bash)&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.bashrc <span class="token comment"># 在你的 bash shell 中永久地添加自动补全</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 注，有可能会报错，无法补全 ,执行下列代码 kubectl get pod -n -bash: _get_comp_words_by_ref: command not found</span></span>
<span class="line">yum <span class="token parameter variable">-y</span> <span class="token function">install</span> bash-completion</span>
<span class="line"><span class="token function">bash</span> /usr/share/bash-completion/bash_completion</span>
<span class="line"><span class="token function">bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何查看kubenetes连接的集群呢" tabindex="-1"><a class="header-anchor" href="#如何查看kubenetes连接的集群呢"><span>如何查看kubenetes连接的集群呢？</span></a></h3><p>两种方法</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">cat /etc/kubernetes/admin.conf</span>
<span class="line">export KUBECONFIG=/etc/kubernetes/admin.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">cat ~/.kube/config</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="切换k8s集群" tabindex="-1"><a class="header-anchor" href="#切换k8s集群"><span>切换K8s集群</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">kubectl config use-context hk8s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="kubectl-入门" tabindex="-1"><a class="header-anchor" href="#kubectl-入门"><span>kubectl 入门</span></a></h2><p>增</p><ul><li>kubectl create -f dashboard.yaml</li><li>kubectl apply -f dashboard.yaml 区别是create会提示你已经存在，但是apply会重新应用一遍. <code>-f</code> 可以指定多个</li></ul><p>创建一个nginx</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">kubectl create deployment nginx --image=nginx</span>
<span class="line">kubectl get deployment</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看deploy的yaml文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">kubectl get deploy nginx -oyaml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>不创建，只显示yaml</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">kubectl create deployment nginx --image=nginx --dry-run -oyaml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">kubectl create deployment nginx --image=nginx --dry-run=client -oyaml &gt; nginx2-dp.yaml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>删</p><ul><li>kubectl delete</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">kubectl delete deploy nginx</span>
<span class="line"># 根据文件删除</span>
<span class="line">kubectl delete -f xxx.yaml</span>
<span class="line"></span>
<span class="line"># 查看 kubernetes-dashboard 下的pod</span>
<span class="line">kubectl get po -n kubernetes-dashboard</span>
<span class="line"></span>
<span class="line">删除某个pod(会自动重启，因为只删除了pod，没有删除deployment)</span>
<span class="line">kubectl delete po dashboard-metrics-scraper-7b554c884f-2zzvh -n kubernetes-dashboard</span>
<span class="line"></span>
<span class="line">kubectl get po -n kubernetes-dashboard</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改</p><ul><li>kubectl replace</li><li>kubectl apply</li><li>kubectl edit</li><li>kubectl set</li></ul><p>查</p><ul><li>kubectl get</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 查看多少节点</span></span>
<span class="line">kubectl get <span class="token function">node</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 每个节点的IP地址是多少</span></span>
<span class="line">kubectl get <span class="token function">node</span> <span class="token parameter variable">-owide</span> </span>
<span class="line"></span>
<span class="line">kubectl get </span>
<span class="line">kubectl get services</span>
<span class="line">kubectl get svc</span>
<span class="line">kubectl get svc <span class="token parameter variable">-n</span> kube-system</span>
<span class="line">kubectl get svc <span class="token parameter variable">-A</span> </span>
<span class="line">kubectl get clusterrole</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列出当前名字空间下所有的Service，按名称排序</span></span>
<span class="line">kubectl get services --sort-by<span class="token operator">=</span>.metadata.name</span>
<span class="line">kubectl get po <span class="token parameter variable">-n</span> kube-system --sort-by<span class="token operator">=</span>.metadata.name</span>
<span class="line"><span class="token comment"># 列举所有的 PV 持久卷，按容量排序</span></span>
<span class="line">kubectl get <span class="token function">pv</span> --sort-by<span class="token operator">=</span>.spec.capacity.storage</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列出 Pod，按重启次数排序</span></span>
<span class="line">kubectl get pods --sort-by<span class="token operator">=</span><span class="token string">&#39;.status.containerStatuses[0].restartCount&#39;</span></span>
<span class="line"><span class="token comment"># 查看yaml</span></span>
<span class="line">kubectl get po etcd-k8s-master-01 <span class="token parameter variable">-n</span> kube-system <span class="token parameter variable">-o</span> yaml</span>
<span class="line"></span>
<span class="line">kubectl get po <span class="token parameter variable">-n</span> kube-system</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 根据标签展示</span></span>
<span class="line">kubectl get pod <span class="token parameter variable">-n</span> kube-system --show-labels</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示标签为calico-node</span></span>
<span class="line">kubectl get pod <span class="token parameter variable">-n</span> kube-system <span class="token parameter variable">-l</span> k8s-app<span class="token operator">=</span>calico-node</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示标签不等于calico-node</span></span>
<span class="line">kubectl get pod <span class="token parameter variable">-n</span> kube-system <span class="token parameter variable">-l</span> k8s-app<span class="token operator">!=</span>calico-node</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取当前命名空间中正在运行的 Pod</span></span>
<span class="line">kubectl get pods --field-selector<span class="token operator">=</span>status.phase<span class="token operator">=</span>Running</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">kubectl create deploy nginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx</span>
<span class="line">kubectl get deploy </span>
<span class="line">kubectl get deploy <span class="token parameter variable">-oyaml</span></span>
<span class="line"></span>
<span class="line">kubectl <span class="token builtin class-name">set</span> image deploy nginx  <span class="token assign-left variable">nginx</span><span class="token operator">=</span>nginx:v2</span>
<span class="line"><span class="token comment"># 查看日志</span></span>
<span class="line">kubectl logs <span class="token parameter variable">-f</span> kube-proxy-zpqjg <span class="token parameter variable">-n</span> kube-system <span class="token parameter variable">--tail</span> <span class="token number">20</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令</p><ul><li>kubectl exec 查看日志</li><li>kubectl logs 查看资源</li><li>kubectl top</li></ul><p>查看具有命名空间的</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">kubectl api-resources --namespaced=true</span>
<span class="line">kubectl api-resources --namespaced=false</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>镜像加速 https://blog.csdn.net/cyxinda/article/details/124999938</p>`,32)]))}const d=e(i,[["render",t],["__file","k8s-009.html.vue"]]),r=JSON.parse('{"path":"/docs/ops/k8s-009.html","title":"k8s-009-kubectl命令详解","lang":"en-US","frontmatter":{"title":"k8s-009-kubectl命令详解","date":"2024/07/18"},"headers":[{"level":2,"title":"安装自动补全","slug":"安装自动补全","link":"#安装自动补全","children":[{"level":3,"title":"如何查看kubenetes连接的集群呢？","slug":"如何查看kubenetes连接的集群呢","link":"#如何查看kubenetes连接的集群呢","children":[]},{"level":3,"title":"切换K8s集群","slug":"切换k8s集群","link":"#切换k8s集群","children":[]}]},{"level":2,"title":"kubectl 入门","slug":"kubectl-入门","link":"#kubectl-入门","children":[]}],"git":{"createdTime":1721410544000,"updatedTime":1721579913000,"contributors":[{"name":"makai","email":"makai3@126.com","commits":2}]},"filePathRelative":"docs/ops/k8s-009.md"}');export{d as comp,r as data};
