import{_ as e,c as n,a,o as i}from"./app-BZ33XHo8.js";const l={};function t(d,s){return i(),n("div",null,s[0]||(s[0]=[a(`<h2 id="集群网段划分" tabindex="-1"><a class="header-anchor" href="#集群网段划分"><span>集群网段划分</span></a></h2><p>1/ 主机节点网段 192.168.1.0/24 2/ Service网段 10.96.0.0/16 3/ Pod网段 10.244.0.0/16</p><h2 id="服务器资源配置" tabindex="-1"><a class="header-anchor" href="#服务器资源配置"><span>服务器资源配置</span></a></h2><p>1/Mater节点 2C4G * 3</p><p>2/Node节点 2C4G * 3</p><h2 id="版本选择" tabindex="-1"><a class="header-anchor" href="#版本选择"><span>版本选择</span></a></h2><p>https://kubernetes.io/</p><h2 id="安装环境与工具" tabindex="-1"><a class="header-anchor" href="#安装环境与工具"><span>安装环境与工具</span></a></h2><p>工具：VMWare 、XShell 使用主机网段 VIP： master-01：2C2G，20G，桥接，删除声卡和打印机 master-02：2C2G，20G，桥接，删除声卡和打印机 master-03：2C2G，20G，桥接，删除声卡和打印机 node-01：2C2G，20G，桥接，删除声卡和打印机 node-02：2C2G，20G，桥接，删除声卡和打印机</p><p>2C2G 20G，桥接,删除声卡和打印机</p><p>IP地址设置成固定的</p><p>Service网段： Kubernetes Service 的IP地址是固定的 10.96.0.1 CoreDNS的IP地址是第十个IP地址 10.96.0.10</p><p>etcd cluster keepalived + haproxy (keepalived + nginx) k8s-master-01 k8s-master-02 k8s-master-03 k8s-node-01 k8s-node-02</p><p>0.修改 mac 1.修改 hostname /etc/hostname 2.修改 ip /etc/NetworkManager/system-connections/ens160.nmconnection 3.修改网卡UUID</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line"># 列出所有可用的网卡接口和其他信息</span>
<span class="line">ip link show ;</span>
<span class="line"></span>
<span class="line"># 生成UUID</span>
<span class="line">uuidgen</span>
<span class="line"></span>
<span class="line"># 把UUID分配给网卡接口</span>
<span class="line">ip link set dev 网卡接口 address 上面生成的UUID</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>| k8s-master-lb | 192.168.0.200 | VIP | | k8s-master-01 | 192.168.0.201 | | k8s-master-02 | 192.168.0.202 | | k8s-master-03 | 192.168.0.203 | | k8s-node-01 | 192.168.0.204 | | k8s-node-02 | 192.168.0.205 |</p><hr><p>系统版本：RockyLinux 9.4 Containerd版本：20.10.x Pod网段：172.16.0.0/16 Service网段：10.96.0.0/16</p><hr><p>第一步，所有节点， 修改主机名 hostnamectl set-hostname</p><p>第二步，所有节点，追加HOST echo &quot;192.168.0.200 k8s-master-lb&quot; &gt;&gt; /etc/hosts echo &quot;192.168.0.201 k8s-master-01&quot; &gt;&gt; /etc/hosts echo &quot;192.168.0.202 k8s-master-02&quot; &gt;&gt; /etc/hosts echo &quot;192.168.0.203 k8s-master-03&quot; &gt;&gt; /etc/hosts echo &quot;192.168.0.204 k8s-node-01&quot; &gt;&gt; /etc/hosts echo &quot;192.168.0.205 k8s-node-02&quot; &gt;&gt; /etc/hosts</p><p>第三部，所有节点，修改YUM源</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">MIRROR=mirrors.aliyun.com/rockylinux</span>
<span class="line">sudo sed -i.bak -e &quot;s|^mirrorlist=|#mirrorlist=|&quot; -e &quot;s|^#baseurl=|baseurl=|&quot; -e &quot;s|dl.rockylinux.org/\\$contentdir|$MIRROR|&quot; /etc/yum.repos.d/rocky-*.repo</span>
<span class="line">yum install -y yum-utils device-mapper-persistent-data lvm2</span>
<span class="line">yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span>
<span class="line"></span>
<span class="line">cat &lt;&lt; EOF |tee /etc/yum.repos.d/kubernetes.repo</span>
<span class="line">[kubernetes]</span>
<span class="line">name=Kubernetes</span>
<span class="line">baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/</span>
<span class="line">enabled=1</span>
<span class="line">gpgcheck=1</span>
<span class="line">repo_gpgcheck=0</span>
<span class="line">gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg</span>
<span class="line">EOF</span>
<span class="line"></span>
<span class="line">sed -i -e &#39;/mirrors.cloud.aliyuncs.com/d&#39; -e &#39;/mirrors.aliyuncs.com/d&#39; /etc/yum.repos.d/CentOS-Base.repo</span>
<span class="line"></span>
<span class="line">yum clean all</span>
<span class="line">yum update </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第四部，所有节点 必备工具安装</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">yum install wget jq psmisc vim net-tools telnet yum-utils device-mapper-persistent-data lvm2 git -y</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>第五步，所有节点关闭防火墙、selinux、dnsmasq、swap。服务器配置如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">systemctl disable --now firewalld</span>
<span class="line">systemctl disable --now dnsmasq</span>
<span class="line"></span>
<span class="line">setenforce 0</span>
<span class="line">sed -i &#39;s#SELINUX=enforing#SELINUX=disabled#g&#39; /etc/sysconfig/selinux</span>
<span class="line">sed -i &#39;s#SELINUX=enforing#SELINUX=disabled#g&#39; /etc/selinux/config</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第六步，所有节点，关闭swap分区</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">swapoff -a &amp;&amp; sysctl -w vm.swappiness=0</span>
<span class="line">sed -ri &#39;/^[^#]*swap/s@^@#@&#39; /etc/fstab</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>第七步，所有节点安装 chronyd 同步时间</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">yum install epel-release</span>
<span class="line">dnf config-manager --set-enabled crb</span>
<span class="line">rpm -ivh https://mirrors.wlnmp.com/rockylinux/wlnmp-release-rockylinux-9.noarch.rpm</span>
<span class="line">yum install ntpdate -y</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">dnf install chrony -y</span>
<span class="line">sudo systemctl enable chronyd</span>
<span class="line">sudo systemctl start chronyd</span>
<span class="line">sudo systemctl status chronyd</span>
<span class="line"></span>
<span class="line">vim /etc/chrony.conf</span>
<span class="line">pool ntp.aliyun.com iburst</span>
<span class="line">pool ntp.tencent.com iburst</span>
<span class="line"></span>
<span class="line">systemctl restart chronyd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第八步，所有节点 同步时间。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span>
<span class="line">echo &#39;Asia/Shanghai&#39; &gt;/etc/timezone</span>
<span class="line">ntpdate time2.aliyun.com</span>
<span class="line"># 加入到crontab</span>
<span class="line">vi /etc/crontab</span>
<span class="line">*/5 * * * * root chronyc sources</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第九步，所有节点 配置 limit</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">ulimit -SHn 65535</span>
<span class="line">vim /etc/security/limits.conf</span>
<span class="line"># 末尾添加如下内容</span>
<span class="line">* soft nofile 65536</span>
<span class="line">* hard nofile 131072</span>
<span class="line">* soft nproc 65535</span>
<span class="line">* hard nproc 655350</span>
<span class="line">* soft memlock unlimited</span>
<span class="line">* hard memlock unlimited</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第10步，所有节点，升级系统并重启，此升没有升级内核，下节会单独升级内核</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">yum update -y --exclude=kernel*  # CentOS7 需要升级，CentOS8可以按需升级系统</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>第11步，master-01节点免密登录其他节点，安装过程中生成配置文件和证书均在master-01上操作，集群管理也在master-01上操作，阿里云或者aws上需要单独一台kubectl服务器，密钥配置如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">ssh-keygen -t rsa</span>
<span class="line">for i in k8s-master-01 k8s-master-02 k8s-master-03 k8s-node-01 k8s-node-02;do ssh-copy-id -i .ssh/id_rsa.pub $i;done</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>第12步，master-01节点 下载安装所有的源码文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">cd /root/ ; git clone https://gitee.com/dukuan/k8s-ha-install.git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>第13步，</p>`,42)]))}const c=e(l,[["render",t],["__file","k8s-001.html.vue"]]),p=JSON.parse('{"path":"/docs/ops/k8s-001.html","title":"k8s-001-基本环境配置","lang":"en-US","frontmatter":{"title":"k8s-001-基本环境配置","date":"2024/07/12"},"headers":[{"level":2,"title":"集群网段划分","slug":"集群网段划分","link":"#集群网段划分","children":[]},{"level":2,"title":"服务器资源配置","slug":"服务器资源配置","link":"#服务器资源配置","children":[]},{"level":2,"title":"版本选择","slug":"版本选择","link":"#版本选择","children":[]},{"level":2,"title":"安装环境与工具","slug":"安装环境与工具","link":"#安装环境与工具","children":[]}],"git":{"createdTime":1720715113000,"updatedTime":1720801946000,"contributors":[{"name":"makai","email":"makai3@126.com","commits":2}]},"filePathRelative":"docs/ops/k8s-001.md"}');export{c as comp,p as data};
