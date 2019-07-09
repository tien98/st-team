import React, { Component } from 'react'
import Auth from './auth'

export default class fetchData{
    constructor(){
        this.Auth = new Auth();
    }
    getWithoutAuth=(url)=>{
       return fetch(url, {
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json',
            },
           method: 'GET',
          })
            .then(res => res.json())
    }
    getWithAuth=(url)=>{
        return fetch(url, {
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json',
              'Authorization': `Bearer ${this.Auth.getToken()}`
            },
           method: 'GET',
          })
          .then(res=>res.json())
    }
    postWithAuth=(url,data)=>{
        return fetch(url, {
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json',
              'Authorization': `Bearer ${this.Auth.getToken()}`
            },
           method: 'POST',
           body: JSON.stringify(
           data
        )
          })
          .then(res=>res.json())
          
    }
    postWithoutAuth=(url,data)=>{
        return fetch(url, {
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json',
              'Access-Control-Allow-Credentials': 'true'
            },
           method: 'POST',
           body: JSON.stringify(
           data
        )
          })
          .then(res=>res.json())
          
    }
    deleteWithAuth=(url)=>{
      fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.Auth.getToken()}`
        },
       method: 'DELETE',
      })
      .then(res => res.json())
    }
   
}

