// For Typed feature
import VueTypedJs from 'vue-typed-js'

// make cross-references
import { findPageForPath } from '@app/util'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {

    
    if (typeof process === 'undefined') { // process is undefined in a browser         
        Vue.use(VueTypedJs)
    }


    Vue.mixin({
    methods: {
        getPageKey(pages, path) {
        const result = findPageForPath(pages, path)
        return result.key
        }
    }
    })
}



