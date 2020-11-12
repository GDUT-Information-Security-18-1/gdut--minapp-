const app = getApp()

//app.js
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        //发送请求
        wx.request({
          url: 'http://8.129.180.36:8080/user/login', //接口地址
          method: "POST",
          data: {
            "js_code": res.code,  
            "unionid": ""
          },
          header: {   
            "Accept": "*/*",
            "Content-Type": "application/json"
          },
          success: function (res) {
            console.log(res.data);
            if( res == null || res.data == null ) { 
              console.error( '网络请求失败' ); 
              return; 
             } 
          }
        })
      }
    }) 
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    userKey:[],
  }
})