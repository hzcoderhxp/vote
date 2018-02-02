//index.js
//获取应用实例
var app = getApp()
var utils = require('../../utils/util.js')
Page({
  data: {
    inputVal:'',
    homeImg:"../../images/logo.png",
    list: [],
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false
  },
  //事件处理函数
  bindViewTap: function(e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.target.dataset.id
    })
  },
  loadMore: function (e) {
    if (this.data.list.length === 0) return
    var date = this.getNextDate()
    var that = this
    that.setData({ loading: true })
    console.log(Number(utils.formatDate(date)) + 1);
    wx.request({
      url: 'http://vote.imbird.cn/vote/latest/' + (Number(utils.formatDate(date)) + 1),
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
         that.setData({
           loading: false,
           list: that.data.list.concat([{ header: utils.formatDate(date, '-') }]).concat(res.data.stories)
         })
      }
    })
  },


  wxSearchFn: function(e){
    //let index = event.currentTarget.dataset.itemId;
    console.log(this.data.inputVal);
    //console.log(this.data.inputVal);
    //console.log(e);
  },

  wxSearchInput: function(e){
    let that = this;
    //console.log(e);
    this.setDate({
      inputVal:e.detail.value
    });
    console.log(this.data.inputVal);
  },



  getNextDate: function (){
    var now = new Date()
    now.setDate(now.getDate() - this.index++)
    return now
  },
  onLoad: function () {
    var that = this
    wx.request({
      //url: 'http://news-at.zhihu.com/api/4/news/latest',
      url: 'http://vote.imbird.cn/vote/latest/20180131',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
         that.setData({
           //banner: res.data.top_stories,           
           //list: res.data.stories
           list: res.data
         })
      }
    })
    this.index = 1
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
    
  }
})
