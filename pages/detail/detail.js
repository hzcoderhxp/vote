var app = getApp();
Page({
  data: {
    userInfo:{},
    title:'下午茶',
    description:'石头下午茶投票',
    publisher:'多多',
    open:false,
    startTime: '2018-02-01 08:00:00',
    endTime:'2018-02-01 12:00:00',
    isVote:false,
    anonymous:true,
    selects:1,
    status:-1,
    persons:2,
    isPublisher:true,
    checkboxItems: [
      { name: '苹果', value: '0', checked: true },
      { name: '香蕉', value: '1' },
      { name: '减肥', value: '2' }
    ],
    art: {}
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '投票管家'
    })
  },
  onLoad: function (options) {
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    });
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/' + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
         that.setData({
           art: res.data
         })
         console.log(res.data)
      }
    })
  },
  checkboxChange: function (e) {
    //console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    
    var checkboxItems = this.data.checkboxItems, values = e.detail.value;

    
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },
})