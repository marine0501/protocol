
// design  也需要用到的变量
var liquidAll = new Array(); // 用来存放输入且点击save的液体；
var colorArr = ["red", "blue", "green", "orange", "lightskyblue", "pink", "yellow", "purple", "red", "blue", "green", "orange", "lightskyblue", "pink", "yellow", "purple", "red", "blue", "green", "orange", "lightskyblue", "pink", "yellow", "purple"];
// 001 点击new liquids，用户创建新的液体
var nlbtn = document.getElementById("liquid_btn");
var lpage = document.getElementById("information_input");
var lini = document.getElementById("lp_content");


nlbtn.addEventListener("click", function () {
   
    //加入创建新液体的页面
    lpage.style.visibility = "visible";
   
    //隐藏首页
    lini.style.display = "none";
  
})



// 002 点击save，
    // 001 数据层面：存储在表单中存放的信息,包括液体名称和液体描述
    // 002 样式层面：在中间栏，生成新的元素，表明创建的液体名称


var liquidop = document.getElementById("liquidWrite"); // 输入液体名称
var lsavebox = document.getElementById("l_save"); // save 按钮

lsavebox.addEventListener("click", function () {
    // 001 数据层面：存储在表单中存放的信息,包括液体名称和液体描述
    liquidop.value = document.getElementById("liquidWrite").value;
    liquidAll.push(liquidop.value);
    localStorage.setItem("a",JSON.stringify(liquidAll)); //写入缓存
   

    // 002 样式层面：在中间栏，生成新的元素，表明创建的液体名称

    var addbig = document.getElementById("addbox");  //存放生成元素的div
    let newliquid = '';
    for (i = 0; i < liquidAll.length; i++) {
        newliquid +=
            '<div id="new_liquid">' +
               ' <div style="text-align:center">'+
                    '<input id="colorOfLiquid" style="background-color:'+colorArr[i]+'"></input>' +
               ' </div>'+
            
                '<div id="nameOfliquid">'+liquidAll[i]+'</div>' +
            '</div>'

    }
    addbig.innerHTML=newliquid;
    
})


// 003 点击液体，删除




