!function n(e,r,t){function i(u,c){if(!r[u]){if(!e[u]){var a="function"==typeof require&&require;if(!c&&a)return a(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var f=r[u]={exports:{}};e[u][0].call(f.exports,function(n){var r=e[u][1][n];return i(r||n)},f,f.exports,n,e,r,t)}return r[u].exports}for(var o="function"==typeof require&&require,u=0;u<t.length;u++)i(t[u]);return i}({1:[function(n,e,r){$(document).ready(function(){$("#contentUl li").each(function(n){var e=$(this);e.click(function(){e.addClass("tableLi").siblings().removeClass("tableLi"),$("div .contentDiv").eq(n).addClass("contentOne").siblings().removeClass("contentOne")})})})},{}]},{},[1]);