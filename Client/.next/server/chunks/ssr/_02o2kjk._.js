module.exports=[33354,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},33095,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},getImageProps:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(33354),g=a.r(94915),h=a.r(67161),i=f._(a.r(2305));function j(a){let{props:b}=(0,g.getImgProps)(a,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let k=h.Image},71987,(a,b,c)=>{b.exports=a.r(33095)},90128,a=>{"use strict";var b=a.i(87924),c=a.i(38246),d=a.i(71987);a.s(["default",0,function({links:a=[]}){return(0,b.jsxs)("header",{className:"s12header flex justify-between items-center p-4 bg-gray-900 text-white",children:[(0,b.jsx)("div",{className:"flex items-center",children:(0,b.jsx)(d.default,{src:"/favicon.ico",alt:"logo",width:32,height:32})}),(0,b.jsx)("div",{className:"flex flex-wrap gap-2",children:a.map(({href:a,label:d,className:e},f)=>(0,b.jsx)(c.default,{href:a,className:e||"px-4 py-2 rounded bg-gray-700 hover:bg-gray-600",children:d},f))})]})}])},81938,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(90128);let e=[{id:1,title:"Basic understanding",description:"understanding the entry line of java",code:`
public class basic1 {
  public static void main(String[] args){
    // class: name and file name must be exact.
    // public: is a type of class, anyone can access it .
    // static: is a type of class too that does not need any type of calling, runs on it's own.
    // void: returns nothing.
    // main: the word java looks for, to start it's code.  
    //main(): anything with open and close parenthesis is a method.
    //java runs bottom to top.

    System.out.println("printing");
    System.out.print("printing");

    //println prints a new line after printing.
    
  }
}`},{id:2,title:"Input",description:"Basic Input",code:`
import java.util.Scanner;

public class basic_input {
  public static void main(String[] args){

    Scanner input = new Scanner(System.in); 
    //Scanner is the class
    //input: a varibale for the class.
    //new: a keyword that makes memory for
    //Scanner(): constructor.
    //System.in: The work this class does. System.input, takes input.

    float num = input.nextFloat();
    input.nextLine(); //To consume 

    String name = input.nextLine();

    System.out.println("when using a num : " + num + " before string : "+name+", better to use a scanner, because int and float tends to leak the 
 after that lingers to the next String.");

    System.out.print(500/2+"
");
    System.out.printf("%d
", 50+60);

    input.close(); //!!!!!!!! MUST be CLOSED!!!!!!!!!!!!
  }
}
    `},{id:3,title:"Copy constructor",description:"one constructor being called in another",code:`
class copy_main{
  String name;
  int id;

  copy_main(String n, int roll){
    name = n;
    id = roll;
  }

  copy_main(copy_main first){
    this.id = first.id;
    this.name = first.name; // this is to define this scopes. first calls the id and name provided in first variable.
  }

  void display(){
    System.out.println(name + id);
  }
  public static void main(String[] args){

    copy_main first = new copy_main("Rabbit", 1006);
    copy_main second = new copy_main(first); 

    first.display();
    second.display();
  }
}
    `},{id:4,title:"Constructor Overloading",description:"same constructor different parameter list",code:`
//overloading is using one class to print different methods, through different arguements or parameters
//this is constructor overloading.
class Room {
  float length, breadth;

  Room(float x, float y){ 
    length = x;
    breadth = x;
  }

  Room(float x){
    length = breadth = x;
  }

  float area(){
    return (length*breadth);
  }
}

public class overloading_1 {
  public static void main(String[] args){
    float length = 5, breadth = 7;

    Room room1 = new Room(length, breadth); //using more than one constructor in same class
    Room room2 = new Room(length);

    System.out.println(room1.area());
    System.out.println(room2.area());

  }
}
    `},{id:5,title:"private",description:"showing how to call private method, simple if and switch functions",code:`
import java.util.Scanner;

class Student_details{
  String name;
  String mail;
  private int number; //privated, so cant show normally

  Student_details(String n, String m, int num){
    name =n;
    mail =m;
    number =num;
  }

   void showNumber(){
    System.out.println(number); //need to use method to show
  }
}

public class modifier1 {
  public static void main(String[] args){
    
    Scanner input = new Scanner(System.in);

    System.out.print("Enter your name: ");
      String name = input.nextLine();
    System.out.print("Enter your mail: ");
      String mail = input.nextLine();
    System.out.print("Enter your number: ");
      int number = input.nextInt();

    Student_details student1 = new Student_details(name, mail, number); //sending to class

    System.out.println(student1.name);
    System.out.println(student1.mail);

    System.out.print("
Only teachers are allowed to see student numbers. 
Enter 1 if you are a teacher, 0 if you are not: ");
    
    int teacher = input.nextInt();
    input.nextLine();

    switch (teacher){
      case 1: 
        System.out.print("Enter password: ");
        String password = input.nextLine();

          if(("helo").equals(password)) //String .equals input
            student1.showNumber(); //calls the method
          else 
            System.out.println("seriously?");
        break;

      case 0: 
        System.out.println("alright");
        break;
    
    default: // if any of the case does not match
      System.out.println("dumb much?");
      break;
    }


    input.close();
  }
}
    `}],f=[{href:"/",label:"Home",className:"HeaderButton"},{href:"/S2",label:"S2 Page",className:"HeaderButton"},{href:"/S2/oop",label:"Oop Page",className:"HeaderButton"}];a.s(["default",0,function(){let[a,g]=(0,c.useState)(null),[h,i]=(0,c.useState)("");return(0,b.jsxs)("div",{children:[(0,b.jsx)(d.default,{links:f}),(0,b.jsxs)("main",{className:"main-box",children:[(0,b.jsx)("h1",{className:"page-header",children:"Java Codes"}),(0,b.jsx)("input",{type:"number",placeholder:"Search by ID",className:"w-full p-2 rounded border border-gray-400 mb-4 text-black",value:h,onChange:a=>i(a.target.value)}),e.filter(a=>""===h||a.id===Number(h)).map(c=>(0,b.jsxs)("div",{className:"bg-black/20 p-4 rounded-lg text-white backdrop-blur-sm",children:[(0,b.jsx)("h3",{className:"text-lg font-semibold",children:c.title}),(0,b.jsx)("pre",{className:"text-gray-300 mt-2 whitespace-pre-wrap",children:c.description}),(0,b.jsx)("button",{className:"HeaderButton mt-3",onClick:()=>{let b;return g(a===(b=c.id)?null:b)},children:a===c.id?"Hide Solution ▲":"Show Solution ▼"}),a===c.id&&(0,b.jsxs)("div",{className:"mt-3 bg-black/40 p-3 rounded",children:[(0,b.jsx)("h4",{className:"font-semibold text-yellow-400 mb-2",children:"Solution"}),(0,b.jsx)("pre",{className:"whitespace-pre-wrap text-gray-200",children:c.code}),(0,b.jsx)("button",{className:"mt-2 bg-yellow-500 text-black px-2 py-1 rounded hover:bg-yellow-400",onClick:()=>{var a;return a=c.code,void(navigator.clipboard.writeText(a),alert("Code copied!"))},children:"Copy"})]})]},c.id))]})]})}],81938)}];

//# sourceMappingURL=_02o2kjk._.js.map