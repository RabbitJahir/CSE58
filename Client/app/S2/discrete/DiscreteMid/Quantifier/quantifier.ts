export type Snippet = {
  id: number;
  title: string;
  description: string;
  code: string;
};

export const quantifier: Snippet[] = [
  // ------------------ UNIVERSAL QUANTIFIERS ------------------
  {
    id: 1,
    title: "universal 1",
    description: `Let x = any bird, CanFly(x) = "x can fly". Which propositional logic represents: "All birds can fly"?

A) ∃x CanFly(x)
B) ∀x CanFly(x)
C) ∀x (Bird(x) → CanFly(x))
D) ∃x (Bird(x) ∧ CanFly(x))`,
    code: `Correct answer: C. ∀x (Bird(x) → CanFly(x))`,
  },
  {
    id: 2,
    title: "universal 2",
    description: `Let x = student, HasNotebook(x) = "x has a notebook". Which logic represents: "Every student in this class has a notebook"?

A) ∃x HasNotebook(x)
B) ∀x HasNotebook(x)
C) ∀x (Student(x) → HasNotebook(x))
D) ∃x (Student(x) ∧ HasNotebook(x))`,
    code: `Correct answer: C. ∀x (Student(x) → HasNotebook(x))`,
  },
  {
    id: 3,
    title: "universal 3",
    description: `Let x = car, HasWheels(x) = "x has wheels". Which logic represents: "All cars have wheels"?

A) ∀x (Car(x) → HasWheels(x))
B) ∃x (Car(x) ∧ HasWheels(x))
C) ∀x HasWheels(x)
D) ∃x HasWheels(x)`,
    code: `Correct answer: A. ∀x (Car(x) → HasWheels(x))`,
  },
  {
    id: 4,
    title: "universal 4",
    description: `Let x = prime number, Odd(x) = "x is odd". Which logic represents: "Every prime number greater than 2 is odd"?

A) ∀x (Prime(x) → Odd(x))
B) ∀x ((Prime(x) ∧ x > 2) → Odd(x))
C) ∃x (Prime(x) ∧ Odd(x))
D) ∀x (Odd(x) → Prime(x))`,
    code: `Correct answer: B. ∀x ((Prime(x) ∧ x > 2) → Odd(x))`,
  },
  {
    id: 5,
    title: "universal 5",
    description: `Let x = professor, TeachesLogic(x) = "x teaches logic", Mathematician(x) = "x is a mathematician". Which logic represents: "All professors who teach logic are mathematicians"?

A) ∀x (Professor(x) → Mathematician(x))
B) ∀x ((Professor(x) ∧ TeachesLogic(x)) → Mathematician(x))
C) ∃x ((Professor(x) ∧ TeachesLogic(x)) → Mathematician(x))
D) ∀x (Mathematician(x) → Professor(x))`,
    code: `Correct answer: B. ∀x ((Professor(x) ∧ TeachesLogic(x)) → Mathematician(x))`,
  },
  {
    id: 6,
    title: "universal 6",
    description: `Let x = country, CapitalOf(y,x) = "y is capital of x". Which logic represents: "Every country in Europe has a capital city"?

A) ∀x ∃y CapitalOf(y,x)
B) ∃y ∀x CapitalOf(y,x)
C) ∀x CapitalOf(y,x)
D) ∃x ∃y CapitalOf(y,x)`,
    code: `Correct answer: A. ∀x ∃y CapitalOf(y,x)`,
  },
  {
    id: 7,
    title: "universal 7",
    description: `Let x = natural number, Successor(y,x) = "y is successor of x". Which logic represents: "All natural numbers have a successor"?

A) ∃y ∀x Successor(y,x)
B) ∀x ∃y Successor(y,x)
C) ∀x Successor(y,x)
D) ∃x ∃y Successor(y,x)`,
    code: `Correct answer: B. ∀x ∃y Successor(y,x)`,
  },
  {
    id: 8,
    title: "universal 8",
    description: `Let x = person, ParentOf(y,x) = "y is parent of x". Which logic represents: "Every person has at least one parent"?

A) ∀x ∃y ParentOf(y,x)
B) ∃y ∀x ParentOf(y,x)
C) ∀x ParentOf(y,x)
D) ∃x ∃y ParentOf(y,x)`,
    code: `Correct answer: A. ∀x ∃y ParentOf(y,x)`,
  },

  // ------------------ EXISTENTIAL QUANTIFIERS ------------------
  {
    id: 9,
    title: "existential 1",
    description: `Let x = cat, InGarden(x) = "x is in the garden". Which logic represents: "There is a cat in the garden"?

A) ∀x InGarden(x)
B) ∃x (Cat(x) ∧ InGarden(x))
C) ∃x Cat(x)
D) ∀x (Cat(x) → InGarden(x))`,
    code: `Correct answer: B. ∃x (Cat(x) ∧ InGarden(x))`,
  },
  {
    id: 10,
    title: "existential 2",
    description: `Let x = student, PassedExam(x) = "x passed the exam". Which logic represents: "Some students passed the exam"?

A) ∃x (Student(x) ∧ PassedExam(x))
B) ∀x (Student(x) → PassedExam(x))
C) ∃x PassedExam(x)
D) ∀x PassedExam(x)`,
    code: `Correct answer: A. ∃x (Student(x) ∧ PassedExam(x))`,
  },
  {
    id: 11,
    title: "existential 3",
    description: `Let x = book, OnTable(x) = "x is on the table". Which logic represents: "There is a book on the table"?

A) ∃x (Book(x) ∧ OnTable(x))
B) ∀x (Book(x) → OnTable(x))
C) ∃x OnTable(x)
D) ∀x OnTable(x)`,
    code: `Correct answer: A. ∃x (Book(x) ∧ OnTable(x))`,
  },
  {
    id: 12,
    title: "existential 4",
    description: `Let x = number, Even(x) = "x is even", Prime(x) = "x is prime". Which logic represents: "There is a number that is both even and prime"?

A) ∃x (Even(x) ∧ Prime(x))
B) ∀x (Even(x) ∧ Prime(x))
C) ∃x Even(x)
D) ∀x Prime(x)`,
    code: `Correct answer: A. ∃x (Even(x) ∧ Prime(x))`,
  },
  {
    id: 13,
    title: "existential 5",
    description: `Let x = student, y = problem, Solved(x,y) = "x solved y". Which logic represents: "There exists a student who has solved every problem in the set"?

A) ∃x ∀y (Problem(y) → Solved(x,y))
B) ∀y ∃x (Problem(y) → Solved(x,y))
C) ∃y ∀x (Solved(x,y))
D) ∀x ∃y (Solved(x,y))`,
    code: `Correct answer: A. ∃x ∀y (Problem(y) → Solved(x,y))`,
  },
  {
    id: 14,
    title: "existential 6",
    description: `Let x = city, InEurope(x) = "x is in Europe", ¬Rains(x) = "it never rains in x". Which logic represents: "There is a city in Europe where it never rains"?

A) ∃x (City(x) ∧ InEurope(x) ∧ ¬Rains(x))
B) ∀x (City(x) ∧ InEurope(x) → ¬Rains(x))
C) ∃x (City(x) ∨ ¬Rains(x))
D) ∀x (City(x) ∨ ¬Rains(x))`,
    code: `Correct answer: A. ∃x (City(x) ∧ InEurope(x) ∧ ¬Rains(x))`,
  },
  {
    id: 15,
    title: "existential 7",
    description: `Let x = professor, y = student, Teaches(x,y) = "x teaches y". Which logic represents: "Some professor teaches all the students in the class"?

A) ∃x ∀y (Student(y) → Teaches(x,y))
B) ∀x ∃y (Student(y) → Teaches(x,y))
C) ∃y ∀x (Teaches(x,y))
D) ∀y ∃x (Teaches(x,y))`,
    code: `Correct answer: A. ∃x ∀y (Student(y) → Teaches(x,y))`,
  },
  {
    id: 16,
    title: "existential 8",
    description: `Let x = number, x > 10. Which logic represents: "There exists a number greater than 10"?

A) ∀x (x > 10)
B) ∃x (x > 10)
C) ∃x (x ≤ 10)
D) ∀x (x ≤ 10)`,
    code: `Correct answer: B. ∃x (x > 10)`,
  },

  // ------------------ NESTED QUANTIFIERS ------------------
  {
    id: 17,
    title: "nested 1",
    description: `Let c = classroom, s = student, InClass(s,c) = "s in classroom c", Passed(s) = "s passed exam". Which logic represents: "Every classroom has at least one student who passed the exam"?

A) ∀c ∃s (InClass(s,c) ∧ Passed(s))
B) ∃s ∀c (InClass(s,c) ∧ Passed(s))
C) ∀s ∃c (InClass(s,c) ∧ Passed(s))
D) ∃c ∀s (InClass(s,c) ∧ Passed(s))`,
    code: `Correct answer: A. ∀c ∃s (InClass(s,c) ∧ Passed(s))`,
  },
  {
    id: 18,
    title: "nested 2",
    description: `Let c = country, x = person, Citizen(x,c) = "x is citizen of c", Voted(x) = "x voted". Which logic represents: "Every country has a citizen who voted"?

A) ∀c ∃x (Citizen(x,c) ∧ Voted(x))
B) ∃x ∀c (Citizen(x,c) ∧ Voted(x))
C) ∀x ∃c (Citizen(x,c) ∧ Voted(x))
D) ∃c ∀x (Citizen(x,c) ∧ Voted(x))`,
    code: `Correct answer: A. ∀c ∃x (Citizen(x,c) ∧ Voted(x))`,
  },
  {
    id: 19,
    title: "nested 3",
    description: `Let x = person, y = course, Enrolled(x,y) = "x is enrolled in y", Passed(x,y) = "x passed y". Which logic represents: "There is a student who passed every course"?

A) ∃x ∀y (Enrolled(x,y) → Passed(x,y))
B) ∀x ∃y (Enrolled(x,y) → Passed(x,y))
C) ∃y ∀x (Enrolled(x,y) → Passed(x,y))
D) ∀y ∃x (Enrolled(x,y) → Passed(x,y))`,
    code: `Correct answer: A. ∃x ∀y (Enrolled(x,y) → Passed(x,y))`,
  },
  {
    id: 20,
    title: "nested 4",
    description: `Let s = student, p = professor, Teaches(p,s) = "p teaches s", Likes(s,p) = "s likes p". Which logic represents: "Every student has a professor they like"?

A) ∀s ∃p (Teaches(p,s) ∧ Likes(s,p))
B) ∃p ∀s (Teaches(p,s) ∧ Likes(s,p))
C) ∀p ∃s (Teaches(p,s) ∧ Likes(s,p))
D) ∃s ∀p (Teaches(p,s) ∧ Likes(s,p))`,
    code: `Correct answer: A. ∀s ∃p (Teaches(p,s) ∧ Likes(s,p))`,
  },
  {
    id: 21,
    title: "nested 5",
    description: `Let x = city, y = country, CapitalOf(x,y) = "x is capital of y", BigCity(x) = "x is big". Which logic represents: "Every country has a big city as its capital"?

A) ∀y ∃x (CapitalOf(x,y) ∧ BigCity(x))
B) ∃x ∀y (CapitalOf(x,y) ∧ BigCity(x))
C) ∀x ∃y (CapitalOf(x,y) ∧ BigCity(x))
D) ∃y ∀x (CapitalOf(x,y) ∧ BigCity(x))`,
    code: `Correct answer: A. ∀y ∃x (CapitalOf(x,y) ∧ BigCity(x))`,
  },
  {
    id: 22,
    title: "nested 6",
    description: `Let x = employee, y = project, Assigned(x,y) = "x is assigned y", Completed(x,y) = "x completed y". Which logic represents: "There is an employee who completed every project"?

A) ∃x ∀y (Assigned(x,y) → Completed(x,y))
B) ∀x ∃y (Assigned(x,y) → Completed(x,y))
C) ∃y ∀x (Assigned(x,y) → Completed(x,y))
D) ∀y ∃x (Assigned(x,y) → Completed(x,y))`,
    code: `Correct answer: A. ∃x ∀y (Assigned(x,y) → Completed(x,y))`,
  },
  {
    id: 23,
    title: "nested 7",
    description: `Let x = student, y = club, Member(x,y) = "x is member of y", Leader(x,y) = "x is leader of y". Which logic represents: "Every student is a leader in some club"?

A) ∀x ∃y (Member(x,y) ∧ Leader(x,y))
B) ∃x ∀y (Member(x,y) ∧ Leader(x,y))
C) ∀y ∃x (Member(x,y) ∧ Leader(x,y))
D) ∃y ∀x (Member(x,y) ∧ Leader(x,y))`,
    code: `Correct answer: A. ∀x ∃y (Member(x,y) ∧ Leader(x,y))`,
  },
  {
    id: 24,
    title: "nested 8",
    description: `Let x = person, y = task, CanDo(x,y) = "x can do y", Assigned(x,y) = "x is assigned y". Which logic represents: "There is a person who can do every task they are assigned"?

A) ∃x ∀y (Assigned(x,y) → CanDo(x,y))
B) ∀x ∃y (Assigned(x,y) → CanDo(x,y))
C) ∃y ∀x (Assigned(x,y) → CanDo(x,y))
D) ∀y ∃x (Assigned(x,y) → CanDo(x,y))`,
    code: `Correct answer: A. ∃x ∀y (Assigned(x,y) → CanDo(x,y))`,
  },
];
