(self.__BUILD_MANIFEST = (function (s) {
  return {
    __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
    "/": [s, "static/chunks/pages/index-88e8f88946750c80.js"],
    "/_error": ["static/chunks/pages/_error-77823ddac6993d35.js"],
    "/about": [
      s,
      "static/chunks/384-1e1860d460436b96.js",
      "static/chunks/pages/about-8eef33c1e8b9614f.js",
    ],
    "/articles": [s, "static/chunks/pages/articles-54999371425569d0.js"],
    "/projects": [s, "static/chunks/pages/projects-c84aca07a28e4692.js"],
    sortedPages: ["/", "/_app", "/_error", "/about", "/articles", "/projects"],
  };
})("static/chunks/675-1de609c86810a86b.js")),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
