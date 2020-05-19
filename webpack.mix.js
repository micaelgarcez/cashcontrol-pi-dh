const mix = require('laravel-mix');

mix.sass('sass/all.scss', 'public/css')
   .setPublicPath('public');