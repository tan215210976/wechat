const baseURL=getApp();
module.exports=(url,data,methods='GET',header={})=>{
   return new Promise((resolve,reject)=>{
     wx.request({
       data,
       methods,
       url:baseURL.data.baseURL+url,
       header,
       dataType:'json',
       success:function(res){
         wx.hideLoading(),
         resolve(res)
       },
       fail:function(){
         wx.hideLoading()
       }
     })
   })
}