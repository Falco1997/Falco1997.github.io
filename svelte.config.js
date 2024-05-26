import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

///** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess({
      scss: {
        prependData: '@use "src/styles/variables.scss";'
      }
    })
  };

export default config;