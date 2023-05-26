
import handlebars from 'vite-plugin-handlebars';
import data from './data.json';
export default {
    plugins: [handlebars({
      context : {
          /*
          previous setup here
          */
          data   // add this
      }
    })],
  };