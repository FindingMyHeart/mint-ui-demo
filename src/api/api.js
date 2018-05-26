/**
 * Created by Artiely on 2017/7/20.
 */
import fetch from './fetch'
import axios from 'axios'
import Vue from 'vue'

const instance = axios.create({
  baseURL: Vue.prototype.baseUrl,
  timeout: 10000,
  withCredentials: true,//跨域
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }//跨域
});
/**
 * 登录
 * @param {String} username
 * @param {String} password
 */
const LOGIN = params => {
  return fetch({
    url: '/api/sys/login',
    method: 'post',
    data: params
  })
}





export function getAgentInfo() {
  return fetch({
    url: '/agent/getAgentInfo',
    method: 'get',
    params: {
    }
  })
}
export function jsapiparam(url) {
  return fetch({
    url: '/wechat/jsapiparam',
    method: 'get',
    params: {
      url
    }
  })
}

export function auth() {
  return fetch({
    // url: '/wechat/authorize_base?returnUrl=base',
    url: '/wechat/authorize?returnUrl=base',
    method: 'get',
    params: {

    }
  })
}

export function chargeReq(chargeType,money) {
  return fetch({
    // url: '/wechat/authorize_base?returnUrl=base',
    url: '/wechat/pay/preOrder',
    method: 'get',
    params: {
      chargeType,
      money
    }
  })
}

export function getUserInfo() {
  return fetch({
    // url: '/wechat/authorize_base?returnUrl=base',
    url: '/wechat/getUserInfo',
    method: 'get',
    params: {

    }
  })
}
const apiList = {
  LOGIN,
}

export default apiList
