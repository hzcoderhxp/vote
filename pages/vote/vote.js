var app = getApp();

Page({
  data: {
    mutiChecked:false,
    plusImg: "../../images/plus.png",
    minusImg: "../../images/minus.png",
    date: "2016-09-01",
    time: "12:01",
    arr: []
  },
  removeItem:function(event){
    //console.log(event.currentTarget.dataset.itemId);
    let index = event.currentTarget.dataset.itemId;
    let that = this;
    that.data.arr.splice(index,1);
    
    this.setData({
      arr:that.data.arr
    })
    //console.log(that.data.arr);
  },
  changeItemContent:function(event){
    let index = event.currentTarget.dataset.itemId;
    //console.log(index);
    let that=this;
    //that.data.arr.splice(index, 1);
    that.data.arr.splice(index, 1, event.detail.value);
    
    this.setData({
      arr:that.data.arr
    })
    //console.log(that.data.arr);
  },
  addItem: function(){
    var that =this;
    that.data.arr.push("");
    this.setData({
      arr: that.data.arr
    })
    
  },
  formSubmit: function (e) {
    console.log(e.detail.value);
    //console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function (e) {
    console.log('form发生了reset事件')
  },
  mutiSelect:function(e){
    let that = this;
    that.setData({
      mutiChecked:e.detail.value
    })
    console.log(e.detail.value);
  }
})
