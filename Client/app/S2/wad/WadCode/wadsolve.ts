export type Snippet = {
  id: number;
  title: string;
  description: string;
  code: string;
};

export const wadsolve: Snippet[] = [
  {
    id: 1,
    title: "Form1.html",
    description: "Classwork 3",
    code: `
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

  `,
  },
  {
    id: 2,
    title: "Form1.css",
    description: "Classwork 3",
    code: `
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
    `,
  },
  {
    id: 3,
    title: "Boxes.html",
    description: "Classwork 4",
    code: `
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
    `,
  },
  {
    id: 3,
    title: "Boxes.css",
    description: "Classwork 4",
    code: `
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
    `,
  },

  /* */
];
