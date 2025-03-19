import{_ as s,c as e,a,o as i}from"./app-BZ33XHo8.js";const l={};function t(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<p>master-01节点 初始化配置文件</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line">vim kubeadm<span class="token punctuation">-</span>config.yaml</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> kubeadm.k8s.io/v1beta3</span>
<span class="line"><span class="token key atrule">bootstrapTokens</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">groups</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> system<span class="token punctuation">:</span>bootstrappers<span class="token punctuation">:</span>kubeadm<span class="token punctuation">:</span>default<span class="token punctuation">-</span>node<span class="token punctuation">-</span>token</span>
<span class="line">  <span class="token key atrule">token</span><span class="token punctuation">:</span> 7t2weq.bjbawausm0jaxury</span>
<span class="line">  <span class="token key atrule">ttl</span><span class="token punctuation">:</span> 24h0m0s</span>
<span class="line">  <span class="token key atrule">usages</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> signing</span>
<span class="line">  <span class="token punctuation">-</span> authentication</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> InitConfiguration</span>
<span class="line"><span class="token key atrule">localAPIEndpoint</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">advertiseAddress</span><span class="token punctuation">:</span> 192.168.0.201 <span class="token comment"># 修改为 master-01的址</span></span>
<span class="line">  <span class="token key atrule">bindPort</span><span class="token punctuation">:</span> <span class="token number">6443</span></span>
<span class="line"><span class="token key atrule">nodeRegistration</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">criSocket</span><span class="token punctuation">:</span> unix<span class="token punctuation">:</span>///var/run/containerd/containerd.sock</span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> k8s<span class="token punctuation">-</span>master<span class="token punctuation">-</span><span class="token number">01</span></span>
<span class="line">  <span class="token key atrule">taints</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">effect</span><span class="token punctuation">:</span> NoSchedule</span>
<span class="line">    <span class="token key atrule">key</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>role.kubernetes.io/control<span class="token punctuation">-</span>plane</span>
<span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">apiServer</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">certSANs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> 192.168.0.200 <span class="token comment"># 配置VIP的地址</span></span>
<span class="line">  <span class="token key atrule">timeoutForControlPlane</span><span class="token punctuation">:</span> 4m0s</span>
<span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> kubeadm.k8s.io/v1beta3</span>
<span class="line"><span class="token key atrule">certificatesDir</span><span class="token punctuation">:</span> /etc/kubernetes/pki</span>
<span class="line"><span class="token key atrule">clusterName</span><span class="token punctuation">:</span> kubernetes</span>
<span class="line"><span class="token key atrule">controlPlaneEndpoint</span><span class="token punctuation">:</span> 192.168.0.200<span class="token punctuation">:</span><span class="token number">16443</span> <span class="token comment"># 配置VIP的地址</span></span>
<span class="line"><span class="token key atrule">controllerManager</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token key atrule">etcd</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">local</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">dataDir</span><span class="token punctuation">:</span> /var/lib/etcd</span>
<span class="line"><span class="token key atrule">imageRepository</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/google_containers <span class="token comment"># 如果在国外删除此行</span></span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterConfiguration</span>
<span class="line"><span class="token key atrule">kubernetesVersion</span><span class="token punctuation">:</span> v1.28.2 <span class="token comment"># 更改此处的版本号和 kubeadm version 一致</span></span>
<span class="line"><span class="token key atrule">networking</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">dnsDomain</span><span class="token punctuation">:</span> cluster.local</span>
<span class="line">  <span class="token key atrule">podSubnet</span><span class="token punctuation">:</span> 172.16.0.0/16</span>
<span class="line">  <span class="token key atrule">serviceSubnet</span><span class="token punctuation">:</span> 10.96.0.0/16</span>
<span class="line"><span class="token key atrule">scheduler</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新kubeadm文件</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">kubeadm config migrate --old-config kubeadm-config.yaml --new-config new.yaml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>将 new.yaml文件复制到其他 master 节点</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">for i in k8s-master-02 k8s-master-03;do scp new.yaml $i:/root/;done</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>所有 master 节点 提前下载镜像，可以节省初始化时间</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">kubeadm config images pull --config /root/new.yaml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>master-01 节点，节点初始化</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">kubeadm init --config /root/new.yaml --upload-certs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>注：初始化如果失败，可用下面命令清除初始化信息，然后再次尝试初始化</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">kubeadm reset -f ; ipvsadm --clear  ; rm -rf ~/.kube</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>初始化成功后，会产生Token值，用于其他节点加入时使用，因此要记录下初始化成功生成的 token 值（令牌值）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">[init] Using Kubernetes version: v1.28.2</span>
<span class="line">[preflight] Running pre-flight checks</span>
<span class="line">[preflight] Pulling images required for setting up a Kubernetes cluster</span>
<span class="line">[preflight] This might take a minute or two, depending on the speed of your internet connection</span>
<span class="line">[preflight] You can also perform this action in beforehand using &#39;kubeadm config images pull&#39;</span>
<span class="line">W0715 04:16:30.502389    1991 checks.go:835] detected that the sandbox image &quot;registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.8&quot; of the container runtime is inconsistent with that used by kubeadm. It is recommended that using &quot;registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.9&quot; as the CRI sandbox image.</span>
<span class="line">[certs] Using certificateDir folder &quot;/etc/kubernetes/pki&quot;</span>
<span class="line">[certs] Generating &quot;ca&quot; certificate and key</span>
<span class="line">[certs] Generating &quot;apiserver&quot; certificate and key</span>
<span class="line">[certs] apiserver serving cert is signed for DNS names [k8s-master-01 kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local] and IPs [10.96.0.1 192.168.0.201 192.168.0.200]</span>
<span class="line">[certs] Generating &quot;apiserver-kubelet-client&quot; certificate and key</span>
<span class="line">[certs] Generating &quot;front-proxy-ca&quot; certificate and key</span>
<span class="line">[certs] Generating &quot;front-proxy-client&quot; certificate and key</span>
<span class="line">[certs] Generating &quot;etcd/ca&quot; certificate and key</span>
<span class="line">[certs] Generating &quot;etcd/server&quot; certificate and key</span>
<span class="line">[certs] etcd/server serving cert is signed for DNS names [k8s-master-01 localhost] and IPs [192.168.0.201 127.0.0.1 ::1]</span>
<span class="line">[certs] Generating &quot;etcd/peer&quot; certificate and key</span>
<span class="line">[certs] etcd/peer serving cert is signed for DNS names [k8s-master-01 localhost] and IPs [192.168.0.201 127.0.0.1 ::1]</span>
<span class="line">[certs] Generating &quot;etcd/healthcheck-client&quot; certificate and key</span>
<span class="line">[certs] Generating &quot;apiserver-etcd-client&quot; certificate and key</span>
<span class="line">[certs] Generating &quot;sa&quot; key and public key</span>
<span class="line">[kubeconfig] Using kubeconfig folder &quot;/etc/kubernetes&quot;</span>
<span class="line">W0715 04:16:31.658504    1991 endpoint.go:57] [endpoint] WARNING: port specified in controlPlaneEndpoint overrides bindPort in the controlplane address</span>
<span class="line">[kubeconfig] Writing &quot;admin.conf&quot; kubeconfig file</span>
<span class="line">W0715 04:16:31.768026    1991 endpoint.go:57] [endpoint] WARNING: port specified in controlPlaneEndpoint overrides bindPort in the controlplane address</span>
<span class="line">[kubeconfig] Writing &quot;kubelet.conf&quot; kubeconfig file</span>
<span class="line">W0715 04:16:31.824851    1991 endpoint.go:57] [endpoint] WARNING: port specified in controlPlaneEndpoint overrides bindPort in the controlplane address</span>
<span class="line">[kubeconfig] Writing &quot;controller-manager.conf&quot; kubeconfig file</span>
<span class="line">W0715 04:16:31.926987    1991 endpoint.go:57] [endpoint] WARNING: port specified in controlPlaneEndpoint overrides bindPort in the controlplane address</span>
<span class="line">[kubeconfig] Writing &quot;scheduler.conf&quot; kubeconfig file</span>
<span class="line">[etcd] Creating static Pod manifest for local etcd in &quot;/etc/kubernetes/manifests&quot;</span>
<span class="line">[control-plane] Using manifest folder &quot;/etc/kubernetes/manifests&quot;</span>
<span class="line">[control-plane] Creating static Pod manifest for &quot;kube-apiserver&quot;</span>
<span class="line">[control-plane] Creating static Pod manifest for &quot;kube-controller-manager&quot;</span>
<span class="line">[control-plane] Creating static Pod manifest for &quot;kube-scheduler&quot;</span>
<span class="line">[kubelet-start] Writing kubelet environment file with flags to file &quot;/var/lib/kubelet/kubeadm-flags.env&quot;</span>
<span class="line">[kubelet-start] Writing kubelet configuration to file &quot;/var/lib/kubelet/config.yaml&quot;</span>
<span class="line">[kubelet-start] Starting the kubelet</span>
<span class="line">[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory &quot;/etc/kubernetes/manifests&quot;. This can take up to 10m0s</span>
<span class="line">[apiclient] All control plane components are healthy after 4.238985 seconds</span>
<span class="line">[upload-config] Storing the configuration used in ConfigMap &quot;kubeadm-config&quot; in the &quot;kube-system&quot; Namespace</span>
<span class="line">[kubelet] Creating a ConfigMap &quot;kubelet-config&quot; in namespace kube-system with the configuration for the kubelets in the cluster</span>
<span class="line">[upload-certs] Storing the certificates in Secret &quot;kubeadm-certs&quot; in the &quot;kube-system&quot; Namespace</span>
<span class="line">[upload-certs] Using certificate key:</span>
<span class="line">607c433aa5304920e3810dc82f4018d2dfd6b435965a72a14b3ea621588b80b5</span>
<span class="line">[mark-control-plane] Marking the node k8s-master-01 as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]</span>
<span class="line">[mark-control-plane] Marking the node k8s-master-01 as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]</span>
<span class="line">[bootstrap-token] Using token: 7t2weq.bjbawausm0jaxury</span>
<span class="line">[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles</span>
<span class="line">[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to get nodes</span>
<span class="line">[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials</span>
<span class="line">[bootstrap-token] Configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token</span>
<span class="line">[bootstrap-token] Configured RBAC rules to allow certificate rotation for all node client certificates in the cluster</span>
<span class="line">[bootstrap-token] Creating the &quot;cluster-info&quot; ConfigMap in the &quot;kube-public&quot; namespace</span>
<span class="line">[kubelet-finalize] Updating &quot;/etc/kubernetes/kubelet.conf&quot; to point to a rotatable kubelet client certificate and key</span>
<span class="line">[addons] Applied essential addon: CoreDNS</span>
<span class="line">W0715 04:16:38.007703    1991 endpoint.go:57] [endpoint] WARNING: port specified in controlPlaneEndpoint overrides bindPort in the controlplane address</span>
<span class="line">[addons] Applied essential addon: kube-proxy</span>
<span class="line"></span>
<span class="line">Your Kubernetes control-plane has initialized successfully!</span>
<span class="line"></span>
<span class="line">To start using your cluster, you need to run the following as a regular user:</span>
<span class="line"></span>
<span class="line">  mkdir -p $HOME/.kube</span>
<span class="line">  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config</span>
<span class="line">  sudo chown $(id -u):$(id -g) $HOME/.kube/config</span>
<span class="line"></span>
<span class="line">Alternatively, if you are the root user, you can run:</span>
<span class="line"></span>
<span class="line">  export KUBECONFIG=/etc/kubernetes/admin.conf</span>
<span class="line"></span>
<span class="line">You should now deploy a pod network to the cluster.</span>
<span class="line">Run &quot;kubectl apply -f [podnetwork].yaml&quot; with one of the options listed at:</span>
<span class="line">  https://kubernetes.io/docs/concepts/cluster-administration/addons/</span>
<span class="line"></span>
<span class="line">You can now join any number of the control-plane node running the following command on each as root:</span>
<span class="line"></span>
<span class="line">  kubeadm join 192.168.0.200:16443 --token 7t2weq.bjbawausm0jaxury \\</span>
<span class="line">	--discovery-token-ca-cert-hash sha256:469225f57f7d9c489db03b339bb644c8b565dd6a7c8da77815c40ec58d65148d \\</span>
<span class="line">	--control-plane --certificate-key 607c433aa5304920e3810dc82f4018d2dfd6b435965a72a14b3ea621588b80b5</span>
<span class="line"></span>
<span class="line">Please note that the certificate-key gives access to cluster sensitive data, keep it secret!</span>
<span class="line">As a safeguard, uploaded-certs will be deleted in two hours; If necessary, you can use</span>
<span class="line">&quot;kubeadm init phase upload-certs --upload-certs&quot; to reload certs afterward.</span>
<span class="line"></span>
<span class="line">Then you can join any number of worker nodes by running the following on each as root:</span>
<span class="line"></span>
<span class="line">kubeadm join 192.168.0.200:16443 --token 7t2weq.bjbawausm0jaxury \\</span>
<span class="line">	--discovery-token-ca-cert-hash sha256:469225f57f7d9c489db03b339bb644c8b565dd6a7c8da77815c40ec58d65148d </span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在master-01上执行 注意，此文件备份</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line"></span>
<span class="line">  mkdir -p $HOME/.kube</span>
<span class="line">  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config</span>
<span class="line">  sudo chown $(id -u):$(id -g) $HOME/.kube/config</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他master加入集群</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">  kubeadm join 192.168.0.200:16443 --token 7t2weq.bjbawausm0jaxury \\</span>
<span class="line">	--discovery-token-ca-cert-hash sha256:469225f57f7d9c489db03b339bb644c8b565dd6a7c8da77815c40ec58d65148d \\</span>
<span class="line">	--control-plane --certificate-key 607c433aa5304920e3810dc82f4018d2dfd6b435965a72a14b3ea621588b80b5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他Node加入集群</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">kubeadm join 192.168.0.200:16443 --token 7t2weq.bjbawausm0jaxury \\</span>
<span class="line">	--discovery-token-ca-cert-hash sha256:469225f57f7d9c489db03b339bb644c8b565dd6a7c8da77815c40ec58d65148d </span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Token过期后生成新的token（没提示过期下面两步就不用管了）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">kubeadm token create --print-join-command</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Master需要生成--certificate-key</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">kubeadm init phase upload-certs  --upload-certs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,24)]))}const o=s(l,[["render",t],["__file","k8s-005.html.vue"]]),r=JSON.parse('{"path":"/docs/ops/k8s-005.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"createdTime":1720989410000,"updatedTime":1721062027000,"contributors":[{"name":"makai","email":"makai3@126.com","commits":2}]},"filePathRelative":"docs/ops/k8s-005.md"}');export{o as comp,r as data};
