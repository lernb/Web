// 标签切换功能
var secHeadTabs = document.getElementById('sec-head-tabs').children;
var ulGoods = document.getElementsByClassName('ulGoods');
for (var i = 0; i < secHeadTabs.length; i++) {
    (function (m) {
        secHeadTabs[m].addEventListener('click', function () {
            for (var j = 0; j < ulGoods.length; j++) {
                ulGoods[j].style.display = "none";
                secHeadTabs[j].className = "";
            }
            ulGoods[m].style.display = "block";
            this.className = "active";
        }, false);
    }(i));
}

// 滚动固定sec-head
var goods = document.getElementsByClassName('goods')[0];
var secHead = document.getElementsByClassName('sec-head')[0];
window.onscroll = function () {
    var scroll = document.body.scrollTop + document.documentElement.scrollTop;
    if (scroll >= 260) {
        secHead.className = "sec-head sec-headfixed clearfix";
        goods.style.marginTop = "92px";
    } else {
        secHead.className = "sec-head clearfix";
        goods.style.marginTop = "0px";
    }
}

// 右下角弹窗功能
var ad = document.getElementsByClassName('ad')[0];
var adBtn = document.getElementsByClassName('btn')[0];
var upSpeed = 0;
var show = setInterval(function () {// 弹出弹窗
    upSpeed += 10;
    if (parseInt(ad.style.height) < 278) {
        ad.style.height = upSpeed + "px"; // 改写的是行间样式
    } else if (parseInt(ad.style.height) > 278) {
        clearInterval(show);
    }
}, 20);
adBtn.addEventListener('click', function () {// 关闭弹窗
    var close = setInterval(function () {
        if (parseInt(ad.style.height) > 0) {
            ad.style.height = parseInt(ad.style.height) - 10 + "px";
        } else if (parseInt(ad.style.height) == 0) {
            clearInterval(close);
        }
    }, 20);
}, false);