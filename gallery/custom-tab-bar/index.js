Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
        pagePath: "/pages/galleryindex/galleryindex",
        text: "首页",
        iconPath: "",
        selectedIconPath: ""
      },
      {
        pagePath: "/pages/galleryshot/galleryshot",
        text: "拍照",
        iconPath: "",
        "selectedIconPath": ""
      },
      {
        pagePath: "/pages/gallerycollect/gallerycollect",
        text: "收藏",
        iconPath: "",
        selectedIconPath: ""
      }
    ]

  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url: url,
      })
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})