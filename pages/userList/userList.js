var app = getApp();

Page({
  data: {
    list: [{
      avatarUrl: "苹果",
      nickName: "多多",
      addTime:"2018-02-01 00:00:00"
    },
    {
      avatarUrl: "苹果",
      nickName: "多多",
      addTime: "2018-02-01 00:00:00"
    },
    {
      avatarUrl: "苹果",
      nickName: "多多",
      addTime: "2018-02-01 00:00:00"
    }],
    userInfo:{}
  },
  onLoad: function(options){
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      
      that.setData({
        userInfo: userInfo
      })
    });
  }
})