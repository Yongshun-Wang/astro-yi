// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

/**
 * title {string} website title
 * favicon {string} website favicon url
 * description {string} website description
 * author {string} author
 * avatar {string} Avatar used in the profile
 * motto {string} used in the profile
 * url {string} Website link
 * recentBlogSize {number} Number of recent articles displayed in the sidebar
 * archivePageSize {number} Number of articles on archive pages
 * postPageSize {number} Number of articles on blog pages
 * feedPageSize {number} Number of articles on feed pages
 * beian {string} Chinese policy
 */
export const site = {
  title: '测绘之路', // required
  favicon: 'https://pic.imgdb.cn/item/66019e709f345e8d03ab6819.png', // required
  description: 'Welcome to my independent blog website! ',
  author: "测绘王同学", // required
  avatar: 'https://pic.imgdb.cn/item/6577ee64c458853aef0184a1.jpg', // required
  motto: '行百里者半九十',
  url: 'https://yongshunwang.netlify.app/',
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
  beian: '',
}

/**
 * busuanzi {boolean} link: https://busuanzi.ibruce.info/
 * lang {string} Default website language
 * codeFoldingStartLines {number}
 * ga {string|false}
 */
export const config = {
  busuanzi: false,
  lang: 'zh-cn', // en | zh-cn
  codeFoldingStartLines: 16 , // Need to re-run the project to take effect
  ga: false // If you want to integrate with Google Analytics, just enter your GA-ID here.
}

/**
 * Navigator
 * name {string}
 * iconClass {string} icon style
 * href {string}  link url
 * target {string} optional "_self|_blank" open in current window / open in new window
 */
export const categories = [
  {
    name: "博客",
    iconClass: "ri-draft-line",
    href: "/blog/1",
  },
  {
    name: "说说",
    iconClass: "ri-lightbulb-flash-line",
    href: "/feed/1",
  },
  {
    name: "归档",
    iconClass: "ri-archive-line",
    href: "/archive/1",
  },
  // {
  //   name: "留言",
  //   iconClass: "ri-chat-1-line",
  //   href: "/message",
  // },
  {
    name: '友链',
    iconClass: 'ri-user-5-line',
    href: '/friends',
    target: '_self',
  },
  {
    name: "搜索",
    iconClass: "ri-search-line",
    href: "/search",
  },
  {
    name: '关于',
    iconClass: 'ri-information-line',
    href: '/about',
  }

  // {
  //   name: "更多",
  //   iconClass: "ri-more-fill",
  //   href: "javascript:void(0);",
  //   children: [
      
     
  //   ]
  // }
]

/**
 * Personal link address
 */
export const infoLinks = [
  // {
  //   icon: 'ri-telegram-fill',
  //   name: 'telegram',
  //   outlink: 'xxxxxxx',
  // },
  {
    icon: 'ri-twitter-fill',
    name: 'twitter',
    outlink: 'https://twitter.com/yongshun231206',
  },
  // {
  //   icon: 'ri-instagram-fill',
  //   name: 'instagram',
  //   outlink: 'xxxxxxx',
  // },
  {
    icon: 'ri-github-fill',
    name: 'github',
    outlink: 'https://github.com/Yongshun-Wang',
  }
  // {
  //   icon: 'ri-rss-fill',
  //   name: 'rss',
  //   outlink: 'https://astro-yi-nu.vercel.app/rss.xml',
  // }
]

/**
 * donate
 * enable {boolean}
 * tip {string}
 * wechatQRCode: Image addresses should be placed in the public directory.
 * alipayQRCode: Image addresses should be placed in the public directory.
 * paypalUrl {string}
 */
export const donate = {
  enable: false,
  tip: "Thanks for the coffee !!!☕",
  wechatQRCode: "/WeChatQR.png",
  alipayQRCode: "/AliPayQR.png",
  paypalUrl: "https://paypal.me/xxxxxxxxxx",
}

/**
 * Friendship Links Page
 * name {string}
 * url {string}
 * avatar {string}
 * description {string}
 */
export const friendshipLinks =
  [
    // {
    //   name: "Cirry's Blog",
    //   url: 'https://cirry.cn',
    //   avatar: "https://cirry.cn/avatar.png",
    //   description: '前端开发的日常'
    // },
       {
        name: "小孙同学",
        url: "https://blog.sunguoqi.com", 
        avatar: "https://blog.sunguoqi.com/avatar.webp", 
        description: "路虽远行则将至，事虽难做则必成！"
      }
  ]

/**
 * Comment Feature
 * enable {boolean}
 * serverUrl {string} server link
 * lang {string} link: https://waline.js.org/guide/features/i18n.html
 * pageSize {number} number of comments per page. default 10
 * wordLimit {number} Comment word s limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to 0
 * count {number} recent comment numbers
 * pageview {boolean} display the number of page views and comments of the article
 * reaction {string | string[]} Add emoji interaction function to the article
 * requiredMeta {string[]}  Set required fields, default anonymous
 * whiteList {string[]} set some pages not to display reaction
 */
export const comment = {
  enable: false,
  serverUrl: "https://xxxxx.xxxxx.app",
  lang: 'en',
  pageSize: 20,
  wordLimit: '',
  count: 5,
  pageview: true,
  reaction: true,
  requiredMeta: ["nick", "mail"],
  whiteList: ['/message/', '/friends/'],
}
