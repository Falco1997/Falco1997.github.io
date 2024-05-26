import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter(),
        paths: {
            base: process.env.NODE_ENV === 'development' ? '' : '/Falco1997.github.io'
        },

        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte'
    }
};

export default config;