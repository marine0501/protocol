var multiSteps = new Array(); //存放设定的所有操作，不断存放transfer、mix、pause

    transfer = [
        pipette,
        transPerVolume,
        sourcePlate,  //选择的是哪个板位，则放入哪个板位的数组
        sourceWell,
        destinationPlate,
        destinationWell,
        wayForTransfer]; //代表transfer操作的信息

    var pipette = "af95";
    var transPerVolume = 0;
    var sourcePlate = 0;
    var sourceWell = new Array();
    var destinationPlate = 0;
    var destinationWell = new Array();
    var wayForTransfer = "transfer";

  
    mix = [
        pipetteForMix,
        mixvolume,
        repetions,
        labware,
        wellForMix,
        wayFOrMix]; //代表transfer操作的信息

   
    var pipetteForMix = "af95";
    var mixvolume = 0;
    var repetions = 0;
    var labware = 0;
    var wayForTransfer = "transfer";
    var wellForMix = new Array();
    var wayFOrMix = 0;

    pause=[
        control,
        howToPause,
        descriptionPause
    ]
var control="pause";
var howToPause='';
var descriptionPause='';




 




//板位
//001 鼠标悬停，出现灰色遮罩。变量代表板位所在div

var one = document.getElementById("wkb_box_one");
var two = document.getElementById("wkb_box_two");
var three = document.getElementById("wkb_box_three");
var four = document.getElementById("wkb_box_four");
var five = document.getElementById("wkb_box_five");
var six = document.getElementById("wkb_box_six");


// 1
one.onmouseover = function () {
    one.style.backgroundColor = "grey";
    // one.style.opacity = "0.5";   细节，之后再调整
    one.innerText = "+ Add Liquids";
    one.style.color = "white";
    one.style.fontSize = "20px";
    one.style.textAlign = "center";
    one.style.lineHeight = "200px";

    // 导入移液枪的信息

const leftPipette=JSON.parse(localStorage.getItem("b"));
console.log(leftPipette);
let pipeop='';
var trans=document.getElementById("selectedPipette");
var mixpipette=document.getElementById("pipe_mix");
 pipeop +='<option value="'+leftPipette+'">'+leftPipette+'</option>'
 trans.innerHTML=pipeop;
 mixpipette.innerHTML=pipeop;
    
}
one.onmouseout = function () {
    one.style.backgroundColor = "white";
}

// 2
two.onmouseover = function () {
    two.style.backgroundColor = "grey";
    two.innerText = "+ Add Liquids";
    two.style.color = "white";
    two.style.fontSize = "20px";
    two.style.textAlign = "center";
    two.style.lineHeight = "200px";
}
two.onmouseout = function () {
    two.style.backgroundColor = "white";
}
// 3

three.onmouseover = function () {
    three.style.backgroundColor = "grey";
    three.innerText = "+ Add Liquids";
    three.style.color = "white";
    three.style.fontSize = "20px";
    three.style.textAlign = "center";
    three.style.lineHeight = "200px";

}
three.onmouseout = function () {
    three.style.backgroundColor = "white";
}
// 4

four.onmouseover = function () {
    four.style.backgroundColor = "grey";
    four.innerText = "+ Add Liquids";
    four.style.color = "white";
    four.style.fontSize = "20px";
    four.style.textAlign = "center";
    four.style.lineHeight = "200px";
}
four.onmouseout = function () {
    four.style.backgroundColor = "white";
}
// 5
five.onmouseover = function () {
    five.style.backgroundColor = "grey";
    five.innerText = "+ Add Liquids";
    five.style.color = "white";
    five.style.fontSize = "20px";
    five.style.textAlign = "center";
    five.style.lineHeight = "200px";
}
five.onmouseout = function () {
    five.style.backgroundColor = "white";
}
// 6
six.onmouseover = function () {
    six.style.backgroundColor = "grey";
    six.innerText = "+ Add Liquids";
    six.style.color = "white";
    six.style.fontSize = "20px";
    six.style.textAlign = "center";
    six.style.lineHeight = "200px";
}
six.onmouseout = function () {
    six.style.backgroundColor = "white";
}


// 002 点击灰色遮罩，菜单栏block;
var menu = document.getElementById("wkbMenu");
var plate = 'plate';

one.addEventListener("click", function () {
    menu.style.display = "block";
    plate = 0; //代表1号板位被选中，所有的设置存储在1号板位的数组中
    
    
})


two.addEventListener("click", function () {
    menu.style.display = "block";
    plate = 1; //代表2号板位被选中，所有的设置存储在2号板位的数组中
})


three.addEventListener("click", function () {
    menu.style.display = "block";
    plate = 2; //代表3号板位被选中，所有的设置存储在3号板位的数组中
})


four.addEventListener("click", function () {
    menu.style.display = "block";
    plate = 3; //代表4号板位被选中，所有的设置存储在4号板位的数组中
})


five.addEventListener("click", function () {
    menu.style.display = "block";
    plate = 4; //代表5号板位被选中，所有的设置存储在5号板位的数组中
})


six.addEventListener("click", function () {
    menu.style.display = "block";
    plate = 5; //代表6号板位被选中，所有的设置存储在6号板位的数组中
})


// 003.1 菜单栏下拉选项根据鼠标悬停none或者block；

//op1
var oponeBox = document.getElementById("op_one");
var opwkbone = document.getElementById("op_wkb_one");
oponeBox.onmouseover = function () {
    opwkbone.style.display = "block";
}
oponeBox.onmouseout = function () {
    opwkbone.style.display = "none";
}

//op2
var optwoBox = document.getElementById("op_two");
var opwkbtwo = document.getElementById("op_wkb_two");
optwoBox.onmouseover = function () {
    opwkbtwo.style.display = "block";
}
optwoBox.onmouseout = function () {
    opwkbtwo.style.display = "none";
}

//op3
var opthreeBox = document.getElementById("op_three");
var opwkbthree = document.getElementById("op_wkb_three");
opthreeBox.onmouseover = function () {
    opwkbthree.style.display = "block";
}
opthreeBox.onmouseout = function () {
    opwkbthree.style.display = "none";
}



// 003.2 点击close，菜单栏none

var closeopBtn = document.getElementById("op_close");
closeopBtn.addEventListener("click", function () {
    menu.style.display = "none";
})




// 003.3 点击任一下拉选项
// 003.3.1 选择微孔板的类型，不同的选项有不同的值，点击后给变量赋值，代表该微孔板被选中

// 点击10孔板
var tbopOne = document.getElementById("tenTube_falcon_double");
// 点击15孔
var tbopFour = document.getElementById("fftube_falcon_15");

tbopOne.addEventListener("click", function () {     //相当于微孔板选项   10孔
    num = 10; //代表微孔板上well的数量，用于后面的绘制，到底循环几次
    z = 0; //z代表的是索引序号，要索引的数组是存放微孔板绘制数据的。根据索引，确定是绘制哪个类型的微孔板。0则代表是10孔的该微孔板，放在数组中的第一位
})

tbopFour.addEventListener("click", function () {     //相当于微孔板选项  15孔
    num = 15; //代表微孔板上well的数量，用于后面的绘制，到底循环几次
    z = 1; //z代表的是索引序号，要索引的数组是存放微孔板绘制数据的。根据索引，确定是绘制哪个类型的微孔板。0则代表是10孔的该微孔板，放在数组中的第一位
})

   //代表板位的变量
   var plate = 100;   //哪个板位被点击，则给板位赋值，用来判断微孔板的设置是基于哪个plate的

// 003.3.2 菜单栏（none），生成三个新的元素，name,液体，leave empty;开始绘制微孔板

var option = Array.from(document.getElementsByTagName("ul"));//  获取微孔板选项列表，用来增加点击事件。因获取的是数组，所以需要遍历
option.forEach(ele => {
    ele.onclick = e => {
        menu.style.display = "none";
        if (plate == 0) {
            onenew();
            paintForPlate();

        }
        else if (plate == 1) {
            twonew();
            paintForPlate();

        }
        else if (plate == 2) {
            threenew();
            paintForPlate();
        }
        else if (plate == 3) {
            fournew();
            paintForPlate();

        }
        else if (plate == 4) {
            fivenew();
            paintForPlate();

        }
        else if (plate == 5) {
            sixnew();
            paintForPlate();

        }
    }

});

// 3.3.2.1 生成新的遮罩
var nicknameAll = new Array();
var addliquidsAll = new Array();
var leaveBoxAll = new Array();

var nicknameBoxOne = document.createElement("input");
var addliquidsBoxOne = document.createElement("div");
var leaveBoxOne = document.createElement("div");
// 板位1新增遮罩
function onenew() {


    one.onmouseover = false;
    one.onmouseout = false;

    one.style.backgroundColor = "black";
    one.style.color = "transparent";

    //生成三个元素，name,add,leave

    nicknameBoxOne.style.position = "absolute";
    nicknameBoxOne.style.left = "14px";
    nicknameBoxOne.style.top = "16px";
    nicknameBoxOne.style.margin = "0px";
    nicknameBoxOne.style.padding = "0px";

    nicknameBoxOne.style.width = "170px";
    nicknameBoxOne.style.height = "36px";
    nicknameBoxOne.style.borderRadius = "5px";
    nicknameBoxOne.style.backgroundColor = "white";
    nicknameBoxOne.style.placeHolder = "Add a nickname?";//不生效
    nicknameBoxOne.style.color = "black";
    one.appendChild(nicknameBoxOne);
    nicknameAll.push(nicknameBoxOne);
    nicknameAll[0] = nicknameBoxOne;


    addliquidsBoxOne.style.position = "absolute";
    addliquidsBoxOne.style.left = "14px";
    addliquidsBoxOne.style.top = "76px";
    addliquidsBoxOne.style.margin = "0px";
    addliquidsBoxOne.style.padding = "0px";

    addliquidsBoxOne.style.width = "170px";
    addliquidsBoxOne.style.height = "36px";

    addliquidsBoxOne.style.backgroundColor = "black";
    addliquidsBoxOne.innerText = "Add Liquids";
    addliquidsBoxOne.style.color = "white";
    addliquidsBoxOne.style.fontSize = "20px";
    addliquidsBoxOne.style.textAlign = "center";
    addliquidsBoxOne.style.lineHeight = "36px";
    addliquidsBoxOne.className = "addLiquids";
    addliquidsAll.push(addliquidsBoxOne);
    one.appendChild(addliquidsBoxOne);



    leaveBoxOne.style.position = "absolute";
    leaveBoxOne.style.left = "14px";
    leaveBoxOne.style.top = "124px";
    leaveBoxOne.style.margin = "0px";
    leaveBoxOne.style.padding = "0px";

    leaveBoxOne.style.width = "170px";
    leaveBoxOne.style.height = "36px";

    leaveBoxOne.style.backgroundColor = "black";
    leaveBoxOne.innerText = "Leave Empty";  //font div 分离
    leaveBoxOne.style.color = "white";
    leaveBoxOne.style.fontSize = "20px";
    leaveBoxOne.style.textAlign = "center";
    leaveBoxOne.style.lineHeight = "36px";
    one.appendChild(leaveBoxOne);

}

// 板位2新增遮罩
var nicknameBoxTwo = document.createElement("input");
var addliquidsBoxTwo = document.createElement("div");
var leaveBoxTwo = document.createElement("div");
function twonew() {

    two.onmouseover = false;
    two.onmouseout = false;
    two.style.backgroundColor = "black";
    two.style.color = "transparent";

    //生成三个元素，name,add,leave

    nicknameBoxTwo.style.position = "absolute";
    nicknameBoxTwo.style.left = "14px";
    nicknameBoxTwo.style.top = "16px";
    nicknameBoxTwo.style.margin = "0px";
    nicknameBoxTwo.style.padding = "0px";

    nicknameBoxTwo.style.width = "170px";
    nicknameBoxTwo.style.height = "36px";
    nicknameBoxTwo.style.borderRadius = "5px";
    nicknameBoxTwo.style.backgroundColor = "white";
    nicknameBoxTwo.style.placeHolder = "Add a nickname?";//不生效
    nicknameBoxTwo.style.color = "black";
    two.appendChild(nicknameBoxTwo);
    nicknameAll.push(nicknameBoxTwo);
    nicknameAll[1] = nicknameBoxTwo;
    console.log(nicknameAll);

    addliquidsBoxTwo.style.position = "absolute";
    addliquidsBoxTwo.style.left = "14px";
    addliquidsBoxTwo.style.top = "76px";
    addliquidsBoxTwo.style.margin = "0px";
    addliquidsBoxTwo.style.padding = "0px";

    addliquidsBoxTwo.style.width = "170px";
    addliquidsBoxTwo.style.height = "36px";

    addliquidsBoxTwo.style.backgroundColor = "black";
    addliquidsBoxTwo.innerText = "Add Liquids";
    addliquidsBoxTwo.style.color = "white";
    addliquidsBoxTwo.style.fontSize = "20px";
    addliquidsBoxTwo.style.textAlign = "center";
    addliquidsBoxTwo.style.lineHeight = "36px";
    addliquidsBoxTwo.className = "addLiquids";
    addliquidsAll.push(addliquidsBoxTwo);
    two.appendChild(addliquidsBoxTwo);


    leaveBoxTwo.style.position = "absolute";
    leaveBoxTwo.style.left = "14px";
    leaveBoxTwo.style.top = "124px";
    leaveBoxTwo.style.margin = "0px";
    leaveBoxTwo.style.padding = "0px";

    leaveBoxTwo.style.width = "170px";
    leaveBoxTwo.style.height = "36px";

    leaveBoxTwo.style.backgroundColor = "black";
    leaveBoxTwo.innerText = "Leave Empty";  //font div 分离
    leaveBoxTwo.style.color = "white";
    leaveBoxTwo.style.fontSize = "20px";
    leaveBoxTwo.style.textAlign = "center";
    leaveBoxTwo.style.lineHeight = "36px";
    two.appendChild(leaveBoxTwo);

}

