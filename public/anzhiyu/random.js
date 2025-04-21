var posts=["2025/04/21/hello-world/","2025/04/21/Java/一. Java 基础/","2025/04/19/Java/二. Web/","2025/04/19/Java/五. 技术点/","2025/04/19/Java/三. 数据库/","2025/04/19/Java/四. 框架/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };