const mix = require('laravel-mix');

mix.sass('sass/default.scss', 'public/css')
   .setPublicPath('public');
   
mix.sass('sass/all.scss', 'public/css')
   .setPublicPath('public');
