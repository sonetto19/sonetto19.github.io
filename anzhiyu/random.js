var posts=["2021/11/12/Clion使用WSL编写C语言问题汇总/","2021/11/12/Windows环境Clion中文乱码最完美方案/","2023/06/02/Windows环境下Cygwin的配置/","2023/06/16/解决ProxmoxVE无法安装到eMMC上的问题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };