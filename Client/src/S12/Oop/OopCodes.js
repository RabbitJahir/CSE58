// src/data/oopCodes.js
export const oopCodes = [
  {
    id: 1,
    title: "Class Example",
    description: "Simple Java class with a constructor and display method",
    code: `public class Car {
    String model;
    int year;
    public Car(String model, int year) {
        this.model = model;
        this.year = year;
    }
    public void display() {
        System.out.println(model + " " + year);
    }
}`,
  },
  {
    id: 2,
    title: "Inheritance Example",
    description: "Demonstrates inheritance with Animal and Dog classes",
    code: `class Animal {
    void eat() {
        System.out.println("Eating...");
    }
}
class Dog extends Animal {
    void bark() {
        System.out.println("Barking...");
    }
}`,
  },
  {
    id: 3,
    title: "WTF",
    description: "NONE",
    code: `WOW`,
  },
  {
    id: 4,
    title: "WTF",
    description: "NONE",
    code: `WOW`,
  },
  

/* */
];
