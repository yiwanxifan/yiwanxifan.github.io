var posts=["posts/9a18fb74.html","posts/f213c33e.html","posts/9d2d750f.html","posts/7a6a6b5a.html","posts/45418e2c.html","posts/6a05b400.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};