// pages/map/map.js
Page({

  /**
   * Page initial data
   */
  data: {
    latitude: 31.233299,
    // latitude: 48.8648601,
    longitude: 121.437387,
    // longitude: 2.3798866,
    markers: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    const page = this
    wx.request({
      url: `http://localhost:3000/flats?format=json`,
      success(res) {
        console.log(res)
        page.setData({
          markers: res.data
        })
      }
    })
  },
  selectMarker(e) {
    console.log(e)
    let { markers } = this.data
    let marker = markers[e.detail.markerId]
    marker.height = 60
    marker.width = 60
    markers[e.detail.markerId] = marker
    this.setData({
      markers: markers
    })
  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})