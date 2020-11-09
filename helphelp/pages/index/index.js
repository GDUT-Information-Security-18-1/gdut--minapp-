//Page Object
Page({
  data: {
    catesList: [{
        id: 0,
        name: "帮我买",
        image_src: "../../icons/buy.png",
        text_src: "../../icons/buy_text.png"
      },
      {
        id: 1,
        name: "帮我送",
        image_src: "../../icons/send.png",
        text_src: "../../icons/send_text.png"
      }
    ],
    tabs: [{
      id: 0,
      value: "综合",
      isActive: true
    }, {
      id: 1,
      value: "时间",
      isActive: false
    }, {
      id: 2,
      value: "价格",
      isActive: false
    }],
    ordersList:[{
      orders_id: 1,
      orders_text:"你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
      orders_position:"西区",
      orders_price:"12312"
    },
    {
      orders_id: 2,
      orders_text:"你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
      orders_position:"西区",
      orders_price:"12312"
    },
    {
      orders_id: 3,
      orders_text:"你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
      orders_position:"西区",
      orders_price:"12312"
    },
    {
      orders_id: 4,
      orders_text:"你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
      orders_position:"西区",
      orders_price:"12312"
    }]
  },

  handleTabsItemChange(e) {
    const {
      index
    } = e.detail;
    let {
      tabs
    } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  }

});