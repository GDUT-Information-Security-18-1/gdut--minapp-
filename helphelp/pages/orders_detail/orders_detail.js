// pages/orders_detail/orders_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ordersObj: {
      orders_price: 1000,
      orders_text: "你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你",
      isBuy: true,
      goods_price: 10,
      havePics: true,
      orders_position: "西区752",
      orders_time: "13:20",
      pics: [{
        pics_id: 0,
        pics_mid: "https://pic.liesio.com/2020/11/09/5b1b526c259a3.jpg"
      }, {
        pics_id: 1,
        pics_mid: "https://pic.liesio.com/2020/11/10/cf943ff41ab8e.jpg"
      }, {
        pics_id: 2,
        pics_mid: "https://pic.liesio.com/2020/11/10/07f531d0ed63a.jpg"
      }, {
        pics_id: 3,
        pics_mid: "https://pic.liesio.com/2020/11/10/ffe68a1189e44.jpg"
      }]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {
      orders_id
    } = options;
    console.log(orders_id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handlePrevewImage(e) {
    const urls = ["https://pic.liesio.com/2020/11/09/5b1b526c259a3.jpg", "https://pic.liesio.com/2020/11/10/cf943ff41ab8e.jpg", "https://pic.liesio.com/2020/11/10/07f531d0ed63a.jpg", "https://pic.liesio.com/2020/11/10/ffe68a1189e44.jpg"]
    const current = e.currentTarget.dataset.url;
    console.log(current);
    wx.previewImage({
      current,
      urls
    });
  },
  popConfirm: function(){
    wx.showModal({
      title: '接受订单',
      content: '确认要接受此订单吗？',
      success: function (res) {
        if (res.confirm) {  
          console.log('点击确认回调')
        } else {   
          console.log('点击取消回调')
        }
      }
    })
  }
})