// 板位3新增遮罩
var nicknameBoxThree = document.createElement("input");
var addliquidsBoxThree = document.createElement("div");
var leaveBoxThree = document.createElement("div");
function threenew() {

    three.onmouseover = false;
    three.onmouseout = false;
    three.style.backgroundColor = "black";
    three.style.color = "transparent";

    //生成三个元素，name,add,leave

    nicknameBoxThree.style.position = "absolute";
    nicknameBoxThree.style.left = "14px";
    nicknameBoxThree.style.top = "16px";
    nicknameBoxThree.style.margin = "0px";
    nicknameBoxThree.style.padding = "0px";

    nicknameBoxThree.style.width = "170px";
    nicknameBoxThree.style.height = "36px";
    nicknameBoxThree.style.borderRadius = "5px";
    nicknameBoxThree.style.backgroundColor = "white";
    nicknameBoxThree.style.placeHolder = "Add a nickname?";//不生效
    nicknameBoxThree.style.color = "black";
    three.appendChild(nicknameBoxThree);
    nicknameAll.push(nicknameBoxThree);

    addliquidsBoxThree.style.position = "absolute";
    addliquidsBoxThree.style.left = "14px";
    addliquidsBoxThree.style.top = "76px";
    addliquidsBoxThree.style.margin = "0px";
    addliquidsBoxThree.style.padding = "0px";

    addliquidsBoxThree.style.width = "170px";
    addliquidsBoxThree.style.height = "36px";

    addliquidsBoxThree.style.backgroundColor = "black";
    addliquidsBoxThree.innerText = "Add Liquids";
    addliquidsBoxThree.style.color = "white";
    addliquidsBoxThree.style.fontSize = "20px";
    addliquidsBoxThree.style.textAlign = "center";
    addliquidsBoxThree.style.lineHeight = "36px";
    addliquidsBoxThree.className = "addLiquids";
    addliquidsAll.push(addliquidsBoxThree);
    three.appendChild(addliquidsBoxThree);


    leaveBoxThree.style.position = "absolute";
    leaveBoxThree.style.left = "14px";
    leaveBoxThree.style.top = "124px";
    leaveBoxThree.style.margin = "0px";
    leaveBoxThree.style.padding = "0px";

    leaveBoxThree.style.width = "170px";
    leaveBoxThree.style.height = "36px";

    leaveBoxThree.style.backgroundColor = "black";
    leaveBoxThree.innerText = "Leave Empty";  //font div 分离
    leaveBoxThree.style.color = "white";
    leaveBoxThree.style.fontSize = "20px";
    leaveBoxThree.style.textAlign = "center";
    leaveBoxThree.style.lineHeight = "36px";
    three.appendChild(leaveBoxThree);

}

// 板位4新增遮罩
var nicknameBoxFour = document.createElement("input");
var addliquidsBoxFour = document.createElement("div");
var leaveBoxFour = document.createElement("div");
function fournew() {

    four.onmouseover = false;
    four.onmouseout = false;
    four.style.backgroundColor = "black";
    four.style.color = "transparent";

    //生成三个元素，name,add,leave

    nicknameBoxFour.style.position = "absolute";
    nicknameBoxFour.style.left = "14px";
    nicknameBoxFour.style.top = "16px";
    nicknameBoxFour.style.margin = "0px";
    nicknameBoxFour.style.padding = "0px";

    nicknameBoxFour.style.width = "170px";
    nicknameBoxFour.style.height = "36px";
    nicknameBoxFour.style.borderRadius = "5px";
    nicknameBoxFour.style.backgroundColor = "white";
    nicknameBoxFour.style.placeHolder = "Add a nickname?";//不生效
    nicknameBoxFour.style.color = "black";
    four.appendChild(nicknameBoxFour);
    nicknameAll.push(nicknameBoxFour);

    addliquidsBoxFour.style.position = "absolute";
    addliquidsBoxFour.style.left = "14px";
    addliquidsBoxFour.style.top = "76px";
    addliquidsBoxFour.style.margin = "0px";
    addliquidsBoxFour.style.padding = "0px";

    addliquidsBoxFour.style.width = "170px";
    addliquidsBoxFour.style.height = "36px";

    addliquidsBoxFour.style.backgroundColor = "black";
    addliquidsBoxFour.innerText = "Add Liquids";
    addliquidsBoxFour.style.color = "white";
    addliquidsBoxFour.style.fontSize = "20px";
    addliquidsBoxFour.style.textAlign = "center";
    addliquidsBoxFour.style.lineHeight = "36px";
    addliquidsBoxFour.className = "addLiquids";
    addliquidsAll.push(addliquidsBoxFour);
    four.appendChild(addliquidsBoxFour);


    leaveBoxFour.style.position = "absolute";
    leaveBoxFour.style.left = "14px";
    leaveBoxFour.style.top = "124px";
    leaveBoxFour.style.margin = "0px";
    leaveBoxFour.style.padding = "0px";

    leaveBoxFour.style.width = "170px";
    leaveBoxFour.style.height = "36px";

    leaveBoxFour.style.backgroundColor = "black";
    leaveBoxFour.innerText = "Leave Empty";  //font div 分离
    leaveBoxFour.style.color = "white";
    leaveBoxFour.style.fontSize = "20px";
    leaveBoxFour.style.textAlign = "center";
    leaveBoxFour.style.lineHeight = "36px";
    four.appendChild(leaveBoxFour);

}

// 板位5新增遮罩
var nicknameBoxFive = document.createElement("input");
var addliquidsBoxFive = document.createElement("div");
var leaveBoxFive = document.createElement("div");
function fivenew() {

    five.onmouseover = false;
    five.onmouseout = false;
    five.style.backgroundColor = "black";
    five.style.color = "transparent";

    //生成三个元素，name,add,leave

    nicknameBoxFive.style.position = "absolute";
    nicknameBoxFive.style.left = "14px";
    nicknameBoxFive.style.top = "16px";
    nicknameBoxFive.style.margin = "0px";
    nicknameBoxFive.style.padding = "0px";

    nicknameBoxFive.style.width = "170px";
    nicknameBoxFive.style.height = "36px";
    nicknameBoxFive.style.borderRadius = "5px";
    nicknameBoxFive.style.backgroundColor = "white";
    nicknameBoxFive.style.placeHolder = "Add a nickname?";//不生效
    nicknameBoxFive.style.color = "black";
    five.appendChild(nicknameBoxFive);
    nicknameAll.push(nicknameBoxFive);

    addliquidsBoxFive.style.position = "absolute";
    addliquidsBoxFive.style.left = "14px";
    addliquidsBoxFive.style.top = "76px";
    addliquidsBoxFive.style.margin = "0px";
    addliquidsBoxFive.style.padding = "0px";

    addliquidsBoxFive.style.width = "170px";
    addliquidsBoxFive.style.height = "36px";

    addliquidsBoxFive.style.backgroundColor = "black";
    addliquidsBoxFive.innerText = "Add Liquids";
    addliquidsBoxFive.style.color = "white";
    addliquidsBoxFive.style.fontSize = "20px";
    addliquidsBoxFive.style.textAlign = "center";
    addliquidsBoxFive.style.lineHeight = "36px";
    addliquidsBoxFive.className = "addLiquids";
    addliquidsAll.push(addliquidsBoxFive);
    five.appendChild(addliquidsBoxFive);


    leaveBoxFive.style.position = "absolute";
    leaveBoxFive.style.left = "14px";
    leaveBoxFive.style.top = "124px";
    leaveBoxFive.style.margin = "0px";
    leaveBoxFive.style.padding = "0px";

    leaveBoxFive.style.width = "170px";
    leaveBoxFive.style.height = "36px";

    leaveBoxFive.style.backgroundColor = "black";
    leaveBoxFive.innerText = "Leave Empty";  //font div 分离
    leaveBoxFive.style.color = "white";
    leaveBoxFive.style.fontSize = "20px";
    leaveBoxFive.style.textAlign = "center";
    leaveBoxFive.style.lineHeight = "36px";
    five.appendChild(leaveBoxFive);

}

// 板位6新增遮罩
var nicknameBoxSix = document.createElement("input");
var addliquidsBoxSix = document.createElement("div");
var leaveBoxSix = document.createElement("div");
function sixnew() {

    six.onmouseover = false;
    six.onmouseout = false;
    six.style.backgroundColor = "black";
    six.style.color = "transparent";

    //生成三个元素，name,add,leave

    nicknameBoxSix.style.position = "absolute";
    nicknameBoxSix.style.left = "14px";
    nicknameBoxSix.style.top = "16px";
    nicknameBoxSix.style.margin = "0px";
    nicknameBoxSix.style.padding = "0px";

    nicknameBoxSix.style.width = "170px";
    nicknameBoxSix.style.height = "36px";
    nicknameBoxSix.style.borderRadius = "5px";
    nicknameBoxSix.style.backgroundColor = "white";
    nicknameBoxSix.style.placeHolder = "Add a nickname?";//不生效
    nicknameBoxSix.style.color = "black";
    six.appendChild(nicknameBoxSix);
    nicknameAll.push(nicknameBoxSix);

    addliquidsBoxSix.style.position = "absolute";
    addliquidsBoxSix.style.left = "14px";
    addliquidsBoxSix.style.top = "76px";
    addliquidsBoxSix.style.margin = "0px";
    addliquidsBoxSix.style.padding = "0px";

    addliquidsBoxSix.style.width = "170px";
    addliquidsBoxSix.style.height = "36px";

    addliquidsBoxSix.style.backgroundColor = "black";
    addliquidsBoxSix.innerText = "Add Liquids";
    addliquidsBoxSix.style.color = "white";
    addliquidsBoxSix.style.fontSize = "20px";
    addliquidsBoxSix.style.textAlign = "center";
    addliquidsBoxSix.style.lineHeight = "36px";
    addliquidsBoxSix.className = "addLiquids";
    addliquidsAll.push(addliquidsBoxSix);
    six.appendChild(addliquidsBoxSix);


    leaveBoxSix.style.position = "absolute";
    leaveBoxSix.style.left = "14px";
    leaveBoxSix.style.top = "124px";
    leaveBoxSix.style.margin = "0px";
    leaveBoxSix.style.padding = "0px";

    leaveBoxSix.style.width = "170px";
    leaveBoxSix.style.height = "36px";

    leaveBoxSix.style.backgroundColor = "black";
    leaveBoxSix.innerText = "Leave Empty";  //font div 分离
    leaveBoxSix.style.color = "white";
    leaveBoxSix.style.fontSize = "20px";
    leaveBoxSix.style.textAlign = "center";
    leaveBoxSix.style.lineHeight = "36px";
    six.appendChild(leaveBoxSix);

}


// 3.3.2.2 绘制微孔板 

// var box_bottom = document.getElementById("wkb_design_bottom");
// var boxForMenu = document.getElementById("wkb_design");


var wkbsetbox = document.getElementById("wkbSet");


var designBottomIni = document.getElementById("bottomForIniPage");
var designBottomPlate = document.getElementById("bottomForSetplate");
var designBottomBox = document.getElementById("pageForSetPlate");

var detitlebox = document.getElementById("wkbNameset");
var detitle = document.getElementById("wkb_design_title");
// 绘制微孔板
function paintForPlate() {
    addliquidsAll.forEach(ele => {
        ele.onclick = e => {
            //001 移除初始页面
            designBottomIni.parentNode.removeChild(designBottomIni);
            //002 显示微孔板页面
            designBottomPlate.style.display = "block";
            //003 显示deck title
            detitlebox.style.display = "block";
            //004 隐藏initial title
            detitle.style.display = "none";
            //005 点击即生成step中source的选项
            choosePlate();
           
            //006 点击即生成step中destination的选项
            destinationPlateForTransfer();
            choosePlateForMix();
            //007 绘制微孔板
            paint(); 
            //008 显示放置溶液的操作面板
            showwkbSet();
            //009 判断well是否被选中
            cson();
            // //010 被点击的well边框亮起,代表被选中
            shine();
            // //011 放置溶液的well,在点击save后颜色发生变化
            colorChange();
            // //012 点击cancel,取消设置,none微孔板设置面板
            cancelSet();


        }

    })
}




