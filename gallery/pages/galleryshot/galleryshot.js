// pages/galleryshot/galleryshot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dic: {
      img_url: "",
      img_title: "",
      img_remarks: "",
      is_collect: false
    },



  },

  getPicForCamera: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ["compressed"],
      sourceType: ["camera", "album"],
      success: (result) => {
        console.log(result)
        const img_url = result.tempFilePaths[0]
        const tempstr = "dic.img_url"
        this.setData({
          [tempstr]: img_url
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '获取图片失败',
          icon: 'none'
        })
      },
      complete: (res) => {},
    })
  },
  getPicTitle:function(even){
    console.log(even)
  },
  getPicTitle: function (even) {
    const tempstr = "dic.img_title"
    this.setData({
      [tempstr]: even.detail.value
    })
  },
  getPicRemarks: function (even) {
    // console.log(even.detail.value)
    const tempstr = "dic.img_remarks"
    this.setData({
      [tempstr]: even.detail.value
    })
    // console.log(this.data.dic.img_remarks)
  },
  setList: function () {
    // const temp_list_storage = wx.getStorageSync('list_storage')
    if (this.data.dic.img_url == ""){
      wx.showToast({
        title: '请先拍摄照片',
        icon: 'none'
      })
      return
    }
    if (this.data.dic.img_title == ""){
      wx.showToast({
        title: '照片名称未填入',
        icon: 'none'
      })
      return
    }
    if (this.data.dic.img_remarks == "" || this.data.dic.img_remarks.length < 20){
      wx.showToast({
        title: '描述未填入或描述太短',
        icon: 'none'
      })
      return
    }
    const that = this
    wx.getStorage({
      key: 'list_storage',
      success(res) {
        console.log("列表获取成功")
        console.log(res.data)
        const list_storage = res.data
        list_storage.push(that.data.dic)
        wx.setStorageSync('list_storage', list_storage)
        that.clearDic()
      },
      fail(err) {
        console.log("列表获取错误")
        const list_storage = []
        list_storage.push(that.data.dic)
        console.log(list_storage)
        wx.setStorageSync('list_storage', list_storage)
        that.clearDic()
      }
    })
    // console.log(temp_list_storage)
    // const list_storage = temp_list_storage.push(this.data.dic)
    // wx.setStorageSync('list_storage', list_storage)
  },
  clearDic: function () {
    wx.showToast({
      title: '保存成功',
      icon: 'success'
    })
    const dic = {
      img_url: "",
      img_title: "",
      img_remarks: "",
      is_collect: false
    }
    this.setData({
      dic
    })
  },
  lightTab: function(){
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      selected: 1
    })
  }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.lightTab()

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

  }
})


// Component({
//   pageLifetimes: {
//     show() {
//       if (typeof this.getTabBar === 'function' &&
//         this.getTabBar()) {
//         this.getTabBar().setData({
//           selected: 1
//         })
//       }
//     }
//   }
// })
function newFunction() {
  return 0
}