var posts=["2024/05/22/CSharp入门小项目之大帅逼救公主/","2021/11/12/Clion使用WSL编写C语言问题汇总/","2024/02/29/OpenClash内核更新失败解决方法/","2021/11/12/Windows环境Clion中文乱码最完美方案/","2023/06/02/Windows环境下Cygwin的配置/","2023/06/16/解决ProxmoxVE无法安装到eMMC上的问题/","2024/02/29/迁移Hexo时遇到的问题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };