/**
 * Created by win7 on 2017/9/15.
 */
import fetch from './fetch'
import axios from 'axios'
import Vue from 'vue'

export function fetchPlayers () {
  return fetch({
    url: '/delegateRel/fetchPlayers',
    method: 'get'
  })
}

export function fetchLevel2Delegate () {
  return fetch({
    url: '/delegateRel/fetch2Delegate',
    method: 'get'
  })
}

export function fetchLevel3Delegate () {
  return fetch({
    url: '/delegateRel/fetch3Delegate',
    method: 'get'
  })
}

