/**
 * Created by win7 on 2017/9/15.
 */
import fetch from './fetch'

export function homePage () {
  return fetch({
    url: '/home/show',
    method: 'get'
  })
}

export function water () {
  return fetch({
    url: '/todayCharge/waterRecord',
    method: 'get'
  })
}

export function finderUser (agentId) {
  return fetch({
    url: '/recommandDelegate/findUser',
    method: 'get',
    params: {
      'userId': agentId
    }
  })
}

export function bindDelegate (agentId) {
  return fetch({
    url: '/recommandDelegate/bindDelegate',
    method: 'get',
    params: {
      'userId': agentId
    }
  })
}

export function todayCharge (start, end) {
  return fetch({
    url: 'todayCharge/dhomeCharge',
    method: 'get',
    params: {'start': start, 'end': end}
  })
}

export function todayCharge1 () {
  return fetch({
    url: 'todayCharge/homeCharge',
    method: 'get'
  })
}




