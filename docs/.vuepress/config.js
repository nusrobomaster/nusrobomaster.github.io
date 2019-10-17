const getConfig = require("vuepress-bar");
const barConfig = getConfig(
    `${__dirname}/..`,
    {skipEmptySidebar: true, 
    addReadMeToFirstGroup:false}
)

//// Full Automatic
// module.exports = {
//   themeConfig: {
//     ...barConfig,
//     displayAllHeaders: true // Default: false
//   }
// };


//// Mixed style
module.exports = {
  title: "NUS RoboMaster Team",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Tutorials', link: '/1-tutorials/' },
      // { text: 'External', link: 'https://google.com' },
      
     ...barConfig.nav,
     { text: 'GitHub', link: 'https://github.com/nusrobomaster/' }
    ],
    sidebar: barConfig.sidebar,
    lastUpdated: 'Last Updated',
    editLinks: false,
    displayAllHeaders: false // Default: false
  },

  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-task-lists"))
    }
  },

  plugins: [
    // 'disqus',
    'latex',
    'medium-zoom'
  ],

  // not working now in dev mode, as https://github.com/vuejs/vuepress/issues/1334 , https://github.com/prettier/prettier/issues/4784
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          options.prettify = false
          return options
        })
  }
};