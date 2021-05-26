// pages/galleryindex/galleryindex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list_storage: [],
    message: false
  },
  // 获取本地缓存中相册列表
  getPicsList: function () {
    console.log("获取")
    const taht = this
    wx.getStorage({
      key: 'list_storage',
      success(res) {
        console.log(res.data)
        const list_storage = res.data
        taht.setData({
          list_storage,
          message: false
        })
      },
      fail(err) {
        taht.setData({
          message: true
        })
      }
    })
  },
  // 收藏函数，（反转状态）
  collect: function (c) {
    console.log(c.target.dataset.c)
    const index = c.target.dataset.c
    const tempstr = "list_storage[" + index + "].is_collect"
    if (this.data.list_storage[index].is_collect == false) {
      this.setData({
        [tempstr]: true
      })
    } else {
      this.setData({
        [tempstr]: false
      })
    }
    wx.setStorageSync('list_storage', this.data.list_storage)
  },
  // tab高亮
  lightTab: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
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