const mix = require('laravel-mix');

mix.sass('src/sass/default.scss', 'public/css')
   .setPublicPath('public');
   
mix.sass('src/sass/all.scss', 'public/css')
   .setPublicPath('public');