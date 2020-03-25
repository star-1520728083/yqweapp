//index.js
const app = getApp()
const mPattern = /^1[34578]\d{9}$/;
Page({
  data: {
    phone: '13957028393',
    errphone: '',
    sms: '123456',
    errsms: ''
  },
  getCode() {
    if (this.data.phone === '') {
      this.setData({
        errphone: '请输入手机号'
      })
    } else if (!mPattern.test(this.data.phone)) {
      this.setData({
        errphone: '手机号格式不正确'
      })
    } else {
      this.setData({
        errphone: ''
      })
      wx.showToast({
        title: '验证码发送成功',
        icon: 'success'
      })
    }
  },
  onChangePhone(value) {
    this.setData({
      phone: value.detail
    })
    if (value.detail === '') {
      this.setData({
        errphone: '手机号不能为空'
      })
    } else {
      this.setData({
        errphone: ''
      })
    }
  },
  onChangeNumber(value) {
    this.setData({
      sms: value.detail
    })
    if (value.detail === '') {
      this.setData({
        errsms: '验证码不能为空'
      })
    }
  },
  getLogin() {
    if (this.data.sms === '' ) {
      this.setData({
        errsms: '请输入验证码'
      })
    } else if (this.data.sms != 123456) {
      this.setData({
        errsms: '验证码不正确'
      })
    } else {
      this.setData({
        errsms: ''
      })
    }
    if (this.data.phone === '') {
      this.setData({
        errphone: '请输入手机号'
      })
    } else {
      this.setData({
        errphone: ''
      })
    }

    if (
      this.data.phone !== '' &&
      this.data.sms !== '' &&
      this.data.errphone === '' &&
      this.data.errsms === ''
    ) {
      wx.navigateTo({
        url: '../home/home',
        success(res){
          console.log(res)
        }
      })
    } 
  }
})
