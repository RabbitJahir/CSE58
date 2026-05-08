export type Snippet = {
  id: number;
  title: string;
  description: string;
  code: string;
};

export const Codes: Snippet[] = [
  {
    id: 1,
    title: "1) Basic understanding",
    description: "understanding the entry line of java",
    code: `
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
}`,
  },
  {
    id: 2,
    title: "2) Input",
    description: "Basic Input",
    code: `
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
    input.nextLine(); //To consume \n
    String name = input.nextLine();

    System.out.println("when using a num : " + num + " before string : "+name+", better to use a scanner, because int and float tends to leak the \n after that lingers to the next String.");

    System.out.print(500/2+"\n");
    System.out.printf("%d\n", 50+60);

    input.close(); //!!!!!!!! MUST be CLOSED!!!!!!!!!!!!
  }
}
    `,
  },
  {
    id: 3,
    title: "3) Copy constructor",
    description: "one constructor being called in another",
    code: `
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
    `,
  },
  {
    id: 4,
    title: "4) Constructor Overloading",
    description: "same constructor different parameter list",
    code: `
//overloading is using one class to print different methods, through different arguements or parameters
//this is constructor overloading.
class Room {
  float length, breadth;

  Room(float x, float y){ 
    length = x;
    breadth = y;
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
    `,
  },
  {
    id: 5,
    title: "5) private",
    description:
      "showing how to call private method, simple if and switch functions",
    code: `
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

    System.out.print("\nOnly teachers are allowed to see student numbers. \nEnter 1 if you are a teacher, 0 if you are not: ");
    
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
    `,
  },

  /* */
  {
    id: 6,
    title: "Hybrid ",
    description: "double classes",
    code: `
      interface Eat {
    void eat();
}

interface Sleep {
    void sleep();
}

interface Play {
    void play();
}

abstract class Animal implements Eat, Sleep, Play {

    String name;

    Animal(String name) {
        this.name = name;
    }

    void showName() {
        System.out.println("Animal: " + name);
    }
}

class Dog extends Animal {

    Dog(String name) {
        super(name);
    }
    
    @Override
    public void eat() {
        System.out.println(name + " is eating");
    }

    @Override
    public void sleep() {
        System.out.println(name + " is sleeping");
    }

    @Override
    public void play() {
        System.out.println(name + " is playing");
    }
}

class Parrot extends Animal {

    Parrot(String name) {
        super(name);
    }

    @Override
    public void eat() {
        System.out.println(name + " is eating");
    }

    @Override
    public void sleep() {
        System.out.println(name + " is sleeping");
    }

    @Override
    public void play() {
        System.out.println(name + " is playing");
    }
}

public class advanced1 {

    public static void main(String[] args) {

        Dog dog = new Dog("Dog name: Holio");
        Parrot parrot = new Parrot("Parrot name: Diver");

        dog.showName();
        dog.eat();
        dog.sleep();
        dog.play();

        System.out.println();

        parrot.showName();
        parrot.eat();
        parrot.sleep();
        parrot.play();
    }
}
    `,
  },

  {
    id: 6,
    title: "inhertiance",
    description: "simple inheritance",
    code: `
      package inheritance;

class Animal{
    String animalName;

    Animal(String animalName){
        this.animalName = animalName;
    }
    void animalName(){
        System.out.println(animalName); 
    }
}

class Bird extends Animal{
    String birdName;

    Bird(String animalName, String birdName){
        super(animalName);
        this.birdName = birdName;
    }
    void animalName(){
        super.animalName();
        System.out.println(birdName); 
    }
}

public class start1{
    public static void main(String[] args){
        Bird bird1 = new Bird("Bird", "Eagle");

        bird1.animalName();
    }
}
    `,
  },
  {
    id: 7,
    title: "hierchical inheritnace",
    description: "simple inheritance",
    code: `
      package inheritance;

class Calc1{
    int a , b, sum;
    void calcSum(int a, int b){
        sum = a+b;
        System.out.println(sum);
    }
}

class Calc2 extends Calc1{
    int a,b,minus;
    void calcMinus(int a, int b){
        minus = a-b;
        System.out.println(minus);
    }
}

class Calc3 extends Calc2{
    int a,b,multi;
    void calcMulti(int a, int b){
        multi = a*b;
        System.out.println(multi);
    }
}


public class start {
    public static void main(String[] args) {

        Calc3 calc = new Calc3();

        calc.calcSum(4,5);
        calc.calcMinus(4,5);
        calc.calcMulti(4,5);

    }
}

    `,
  },
  {
    id: 8,
    title: "Multiple inheritance",
    description: "Make a new Student object and pass parameters",
    code: `
      package inheritance;

class Person{
    String name;
    int id;
    Person(String name, int id){
        this.name = name;
        this.id = id;
    }
    public void displayInfo(){
        System.out.println(name +": "+ id);
    }
}

class Student extends Person{
    String course;
    float cgpa;
    Student(String name, int id, String course, float cgpa){
        super(name, id);
        this.course = course;
        this.cgpa = cgpa;
    }
    @Override
    public void displayInfo(){
        System.out.println("Student details: ");
        super.displayInfo();
        System.out.println(course + cgpa);
    }
}

class Teacher extends Person{
    String course;
    double salary;
    Teacher(String name, int id, String course, double salary){
        super(name, id);
        this.course = course;
        this.salary = salary;
    }
    @Override
    public void displayInfo(){
        System.out.println("Teacher details: ");
        super.displayInfo();
        System.out.println(course + salary);
    }
}


public class start3{
    public static void main(String[] args){
        Teacher teacher = new Teacher("Name", 1234, "CSe", 1235);

        teacher.displayInfo();
    }
}
    `,
  },
];
