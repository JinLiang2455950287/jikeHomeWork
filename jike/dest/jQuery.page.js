!function t(e,n,i){function r(s,h){if(!n[s]){if(!e[s]){var o="function"==typeof require&&require;if(!h&&o)return o(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var p=n[s]={exports:{}};e[s][0].call(p.exports,function(t){var n=e[s][1][t];return r(n||t)},p,p.exports,t,e,n,i)}return n[s].exports}for(var a="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(t,e,n){!function(t){function e(e,n,i,r){var e=this.container=e||null;if(this.container.constructor!=jQuery)throw"page插件第一个参数错误，请录入jQuery对象";if(this.fn=n||function(){},"function"!=typeof this.fn)throw"page插件第二个参数错误，请录入函数类型对象";var i=this.args=t.extend({pageCount:10,current:1,showPrev:!0,showNext:!0,showTurn:!0,showSumNum:!0,showNear:2,pageSwap:!0,align:"right"},i||{}),a=this.width=parseInt(this.container.css("width"))||parseInt(this.container.parent().css("width")),s=this.height=30;(r=this.style=t.extend({fontSize:12,width:a,height:s,pagesMargin:2,paddL:0,paddR:0,borderColor:"#428bca",currentColor:"#ed601b",disableColor:"#bfbfbf",disableBackColor:"#f2f2f2",prevNextWidth:48,pagecountWidth:48,trunWidth:110},r||{})).pageWidth||(r.pageWidth=function(){var t=r.width-(r.prevNextWidth+2+r.pagesMargin)*(Number(i.showPrev)+Number(i.showNext))-(r.pagecountWidth+r.pagesMargin)*Number(i.showSumNum)-(r.trunWidth+r.pagesMargin)*Number(i.showTurn),e=2*i.showNear+5;return parseInt(t/e)-r.pagesMargin}()),this.container.css({"pading-left":r.paddL+"px","pading-right":r.paddR+"px",content:"",display:"block",clear:"both"}),this.container.html("<div></div>"),this.obj=this.container.children(),this.obj.css({content:"",display:"block",clear:"both",float:i.align}),this.init()}e.prototype.init=function(){this.fillHtml(),this.bindEvent()},e.prototype.fillHtml=function(){var t=this.args,e=this.obj;if(!(t.current>t.pageCount||t.current<1)){e.empty(),t.showPrev&&(t.current>1?e.append('<a href="javascript:;" class="prevPage"><上一页</a>'):(e.remove(".prevPage"),e.append('<span class="disabled"><上一页</span>'))),1!=t.current?e.append('<a href="javascript:;" class="tcdNumber">1</a>'):e.append('<span class="current">1</span>'),t.current>t.showNear+2&&e.append('<span class="hiding">...</span>');var n=t.current>t.showNear+2?t.current-t.showNear:2,i=t.current+t.showNear>=t.pageCount?t.pageCount-1:t.current+t.showNear;if(t.pageSwap){var r=t.current-t.showNear-2,a=t.pageCount-1-t.current-t.showNear;r<1&&a>1?i+=Math.min(a,Math.abs(r-1)):r>1&&a<1&&(n-=Math.min(r,Math.abs(a-1)))}for(;n<=i;n++)n!=t.current?e.append('<a href="javascript:;" class="tcdNumber">'+n+"</a>"):e.append('<span class="current">'+n+"</span>");t.current+1+t.showNear<t.pageCount&&e.append('<span class="hiding">...</span>'),t.current!=t.pageCount&&1!=t.pageCount?e.append('<a href="javascript:;" class="tcdNumber">'+t.pageCount+"</a>"):t.current==t.pageCount&&1!=t.pageCount&&e.append('<span class="current">'+t.pageCount+"</span>"),t.showNext&&(t.current==t.pageCount||1==t.pageCount?(e.remove(".nextPage"),e.append('<span class="disabled">下一页></span>')):e.append('<a href="javascript:;" class="nextPage">下一页></a>')),t.showSumNum&&e.append('<span class="pagecount">共'+t.pageCount+"页</span>"),t.showTurn&&e.append('<span class="countYe">到第<input type="text" maxlength='+t.pageCount.toString().length+'>页<a href="javascript:;" class="turndown">确定</a></span>'),this.setStyle(),this.fn&&this.fn(t.current)}},e.prototype.setStyle=function(){var t=this.style,e=t.pagesMargin;this.obj.children().css({float:"left","margin-left":e+"px","text-align":"center"}),this.obj.find("a").css({"text-decoration":"none",border:"1px solid "+t.borderColor}),this.obj.find("a.prevPage").css({width:t.prevNextWidth,"font-size":t.fontSize+"px",height:t.height-2+"px","line-height":t.height-2+"px"}),this.obj.find("a.nextPage").css({width:t.prevNextWidth,"font-size":t.fontSize+"px",height:t.height-2+"px","line-height":t.height-2+"px"}),this.obj.find("a.turndown").css({"margin-left":"5px",display:"inline-block",width:"24px",height:t.height-2+"px","line-height":t.height-2+"px"}),this.obj.find("span.current").css({display:"inline-block",height:t.height+"px","line-height":t.height+"px",color:t.currentColor,"vertical-align":"middle",width:t.pageWidth+"px"}),this.obj.find("span.disabled").css({display:"inline-block",height:t.height-2+"px","line-height":t.height-2+"px",color:t.disableColor,background:t.disableBackColor,border:"1px solid "+t.borderColor,"vertical-align":"middle","font-size":t.fontSize+"px",width:t.prevNextWidth+"px"}),this.obj.find("span.pagecount").css({width:t.pagecountWidth+"px","font-size":t.fontSize+"px",color:"#999",height:t.height+"px","line-height":t.height+"px"}),this.obj.find("span.countYe").css({color:"#4C4C4C","font-size":t.fontSize+"px",width:t.trunWidth+"px"}),this.obj.find("input").css({outline:"none",border:"1px solid #ddd",height:t.height-2+"px","line-height":t.height-2+"px",width:"30px",margin:"0 5px"}),this.obj.find(".tcdNumber").css({width:t.pageWidth-2+"px",height:t.height-2+"px","line-height":t.height-2+"px"}),this.obj.find(".hiding").css({width:t.pageWidth+"px",height:t.height+"px"})},e.prototype.bindEvent=function(){var e=this.obj,n=this;e.off("click"),e.on("click","a.tcdNumber",function(){n.args.current=parseInt(t(this).text()),n.fillHtml()}),e.on("click","a.prevPage",function(){n.args.current=parseInt(e.children("span.current").text())-1,n.fillHtml()}),e.on("click","a.nextPage",function(){n.args.current=parseInt(e.children("span.current").text())+1,n.fillHtml()}),e.on("click","a.turndown",function(){(n.args.current=Number(e.children("span.countYe").children("input").val()))>n.args.pageCount?alert("页码输入有误，请重新输入！"):n.fillHtml()})},t.fn.createPage=function(t,n,i){return new e(this,t,n,i),this}}(jQuery)},{}]},{},[1]);