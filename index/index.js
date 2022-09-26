// 点击save时，时间为此时的时间 

var btnbox = document.getElementById("openButton2");
var timebox = document.getElementById("timeNow");

var now = new Date();

btnbox.addEventListener("click", function () {
    getTimeFun(now);
    var tt = getTimeFun(now);
    timebox.innerText = tt;//不能直接等于函数参数，要等于变量的值
})

function getTimeFun(now) {
    let year = now.getFullYear();
    let month = ((now.getMonth() + 1) < 10 ? "0" : "") + (now.getMonth() + 1);
    let day = (now.getDate() < 10 ? "0" : "") + now.getDate();
    time = year + '-' + month + "-" + day;
    console.log(time);
    return time;
};



//需求： 1.点击create new打开页面2，隐藏页面1；点击close，隐藏页面2，打开页面1

// 获取事件源，点击CREATE NEW 负责打开,close 关闭
var btnO1 = document.getElementById('openButton1');
var btnCl = document.getElementById('closeButton1');

var div2 = document.getElementById('windowBackground2');
var pageIni = document.getElementById("fileIni");

btnO1.onclick = function () {
    div2.style.display = "block";
    pageIni.style.display = "none";
    div3.style.display = "none";
}
// 点击CANCEL 触发 隐藏
btnCl.onclick = function () {
    div2.style.display = "none";
    pageIni.style.display = "block";
    div3.style.display = "none";
}

//需求：点击save,打开页面3，隐藏页面2；点击到液体，打开另外一个页面

var btnO2 = document.getElementById('openButton2');
var div3 = document.getElementById('windowBackground3');
var btnCl = document.getElementById('cBtn');

// 点击save
btnO2.addEventListener("click", function () {
    div3.style.display = "block";
    div2.style.display = "none";
    div1.style.display = "none";

})

// 跳转到liquid页面
btnCl.onclick = function () {
    div3.style.display = "none";
    div2.style.display = "none";

}

// 这里AB的text，取决于前面的选择


document.getElementById('openButton2').onclick = function () {

var myPipetteSelected=document.getElementById("nums");
var leftIndex=myPipetteSelected.selectedIndex;
var left=myPipetteSelected.options[leftIndex].text;

var mytiprack=document.getElementById("numsT");
var leftTipsIndex=mytiprack.selectedIndex;
var leftTip=mytiprack.options[leftTipsIndex].text;

document.getElementById("lp").innerText=left;
document.getElementById("tr").innerText=leftTip;
localStorage.setItem("b",JSON.stringify(left)) //写入缓存

}


