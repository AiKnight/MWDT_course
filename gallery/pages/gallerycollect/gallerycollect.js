// pages/gallerycollect/gallerycollect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list_storage: [],
    message: true
  },

  getPicsList: function () {
    console.log("获取")
    const taht = this
    wx.getStorage({
      key: 'list_storage',
      success(res) {
        console.log(res.data)
        const list_storage = res.data.filter(v => v.is_collect == true)
        console.log(list_storage)
        if (list_storage.length == 0) {
          taht.setData({
            message: true
          })
        } else {
          taht.setData({
            message: false
          })
        }
        taht.setData({
          list_storage,
        })

      },
      fail(err) {
        taht.setData({
          message: true
        })
      }
    })
  },

  lightTab: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getPicsList()
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
    this.getPicsList()
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