module.exports=[33354,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},33095,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},getImageProps:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(33354),g=a.r(94915),h=a.r(67161),i=f._(a.r(2305));function j(a){let{props:b}=(0,g.getImgProps)(a,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let k=h.Image},71987,(a,b,c)=>{b.exports=a.r(33095)},90128,a=>{"use strict";var b=a.i(87924),c=a.i(38246),d=a.i(71987);a.s(["default",0,function({links:a=[]}){return(0,b.jsxs)("header",{className:"s12header flex justify-between items-center p-4 bg-gray-900 text-white",children:[(0,b.jsx)("div",{className:"flex items-center",children:(0,b.jsx)(d.default,{src:"/favicon.ico",alt:"logo",width:32,height:32})}),(0,b.jsx)("div",{className:"flex flex-wrap gap-2",children:a.map(({href:a,label:d,className:e},f)=>(0,b.jsx)(c.default,{href:a,className:e||"px-4 py-2 rounded bg-gray-700 hover:bg-gray-600",children:d},f))})]})}])},39570,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(90128);let e=[{id:1,title:"Form1.html",description:"Classwork 3",code:`
      <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="style.css" />
    <link rel="shortcut icon" href="kali.ico" type="image/x-icon">
    <title>Document</title>
  </head>
  <body>
    <form>
      <!------------------------------------------------->
      <div class="top3">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder=" Enter username" />

        <label for="password">Password</label>
        <input type="password" id="password" />

        <label for="input">Input Text Label</label>
        <input type="text" id="input" />
      </div>
      <!------------------------------------------------->
       <label class="outer">
        <input type="checkbox">
        <span class="innercircle"></span>
      </label><br>
      <!------------------------------------------------->
      <input type="checkbox" id="remember_me" />
      <label for="remember_me">Remember me</label><br />
      <!------------------------------------------------->
      <div class="radio">
        <input type="radio" id="radio_1" name="select" />
        <label for="radio_1">Radio selection 1</label><br />
        <input type="radio" id="radio_2" name="select" />
        <label for="radio_2">Radio selection 2</label><br />
        <input type="radio" id="radio_3" name="select" />
        <label for="radio_3">Radio selection 3</label><br />
      </div>
      <!------------------------------------------------->
      <label for="dropdown" id="dropdown">Dropdown Title</label>
      <div class="dropdown">
        <select>
          <option value="option1" id="dropdown">Dropdown option 1</option>
          <option value="option2" id="dropdown">Dropdown option 2</option>
          <option value="option3" id="dropdown">Dropdown option 3</option>
        </select>
      </div>
      <!------------------------------------------------->
    </form>
  </body>
</html>

  `},{id:2,title:"Form1.css",description:"Classwork 3",code:`
      body {
  background-color: pink;
  margin: 0;  
}

/*---------------------------------------------------*/

form {
  background-color: white;
  margin: 0 auto;
  width: 500px;
  max-width:80%;
  padding: 30px 50px;
  min-height:100vh; 
  box-sizing: border-box;
}

input:focus, select:focus {
    outline: none;
    border: 5px solid purple;
}

/*---------------------------------------------------*/
input {
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
}

form .top3 input {
  width: 100%;
  box-sizing: border-box;
}

/*---------------------------------------------------*/

form .radio {
  padding: 15px 0;
}

form .radio #radio_1 select{
  background-color: purple;
}

/*---------------------------------------------------*/
form .dropdown #dropdown {
  background-color: purple;
}

form select {
  width: 100%;
  padding: 10px 10px;
  margin: 5px 0;/*  */
  font-size: 18px;
}

/*---------------------------------------------------*/
label.outer{
  background-color: gray;
  width: 50px;
  height: 30px;
  border-radius: 50px;
  position: relative;
  display: inline-block;
}

span.innercircle{
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  left: 1px;
  top: 2px;
  position: absolute;
  cursor: pointer;
}

label.outer input{
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  transition: 0.3;

  cursor: pointer;
}

.outer input:checked + .innercircle{
  left: 25px;
}
  
.outer:has(input:checked){
  background-color: green;
}
/*---------------------------------------------------*/
    `},{id:3,title:"Boxes.html",description:"Classwork 4",code:`
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <title>Task 4 By Rabbit</title>
  </head>
  <body>
    <div class="BigBox">
      <div class="LittleBox">
        <div class="pink_circle"></div>
        <div class="green_circle"></div>
        <div><img src="kali.png" class="image"></div>
        <span>Hello!!</span>
      </div>
      <pre>
Welcome

  To 
  Our
Website
    </pre
      >
    </div>
  </body>
</html>
    `},{id:3,title:"Boxes.css",description:"Classwork 4",code:`
    body {
  margin: 0;
}
.BigBox {
  margin: 40px 40px;
  width: 550px;
  height: 550px;
  background-color: steelblue;
  border: 1px solid black;
  position: relative;
}
.BigBox pre {
  position: reative;
  margin-left: 35px;
  margin-top: -80px;
  font-size: 50px;
}

.LittleBox {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: pink;
  border: 1px solid black;
  margin-left: 250px;
  margin-top: 80px;
}
.pink_circle {
  background-color: rgb(175, 12, 12);
  border-radius: 50%;
  height: 60px; width: 60px;
  position: absolute;
  margin-left: 100px; margin-top: -20px;
}

.green_circle{
  height: 40px; width: 40px; background-color: green;
  border-radius: 50%;
  margin-left: 150px; margin-top: 50px;
  position: absolute;
}

.LittleBox span {
  background-color: blue;
  padding: 6px;
  margin-top: -165px;
  margin-left: 40px;
  position: absolute;
}

.image{
  width: 90px; height: 90px; 
  border-radius: 50%;
  margin-left: 130px; margin-top: 130px;
}
    `}],f=[{href:"/",label:"Home",className:"HeaderButton"},{href:"/S2",label:"S2 Page",className:"HeaderButton"},{href:"/S2/wad",label:"WAD Page",className:"HeaderButton"}];a.s(["default",0,function(){let[a,g]=(0,c.useState)(null),[h,i]=(0,c.useState)("");return(0,b.jsxs)("div",{children:[(0,b.jsx)(d.default,{links:f}),(0,b.jsx)("main",{className:"main-box"}),(0,b.jsx)("h1",{className:"page-header",children:"HTML Codes"}),(0,b.jsx)("input",{type:"number",placeholder:"Search by ID",className:"w-full p-2 rounded border border-gray-400 mb-4 text-black",value:h,onChange:a=>i(a.target.value)}),e.filter(a=>""===h||a.id===Number(h)).map(c=>(0,b.jsxs)("div",{className:"bg-black/20 p-4 rounded-lg text-white backdrop-blur-sm",children:[(0,b.jsx)("h3",{className:"text-lg font-semibold",children:c.title}),(0,b.jsx)("pre",{className:"text-gray-300 mt-2 whitespace-pre-wrap",children:c.description}),(0,b.jsx)("button",{className:"HeaderButton mt-3",onClick:()=>{let b;return g(a===(b=c.id)?null:b)},children:a===c.id?"Hide Solution ▲":"Show Solution ▼"}),a===c.id&&(0,b.jsxs)("div",{className:"mt-3 bg-black/40 p-3 rounded",children:[(0,b.jsx)("h4",{className:"font-semibold text-yellow-400 mb-2",children:"Solution"}),(0,b.jsx)("pre",{className:"whitespace-pre-wrap text-gray-200",children:c.code}),(0,b.jsx)("button",{className:"mt-2 bg-yellow-500 text-black px-2 py-1 rounded hover:bg-yellow-400",onClick:()=>{var a;return a=c.code,void(navigator.clipboard.writeText(a),alert("Code copied!"))},children:"Copy"})]})]},c.id))]})}],39570)}];

//# sourceMappingURL=_008ro96._.js.map