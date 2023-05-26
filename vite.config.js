import handlebars from 'vite-plugin-handlebars';
import data from './data.json';
import { defineConfig } from 'vite';


export default defineConfig({
  build: {
    rollupOptions: {
      input : {
        main: 'index.html',
        one: 'index-bootstrap.html',
        tw0: 'index-materialize.html'
      }
    },
  },
    base : '/responsive_webpages/',   // <-- add this
    plugins: [handlebars({
      context : {
          /*
          previous setup here
          */
          data   // add this
      }
    })],
  });
