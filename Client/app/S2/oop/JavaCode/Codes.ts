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
];
