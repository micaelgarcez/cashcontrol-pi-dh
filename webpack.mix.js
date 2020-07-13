const mix = require("laravel-mix");

mix.sass("src/sass/default.scss", "public/css").setPublicPath("public");

mix.sass("src/sass/all.scss", "public/css").setPublicPath("public");

mix
  .sass("src/sass/LandingPage/landing-page.scss", "public/css")
  .options({
    processCssUrls: false,
  })
  .setPublicPath("public");
