// pages/home/home.js
// import code from '../../static/images/commonly/code.png';
// import people from '../../static/images/commonly/people.png';
// import result from '../../static/images/commonly/result.png';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [
      {
        url: '../../static/images/commonly/people.png',
        text: '人员登记'
      },{
        url: '../../static/images/commonly/code.png',
        text: '扫码登记'
      },{
        url: '../../static/images/commonly/result.png',
        text: '当日汇总'
      }
    ]
  },
  handleClick(event) {
    const { url, text } = event.currentTarget.dataset.item
    console.log(url, text)
    if (text === '扫码登记') {
      wx.scanCode({
        success(res) {
          console.log(res)
          if (res.result) {
            wx.showToast({
              title: '扫码成功',
            })
          }
        }
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