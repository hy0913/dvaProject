const Ajax = require('robe-ajax')
import { message,Modal } from 'antd';
import * as cookies from '../utils/cookie';

export function request (url, options) {
  if (options.cross) {
    return Ajax.getJSON('http://query.yahooapis.com/v1/public/yql', {
      q: "select * from json where url='" + url + '?' + Ajax.param(options.data) + "'",
      format: 'json'
    })
  } else {
    return Ajax.ajax({
      url: url,
      method: options.method || 'get',
      data: options.data || {},
      processData: options.method === 'get',
      dataType: 'JSON'
    }).done((data) => {
      if(cookies.getCookie('loginSuccess')&&!data.success&&data.code=="401"){
        if(!window.tipModal){
          window.tipModal = Modal.error({
            title: '账号下线提醒',
            content: '您的账号登录时间过长或在别处登录，请重新登录',
            onOk:logout
          });
        }
      }
      return data;
    }).fail(function (data) {
        message.error('网络出错了');
        if(data.statusText == 'Unauthorized'){
            window.ajaxDispatch({type: 'app/logout'
            })
        }
    })
  }
}

export function requestPost (url, options) {
    if (options.cross) {
        return Ajax.getJSON('http://query.yahooapis.com/v1/public/yql', {
            q: "select * from json where url='" + url + '?' + Ajax.param(options.data) + "'",
            format: 'json'
        })
    } else {
        return Ajax.ajax({
            url: url,
            method: options.method || 'get',
            data: JSON.stringify(options.data) || {},
            processData: options.method === 'get',
            dataType: 'JSON',
            contentType: "application/json"
        }).done((data) => {
            if(cookies.getCookie('loginSuccess')&&!data.success&&data.code=="401"){
              if(!window.tipModal){
                window.tipModal = Modal.error({
                  title: '账号下线提醒',
                  content: '您的账号登录时间过长或在别处登录，请重新登录',
                  onOk:logout
                });
              }
            }
            return data
        }).fail(function (data) {
            message.error('网络出错了');
            if(data.statusText == 'Unauthorized'){
                window.ajaxDispatch({type: 'app/logout'
                })
            }
        })
    }
}

export function logout(){
  window.tipModal.destroy();
  window.ajaxDispatch({type:'app/logout'});
}