// 3.3.2.2.007 绘制微孔板   
var boxForFirstPostion = document.getElementById("divForAppendCirboxOne"); //1号板位
var boxForSecondPostion = document.getElementById("divForAppendCirboxTwo");
var boxForThirdPostion = document.getElementById("divForAppendCirboxThree");
var boxForFourthPostion = document.getElementById("divForAppendCirboxFour");
var boxForFifthPostion = document.getElementById("divForAppendCirboxFive");
var boxForSixthPostion = document.getElementById("divForAppendCirboxSix");

 // 002.002.004.002-2 微孔板类型数组，将含有不同类型微孔板坐标系数据的数组放在里面。z变量是数组的索引，选择哪个，则根据哪个坐标信息数组进行绘制
 var wkboption = new Array();
 // 002.002.004.002-2 将微孔板类型与变量联系，点击某选项，赋值变量，变量值代表微孔板类型；
 var z = 100;   //代表微孔板类型,从上到下排序，同上面的坐标信息
 var num = 0;  //代表的是cir的个数

  // 生成后的所有圆都存在在该数组中

  var everyCirbox = new Array();
  everyCirbox = [cirboxOne, cirboxTwo, cirboxThree, cirboxFour, cirboxFive, cirboxSix];
  var datacirbox = [dataone, datatwo, datathree, datafour, datafive, datasix];
  var datacirbox = new Array();
  var datacirbox = [dataone];

  var dataone = new Array();
  var datatwo = new Array();
  var datathree = new Array();
  var datafour = new Array();
  var datafive = new Array();
  var datasix = new Array();




  var settedPlateFromEveryCirbox = new Array();  //存放被设置过的微孔板数据，用于操作步骤时引用

  var cirboxOne = new Array();   //cirbox[i][6]存放液体信息 [7]存放是否被选中 [8]存放剂量
  var cirboxTwo = new Array();
  var cirboxThree = new Array();
  var cirboxFour = new Array();
  var cirboxFive = new Array();
  var cirboxSix = new Array();

  //微孔板类型
    //10孔板
    var tubeRackOne = new Array();//存放坐标信息，用来绘制圆的数组
    //第一种 10孔 半径是80，坐标起始点是60.60 纵列间距是140，横行间距是150px
    tubeRackOne[0] = ["60px", "60px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"]; //横坐标，纵坐标，半径，宽，高，边框，液体类型，是否被选中，液体剂量
    tubeRackOne[1] = ["60px", "200px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];
    tubeRackOne[2] = ["60px", "340px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];
    tubeRackOne[3] = ["210px", "60px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];
    tubeRackOne[4] = ["210px", "200px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];
    tubeRackOne[5] = ["210px", "340px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];
    //大圆 半径是130 ，起始点是320 /80 ，纵列间距是100，横列间距是180
    tubeRackOne[6] = ["360px", "80px", "130px", "130px", "130px", "2px solid black", "liquid", "SON", "volume", "YON"];
    tubeRackOne[7] = ["360px", "280px", "130px", "130px", "130px", "2px solid black", "liquid", "SON", "volume", "YON"];
    tubeRackOne[8] = ["540px", "80px", "130px", "130px", "130px", "2px solid black", "liquid", "SON", "volume", "YON"];
    tubeRackOne[9] = ["540px", "280px", "130px", "130px", "130px", "2px solid black", "liquid", "SON", "volume", "YON"];
    wkboption[0] = tubeRackOne;

    //第二种 15孔 半径是80，坐标起始点是60.60 纵列间距是140，横行间距是140px
    var tubeRackTwo = new Array();
    tubeRackTwo[0] = ["60px", "60px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"]; //横坐标，纵坐标，半径，宽，高，背景颜色,
    tubeRackTwo[1] = ["60px", "200px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];//2px solid black 只是绘制，放到绘制时给
    tubeRackTwo[2] = ["60px", "340px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];

    tubeRackTwo[3] = ["200px", "60px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];
    tubeRackTwo[4] = ["200px", "200px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];
    tubeRackTwo[5] = ["200px", "340px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];
    //大圆 半径是130 ，起始点是320 /80 ，纵列间距是100，横列间距是180
    tubeRackTwo[6] = ["340px", "60px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"]; //横坐标，纵坐标，半径，宽，高，背景颜色,
    tubeRackTwo[7] = ["340px", "200px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];//2px solid black 只是绘制，放到绘制时给
    tubeRackTwo[8] = ["340px", "340px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];

    tubeRackTwo[9] = ["480px", "60px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"]; //横坐标，纵坐标，半径，宽，高，背景颜色,
    tubeRackTwo[10] = ["480px", "200px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];//2px solid black 只是绘制，放到绘制时给
    tubeRackTwo[11] = ["480px", "340px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];

    tubeRackTwo[12] = ["620px", "60px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"]; //横坐标，纵坐标，半径，宽，高，背景颜色,
    tubeRackTwo[13] = ["620px", "200px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];//2px solid black 只是绘制，放到绘制时给
    tubeRackTwo[14] = ["620px", "340px", "80px", "80px", "80px", "2px solid black", "liquid", "SON", "volume", "YON"];
    wkboption[1] = tubeRackTwo;

    var cirboxOne_cirSelectedOrNot = new Array();   //存放圆是否被选中状态的数组
    var cirboxTwo_cirSelectedOrNot = new Array();   //存放圆是否被选中状态的数组
    var cirboxThree_cirSelectedOrNot = new Array();   //存放圆是否被选中状态的数组
    var cirboxFour_cirSelectedOrNot = new Array();   //存放圆是否被选中状态的数组
    var cirboxFive_cirSelectedOrNot = new Array();   //存放圆是否被选中状态的数组
    var cirboxSix_cirSelectedOrNot = new Array();   //存放圆是否被选中状态的数组

    var platePage = document.getElementById("bBGC");
    var whiteBoxForReOpen = document.getElementById("wBGC");

    var designBottomIni = document.getElementById("bottomForIniPage");
    var designBottomPlate = document.getElementById("bottomForSetplate");
    var designBottomBox = document.getElementById("pageForSetPlate");

    

function paint() {
    // 在第一个板位绘制
    if (plate == 0) {
        for (i = 0; i < num; i++) {
            var cirWell = document.createElement('input');
            var well = [x, y, liquid, volume, color,order];
            var x = 0;
            var y = 0;
            var liquid = "";
            var volume = 0;
            var color = 'white';
            var order='A0';  
            well[0] = wkboption[z][i][0];
            well[1] = wkboption[z][i][1];
            cirboxOne.push(cirWell);
            //生成的圆存放在该数组中，之后引用
            cirWell.id = "ef" + i;  //不占用id
            // console.log(cirWell.id.substring(1, cirWell.id.length)); //从id中截取index，作为找到元素的序号
            cirWell.style.position = "absolute";
            cirWell.style.left = wkboption[z][i][0];
            cirWell.style.top = wkboption[z][i][1];
            cirWell.style.borderRadius = wkboption[z][i][2];
            cirWell.style.width = wkboption[z][i][3];
            cirWell.style.height = wkboption[z][i][4];
            cirWell.style.border = wkboption[z][i][5];
            cirWell.value="A"+i;
            cirWell.style.textAlign="center";
            well[5]=cirWell.value;
            dataone.push(well);
            
            boxForFirstPostion.appendChild(cirWell);
            
        }
        everyCirbox[0] = dataone;

    }

    // 在第二个板位绘制
    if (plate == 1) {
        for (i = 0; i < num; i++) {
            var cirWell = document.createElement('input');
            cirboxTwo.push(cirWell);        //生成的圆存放在该数组中，之后引用
            cirWell.id = "ef" + i;  //不占用id

            var well = [x, y, liquid, volume, color,order];
            var x = 0;
            var y = 0;
            var liquid = "";
            var volume = 0;
            var color = 'white';
            var order='A0';


            well[0] = wkboption[z][i][0];
            well[1] = wkboption[z][i][1];
            
           

            // console.log(cirWell.id.substring(1, cirWell.id.length)); //从id中截取index，作为找到元素的序号
            cirWell.style.position = "absolute";
            cirWell.style.left = wkboption[z][i][0];
            cirWell.style.top = wkboption[z][i][1];
            cirWell.style.borderRadius = wkboption[z][i][2];
            cirWell.style.width = wkboption[z][i][3];
            cirWell.style.height = wkboption[z][i][4];
            cirWell.style.border = wkboption[z][i][5];
            cirWell.value="A"+i;
            cirWell.style.textAlign="center";
            well[5]=cirWell.value;
            datatwo.push(well)
            boxForSecondPostion.appendChild(cirWell);
            



        }
        everyCirbox[1] = datatwo;

    }

    // 在第三个板位绘制
    if (plate == 2) {
        for (i = 0; i < num; i++) {
            var cirWell = document.createElement('input');
            cirboxThree.push(cirWell);        //生成的圆存放在该数组中，之后引用
            cirWell.id = "ef" + i;  //不占用id

            var well = [x, y, liquid, volume, color,order];
            var x = 0;
            var y = 0;
            var liquid = "";
            var volume = 0;
            var color = 'white';
            var order='A0';
           

            well[0] = wkboption[z][i][0];
            well[1] = wkboption[z][i][1];
            
            // console.log(cirWell.id.substring(1, cirWell.id.length)); //从id中截取index，作为找到元素的序号
            cirWell.style.position = "absolute";
            cirWell.style.left = wkboption[z][i][0];
            cirWell.style.top = wkboption[z][i][1];
            cirWell.style.borderRadius = wkboption[z][i][2];
            cirWell.style.width = wkboption[z][i][3];
            cirWell.style.height = wkboption[z][i][4];
            cirWell.style.border = wkboption[z][i][5];
            cirWell.value="A"+i;
            cirWell.style.textAlign="center";
            well[5]=cirWell.value;
            datathree.push(well)
            boxForThirdPostion.appendChild(cirWell);



        }
        everyCirbox[2] = datathree;
    }

    // 在第四个板位绘制
    if (plate == 3) {
        for (i = 0; i < num; i++) {
            var cirWell = document.createElement('input');
            // designContent.appendChild(cirWell);
            cirboxFour.push(cirWell);        //生成的圆存放在该数组中，之后引用
            cirWell.id = "ef" + i;  //不占用id

            var well = [x, y, liquid, volume, color,order];
            var x = 0;
            var y = 0;
            var liquid = "";
            var volume = 0;
            var color = 'white';
            var order='A0';
           


            well[0] = wkboption[z][i][0];
            well[1] = wkboption[z][i][1];
           
            // console.log(cirWell.id.substring(1, cirWell.id.length)); //从id中截取index，作为找到元素的序号
            cirWell.style.position = "absolute";
            cirWell.style.left = wkboption[z][i][0];
            cirWell.style.top = wkboption[z][i][1];
            cirWell.style.borderRadius = wkboption[z][i][2];
            cirWell.style.width = wkboption[z][i][3];
            cirWell.style.height = wkboption[z][i][4];
            cirWell.style.border = wkboption[z][i][5];
            cirWell.value="A"+i;
            cirWell.style.textAlign="center";
            well[5]=cirWell.value;
            datafour.push(well)
            boxForFourthPostion.appendChild(cirWell);



        }
        everyCirbox[3] = datafour;
    }

    // 在第五个板位绘制
    if (plate == 4) {
        for (i = 0; i < num; i++) {
            var cirWell = document.createElement('input');
            cirboxFive.push(cirWell);        //生成的圆存放在该数组中，之后引用

            var well = [x, y, liquid, volume, color,order];
            var x = 0;
            var y = 0;
            var liquid = "";
            var volume = 0;
            var color = 'white';
            var order='A0';
            

            well[0] = wkboption[z][i][0];
            well[1] = wkboption[z][i][1];
           
            cirWell.id = "ef" + i;  //不占用id
            // console.log(cirWell.id.substring(1, cirWell.id.length)); //从id中截取index，作为找到元素的序号
            cirWell.style.position = "absolute";
            cirWell.style.left = wkboption[z][i][0];
            cirWell.style.top = wkboption[z][i][1];
            cirWell.style.borderRadius = wkboption[z][i][2];
            cirWell.style.width = wkboption[z][i][3];
            cirWell.style.height = wkboption[z][i][4];
            cirWell.style.border = wkboption[z][i][5];
            cirWell.value="A"+i;
            well[5]=cirWell.value;
            datafive.push(well)
            cirWell.style.textAlign="center";
            boxForFifthPostion.appendChild(cirWell);  //决定样式:把绘制好的圆放入对应的div中




        }
        everyCirbox[4] = datafive;

    }


    // 在第六个板位绘制
    if (plate == 5) {

        for (i = 0; i < num; i++) {
            var cirWell = document.createElement('input');
            // designContent.appendChild(cirWell);
            cirboxSix.push(cirWell);        //生成的圆存放在该数组中，之后引用
            cirWell.id = "ef" + i;  //不占用id

            var well = [x, y, liquid, volume, color,order];
            var x = 0;
            var y = 0;
            var liquid = "";
            var volume = 0;
            var color = 'white';
            var order='A0';
            

            well[0] = wkboption[z][i][0];
            well[1] = wkboption[z][i][1];
           

            // console.log(cirWell.id.substring(1, cirWell.id.length)); //从id中截取index，作为找到元素的序号

            cirWell.style.position = "absolute";
            cirWell.style.left = wkboption[z][i][0];
            cirWell.style.top = wkboption[z][i][1];
            cirWell.style.borderRadius = wkboption[z][i][2];
            cirWell.style.width = wkboption[z][i][3];
            cirWell.style.height = wkboption[z][i][4];
            cirWell.style.border = wkboption[z][i][5];
            cirWell.value="A"+i;
            cirWell.style.textAlign="center";
            well[5]=cirWell.value;
            datasix.push(well)
            boxForSixthPostion.appendChild(cirWell);



        }
        everyCirbox[5] = datasix;

    }






}

// 3.3.2.2.008 显示放置溶液的操作面板
function showwkbSet() {

    if (plate == 0) {
        for (i = 0; i < cirboxOne.length; i++) {
            cirboxOne[i].addEventListener("click", function () {
                wkbsetbox.style.display = "block";

            })



        }
    }
    //2
    if (plate == 1) {
        for (i = 0; i < cirboxTwo.length; i++) {

            cirboxTwo[i].addEventListener("click", function () {
                wkbsetbox.style.display = "block";

            })

        }
    }
    //3
    if (plate == 2) {
        for (i = 0; i < cirboxThree.length; i++) {

            cirboxThree[i].addEventListener("click", function () {
                wkbsetbox.style.display = "block";

            })

        }
    }
    //4
    if (plate == 3) {
        for (i = 0; i < cirboxFour.length; i++) {



            cirboxFour[i].addEventListener("click", function () {
                wkbsetbox.style.display = "block";

            })

        }
    }
    //5
    if (plate == 4) {
        for (i = 0; i < cirboxFive.length; i++) {
            cirboxFive[i].addEventListener("click", function () {
                wkbsetbox.style.display = "block";

            })

        }
    }
    //6
    if (plate == 5) {
        for (i = 0; i < cirboxSix.length; i++) {
            cirboxSix[i].addEventListener("click", function () {
                wkbsetbox.style.display = "block";

            })
        }
    }
}

// 3.3.2.2.009 判断well是否被选中
function cson() {

    // 1
    if (plate == 0) {
        for (i = 0; i < cirboxOne.length; i++) {          //新建数组
            cirboxOne_cirSelectedOrNot.push(0);
        }
        for (i = 0; i < cirboxOne.length; i++) {
            //添加点击事件       
            cirboxOne[i].addEventListener("click", function () {
                this.style.backgroundColor = "lightskyblue";

                //从id中截取到数字，作为index，值等于i
                var thisIndex = this.id.substring(2, this.id.length);
                cirboxOne_cirSelectedOrNot[thisIndex] = "1";//1代表被选中

            })
        }

    }

    //2
    else if (plate == 1) {
        for (i = 0; i < cirboxTwo.length; i++) {          //新建数组
            cirboxOne_cirSelectedOrNot.push(0);
        }
        for (i = 0; i < cirboxTwo.length; i++) {

            cirboxTwo[i].addEventListener("click", function () {
                this.style.backgroundColor = "lightskyblue";
                // console.log(this.id[1]);

                //从id中截取到数字，作为index，值等于i
                var thisIndex = this.id.substring(2, this.id.length);
                cirboxTwo_cirSelectedOrNot[thisIndex] = "1";//1代表被选中

            })
        }

    }

    //3
    else if (plate == 2) {
        for (i = 0; i < cirboxThree.length; i++) {          //新建数组
            cirboxThree_cirSelectedOrNot.push(0);
        }
        for (i = 0; i < cirboxThree.length; i++) {

            cirboxThree[i].addEventListener("click", function () {
                this.style.backgroundColor = "lightskyblue";


                //从id中截取到数字，作为index，值等于i
                var thisIndex = this.id.substring(2, this.id.length);
                cirboxThree_cirSelectedOrNot[thisIndex] = "1";//1代表被选中

            })
        }

    }

    //4
    else if (plate == 3) {
        for (i = 0; i < cirboxFour.length; i++) {          //新建数组
            cirboxFour_cirSelectedOrNot.push(0);
        }
        for (i = 0; i < cirboxFour.length; i++) {

            cirboxFour[i].addEventListener("click", function () {


                this.style.backgroundColor = "lightskyblue";

                //从id中截取到数字，作为index，值等于i
                var thisIndex = this.id.substring(2, this.id.length);
                cirboxFour_cirSelectedOrNot[thisIndex] = "1";//1代表被选中

            })
        }

    }

    //5
    else if (plate == 4) {
        for (i = 0; i < cirboxFive.length; i++) {          //新建数组
            cirboxFive_cirSelectedOrNot.push(0);
        }
        for (i = 0; i < cirboxFive.length; i++) {

            cirboxFive[i].addEventListener("click", function () {

                this.style.backgroundColor = "lightskyblue";
                //从id中截取到数字，作为index，值等于i
                var thisIndex = this.id.substring(2, this.id.length);
                cirboxFive_cirSelectedOrNot[thisIndex] = "1";//1代表被选中

            })
        }

    }
    //6
    else if (plate == 5) {
        for (i = 0; i < cirboxSix.length; i++) {          //新建数组
            cirboxSix_cirSelectedOrNot.push(0);
        }
        for (i = 0; i < cirboxSix.length; i++) {

            cirboxSix[i].addEventListener("click", function () {
                // console.log(this.id[1]);
                this.style.backgroundColor = "lightskyblue";
                //从id中截取到数字，作为index，值等于i
                var thisIndex = this.id.substring(2, this.id.length);
                cirboxSix_cirSelectedOrNot[thisIndex] = "1";//1代表被选中
                alert(360);

            })
        }

    }




}

// 3.3.2.2.010 被点击的well边框亮起,代表被选中
function shine() {
    // 1
    if (plate == 0) {
        for (i = 0; i < cirboxOne.length; i++) {
            cirboxOne[i].onclick = function () {
                // this.style.backgroundColor="#DFF6FC";

                this.style.border = "5px solid lightskyblue";


            }

            // cirboxOne[i].onmouseout = function () {
            //     // this.style.backgroundColor="white";
            //     this.style.border = "2px solid black";
            // }
        }
    }
    //2 
    else if (plate == 1) {
        for (i = 0; i < cirboxTwo.length; i++) {

            cirboxTwo[i].onclick = function () {
                this.style.border = "5px solid lightskyblue";

            }

            // cirboxTwo[i].onmouseout = function () {
            //     this.style.border = "2px solid black";
            // }
        }
    }
    // 3
    else if (plate == 2) {
        for (i = 0; i < cirboxThree.length; i++) {
            cirboxThree[i].onclick = function () {
                this.style.border = "5px solid lightskyblue";
            }

            // cirboxThree[i].onmouseout = function () {
            //     this.style.border = "2px solid black";
            // }
        }
    }
    //4
    else if (plate == 3) {
        for (i = 0; i < cirboxFour.length; i++) {
            cirboxFour[i].onclick = function () {
                this.style.border = "5px solid lightskyblue";
            }

            // cirboxFour[i].onmouseout = function () {
            //     this.style.border = "2px solid black";
            // }
        }
    }
    //5
    else if (plate == 4) {
        for (i = 0; i < cirboxFive.length; i++) {
            cirboxFive[i].onclick = function () {
                this.style.border = "5px solid lightskyblue";
            }

            // cirboxFive[i].onmouseout = function () {
            //     this.style.border = "2px solid black";
            // }
        }
    }
    //6
    else if (plate == 5) {
        for (i = 0; i < cirboxSix.length; i++) {
            cirboxSix[i].onclick = function () {
                this.style.border = "5px solid lightskyblue";
            }

            // cirboxSix[i].onmouseout = function () {
            //     this.style.border = "2px solid black";
            // }
        }
    }

}


// 3.3.2.2.011 放置溶液的well,在点击save后颜色发生变化
//1.颜色存在数组内 2.点击save的时候，csc数组中为1的circle改颜色（以此做判断）
var wkbsavebox = document.getElementById("wkbSave");
var plateSetCancelBtn = document.getElementById("cancel");

const liquidData =JSON.parse(localStorage.getItem("a"));
let createLiquidOption='';
var deliopbox = document.getElementById("liquid_desion");

for(i=0;i<liquidData.length;i++){
    createLiquidOption+=
   ' <option value="'+liquidData[i]+'">'+liquidData[i]+'</option>'
}
deliopbox.innerHTML=createLiquidOption;
console.log(createLiquidOption);
console.log("html");

var colorArr = ["red", "blue", "green", "orange", "lightskyblue", "pink", "yellow", "purple", "red", "blue", "green", "orange", "lightskyblue", "pink", "yellow", "purple", "red", "blue", "green", "orange", "lightskyblue", "pink", "yellow", "purple"];

function colorChange() {
    //liquid选项所在的盒子
    var mydesignselect = document.getElementById("liquid_desion");

    wkbsavebox.addEventListener("click", function () {
        
        //001 改变cir的颜色，并且将液体，剂量数据存储到数组中

        var designindex = mydesignselect.selectedIndex;
        //1
        if (plate == 0) {
            for (i = 0; i < cirboxOne.length; i++) {    //循环每一个well
                for (j = 0; j < liquidData.length; j++) {
                    if (mydesignselect.options[designindex].value == liquidData[j]) {    //选定液体
                        if (cirboxOne_cirSelectedOrNot[i] == "1") {   //被选中
                            cirboxOne[i].style.backgroundColor = colorArr[j];
                            // dataone[i][2]=liquidData[j];
                            dataone[i][2] = document.getElementById("liquid_desion").value;
                            dataone[i][3] = document.getElementById("volume_desion").value;
                            dataone[i][4] = colorArr[j];
                            console.log(dataone);
                            console.log(2);






                        }
                    }
                }
            }
        }
        //2          
        if (plate == 1) {
            for (i = 0; i < cirboxTwo.length; i++) {
                for (j = 0; j < liquidData.length; j++) {
                    if (mydesignselect.options[designindex].value == liquidData[j]) {
                        if (cirboxTwo_cirSelectedOrNot[i] == "1") {
                            cirboxTwo[i].style.backgroundColor = colorArr[j];
                            datatwo[i][2] = document.getElementById("liquid_desion").value;
                            datatwo[i][3] = document.getElementById("volume_desion").value;
                            datatwo[i][4] = colorArr[j];
                            console.log(datatwo);
                            console.log(22);
                        }
                    }
                }
            }
        }
        //3         
        if (plate == 2) {
            for (i = 0; i < cirboxThree.length; i++) {
                for (j = 0; j < liquidData.length; j++) {
                    if (mydesignselect.options[designindex].value == liquidData[j]) {
                        if (cirboxThree_cirSelectedOrNot[i] == "1") {
                            cirboxThree[i].style.backgroundColor = colorArr[j];
                            datathree[i][2] = document.getElementById("liquid_desion").value;
                            datathree[i][3] = document.getElementById("volume_desion").value;
                            datathree[i][4] = colorArr[j];
                        }
                    }
                }
            }
        }
        //4        
        if (plate == 3) {
            for (i = 0; i < cirboxFour.length; i++) {
                for (j = 0; j < liquidData.length; j++) {
                    if (mydesignselect.options[designindex].value == liquidData[j]) {
                        if (cirboxFour_cirSelectedOrNot[i] == "1") {
                            cirboxFour[i].style.backgroundColor = colorArr[j];
                            datafour[i][2] = document.getElementById("liquid_desion").value;
                            datafour[i][3] = document.getElementById("volume_desion").value;
                            datafour[i][4] = colorArr[j];
                        }
                    }
                }
            }
        }
        //5       
        if (plate == 4) {
            for (i = 0; i < cirboxFive.length; i++) {
                for (j = 0; j < liquidData.length; j++) {
                    if (mydesignselect.options[designindex].value == liquidData[j]) {
                        if (cirboxFive_cirSelectedOrNot[i] == "1") {
                            cirboxFive[i].style.backgroundColor = colorArr[j];
                            datafive[i][2] = document.getElementById("liquid_desion").value;
                            datafive[i][3] = document.getElementById("volume_desion").value;
                            datafive[i][4] = colorArr[j];
                        }
                    }
                }
            }
        }

        //6       
        if (plate == 5) {
            for (i = 0; i < cirboxSix.length; i++) {
                for (j = 0; j < liquidData.length; j++) {
                    if (mydesignselect.options[designindex].value == liquidData[j]) {
                        if (cirboxSix_cirSelectedOrNot[i] == "1") {
                            cirboxSix[i].style.backgroundColor = colorArr[j];
                            datasix[i][2] = document.getElementById("liquid_desion").value;
                            datasix[i][3] = document.getElementById("volume_desion").value;
                            datasix[i][4] = colorArr[j];
                        }
                    }
                }
            }
        }

        //清除设置好的well
        var resetbtn = document.getElementById("clear");
        resetbtn.addEventListener("click", function () {
            //1
            if (plate == 0) {
                for (i = 0; i < cirboxOne.length; i++) {

                    if (cirboxOne_cirSelectedOrNot[i] == "1") {
                        cirboxOne[i].style.backgroundColor = "white";
                        cirboxOne_cirSelectedOrNot[i] = 0;
                        dataone[i][2] = 0;
                        dataone[i][3] = 0;
                        console.log(dataone);
                        console.log(3);
                    }
                }
            }

            //2
            if (plate == 1) {
                for (i = 0; i < cirboxTwo.length; i++) {

                    if (cirboxTwo_cirSelectedOrNot[i] == "1") {
                        cirboxTwo[i].style.backgroundColor = "white";
                        cirboxTwo_cirSelectedOrNot[i] = 0;
                        datatwo[i][2] = 0;
                        datatwo[i][3] = 0;

                    }
                }
            }

            //3
            if (plate == 2) {
                for (i = 0; i < cirboxThree.length; i++) {

                    if (cirboxThree_cirSelectedOrNot[i] == "1") {

                        cirboxThree[i].style.backgroundColor = "white";
                        cirboxThree_cirSelectedOrNot[i] = 0;
                        datathree[i][2] = 0;
                        datathree[i][3] = 0;

                    }
                }
            }

            //4
            if (plate == 3) {
                for (i = 0; i < cirboxFour.length; i++) {

                    if (cirboxFour_cirSelectedOrNot[i] == "1") {

                        cirboxFour[i].style.backgroundColor = "white";
                        cirboxFour_cirSelectedOrNot[i] = 0;
                        datafour[i][2] = 0;
                        datafour[i][3] = 0;

                    }
                }
            }

            //5
            if (plate == 4) {
                for (i = 0; i < cirboxFive.length; i++) {

                    if (cirboxFive_cirSelectedOrNot[i] == "1") {

                        cirboxFive[i].style.backgroundColor = "white";
                        cirboxFive_cirSelectedOrNot[i] = 0;
                        datafive[i][2] = 0;
                        datafive[i][3] = 0;

                    }
                }
            }

            //6
            if (plate == 5) {
                for (i = 0; i < cirboxSix.length; i++) {

                    if (cirboxSix_cirSelectedOrNot[i] == "1") {

                        cirboxSix[i].style.backgroundColor = "white";
                        cirboxSix_cirSelectedOrNot[i] = 0;
                        datasix[i][2] = 0;
                        datasix[i][3] = 0;

                    }
                }
            }

            // for (i = 0; i < cirbox.length; i++) {

            //     if (cirSelectedOrNot[i] == "1") {

            //         cirbox[i].style.backgroundColor = "white";
            //         cirSelectedOrNot[i] = 0;
            //         cirbox[i][7] = 0;

            //     }
            // }
        })
        // csc已经用过啦，可以重置掉啦
        // 因为有这一步，才可以设置不同的液体
        //1
        if (plate == 0) {
            for (i = 0; i < cirboxOne.length; i++) {
                cirboxOne_cirSelectedOrNot[i] = 0;
            }
        }

        //2
        if (plate == 1) {
            for (i = 0; i < cirboxTwo.length; i++) {
                cirboxTwo_cirSelectedOrNot[i] = 0;
            }
        }
        //3
        if (plate == 2) {
            for (i = 0; i < cirboxThree.length; i++) {
                cirboxThree_cirSelectedOrNot[i] = 0;
            }
        }
        //4
        if (plate == 3) {
            for (i = 0; i < cirboxFour.length; i++) {
                cirboxFour_cirSelectedOrNot[i] = 0;
            }
        }
        //5
        if (plate == 4) {
            for (i = 0; i < cirboxFive.length; i++) {
                cirboxFive_cirSelectedOrNot[i] = 0;
            }
        }
        //6
        if (plate == 5) {
            for (i = 0; i < cirboxSix.length; i++) {
                cirboxSix_cirSelectedOrNot[i] = 0;
            }
        }

        //002 隐藏微孔板设置操作面板
        wkbsetbox.style.display = "none";

    })

}


//点击cancel,none微孔板设置面板
   //点击cancel,none微孔板设置面板
   function cancelSet() {
    plateSetCancelBtn.addEventListener("click", function () {
        wkbsetbox.style.display = "none";

    })

}


var backbtn = document.getElementById("deck");


    backbtn.addEventListener("click", function () {
        
        //001 移入板位界面
        designBottomBox.appendChild(designBottomIni);
        
        //002 隐藏微孔板设置界面
        designBottomPlate.style.display = "none";
     
        //003 隐藏菜单栏
        menu.style.display = "none";
   
        //004 隐藏deck title
        detitlebox.style.display = "none";
     
        //005 显示initial title
        detitle.style.display = "block";



        //1
        if (plate == 0) {
            boxForFirstPostion.parentNode.removeChild(boxForFirstPostion);
            // boxForFirstPostion.appendChild(designBottomOne);
            createNewElementForReopenOne();
        }
        //2
        if (plate == 1) {
            boxForSecondPostion.parentNode.removeChild(boxForSecondPostion);
            createNewElementForReopenTwo();
        }
        //3
        if (plate == 2) {
            boxForThirdPostion.parentNode.removeChild(boxForThirdPostion);
            createNewElementForReopenThree();
        }
        //4
        if (plate == 3) {
            boxForFourthPostion.parentNode.removeChild(boxForFourthPostion);
            createNewElementForReopenFour();
        }
        //5
        if (plate == 4) {
            boxForFifthPostion.parentNode.removeChild(boxForFifthPostion);
            createNewElementForReopenFive();
        }
        //6
        if (plate == 5) {
            boxForSixthPostion.parentNode.removeChild(boxForSixthPostion);
            createNewElementForReopenSix();
        }
    })
    var reRenameAll = new Array();
    var renameboxOne = document.createElement("div");
    var renameboxTwo = document.createElement("div");
    var renameboxThree = document.createElement("div");
    var renameboxFour = document.createElement("div");
    var renameboxFive = document.createElement("div");
    var renameboxSix = document.createElement("div");
//1
function createNewElementForReopenOne() {
    //遮罩上的内容改变
    // nicknameBoxOne.innerText="name&liquids";
    //给遮罩添加点击事件
    nicknameBoxOne.parentNode.removeChild(nicknameBoxOne);

    renameboxOne.style.position = "absolute";
    renameboxOne.style.left = "14px";
    renameboxOne.style.top = "24px";
    renameboxOne.style.margin = "0px";
    renameboxOne.style.padding = "0px";

    renameboxOne.style.width = "170px";
    renameboxOne.style.height = "36px";

    renameboxOne.style.backgroundColor = "black";
    renameboxOne.innerText = "Name & Liquids";  //font div 分离
    renameboxOne.style.color = "white";
    renameboxOne.style.fontSize = "20px";
    renameboxOne.style.textAlign = "center";
    renameboxOne.style.lineHeight = "36px";
    renameboxOne.className = "renameone";
    one.appendChild(renameboxOne);
    reRenameAll.push(renameboxOne);

    addliquidsBoxOne.innerText = "Duplicate";
    leaveBoxOne.innerText = "Delete";
    // reopen();

}
//2
function createNewElementForReopenTwo() {
    //遮罩上的内容改变
    // nicknameBoxOne.innerText="name&liquids";
    //给遮罩添加点击事件
    nicknameBoxTwo.parentNode.removeChild(nicknameBoxTwo);

    renameboxTwo.style.position = "absolute";
    renameboxTwo.style.left = "14px";
    renameboxTwo.style.top = "24px";
    renameboxTwo.style.margin = "0px";
    renameboxTwo.style.padding = "0px";

    renameboxTwo.style.width = "170px";
    renameboxTwo.style.height = "36px";

    renameboxTwo.style.backgroundColor = "black";
    renameboxTwo.innerText = "Name & Liquids";  //font div 分离
    renameboxTwo.style.color = "white";
    renameboxTwo.style.fontSize = "20px";
    renameboxTwo.style.textAlign = "center";
    renameboxTwo.style.lineHeight = "36px";
    two.appendChild(renameboxTwo);
    reRenameAll.push(renameboxTwo);

    addliquidsBoxTwo.innerText = "Duplicate";
    leaveBoxTwo.innerText = "Delete";
    // reopen();

}

//3
function createNewElementForReopenThree() {
    //遮罩上的内容改变
    // nicknameBoxOne.innerText="name&liquids";
    //给遮罩添加点击事件
    nicknameBoxThree.parentNode.removeChild(nicknameBoxThree);

    renameboxThree.style.position = "absolute";
    renameboxThree.style.left = "14px";
    renameboxThree.style.top = "24px";
    renameboxThree.style.margin = "0px";
    renameboxThree.style.padding = "0px";

    renameboxThree.style.width = "170px";
    renameboxThree.style.height = "36px";

    renameboxThree.style.backgroundColor = "black";
    renameboxThree.innerText = "Name & Liquids";  //font div 分离
    renameboxThree.style.color = "white";
    renameboxThree.style.fontSize = "20px";
    renameboxThree.style.textAlign = "center";
    renameboxThree.style.lineHeight = "36px";
    three.appendChild(renameboxThree);

    addliquidsBoxThree.innerText = "Duplicate";
    leaveBoxThree.innerText = "Delete";
    // reopen();

}
//4
function createNewElementForReopenFour() {
    //遮罩上的内容改变
    // nicknameBoxOne.innerText="name&liquids";
    //给遮罩添加点击事件
    nicknameBoxFour.parentNode.removeChild(nicknameBoxFour);

    renameboxFour.style.position = "absolute";
    renameboxFour.style.left = "14px";
    renameboxFour.style.top = "24px";
    renameboxFour.style.margin = "0px";
    renameboxFour.style.padding = "0px";

    renameboxFour.style.width = "170px";
    renameboxFour.style.height = "36px";

    renameboxFour.style.backgroundColor = "black";
    renameboxFour.innerText = "Name & Liquids";  //font div 分离
    renameboxFour.style.color = "white";
    renameboxFour.style.fontSize = "20px";
    renameboxFour.style.textAlign = "center";
    renameboxFour.style.lineHeight = "36px";
    four.appendChild(renameboxFour);

    addliquidsBoxFour.innerText = "Duplicate";
    leaveBoxFour.innerText = "Delete";
    // reopen();

}
//5
function createNewElementForReopenFive() {
    //遮罩上的内容改变
    // nicknameBoxOne.innerText="name&liquids";
    //给遮罩添加点击事件
    nicknameBoxFive.parentNode.removeChild(nicknameBoxFive);

    renameboxFive.style.position = "absolute";
    renameboxFive.style.left = "14px";
    renameboxFive.style.top = "24px";
    renameboxFive.style.margin = "0px";
    renameboxFive.style.padding = "0px";

    renameboxFive.style.width = "170px";
    renameboxFive.style.height = "36px";

    renameboxFive.style.backgroundColor = "black";
    renameboxFive.innerText = "Name & Liquids";  //font div 分离
    renameboxFive.style.color = "white";
    renameboxFive.style.fontSize = "20px";
    renameboxFive.style.textAlign = "center";
    renameboxFive.style.lineHeight = "36px";
    five.appendChild(renameboxFive);

    addliquidsBoxFive.innerText = "Duplicate";
    leaveBoxFive.innerText = "Delete";
    // reopen();

}
//6
function createNewElementForReopenSix() {
    //遮罩上的内容改变
    // nicknameBoxOne.innerText="name&liquids";
    //给遮罩添加点击事件
    nicknameBoxSix.parentNode.removeChild(nicknameBoxSix);

    renameboxSix.style.position = "absolute";
    renameboxSix.style.left = "14px";
    renameboxSix.style.top = "24px";
    renameboxSix.style.margin = "0px";
    renameboxSix.style.padding = "0px";

    renameboxSix.style.width = "170px";
    renameboxSix.style.height = "36px";

    renameboxSix.style.backgroundColor = "black";
    renameboxSix.innerText = "Name & Liquids";  //font div 分离
    renameboxSix.style.color = "white";
    renameboxSix.style.fontSize = "20px";
    renameboxSix.style.textAlign = "center";
    renameboxSix.style.lineHeight = "36px";
    six.appendChild(renameboxSix);

    addliquidsBoxSix.innerText = "Duplicate";
    leaveBoxSix.innerText = "Delete";
    // reopen();

}


// 点击name&liquid，再次打开

    //1
    renameboxOne.addEventListener("click", function () {
        //001 移除初始页面
        designBottomIni.parentNode.removeChild(designBottomIni);
        //002 显示微孔板页面
        designBottomPlate.style.display = "block";
        //003 显示deck title
        detitlebox.style.display = "block";
        //004 隐藏initial title
        detitle.style.display = "none";
        //005 移入well
        whiteBoxForReOpen.appendChild(boxForFirstPostion);

    })
    //2
    renameboxTwo.addEventListener("click", function () {
        //001 移除初始页面
        designBottomIni.parentNode.removeChild(designBottomIni);
        //002 显示微孔板页面
        designBottomPlate.style.display = "block";
        //003 显示deck title
        detitlebox.style.display = "block";
        //004 隐藏initial title
        detitle.style.display = "none";
        //005 移入well
        whiteBoxForReOpen.appendChild(boxForSecondPostion);
    })

    //3
    renameboxThree.addEventListener("click", function () {

        //001 移除初始页面
        designBottomIni.parentNode.removeChild(designBottomIni);
        //002 显示微孔板页面
        designBottomPlate.style.display = "block";
        //003 显示deck title
        detitlebox.style.display = "block";
        //004 隐藏initial title
        detitle.style.display = "none";
        //005 移入well
        whiteBoxForReOpen.appendChild(boxForThirdPostion);
    })
    //4
    renameboxFour.addEventListener("click", function () {
        //001 移除初始页面
        designBottomIni.parentNode.removeChild(designBottomIni);
        //002 显示微孔板页面
        designBottomPlate.style.display = "block";
        //003 显示deck title
        detitlebox.style.display = "block";
        //004 隐藏initial title
        detitle.style.display = "none";
        //005 移入well
        whiteBoxForReOpen.appendChild(boxForFourthPostion);
    })
    //5
    renameboxFive.addEventListener("click", function () {
        //001 移除初始页面
        designBottomIni.parentNode.removeChild(designBottomIni);
        //002 显示微孔板页面
        designBottomPlate.style.display = "block";
        //003 显示deck title
        detitlebox.style.display = "block";
        //004 隐藏initial title
        detitle.style.display = "none";
        //005 移入well
        whiteBoxForReOpen.appendChild(boxForFifthPostion);
    })
    //6
    renameboxSix.addEventListener("click", function () {
        //001 移除初始页面
        designBottomIni.parentNode.removeChild(designBottomIni);
        //002 显示微孔板页面
        designBottomPlate.style.display = "block";
        //003 显示deck title
        detitlebox.style.display = "block";
        //004 隐藏initial title
        detitle.style.display = "none";
        //005 移入well
        whiteBoxForReOpen.appendChild(boxForSixthPostion);

    })


    var transferbtn = document.getElementById("step_option_transfer");
    var transferpage = document.getElementById("desgin_transfer");


        transferbtn.addEventListener("click", function () {
        
            transferpage.style.display = "block";
        })




        //是否被选中的数组（这样找得到吗？(数据的部分先不管，先看界面的显示问题出现在哪里)
    // source
    var plateOne_son_start = new Array();
    var plateTwo_son_start = new Array();
    var plateThree_son_start = new Array();
    var plateFour_son_start = new Array();
    var plateFive_son_start = new Array();
    var plateSix_son_start = new Array();

    // destination  判断终点的well是否被选中，用来传递selected的信息
    var plateOne_son_end = new Array();
    var plateTwo_son_end = new Array();
    var plateThree_son_end = new Array();
    var plateFour_son_end = new Array();
    var plateFive_son_end = new Array();
    var plateSix_son_end = new Array();

    // mix labware
    var plateOne_son_mix = new Array();
    var plateTwo_son_mix = new Array();
    var plateThree_son_mix = new Array();
    var plateFour_son_mix = new Array();
    var plateFive_son_mix = new Array();
    var plateSix_son_mix = new Array();



    // var selectedSourceWell = new Array(); //存放在source被选中的well

    var sourceSelected = document.getElementById("transferFromThisPlate");
    //mix
    var labwareForMix = document.getElementById("mixFromThisPlate");
    var destinationSelected = document.getElementById("transferToThisPlate");
    var titleForWellSelectionBxo1 = document.getElementById("titleForWellSelection1");
    var titleForWellSelectionBxo2 = document.getElementById("titleForWellSelection2");


    
    // 生成source的选项
        function choosePlate(){
        //输入液体，且点击保存时，生成option
        var boxOfsettedPlateForTrans = document.createElement("option");
        if (plate == 0) {
            boxOfsettedPlateForTrans.value = "IamOne";
            boxOfsettedPlateForTrans.innerText = "IamOne";
        }

        //2
        if (plate == 1) {
            boxOfsettedPlateForTrans.value = "IamTwo";
            boxOfsettedPlateForTrans.innerText = "IamTwo";
        }
        //3
        if (plate == 2) {
            boxOfsettedPlateForTrans.value = "IamThree";
            boxOfsettedPlateForTrans.innerText = "IamThree";
        }

        //4
        if (plate == 3) {
            boxOfsettedPlateForTrans.value = "IamFour";
            boxOfsettedPlateForTrans.innerText = "IamFour";
        }
        //5
        if (plate == 4) {
            boxOfsettedPlateForTrans.value = "IamFive";
            boxOfsettedPlateForTrans.innerText = "IamFive";
        }
        //6
        if (plate == 5) {
            boxOfsettedPlateForTrans.value = "IamSix";
            boxOfsettedPlateForTrans.innerText = "IamSix";
        }
        // }

        //将生成的内容变成选项
        sourceSelected.appendChild(boxOfsettedPlateForTrans);
    }


    // 点击source well，打开source选中的微孔板界面
    var sourcewellbox = document.getElementById("source_well");
    var btnbacksource = document.getElementById("sourceback");
    var btnForSaveWell = document.getElementById("saveWell");

    var boxForOne = document.getElementById("divForOne");
    var boxForTwo = document.getElementById("divForTwo");
    var boxForThree = document.getElementById("divForThree");
    var boxForFour = document.getElementById("divForFour");
    var boxForFive = document.getElementById("divForFive");
    var boxForSix = document.getElementById("divForSix");

  

    // source well

        sourcewellbox.addEventListener("click", function () {
            // bottom
            document.getElementById("pageForChooseWell").style.zIndex="100";        
            //header 
            document.getElementById("backFromSourceWell").style.display = "block";
            
            var index = sourceSelected.selectedIndex;  //这个变量设置成全局时，就会无法执行
            // 1
            if (sourceSelected.options[index].value == "IamOne") {

                boxForOne.appendChild(boxForFirstPostion);
                //003 cir被点击时，加入阴影
                for (i = 0; i < cirboxOne.length; i++) {          //新建数组,代表被点过的
                    plateOne_son_start.push(0);
                }
                for (i = 0; i < cirboxOne.length; i++) {
                    cirboxOne[i].onclick = function () {
                        //点击时，增加样式，以便看出来是被点击过的
                        this.style.boxShadow = "5px 5px lightskyblue";
                        // save selection被点击时，数组发生变化
                        var thisIndex = this.id.substring(2, this.id.length);
                        plateOne_son_start[thisIndex] = "2";//2代表被选中

                    }
                }

                btnForSaveWell.addEventListener("click", function () {
                    document.getElementById("pageForChooseWell").style.zIndex="-1";
                    document.getElementById("backFromSourceWell").style.display = "none";

                    sourceWell = [];
                    for (i = 0; i < dataone.length; i++) {
                        if (plateOne_son_start[i] == "2") {
                            sourceWell.push(dataone[i]);
                            console.log(dataone);
                            console.log(4);
                            
                            // 定位定位定位
                            sourcewellbox.value = sourceWell.length;


                        }
                    }

                    // 001 移除引入的well
                    // boxForFirstPostion.parentNode.removeChild(boxForFirstPostion);
                    boxForOne.innerHTML='';

                })

            }

            // 2
            if (sourceSelected.options[index].value == "IamTwo") {
                //002 移入cirwell界面 
                boxForTwo.appendChild(boxForSecondPostion);
                //003 cir被点击时，边框变蓝
                for (i = 0; i < cirboxTwo.length; i++) {          //新建数组,代表被点过的
                    plateTwo_son_start.push(0);
                }
                for (i = 0; i < cirboxTwo.length; i++) {
                    cirboxTwo[i].onclick = function () {
                        //点击时，增加样式，以便看出来是被点击过的
                        this.style.boxShadow = "5px 5px lightskyblue";
                        // save selection被点击时，数组发生变化
                        var thisIndex = this.id.substring(2, this.id.length);
                        plateTwo_son_start[thisIndex] = "2";//2代表被选中


                    }
                }
                btnForSaveWell.addEventListener("click", function () {
                    document.getElementById("pageForChooseWell").style.zIndex="-1";
                    document.getElementById("backFromSourceWell").style.display = "none";
                    sourceWell = [];
                    for (i = 0; i < datatwo.length; i++) {
                        if (plateTwo_son_start[i] == "2") {
                            sourceWell.push(datatwo[i]);
                            console.log(datatwo);
                            console.log(sourceWell);
                            console.log(23)
                            sourcewellbox.value = sourceWell.length;
                        }
                    }
                
                    // boxForSecondPostion.parentNode.removeChild(boxForSecondPostion);
                    boxForTwo.innerHTML='';
                })

            }
            //3
            if (sourceSelected.options[index].value == "IamThree") {
                //002 移入cirwell界面 
                boxForThree.appendChild(boxForThirdPostion);
                //003 cir被点击时，边框变蓝
                for (i = 0; i < cirboxThree.length; i++) {          //新建数组,代表被点过的
                    plateThree_son_start.push(0);
                }
                for (i = 0; i < cirboxThree.length; i++) {
                    cirboxThree[i].onclick = function () {
                        //点击时，增加样式，以便看出来是被点击过的
                        this.style.boxShadow = "5px 5px lightskyblue";
                        // save selection被点击时，数组发生变化
                        var thisIndex = this.id.substring(2, this.id.length);
                        plateThree_son_start[thisIndex] = "2";//2代表被选中

                    }
                }
                btnForSaveWell.addEventListener("click", function () {
                    document.getElementById("pageForChooseWell").style.zIndex="-1";
                    document.getElementById("backFromSourceWell").style.display = "none";
                    sourceWell = [];
                    for (i = 0; i < datathree.length; i++) {
                        if (plateThree_son_start[i] == "2") {
                            sourceWell.push(datathree[i]);
                            sourcewellbox.value = sourceWell.length;
                        }
                    }
                    //移除引入的well
                    // boxForThirdPostion.parentNode.removeChild(boxForThirdPostion);
                    boxForThree.innerHTML='';
                })

            }
            //4
            if (sourceSelected.options[index].value == "IamFour") {
                //002 移入cirwell界面 
                boxForFour.appendChild(boxForFourthPostion);

                for (i = 0; i < cirboxFour.length; i++) {          //新建数组,代表被点过的
                    plateFour_son_start.push(0);
                }

                for (i = 0; i < cirboxFour.length; i++) {
                    cirboxFour[i].onclick = function () {
                        //点击时，增加样式，以便看出来是被点击过的
                        this.style.boxShadow = "5px 5px lightskyblue";
                        // save selection被点击时，数组发生变化
                        var thisIndex = this.id.substring(2, this.id.length);
                        plateFour_son_start[thisIndex] = "2";//2代表被选中
                    }
                }
                btnForSaveWell.addEventListener("click", function () {
                    document.getElementById("pageForChooseWell").style.zIndex="-1";
                    document.getElementById("backFromSourceWell").style.display = "none";

                    sourceWell = [];
                    for (i = 0; i < datafour.length; i++) {
                        if (plateFour_son_start[i] == "2") {
                            sourceWell.push(datafour[i]);
                            sourcewellbox.value = sourceWell.length;
                        }
                    }
                    //移除引入的well
                    // boxForFourthPostion.parentNode.removeChild(boxForFourthPostion);
                    boxForFour.innerHTML='';

                })

            }
            //5
            if (sourceSelected.options[index].value == "IamFive") {
                //002 移入cirwell界面 
                boxForFive.appendChild(boxForFifthPostion);
                for (i = 0; i < cirboxFive.length; i++) {          //新建数组,代表被点过的
                    plateFive_son_start.push(0);
                }
                for (i = 0; i < cirboxFive.length; i++) {
                    cirboxFive[i].onclick = function () {
                        //点击时，增加样式，以便看出来是被点击过的
                        this.style.boxShadow = "5px 5px lightskyblue";
                        // save selection被点击时，数组发生变化
                        var thisIndex = this.id.substring(2, this.id.length);
                        plateFive_son_start[thisIndex] = "2";//2代表被选中

                    }
                }
                btnForSaveWell.addEventListener("click", function () {
                    document.getElementById("pageForChooseWell").style.zIndex="-1";
                    document.getElementById("backFromSourceWell").style.display = "none";
                    sourceWell = [];

                    //003 数据操作：被选中的well,要进入数组
                    for (i = 0; i < datafive.length; i++) {
                        if (plateFive_son_start[i] == "2") {
                            sourceWell.push(datafive[i]);
                            sourcewellbox.value = sourceWell.length;
                        }
                    }     
                    //移除引入的well
                    // boxForFifthPostion.parentNode.removeChild(boxForFifthPostion);
                    boxForFive.innerHTML='';
                })

            }
            //6
            if (sourceSelected.options[index].value == "IamSix") {
                //002 移入cirwell界面 
                boxForSix.appendChild(boxForSixthPostion);

                for (i = 0; i < cirboxSix.length; i++) {          //新建数组,代表被点过的
                    plateSix_son_start.push(0);
                }
                for (i = 0; i < cirboxSix.length; i++) {
                    cirboxSix[i].onclick = function () {
                        //点击时，增加样式，以便看出来是被点击过的
                        this.style.boxShadow = "5px 5px lightskyblue";
                        // save selection被点击时，数组发生变化
                        var thisIndex = this.id.substring(2, this.id.length);
                        plateSix_son_start[thisIndex] = "2";//2代表被选中   

                    }
                }
                btnForSaveWell.addEventListener("click", function () {
                    document.getElementById("pageForChooseWell").style.zIndex="-1";
                    document.getElementById("backFromSourceWell").style.display = "none";
                    sourceWell = [];
                    //003 数据操作：被选中的well,要进入数组
                    for (i = 0; i < datasix.length; i++) {
                        if (plateSix_son_start[i] == "2") {
                            sourceWell.push(datasix[i]);
                            sourcewellbox.value = sourceWell.length;
                        }
                    }
                    
                    //移除引入的well
                    // boxForSixthPostion.parentNode.removeChild(boxForSixthPostion);
                    boxForSix.innerHTML='';

                    //002 well的text等于选中的个数  //前面没有设置这个数组



                })

            }

        })

 


        btnbacksource.addEventListener("click", function () {
            document.getElementById("backFromSourceWell").style.display = "none";
            document.getElementById("pageForChooseWell").style.zIndex="-1";
            //1
            if (sourceSelected.value == "IamOne") {
                var throwawayNodeOne = boxForOne.removeChild(boxForFirstPostion);
            }
    
            //2
            if (sourceSelected.value == "IamTwo") {
    
                var throwawayNodeTwo = boxForTwo.removeChild(boxForSecondPostion);
    
            }
    
            //3
            if (sourceSelected.value == "IamThree") {
    
                var throwawayNodeThree = boxForThree.removeChild(boxForThirdPostion);
    
            }
    
            //4
            if (sourceSelected.value == "IamFour") {
                //移除引入的well
                var throwawayNodeFour = boxForFour.removeChild(boxForFourthPostion);
    
            }
    
            //5
            if (sourceSelected.value == "IamFive") {
    
                var throwawayNodeFive = boxForFive.removeChild(boxForFifthPostion);
    
            }
    
            //6
            if (sourceSelected.value == "IamSix") {
    
                var throwawayNodeSix = boxForSix.removeChild(boxForSixthPostion);
    
            }
    
        })


        //destination 
        function destinationPlateForTransfer(){
            //选择板位，生成destination well的option
        var destinationOfsettedPlateForTrans = document.createElement("option");

        if (plate == 0) {
            destinationOfsettedPlateForTrans.value = "IamOne";
            destinationOfsettedPlateForTrans.innerText = "IamOne";
        }

        //2
        if (plate == 1) {
            destinationOfsettedPlateForTrans.value = "IamTwo";
            destinationOfsettedPlateForTrans.innerText = "IamTwo";
        }
        //3
        if (plate == 2) {
            destinationOfsettedPlateForTrans.value = "IamThree";
            destinationOfsettedPlateForTrans.innerText = "IamThree";
        }

        //4
        if (plate == 3) {
            destinationOfsettedPlateForTrans.value = "IamFour";
            destinationOfsettedPlateForTrans.innerText = "IamFour";
        }
        //5
        if (plate == 4) {
            destinationOfsettedPlateForTrans.value = "IamFive";
            destinationOfsettedPlateForTrans.innerText = "IamFive";
        }
        //6
        if (plate == 5) {
            destinationOfsettedPlateForTrans.value = "IamSix";
            destinationOfsettedPlateForTrans.innerText = "IamSix";
        }

        destinationSelected.appendChild(destinationOfsettedPlateForTrans);


        }
        

        var destinationWellBox = document.getElementById("destination_well");

        // 用户指定操作的终点孔     
           destinationWellBox.addEventListener("click", function () {
               document.getElementById("backFromDestinationWell").style.display="block";
       
               var myindex = destinationSelected.selectedIndex;
               //001 上浮微孔板well选择页面
               document.getElementById("pageForChooseWell").style.zIndex="100";
               // 1
               if (destinationSelected.options[myindex].value == "IamOne") {
                   //002 移入cirwell界面
                   boxForOne.appendChild(boxForFirstPostion);
                   for (i = 0; i < cirboxOne.length; i++) {          //新建数组,代表被点过的
                       plateOne_son_end.push(0);
                   }
                  
                   for (i = 0; i < cirboxOne.length; i++) {
       
                       cirboxOne[i].onclick = function () {
                           //点击时，增加样式，以便看出来是被点击过的
                           this.style.boxShadow = "5px 5px lightskyblue";
                           // save selection被点击时，数组发生变化
                           var thisIndex = this.id.substring(2, this.id.length);
                           plateOne_son_end[thisIndex] = "2";//2代表被选中
                           
       
                       }
       
                   }
       
       
                   btnForSaveWell.addEventListener("click", function () {
                       document.getElementById("pageForChooseWell").style.zIndex="-1";
                       document.getElementById("backFromDestinationWell").style.display="none";
                       
                       destinationWell=[];
                      
                       boxForOne.innerHTML='';
                   
                       //003 数据操作：被选中的well,要进入数组
                       //定位
                       for (i = 0; i < dataone.length; i++) {
                           if (plateOne_son_end[i] == "2") {
                               destinationWell.push(dataone[i]);
                               
       
                               destinationWellBox.value = destinationWell.length;
                            
                           }
                       }
       
                   })
       
               }
       
               // 2
               if (destinationSelected.options[myindex].value == "IamTwo") {
       
                   for (i = 0; i < cirboxTwo.length; i++) {          //新建数组,代表被点过的
                       plateTwo_son_end.push(0);
                   }
       
                   //002 移入cirwell界面
                   boxForTwo.appendChild(boxForSecondPostion);
                   for (i = 0; i < cirboxTwo.length; i++) {
                       cirboxTwo[i].onclick = function () {
                           //点击时，增加样式，以便看出来是被点击过的
       
                           this.style.boxShadow = "5px 5px lightskyblue";
                           // save selection被点击时，数组发生变化
                           var thisIndex = this.id.substring(2, this.id.length);
       
                           plateTwo_son_end[thisIndex] = "2";//2代表被选中
                           
                       }
                   }
                   btnForSaveWell.addEventListener("click", function () {
                       document.getElementById("pageForChooseWell").style.zIndex="-1";
                       document.getElementById("backFromDestinationWell").style.display="none";
                      boxForTwo.innerHTML='';
                       destinationWell=[];
                      
               
                       //002 well的text等于选中的个数  //前面没有设置这个数组
       
                       //003 数据操作：被选中的well,要进入数组
       
                       for (i = 0; i < datatwo.length; i++) {
                           if (plateTwo_son_end[i] == "2") {
                               destinationWell.push(datatwo[i]);
                               destinationWellBox.value = destinationWell.length;

                               console.log(datatwo);
                               console.log(destinationWell);
                               console.log(24);
                           }
                       }
       
       
                   })
       
               }
               //3
               if (destinationSelected.options[myindex].value == "IamThree") {
       
                   for (i = 0; i < cirboxThree.length; i++) {          //新建数组,代表被点过的
                       plateThree_son_end.push(0);
                   }
       
                   //002 移入cirwell界面
                   boxForThree.appendChild(boxForThirdPostion);
                   for (i = 0; i < cirboxThree.length; i++) {
                       cirboxThree[i].onclick = function () {
                           //点击时，增加样式，以便看出来是被点击过的
       
                           this.style.boxShadow = "5px 5px lightskyblue";
                           // save selection被点击时，数组发生变化
                           var thisIndex = this.id.substring(2, this.id.length);
                           plateThree_son_end[thisIndex] = "2";//2代表被选中
       
                          
       
       
                           // console.log(cirboxOne[i][7]);
                       }
                   }
                   btnForSaveWell.addEventListener("click", function () {
                       document.getElementById("pageForChooseWell").style.zIndex="-1";
                       document.getElementById("backFromDestinationWell").style.display="none";
                       //移除引入的well
                       boxForThree.innerHTML='';
                       destinationWell=[];
                     
                       //002 well的text等于选中的个数  //前面没有设置这个数组
       
                       //003 数据操作：被选中的well,要进入数组
       
                       for (i = 0; i < datathree.length; i++) {
                           if (plateThree_son_end[i] == "2") {
                               destinationWell.push(datathree[i]);
                               destinationWellBox.value = destinationWell.length;
                           }
                       }
       
                   })
       
               }
               //4
               if (destinationSelected.options[myindex].value == "IamFour") {
       
                   //002 移入cirwell界面
                   boxForFour.appendChild(boxForFourthPostion);
       
                   for (i = 0; i < cirboxFour.length; i++) {          //新建数组,代表被点过的
                       plateFour_son_end.push(0);
                   }
                   for (i = 0; i < cirboxFour.length; i++) {
                       cirboxFour[i].onclick = function () {
                           //点击时，增加样式，以便看出来是被点击过的
       
                           this.style.boxShadow = "5px 5px lightskyblue";
                           // save selection被点击时，数组发生变化
                           var thisIndex = this.id.substring(2, this.id.length);
       
                           plateFour_son_end[thisIndex] = "2";//2代表被选中
                          
       
                       }
                   }
                   btnForSaveWell.addEventListener("click", function () {
                       document.getElementById("pageForChooseWell").style.zIndex="-1";
                       document.getElementById("backFromDestinationWell").style.display="none";
                       //移除引入的well
                       boxForFour.innerHTML='';
                       destinationWell=[];
                     
                       //002 well的text等于选中的个数  //前面没有设置这个数组
       
                       //003 数据操作：被选中的well,要进入数组
       
                       for (i = 0; i < datafour.length; i++) {
                           if (plateFour_son_end[i] == "2") {
                               destinationWell.push(datafour[i]);
                               destinationWellBox.value = destinationWell.length;
                           }
                       }
       
                   })
       
               }
               //5
               if (destinationSelected.options[myindex].value == "IamFive") {
                   //002 移入cirwell界面
                   boxForFive.appendChild(boxForFifthPostion);
       
                   for (i = 0; i < cirboxFive.length; i++) {          //新建数组,代表被点过的
                       plateFive_son_end.push(0);
                   }
       
                   for (i = 0; i < cirboxFive.length; i++) {
                       cirboxFive[i].onclick = function () {
                           //点击时，增加样式，以便看出来是被点击过的
       
                           this.style.boxShadow = "5px 5px lightskyblue";
                           // save selection被点击时，数组发生变化
                           var thisIndex = this.id.substring(2, this.id.length);
       
                           plateFive_son_end[thisIndex] = "2";//2代表被选中
                           
       
                       }
                   }
                   btnForSaveWell.addEventListener("click", function () {
                       document.getElementById("pageForChooseWell").style.zIndex="-1";
                       document.getElementById("backFromDestinationWell").style.display="none";
                       //移除引入的well
                       boxForFive.innerHTML='';
                       destinationWell=[];
                       
                    
                       //002 well的text等于选中的个数  //前面没有设置这个数组
       
                       //003 数据操作：被选中的well,要进入数组
       
                       for (i = 0; i < datafive.length; i++) {
                           if (plateFive_son_end[i] == "2") {
                               destinationWell.push(datafive[i]);
                               destinationWellBox.value = destinationWell.length;
                           }
                       }
       
                   })
       
               }
               //6
               if (destinationSelected.options[myindex].value == "IamSix") {
       
                   //002 移入cirwell界面
                   boxForSix.appendChild(boxForSixthPostion);
       
                   for (i = 0; i < cirboxSix.length; i++) {          //新建数组,代表被点过的
                       plateSix_son_end.push(0);
                   }
       
                   for (i = 0; i < cirboxSix.length; i++) {
                       cirboxSix[i].onclick = function () {
                           //点击时，增加样式，以便看出来是被点击过的
       
                           this.style.boxShadow = "5px 5px lightskyblue";
                           // save selection被点击时，数组发生变化
                           var thisIndex = this.id.substring(2, this.id.length);
       
                           plateSix_son_end[thisIndex] = "2";//2代表被选中
                           
                       }
                   }
                   btnForSaveWell.addEventListener("click", function () {
                       document.getElementById("pageForChooseWell").style.zIndex="-1";
                       document.getElementById("backFromDestinationWell").style.display="none";
                       //移除引入的well
                       boxForSix.innerHTML='';
                       destinationWell=[];
                   
                     
                       //002 well的text等于选中的个数  //前面没有设置这个数组
       
                       //003 数据操作：被选中的well,要进入数组
       
                       for (i = 0; i < datasix.length; i++) {
                           if (plateSix_son_end[i] == "2") {
                               destinationWell.push(datasix[i]);
                               destinationWellBox.value = destinationWell.length;
                           }
                       }
       
       
                   })
       
               }
           })


    var btnbackdestination = document.getElementById("deatinationback");

    btnbackdestination.addEventListener("click", function () {

        document.getElementById("backFromDestinationWell").style.display = "none";
        document.getElementById("pageForChooseWell").style.zIndex="-1";

        //1
        if (destinationSelected.value == "IamOne") {
            document.getElementById("backFromDestinationWell").style.display="none";
            var throwawayNodeOne = boxForOne.removeChild(boxForFirstPostion);

        }

        //2
        if (destinationSelected.value == "IamTwo") {

            var throwawayNodeTwo = boxForTwo.removeChild(boxForSecondPostion);
            document.getElementById("backFromDestinationWell").style.display="none";

        }

        //3
        if (destinationSelected.value == "IamThree") {

            var throwawayNodeThree = boxForThree.removeChild(boxForThirdPostion);
            document.getElementById("backFromDestinationWell").style.display="none";

        }

        //4
        if (destinationSelected.value == "IamFour") {
            //移除引入的well
            var throwawayNodeFour = boxForFour.removeChild(boxForFourthPostion);
            document.getElementById("backFromDestinationWell").style.display="none";

        }

        //5
        if (destinationSelected.value == "IamFive") {

            var throwawayNodeFive = boxForFive.removeChild(boxForFifthPostion);
            document.getElementById("backFromDestinationWell").style.display="none";

        }

        //6
        if (destinationSelected.value == "IamSix") {

            var throwawayNodeSix = boxForSix.removeChild(boxForSixthPostion);
            document.getElementById("backFromDestinationWell").style.display="none";

        }

    })


   
// 如何移液
var svgSt = document.getElementById("st")
var svgMa = document.getElementById("ma")
var svgMd = document.getElementById("md")

var gifSt = document.getElementById("singeTransfer")
var gifMa = document.getElementById("multiAspirate")
var gifMd = document.getElementById("multiDispense")




    svgSt.onmouseover = function () {
        gifSt.style.display = "block";

    }

    svgSt.onmouseout = function () {
        gifSt.style.display = "none";
    }

    svgSt.addEventListener("click", function () {
        wayForTransfer = "single transfer";
        svgSt.style.border = "2px solid lightskyblue";
    })




    svgMa.onmouseover = function () {
        gifMa.style.display = "block";
    }

    svgMa.onmouseout = function () {
        gifMa.style.display = "none";
    }




svgMa.addEventListener("click", function () {
    wayForTransfer = "multi-asiprate";
    svgMa.style.border = "2px solid lightskyblue";
})



    svgMd.onmouseover = function () {
        gifMd.style.display = "block";
    }

    svgMd.onmouseout = function () {
        gifMd.style.display = "none";
    }




svgMd.addEventListener("click", function () {
    wayForTransfer = "multi-dispense";
    svgMd.style.border = "2px solid lightskyblue";
})



//transfer 
    // btn 
    var btnDeleteForTranfer = document.getElementById("deleteForTrans");
    var btnNotesForTranfer = document.getElementById("notesForTrans");
    var btnCloseForTranfer = document.getElementById("closeForTrans");
    var btnSaveForTranfer = document.getElementById("saveForTrans");
    // // 点击delete
    // function btnForDeleteTranfer() {
    //     btnDeleteForTranfer.addEventListener("click", function () {
    //         var deletebox = window.confirm("Are you sure you want to delete this step?");
    //         if (deletebox == true) {
    //             //001 隐藏mix操作面板
    //             transferpage.style.display = "none";
            

    //         }


    //     })

    // }
    // // 点击notes
    
    // // 点击close
    
    //     btnCloseForTranfer.addEventListener("click", function () {
    //         var closeox = window.confirm("You have not saved this step form. If you navigate away without saving, this step will be deleted.");
    //         if (closeox == true) {
    //             //001 隐藏mix操作面板
    //             transferpage.style.display = "none";
             

    //         }

    //     })





    // 点击save



    var btnSaveForTranfer = document.getElementById("saveForTrans").onclick = function () {
        

        // 01 获取数据
       pipette =document.getElementById("selectedPipette").value;
        
        var transPerVolume = document.getElementById("selectedVolumePerWell").value;
        var sourcePlate = document.getElementById("transferFromThisPlate").value;
       
        var destinationPlate = document.getElementById("transferToThisPlate").value;
        
        var wayForTransfer = "";

        // 02 存放数据
        transfer = ["transfer", pipette, transPerVolume, sourcePlate, sourceWell, destinationPlate, destinationWell, wayForTransfer];
        multiSteps.push(transfer);

        // 003 绘制可视化元素
        newele(multiSteps);
        // 004 收起transfer设置面板
        transferpage.style.display="none";
       
       

    }

    

 
    
   
    

    


   



    //mix
    // 001 点击max,打开mix操作面板(block)
    var mixBtn = document.getElementById("stepForMix");
    var mixPage = document.getElementById("pageForStepOfMix");


    
        mixBtn.addEventListener("click", function () {
            mixPage.style.display = "block";

        })

    // 002 生成labware的选项

    function choosePlateForMix() {
        var boxOfsettedPlateForMix = document.createElement("option");
        if (plate == 0) {
            boxOfsettedPlateForMix.value = "IamOne";
            boxOfsettedPlateForMix.innerText = "IamOne";
        }

        //2
        if (plate == 1) {
            boxOfsettedPlateForMix.value = "IamTwo";
            boxOfsettedPlateForMix.innerText = "IamTwo";
        }
        //3
        if (plate == 2) {
            boxOfsettedPlateForMix.value = "IamThree";
            boxOfsettedPlateForMix.innerText = "IamThree";
        }

        //4
        if (plate == 3) {
            boxOfsettedPlateForMix.value = "IamFour";
            boxOfsettedPlateForMix.innerText = "IamFour";
        }
        //5
        if (plate == 4) {
            boxOfsettedPlateForMix.value = "IamFive";
            boxOfsettedPlateForMix.innerText = "IamFive";
        }
        //6
        if (plate == 5) {
            boxOfsettedPlateForMix.value = "IamSix";
            boxOfsettedPlateForMix.innerText = "IamSix";
        }
        // }

        //将生成的内容变成选项
        labwareForMix.appendChild(boxOfsettedPlateForMix);

    }

    // 003 点击well,打开选中的plate的页面
    var inputForMIx = document.getElementById("chooseWellForMix");
//这是定位
        inputForMIx.addEventListener("click", function () {
            // bottom
            document.getElementById("pageForChooseWell").style.zIndex="100";     
            // header 
            document.getElementById("backFormMix").style.display = "block";

            //002 放入well
            var index = labwareForMix.selectedIndex;  //这个变量设置成全局时，就会无法执行
            // 1
            if (labwareForMix.options[index].value == "IamOne") {
                //002 移入cirwell界面
                boxForOne.appendChild(boxForFirstPostion);


                //003 cir被点击时，边框变蓝
                for (i = 0; i < cirboxOne.length; i++) {          //新建数组,用来表明是否被点过
                    plateOne_son_mix.push(0);
                }

                for (i = 0; i < cirboxOne.length; i++) {
                    cirboxOne[i].onclick = function () {
                        //点击时，增加样式，以便看出来是被点击过的
                        this.style.boxShadow = "5px 5px lightskyblue";
                        // save selection被点击时，数组发生变化
                        var thisIndex = this.id.substring(2, this.id.length);
                        plateOne_son_mix[thisIndex] = "2";//2代表被选中





                    }
                }

                btnForSaveWell.addEventListener("click", function () {
                    document.getElementById("pageForChooseWell").style.zIndex="-1";
                    //003 数据操作：被选中的well,要进入数组
                    wellForMix = [];
                    for (i = 0; i < dataone.length; i++) {
                        if (plateOne_son_mix[i] == "2") {
                            //定位
                            wellForMix.push(dataone[i]);



                        }
                    }
                    inputForMIx.value = wellForMix.length;

                    document.getElementById("backFormMix").style.display = "none";
                    //移除引入的well
                    boxForOne.removeChild(boxForFirstPostion);
                    //001 样式操作：well界面降到底层

                    //002 well的text等于选中的个数  //前面没有设置这个数组


                })

            }

            // 2
            if (labwareForMix.options[index].value == "IamTwo") {
                //002 移入cirwell界面 
                boxForTwo.appendChild(boxForSecondPostion);
                //003 cir被点击时，边框变蓝
                for (i = 0; i < cirboxTwo.length; i++) {          //新建数组,代表被点过的
                    plateTwo_son_mix.push(0);
                }
                for (i = 0; i < cirboxTwo.length; i++) {
                    cirboxTwo[i].onclick = function () {
                        //点击时，增加样式，以便看出来是被点击过的
                        this.style.boxShadow = "5px 5px lightskyblue";
                        // save selection被点击时，数组发生变化
                        var thisIndex = this.id.substring(2, this.id.length);
                        plateTwo_son_mix[thisIndex] = "2";//2代表被选中

                    }
                }
                btnForSaveWell.addEventListener("click", function () {
                    document.getElementById("pageForChooseWell").style.zIndex="-1";
                    document.getElementById("backFormMix").style.display = "none";
                    //003 数据操作：被选中的well,要进入数组
                    wellForMix = [];
                    for (i = 0; i < datatwo.length; i++) {
                        if (plateTwo_son_mix[i] == "2") {
                            wellForMix.push(datatwo[i]);

                        }
                    }
                    inputForMIx.value = wellForMix.length;

                    boxForTwo.removeChild(boxForSecondPostion);

                    //001 样式操作：well界面降到底层

                    //002 well的text等于选中的个数  //前面没有设置这个数组


                })

            }
            //3
            if (labwareForMix.options[index].value == "IamThree") {
                //002 移入cirwell界面 
                boxForThree.appendChild(boxForThirdPostion);
                //003 cir被点击时，边框变蓝
                for (i = 0; i < cirboxThree.length; i++) {          //新建数组,代表被点过的
                    plateThree_son_mix.push(0);
                }
                for (i = 0; i < cirboxThree.length; i++) {
                    cirboxThree[i].onclick = function () {
                        //点击时，增加样式，以便看出来是被点击过的
                        this.style.boxShadow = "5px 5px lightskyblue";
                        // save selection被点击时，数组发生变化
                        var thisIndex = this.id.substring(2, this.id.length);
                        plateThree_son_mix[thisIndex] = "2";//2代表被选中



                    }
                }
                btnForSaveWell.addEventListener("click", function () {
                    document.getElementById("pageForChooseWell").style.zIndex="-1";
                    document.getElementById("backFormMix").style.display = "none";
                    wellForMix = [];
                    for (i = 0; i < datathree.length; i++) {
                        if (plateThree_son_mix[i] == "2") {
                            wellForMix.push(datathree[i]);

                        }
                    }
                    inputForMIx.value = wellForMix.length;

                    //移除引入的well
                    boxForThree.removeChild(boxForThirdPostion);

                    //001 样式操作：well界面降到底层

                    //002 well的text等于选中的个数  //前面没有设置这个数组

                    //003 数据操作：被选中的well,要进入数组

                })

            }
            //4
            if (labwareForMix.options[index].value == "IamFour") {
                //002 移入cirwell界面 
                boxForFour.appendChild(boxForFourthPostion);

                for (i = 0; i < cirboxFour.length; i++) {          //新建数组,代表被点过的
                    plateFour_son_mix.push(0);
                }

                for (i = 0; i < cirboxFour.length; i++) {
                    cirboxFour[i].onclick = function () {
                        //点击时，增加样式，以便看出来是被点击过的
                        this.style.boxShadow = "5px 5px lightskyblue";
                        // save selection被点击时，数组发生变化
                        var thisIndex = this.id.substring(2, this.id.length);
                        plateFour_son_mix[thisIndex] = "2";//2代表被选中


                    }
                }
                btnForSaveWell.addEventListener("click", function () {
                    document.getElementById("pageForChooseWell").style.zIndex="-1";
                    document.getElementById("backFormMix").style.display = "none";
                    wellForMix = [];
                    for (i = 0; i < datafour.length; i++) {
                        if (plateFour_son_mix[i] == "2") {
                            wellForMix.push(datafour[i]);

                        }
                    }

                    inputForMIx.value = wellForMix.length;
                    //移除引入的well
                    boxForFour.removeChild(boxForFourthPostion);


                    //001 样式操作：well界面降到底层

                    //002 well的text等于选中的个数  //前面没有设置这个数组

                    //003 数据操作：被选中的well,要进入数组

                })

            }
            //5
            if (labwareForMix.options[index].value == "IamFive") {

                //002 移入cirwell界面 
                boxForFive.appendChild(boxForFifthPostion);

                for (i = 0; i < cirboxFive.length; i++) {          //新建数组,代表被点过的
                    plateFive_son_mix.push(0);
                }
                for (i = 0; i < cirboxFive.length; i++) {
                    cirboxFive[i].onclick = function () {
                        //点击时，增加样式，以便看出来是被点击过的
                        this.style.boxShadow = "5px 5px lightskyblue";
                        // save selection被点击时，数组发生变化
                        var thisIndex = this.id.substring(2, this.id.length);
                        plateFive_son_mix[thisIndex] = "2";//2代表被选中

                    }
                }
                btnForSaveWell.addEventListener("click", function () {
                    document.getElementById("pageForChooseWell").style.zIndex="-1";
                    document.getElementById("backFormMix").style.display = "none";
                    //003 数据操作：被选中的well,要进入数组
                    wellForMix = [];
                    for (i = 0; i < datafive.length; i++) {
                        if (plateFive_son_mix[i] == "2") {
                            wellForMix.push(datafive[i]);

                        }
                    }
                    inputForMIx.value = wellForMix.length;
                    //移除引入的well
                    boxForFive.removeChild(boxForFifthPostion)


                    //001 样式操作：well界面降到底层

                    //002 well的text等于选中的个数  //前面没有设置这个数组


                })

            }
            //6
            if (labwareForMix.options[index].value == "IamSix") {
                //002 移入cirwell界面 
                boxForSix.appendChild(boxForSixthPostion);

                for (i = 0; i < cirboxSix.length; i++) {          //新建数组,代表被点过的
                    plateSix_son_mix.push(0);
                }
                for (i = 0; i < cirboxSix.length; i++) {
                    cirboxSix[i].onclick = function () {
                        //点击时，增加样式，以便看出来是被点击过的
                        this.style.boxShadow = "5px 5px lightskyblue";
                        // save selection被点击时，数组发生变化
                        var thisIndex = this.id.substring(2, this.id.length);
                        plateSix_son_mix[thisIndex] = "2";//2代表被选中   

                    }
                }
                btnForSaveWell.addEventListener("click", function () {
                    document.getElementById("pageForChooseWell").style.zIndex="-1";
                    document.getElementById("backFormMix").style.display = "none";
                    //003 数据操作：被选中的well,要进入数组
                    wellForMix = [];
                    for (i = 0; i < datasix.length; i++) {
                        if (plateSix_son_mix[i] == "2") {
                            wellForMix.push(datasix[i]);

                        }
                    }

                    inputForMIx.value = wellForMix.length;
                    //移除引入的well
                    boxForSix.removeChild(boxForSixthPostion);


                    //001 样式操作：well界面降到底层

                    //002 well的text等于选中的个数  //前面没有设置这个数组


                })

            }



        })




    var btnbackmix = document.getElementById("mixback");
    // 点击，移除元素
    btnbackmix.addEventListener("click", function () {
        document.getElementById("backFormMix").style.display="none";
        document.getElementById("pageForChooseWell").style.zIndex="-1";
        
        //1
        if (labwareForMix.value == "IamOne") {
            //移除引入的well

            var throwawayNodeOne = boxForOne.removeChild(boxForFirstPostion);

        }

        //2
        if (labwareForMix.value == "IamTwo") {

            var throwawayNodeTwo = boxForTwo.removeChild(boxForSecondPostion);

        }

        //3
        if (labwareForMix.value == "IamThree") {
            //移除引入的well

            var throwawayNodeThree = boxForThree.removeChild(boxForThirdPostion);

        }

        //4
        if (labwareForMix.value == "IamFour") {
            //移除引入的well
            var throwawayNodeFour = boxForFour.removeChild(boxForFourthPostion);

        }

        //5
        if (labwareForMix.value == "IamFive") {
            //移除引入的well

            var throwawayNodeFive = boxForFive.removeChild(boxForFifthPostion);

        }

        //6
        if (labwareForMix.value == "IamSix") {
            //移除引入的well

            var throwawayNodeSix = boxForSix.removeChild(boxForSixthPostion);

        }

    })



    // btn 
    var btnDeleteForMix = document.getElementById("deleteForMix");
    var btnNotesForMix = document.getElementById("notesForMix");
    var btnCloseForMix = document.getElementById("closeForMix");
    var btnSaveForMix = document.getElementById("saveForMix");
    // 点击delete
    function btnForDeleteMix() {
        btnDeleteForMix.addEventListener("click", function () {
            var deletebox = window.confirm("Are you sure you want to delete this step?");
            if (deletebox == true) {
                //001 隐藏mix操作面板
                mixPage.style.display = "none";


                //003  这里应该还涉及倒更多的内容
                //003.1 左侧的生成元素删除
                //003.2 该操作信息从数组中删除

            }
        })

    }

    // 点击notes
    function btnForNotesMix() {
        //包含大量内容

    }

    // 点击close
    function btnForCloseMix() {
        btnCloseForMix.addEventListener("click", function () {
            var closeox = window.confirm("You have not saved this step form. If you navigate away without saving, this step will be deleted.");
            if (closeox == true) {
                //001 隐藏mix操作面板
                mixPage.style.display = "none";
                //002 下沉step well页面


            }

        })

    }

    // 点击save
  
        btnSaveForMix.addEventListener("click", function () {

            //001 隐藏mix操作面板
            mixPage.style.display = "none";
            //003 获取数据
            //pipetteForMix
           
             pipetteForMix =document.getElementById("pipe_mix").value;
            

            //mixvolume
            var mixvolume = document.getElementById("mixVolume").value;

            //repetions
            var repetions = document.getElementById("repetitionForMix").value;

            //labware plate
            var labware = document.getElementById("mixFromThisPlate").value;
      
           


            //wellForMix
            // var wellForMix = document.getElementById("chooseWellForMix").value;

            //way for mix
            var wayFOrMix = document.getElementById("wayMix").value;
       
            //存放数据
          
            mix = ["mix", pipetteForMix, mixvolume, repetions, labware, wellForMix, wayFOrMix];
            multiSteps.push(mix);
   
            newele(multiSteps)

        })



 


   



    
    
    var btnOpenPause=document.getElementById("stepForPause");
    var boxForPause=document.getElementById("design_pause");

    btnOpenPause.addEventListener("click",function(){
        boxForPause.style.display="block";
    });


    
    var inputs=document.getElementsByName("howPause");
    var checkVal='';

    var btnpause=document.getElementById("btn_save_pause");
    var inputSpause=document.getElementById("mess_to_display");
    btnpause.addEventListener("click",function(){
        
    //获取pause单选框的值
   

    for (var i=0,len=inputs.length;i<len;i++){
        if(inputs[i].checked){
            checkVal= inputs[i].value;
        }
    }

   
       
        // 传递数据
        
        
        
        var  howToPause=checkVal;
        if(howToPause=="pause until told to resume"){
            var descriptionPause=inputSpause.value;

        }
        if(howToPause=="Daley for an amount of time"){
            var descriptionPause=document.getElementById("time_h").value+"h"+document.getElementById("time_m").value+"m"+document.getElementById("time_s").value+"s";
            console.log(descriptionPause);

        }
        
        pause=[control,howToPause,descriptionPause];
        multiSteps.push(pause);
        


        // 绘制
        newele(multiSteps);



       

    })



    
    function newele(multiSteps) {
        
        // 存放新元素的容器
        let multiStepDiv = document.getElementById("newElementForStep");
        // 生成的新元素
        let multiStepDivContent = '';
        // 绘制
        for (let i = 0; i < multiSteps.length; i++) {

            
           //1 V N
            if (multiSteps[i][0] == "transfer" && multiSteps[i][4].length<multiSteps[i][6].length) {
                multiStepDivContent +=
                    '<div class="bigboxfornewelement">' +
                    ' <div id="ooc_transfer"  >' +
                    ' <span class="text_transfer">transfer</span>' +
                    '<img>' +
                    '</div>' +

                    '<div id="ooc_c_transfer">' +
                    '<div class="whichplate">' +
                    ' <div class="aspirate_transfer">' +
                    '<div >aspirate</div>' +
                    '<div id="trans_as">' + multiSteps[i][3] + '</div>' +   //text change
                    ' </div>' +

                    ' <div class="arrow">' +
                    '  <img>' +
                    ' </div>' +

                    '<div class="dispense_trans">' +
                    '  <div>dispense</div>' +
                    '<div id="trans_dis">' + multiSteps[i][5] + '</div>' +
                    '</div>' +
                    '</div>' +

                    '</div>' +
                    '</div>'
            
                    for (j = 0; j < multiSteps[i][6].length; j++) {
                        multiStepDivContent +=
                            '<div class="trans_detail">' +
                            '<div id="show_liquid" style="background-color:' + multiSteps[i][4][0][4] + '">' +multiSteps[i][4][0][2] + '</div>' +
                            '<div id="as_well">'+multiSteps[i][4][0][5]+'</div>' +
                            '<div id="trans_volume">' + multiSteps[i][3] + '</div>' +
                            '<div id="dis_well">'+multiSteps[i][6][j][5]+'</div>' +
                            '<div id="show_liquid" style="background-color:' +  multiSteps[i][6][j][4] + '">' + multiSteps[i][6][j][2]+ '</div>' +
                            '</div>'
    
                    }  
                }
                //N V 1
            if (multiSteps[i][0] == "transfer"&& multiSteps[i][4].length>multiSteps[i][6].length) {
                    multiStepDivContent +=
                        '<div class="bigboxfornewelement">' +
                        ' <div id="ooc_transfer"  >' +
                        ' <span class="text_transfer">transfer</span>' +
                        '<img>' +
                        '</div>' +
    
                        '<div id="ooc_c_transfer">' +
                        '<div class="whichplate">' +
                        ' <div class="aspirate_transfer">' +
                        '<div >aspirate</div>' +
                        '<div id="trans_as">' + multiSteps[i][3] + '</div>' +   //text change
                        ' </div>' +
    
                        ' <div class="arrow">' +
                        '  <img>' +
                        ' </div>' +
    
                        '<div class="dispense_trans">' +
                        '  <div>dispense</div>' +
                        '<div id="trans_dis">' + multiSteps[i][5] + '</div>' +
                        '</div>' +
                        '</div>' +
    
                        '</div>' +
                        '</div>'
                
                        for (j = 0; j < multiSteps[i][4].length; j++) {
                            multiStepDivContent +=
                                '<div class="trans_detail">' +
                                '<div id="show_liquid" style="background-color:' + multiSteps[i][4][j][4] + '">' + multiSteps[i][4][j][2] + '</div>' +
                                '<div id="as_well">'+multiSteps[i][4][j][5]+'</div>' +
                                '<div id="trans_volume">' + multiSteps[i][3] + '</div>' +
                                '<div id="dis_well">'+multiSteps[i][6][0][5]+'</div>' +
                                '<div id="show_liquid" style="background-color:' + multiSteps[i][6][0][4]  + '">' + multiSteps[i][6][0][2] + '</div>' +
                                '</div>'
        
                        }  
                    }

            if (multiSteps[i][0] == "transfer"&& multiSteps[i][4].length==multiSteps[i][6].length) {
                        multiStepDivContent +=
                            '<div class="bigboxfornewelement">' +
                                ' <div id="ooc_transfer"  >' +
                                    ' <span class="text_transfer">transfer</span>' +
                                    '<img>' +
                                '</div>' +
            
                                '<div id="ooc_c_transfer">' +
                                    '<div class="whichplate">' +
                                        ' <div class="aspirate_transfer">' +
                                            '<div >aspirate</div>' +
                                            '<div id="trans_as">' + multiSteps[i][3] + '</div>' +   //text change
                                        ' </div>' +
                    
                                        ' <div class="arrow">' +
                                            '  <img>' +
                                        ' </div>' +
                
                                        '<div class="dispense_trans">' +
                                            ' <div>dispense</div>' +
                                            '<div id="trans_dis">' + multiSteps[i][5] + '</div>' +
                                        '</div>' +
                                    '</div>' +
            
                                '</div>' +
                                    '<div class="trans_detail">' +
                                    '<div id="show_liquid" style="background-color:' + sourceWell[0][4] + '">' + sourceWell[0][2] + '</div>' +
                                    '<div id="as_well">'+multiSteps[i][4][0][5]+'</div>' +
                            '<div id="trans_volume">' + multiSteps[i][3] + '</div>' +
                            '<div id="dis_well">'+multiSteps[i][6][0][5]+'</div>' +
                                    '<div id="show_liquid" style="background-color:' + destinationWell[0][4] + '">' + destinationWell[0][2] + '</div>' +
                                '</div>'

                            '</div>'
                    
                            
                                   
            
                        }


            if(multiSteps[i][0]=="mix"){
                multiStepDivContent +=
                    ' <div id="newMix">' +
                    '<div id="show_mix">' +
                    '<img>' +
                    '<div>MIX</div>' +
                    '<img>' +
                    '</div>' +

                    '<div id="repe_mix">' +
                    '<div id="detail_mix">' +
                    '<span id="mix_plate">' + multiSteps[i][4] + '</span>' +
                    '<span id="mix_volume">' + multiSteps[i][2] + '</span>' +
                    '<span id="mix_times">' + multiSteps[i][3] + '</span>' +
                    '</div>' +

                    '</div>' +

                    '</div>'


                for(a=0;a<wellForMix.length;a++){
                    for (z = 0; z < repetitionForMix.value; z++) {
                        multiStepDivContent +=
                            '<div id="each_mix">' +
                                '<span id="mix_liquid" style="background-color:' +multiSteps[i][5][a][4] + '" >' + multiSteps[i][5][a][2] + ' </span>' +
                                '<span id="mix_begin_well">'+multiSteps[i][5][a][5]+'</span>' +
                                '<span id="mix_volume">' + multiSteps[i][5][a][3] + '</span>' +
                                ' <span id="mix_end_well">'+multiSteps[i][5][a][5]+'</span>' +
                                '<span id="mix_liquid" style="background-color:' + multiSteps[i][5][a][4] + '" >' + multiSteps[i][5][a][2] + ' </span>' +
                            '</div>'
    
                    }

                }
                


            }
             
           

            if (multiSteps[i][0] == "pause"&& multiSteps[i][1] =="pause until told to resume") {

               
               
                    multiStepDivContent +=
                    '<div class="pp">'+
                        '<div >'+
                          '  <img></img>'+
                            '<div>PAUSE</div>'+
                       '</div>'+

                      ' <div>'+
                             '<div class="way_pause_p">'+multiSteps[i][1]+'</div>'+
                          ' <div>'+'\"'+multiSteps[i][2]+'\"'+'</div>'+
                        '</div>'+
                       
                   ' </div>'
        
          

        }
            if(multiSteps[i][0] == "pause"&& multiSteps[i][1]=="Daley for an amount of time"){
                
                multiStepDivContent +=
                '<div class="pp">'+
                    '<div >'+
                      '  <img></img>'+
                        '<div>PAUSE</div>'+
                   '</div>'+

                  ' <div>'+
                         '<div class="way_pause_p">'+multiSteps[i][1]+'</div>'+
                      ' <div>'+multiSteps[i][2]+'</div>'+
                    '</div>'+
                   
               ' </div>'
    
            }


            }

        multiStepDiv.innerHTML = multiStepDivContent;


    }


    document.getElementById("export").addEventListener("click", function () {
        console.log(multiSteps);
        console.log("yes");
    })
