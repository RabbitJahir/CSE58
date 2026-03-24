export type Snippet = {
  id: number;
  title: string;
  description: string;
  code: string;
};

export const englogic: Snippet[] = [
  {
    id: 1,
    title: "1",
    description: `Let s = "It is sunny", p = "I will go to the park". Which propositional logic expression correctly represents: "I will go if it is sunny"?

A) p ∧ s
B) s → p
C) p → s
D) ¬p ∨ ¬s`,
    code: `"I will go if it is sunny" means "If s then p", which is s → p. Correct answer: B.`,
  },
  {
    id: 2,
    title: "2",
    description: `Let w = "I finish my work", h = "I will be happy". Which expression represents: "I will be happy only if I finish my work"?

A) w → h
B) h → w
C) ¬h → ¬w
D) h ∧ w`,
    code: `"Only if" translates to h → w. Correct answer: B.`,
  },
  {
    id: 3,
    title: "3",
    description: `Let p = "I eat pizza", q = "I eat pasta". Which expression represents: "I will eat pizza or pasta tonight"?

A) p ∧ q
B) p ∨ q
C) ¬p ∨ q
D) ¬p ∧ ¬q`,
    code: `"Or" in English is inclusive OR: p ∨ q. Correct answer: B.`,
  },
  {
    id: 4,
    title: "4",
    description: `Let s = "I go to school". Which expression represents: "I will not go to school"?

A) ¬s
B) s
C) s → ¬s
D) ¬s → s`,
    code: `Negation of s is ¬s. Correct answer: A.`,
  },
  {
    id: 5,
    title: "5",
    description: `Let s = "I will go swimming", j = "I will go jogging". Which expression represents: "I will go swimming and I will go jogging"?

A) s ∨ j
B) s ∧ j
C) s → j
D) ¬s ∧ ¬j`,
    code: `"And" translates to ∧: s ∧ j. Correct answer: B.`,
  },
  {
    id: 6,
    title: "6",
    description: `Let p = "I pass the exam", s = "I study". Which expression represents: "I will pass the exam if and only if I study"?

A) p → s
B) s → p
C) p ↔ s
D) ¬p ∨ ¬s`,
    code: `"If and only if" is biconditional: p ↔ s. Correct answer: C.`,
  },
  {
    id: 7,
    title: "7",
    description: `Let t = "I watch TV", b = "I read a book". Which expression represents: "Either I will watch TV or I will read a book"?

A) t ∧ b
B) t ∨ b
C) ¬t ∨ ¬b
D) t → b`,
    code: `"Either…or" in inclusive sense is t ∨ b. Correct answer: B.`,
  },
  {
    id: 8,
    title: "8",
    description: `Let p = "I go to the party", f = "My friend goes to the party". Which expression represents: "I will not go to the party unless my friend goes"?

A) f → p
B) p → f
C) ¬f → ¬p
D) ¬p → ¬f`,
    code: `"Unless" translates to "if not f then not p", equivalent to p → f. Correct answer: B.`,
  },
  {
    id: 9,
    title: "9",
    description: `Let a = "Car is affordable", m = "I have money", c = "I buy a car". Which expression represents: "I will buy a car if it is affordable and I have money"?

A) a ∧ m → c
B) c → a ∧ m
C) a ∨ m → c
D) c → a ∨ m`,
    code: `(a ∧ m) → c. Correct answer: A.`,
  },
  {
    id: 10,
    title: "10",
    description: `Let t = "I am tired", s = "I sleep", u = "I study". Which expression represents: "If I am tired, I will sleep; otherwise I will study"?

A) t → s ∧ ¬t → u
B) t → s ∨ ¬t → u
C) s → t ∧ u → ¬t
D) t → s ↔ ¬t → u`,
    code: `(t → s) ∧ (¬t → u). Correct answer: A.`,
  },
  {
    id: 11,
    title: "11",
    description: `Let i = "Eat ice cream", c = "Eat cake", s = "Eat soda". Which expression represents: "I will buy ice cream and cake, but not soda"?

A) i ∧ c ∧ ¬s
B) i ∨ c ∨ s
C) i ∧ (c ∨ ¬s)
D) (i ∨ c) ∧ ¬s`,
    code: `i ∧ c ∧ ¬s. Correct answer: A.`,
  },
  {
    id: 12,
    title: "12",
    description: `Let a = "Alice is present", b = "Bob is present". Which expression represents: "It is not the case that both Alice and Bob are present"?

A) ¬(a ∧ b)
B) ¬a ∧ ¬b
C) ¬a ∨ ¬b
D) a ∧ b`,
    code: `¬(a ∧ b). Correct answer: A.`,
  },
  {
    id: 13,
    title: "13",
    description: `Let j = "I go jogging", s = "I go swimming". Which expression represents: "I will go jogging or I will go swimming, but not both"?

A) j ∨ s
B) (j ∨ s) ∧ ¬(j ∧ s)
C) j ∧ s
D) ¬j ∨ ¬s`,
    code: `(j ∨ s) ∧ ¬(j ∧ s). Correct answer: B.`,
  },
  {
    id: 14,
    title: "14",
    description: `Let r = "It rains", c = "It is cold", h = "I stay home". Which expression represents: "If it rains or it is cold, I will stay home"?

A) (r ∨ c) → h
B) h → (r ∨ c)
C) (r ∧ c) → h
D) ¬r ∨ ¬c → h`,
    code: `(r ∨ c) → h. Correct answer: A.`,
  },
  {
    id: 15,
    title: "15",
    description: `Let m = "I watch a movie", s = "My sister watches with me". Which expression represents: "I will watch a movie only if my sister watches with me"?

A) m → s
B) s → m
C) m ↔ s
D) ¬s → ¬m`,
    code: `Only if translates to m → s. Correct answer: A.`,
  },
  {
    id: 16,
    title: "16",
    description: `Let p = "I go to the party", f = "Friends go to the party". Which expression represents: "I will go to the party if and only if my friends go"?

A) p → f
B) f → p
C) p ↔ f
D) ¬p ∧ ¬f`,
    code: `If and only if is biconditional: p ↔ f. Correct answer: C.`,
  },
  {
    id: 17,
    title: "17",
    description: `Let e = "I exercise", h = "I will be healthy", t = "I will be tired". Which expression represents: "If I exercise, I will be healthy; if I do not exercise, I will be tired"?

A) e → h ∧ ¬e → t
B) e → h ∨ ¬e → t
C) e → t ∧ ¬e → h
D) h → e ∧ t → ¬e`,
    code: `(e → h) ∧ (¬e → t). Correct answer: A.`,
  },
  {
    id: 18,
    title: "18",
    description: `Let s = "I study", l = "I sleep". Which expression represents: "I will either study or sleep, but not neither"?

A) s ∨ l
B) s ∨ l ∧ ¬(¬s ∧ ¬l)
C) s ∧ l
D) ¬s ∨ ¬l`,
    code: `s ∨ l. Correct answer: A.`,
  },
  {
    id: 19,
    title: "19",
    description: `Let f = "I am full", b = "It is my birthday", d = "I eat dessert". Which expression represents: "I will eat dessert if I am full or it is my birthday"?

A) f ∨ b → d
B) (f ∨ b) → d
C) d → f ∨ b
D) ¬f ∧ ¬b → d`,
    code: `(f ∨ b) → d. Correct answer: B.`,
  },
  {
    id: 20,
    title: "20",
    description: `Let s = "It snows", c = "School closes", o = "School opens". Which expression represents: "If it snows, the school will close; otherwise, it will open"?

A) s → c ∧ ¬s → o
B) s → c ∨ ¬s → o
C) s → o ∧ ¬s → c
D) c → s ∧ o → ¬s`,
    code: `(s → c) ∧ (¬s → o). Correct answer: A.`,
  },
  {
    id: 21,
    title: "21",
    description: `Let s = "It is sunny", p = "I will go to the park". Which English sentence corresponds to the expression: s → p?

A) I will go to the park if it is sunny
B) If I go to the park, it is sunny
C) I will go to the park only if it is sunny
D) I will not go to the park if it is sunny`,
    code: `s → p translates to "If it is sunny, then I will go to the park". Correct answer: A.`,
  },
  {
    id: 22,
    title: "22",
    description: `Let h = "I will be happy", w = "I finish my work". Which English sentence corresponds to h → w?

A) I will be happy only if I finish my work
B) I will finish my work only if I am happy
C) I will be happy if I finish my work
D) I will not be happy if I finish my work`,
    code: `h → w translates to "I will be happy only if I finish my work". Correct answer: A.`,
  },
  {
    id: 23,
    title: "23",
    description: `Let p = "I eat pizza", q = "I eat pasta". Which English sentence corresponds to p ∨ q?

A) I will eat pizza and pasta
B) I will eat pizza or pasta
C) I will not eat pizza or pasta
D) If I eat pizza, then I eat pasta`,
    code: `p ∨ q means "I will eat pizza or pasta". Correct answer: B.`,
  },
  {
    id: 24,
    title: "24",
    description: `Let s = "I go to school". Which English sentence corresponds to ¬s?

A) I will go to school
B) I will not go to school
C) I might go to school
D) I will go to school only if I am sick`,
    code: `¬s means "I will not go to school". Correct answer: B.`,
  },
  {
    id: 25,
    title: "25",
    description: `Let s = "I will go swimming", j = "I will go jogging". Which English sentence corresponds to s ∧ j?

A) I will go swimming or I will go jogging
B) I will go swimming and I will go jogging
C) If I go swimming, I will go jogging
D) I will go swimming unless I go jogging`,
    code: `s ∧ j means "I will go swimming and I will go jogging". Correct answer: B.`,
  },
  {
    id: 26,
    title: "26",
    description: `Let p = "I pass the exam", s = "I study". Which English sentence corresponds to p ↔ s?

A) I will pass the exam if I study
B) I will pass the exam only if I study
C) I will pass the exam if and only if I study
D) I will pass the exam unless I study`,
    code: `p ↔ s means "I will pass the exam if and only if I study". Correct answer: C.`,
  },
  {
    id: 27,
    title: "27",
    description: `Let t = "I watch TV", b = "I read a book". Which English sentence corresponds to t ∨ b?

A) I will watch TV or read a book
B) I will watch TV and read a book
C) I will not watch TV or read a book
D) I will watch TV only if I read a book`,
    code: `t ∨ b translates to "I will watch TV or read a book". Correct answer: A.`,
  },
  {
    id: 28,
    title: "28",
    description: `Let p = "I go to the party", f = "My friend goes". Which English sentence corresponds to p → f?

A) I will go to the party unless my friend goes
B) I will go to the party if my friend goes
C) If I go to the party, my friend will go
D) If my friend goes, I will go to the party`,
    code: `p → f translates to "I will go to the party if my friend goes". Correct answer: B.`,
  },
  {
    id: 29,
    title: "29",
    description: `Let a = "Car is affordable", m = "I have money", c = "I buy a car". Which English sentence corresponds to (a ∧ m) → c?

A) I will buy a car if it is affordable or I have money
B) I will buy a car if it is affordable and I have money
C) I will buy a car only if it is affordable and I have money
D) If I buy a car, then it is affordable and I have money`,
    code: `(a ∧ m) → c translates to "I will buy a car if it is affordable and I have money". Correct answer: B.`,
  },
  {
    id: 30,
    title: "30",
    description: `Let t = "I am tired", s = "I sleep", u = "I study". Which English sentence corresponds to (t → s) ∧ (¬t → u)?

A) If I am tired, I will sleep; otherwise I will study
B) If I sleep, then I am tired
C) I will sleep and study if I am tired
D) If I am not tired, I will sleep; otherwise I will study`,
    code: `(t → s) ∧ (¬t → u) translates to "If I am tired, I will sleep; otherwise I will study". Correct answer: A.`,
  },
  {
    id: 31,
    title: "31",
    description: `Let i = "Eat ice cream", c = "Eat cake", s = "Eat soda". Which English sentence corresponds to i ∧ c ∧ ¬s?

A) I will eat ice cream and cake, but not soda
B) I will eat ice cream or cake, but not soda
C) I will eat ice cream, cake, and soda
D) I will eat ice cream or soda only`,
    code: `i ∧ c ∧ ¬s translates to "I will eat ice cream and cake, but not soda". Correct answer: A.`,
  },
  {
    id: 32,
    title: "32",
    description: `Let a = "Alice is present", b = "Bob is present". Which English sentence corresponds to ¬(a ∧ b)?

A) It is not the case that both Alice and Bob are present
B) Alice and Bob are both present
C) Either Alice or Bob is not present
D) Neither Alice nor Bob is present`,
    code: `¬(a ∧ b) means "It is not the case that both Alice and Bob are present". Correct answer: A.`,
  },
  {
    id: 33,
    title: "33",
    description: `Let j = "I go jogging", s = "I go swimming". Which English sentence corresponds to (j ∨ s) ∧ ¬(j ∧ s)?

A) I will go jogging or swimming, but not both
B) I will go jogging and swimming
C) I will go jogging or swimming, or both
D) I will neither go jogging nor swimming`,
    code: `(j ∨ s) ∧ ¬(j ∧ s) translates to "I will go jogging or swimming, but not both". Correct answer: A.`,
  },
  {
    id: 34,
    title: "34",
    description: `Let r = "It rains", c = "It is cold", h = "I stay home". Which English sentence corresponds to (r ∨ c) → h?

A) If it rains or it is cold, I will stay home
B) I will stay home only if it rains or is cold
C) I will stay home if it rains and is cold
D) If I stay home, then it rains or is cold`,
    code: `(r ∨ c) → h translates to "If it rains or it is cold, I will stay home". Correct answer: A.`,
  },
  {
    id: 35,
    title: "35",
    description: `Let m = "I watch a movie", s = "My sister watches". Which English sentence corresponds to m → s?

A) I will watch a movie only if my sister watches
B) If I watch a movie, my sister will not watch
C) I will watch a movie if my sister watches
D) My sister watches only if I watch a movie`,
    code: `m → s translates to "I will watch a movie only if my sister watches". Correct answer: A.`,
  },
  {
    id: 36,
    title: "36",
    description: `Let p = "I go to the party", f = "Friends go". Which English sentence corresponds to p ↔ f?

A) I will go to the party if and only if my friends go
B) I will go to the party if my friends go
C) If I go to the party, my friends go
D) I will go to the party unless my friends go`,
    code: `p ↔ f translates to "I will go to the party if and only if my friends go". Correct answer: A.`,
  },
  {
    id: 37,
    title: "37",
    description: `Let e = "I exercise", h = "I will be healthy", t = "I will be tired". Which English sentence corresponds to (e → h) ∧ (¬e → t)?

A) If I exercise, I will be healthy; if I do not exercise, I will be tired
B) I will be healthy if I exercise and tired if I do not exercise
C) I will be healthy if I exercise or tired if I do not exercise
D) If I do not exercise, I will be healthy`,
    code: `(e → h) ∧ (¬e → t) translates to "If I exercise, I will be healthy; if I do not exercise, I will be tired". Correct answer: A.`,
  },
  {
    id: 38,
    title: "38",
    description: `Let s = "I study", l = "I sleep". Which English sentence corresponds to s ∨ l?

A) I will either study or sleep
B) I will study and sleep
C) I will not study or sleep
D) I will study only if I sleep`,
    code: `s ∨ l translates to "I will either study or sleep". Correct answer: A.`,
  },
  {
    id: 39,
    title: "39",
    description: `Let f = "I am full", b = "It is my birthday", d = "I eat dessert". Which English sentence corresponds to (f ∨ b) → d?

A) I will eat dessert if I am full or it is my birthday
B) I will eat dessert only if I am full or it is my birthday
C) If I eat dessert, I am full or it is my birthday
D) I will not eat dessert if I am full or it is my birthday`,
    code: `(f ∨ b) → d translates to "I will eat dessert if I am full or it is my birthday". Correct answer: A.`,
  },
  {
    id: 40,
    title: "4x0",
    description: `Let s = "It snows", c = "School closes", o = "School opens". Which English sentence corresponds to (s → c) ∧ (¬s → o)?

A) If it snows, the school will close; otherwise it will open
B) If it snows, the school will open; otherwise it will close
C) If the school closes, it snows; otherwise it will open
D) The school opens only if it does not snow`,
    code: `(s → c) ∧ (¬s → o) translates to "If it snows, the school will close; otherwise it will open". Correct answer: A.`,
  },
];
