//index.js
//获取应用实例
const fetch=require('../../utils/fetch.js')
const app = getApp()

Page({
  data: {
     slideList:[],
     cateList:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
     fetch('slides').then(res=>{
       this.setData({
         slideList:res.data
       })
     });
     fetch('categories').then(res=>{
      console.log(res);
      this.setData({
        cateList:res.data
      })
     })
     
  },

})
