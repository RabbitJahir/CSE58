export type Snippet = {
  id: number;
  title: string;
  description: string;
  code: string;
};

export const set: Snippet[] = [
  {
    id: 1,
    title: "1",
    description: `Let A = {1,2,3}, B = {3,4,5}. What is A ∪ B?

A) {1,2,3}
B) {3,4,5}
C) {1,2,3,4,5}
D) {1,2,4,5}`,
    code: `Correct answer: C. A ∪ B = {1,2,3,4,5}`,
  },
  {
    id: 2,
    title: "2",
    description: `Let A = {1,2,3}, B = {2,3,4}. What is A ∩ B?

A) {1,2}
B) {2,3}
C) {3,4}
D) {1,4}`,
    code: `Correct answer: B. A ∩ B = {2,3}`,
  },
  {
    id: 3,
    title: "3",
    description: `Let U = {1,2,3,4,5}, A = {2,3}. What is the complement of A (A')?

A) {1,2}
B) {1,4,5}
C) {2,3}
D) {4,5}`,
    code: `Correct answer: B. A' = {1,4,5}`,
  },
  {
    id: 4,
    title: "4",
    description: `Let A = {1,2,3}, B = {3,4,5}. What is A - B?

A) {1,2,3,4,5}
B) {1,2}
C) {3}
D) {4,5}`,
    code: `Correct answer: B. A - B = {1,2}`,
  },
  {
    id: 5,
    title: "5",
    description: `If A = {1,2} and B = {1,2,3,4}, is A ⊆ B?

A) Yes
B) No
C) Only if B is finite
D) Cannot tell`,
    code: `Correct answer: A. A ⊆ B is true`,
  },
  {
    id: 6,
    title: "6",
    description: `Let A = {x | x is even, 1 ≤ x ≤ 6}, B = {x | x is prime, 1 ≤ x ≤ 6}. What is A ∩ B?

A) {2,3,5}
B) {2}
C) {4,6}
D) {1,2,3,4,5,6}`,
    code: `Correct answer: B. A ∩ B = {2}`,
  },
  {
    id: 7,
    title: "7",
    description: `Let A = {a,b}, B = {a,b,c}. Which statement is correct?

A) A ⊆ B
B) B ⊆ A
C) A ∩ B = {}
D) A ∪ B = A`,
    code: `Correct answer: A. A ⊆ B`,
  },
  {
    id: 8,
    title: "8",
    description: `Let U = {1,2,3,4,5,6}, A = {2,4,6}, B = {1,3,5}. What is A ∪ B?

A) {1,2,3,4,5,6}
B) {2,4,6}
C) {1,3,5}
D) {2,3,4,5,6}`,
    code: `Correct answer: A. A ∪ B = {1,2,3,4,5,6}`,
  },
  {
    id: 9,
    title: "9",
    description: `Let A = {1,2,3}, B = {3,4,5}, C = {1,5}. What is (A ∪ B) ∩ C?

A) {1,3,5}
B) {1,5}
C) {3}
D) {1,2,3,4,5}`,
    code: `Correct answer: B. (A ∪ B) ∩ C = {1,5}`,
  },
  {
    id: 10,
    title: "10",
    description: `Let A = {x | x is multiple of 2, 1 ≤ x ≤ 10}, B = {x | x is multiple of 3, 1 ≤ x ≤ 10}. What is A ∩ B?

A) {2,4,6,8,10}
B) {3,6,9}
C) {6}
D) {1,2,3}`,
    code: `Correct answer: C. A ∩ B = {6}`,
  },
  {
    id: 11,
    title: "11",
    description: `Let A = {1,2,3,4}, B = {3,4,5,6}, C = {4,5}. What is A - (B ∪ C)?

A) {1,2,3}
B) {1,2}
C) {4}
D) {5,6}`,
    code: `Correct answer: B. A - (B ∪ C) = {1,2}`,
  },
  {
    id: 12,
    title: "12",
    description: `Let U = {a,b,c,d,e}, A = {a,b}, B = {b,c}. What is (A ∪ B)'?

A) {a}
B) {d,e}
C) {c,d}
D) {a,c}`,
    code: `Correct answer: B. (A ∪ B)' = {d,e}`,
  },
  {
    id: 13,
    title: "13",
    description: `Let A = {x | x is odd, 1 ≤ x ≤ 10}, B = {1,2,3,4}. What is A ∩ B?

A) {1,3}
B) {2,4}
C) {1,2,3,4}
D) {5,7,9}`,
    code: `Correct answer: A. A ∩ B = {1,3}`,
  },
  {
    id: 14,
    title: "14",
    description: `Let A = {x | x ≤ 5}, B = {x | x ≥ 3}, x ∈ Z. What is A ∩ B?

A) {1,2,3,4,5}
B) {3,4,5}
C) {1,2}
D) {3,4,5,6}`,
    code: `Correct answer: B. A ∩ B = {3,4,5}`,
  },
  {
    id: 15,
    title: "15",
    description: `Let A = {1,2,3}, B = {2,3,4}, C = {3,4,5}. What is (A ∩ B) ∪ C?

A) {1,2,3,4,5}
B) {2,3,4}
C) {3,4}
D) {1,2,3}`,
    code: `Correct answer: A. (A ∩ B) ∪ C = {1,2,3,4,5}`,
  },
  {
    id: 16,
    title: "16",
    description: `Let U = {1,2,3,4,5,6}, A = {1,2,3}, B = {4,5,6}. What is (A ∪ B)'?

A) {}
B) {1,2,3,4,5,6}
C) {4,5,6}
D) {1,2,3}`,
    code: `Correct answer: A. (A ∪ B)' = {}`,
  },
  {
    id: 17,
    title: "17",
    description: `Let A = {1,2,3,4}, B = {3,4,5,6}. Which statement is true?

A) A ⊂ B
B) B ⊂ A
C) A ∩ B = {3,4}
D) A ∪ B = A`,
    code: `Correct answer: C. A ∩ B = {3,4}`,
  },
  {
    id: 18,
    title: "18",
    description: `Let A = {a,b,c}, B = {b,c,d}, C = {c,d,e}. What is (A ∪ B) ∩ C?

A) {c}
B) {b,c}
C) {c,d}
D) {a,b,c,d,e}`,
    code: `Correct answer: A. (A ∪ B) ∩ C = {c}`,
  },
  {
    id: 19,
    title: "19",
    description: `Let A = {x | x ≤ 3}, B = {x | x ≥ 2}, x ∈ Z. What is A ∪ B?

A) {1,2,3}
B) {2,3}
C) {1,2,3,4,5,...}
D) {1,2,3,4,5}`,
    code: `Correct answer: C. A ∪ B = {all integers ≥1}`,
  },
  {
    id: 20,
    title: "20",
    description: `Let A = {1,2,3,4}, B = {3,4,5,6}, C = {1,5,6}. What is (A - B) ∪ C?

A) {1,2,3,4,5,6}
B) {1,2,5,6}
C) {3,4,5,6}
D) {1,2,3}`,
    code: `Correct answer: B. (A - B) ∪ C = {1,2,5,6}`,
  },
];
