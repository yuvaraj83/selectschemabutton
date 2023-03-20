const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
      proxy("", {
        target: "`https://webhook.site/bffc12b0-541f-4ed7-a191-95c568f1845d`",
        changeOrigin: true,
      })
    );
};