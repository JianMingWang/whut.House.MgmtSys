import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

//引入weui样式
import '../static/weui/weui.css'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/index_old/main', '^pages/login/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#1AAD16',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/main',
          text: '申请',
          iconPath: 'static/images/icon_nav_button.png',
          selectedIconPath: 'static/images/icon_nav_button.png'
        },
        // {
        //   pagePath: 'pages/index/main',
        //   text: '通讯录',
        //   iconPath: 'static/images/icon_nav_cell.png',
        //   selectedIconPath: 'static/images/icon_nav_cell.png'
        // },
        // {
        //   pagePath: 'pages/index/main',
        //   text: '发现',
        //   iconPath: 'static/images/icon_nav_cell.png',
        //   selectedIconPath: 'static/images/icon_nav_cell.png'
        // },
        {
          pagePath: 'pages/counter/main',
          text: '我',
          iconPath: 'static/images/icon_nav_toast.png',
          selectedIconPath: 'static/images/icon_nav_toast.png'
        }
      ]
    }

  }
}
