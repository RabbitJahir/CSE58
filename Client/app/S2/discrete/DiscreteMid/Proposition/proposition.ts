export type Snippet = {
  id: number;
  title: string;
  description: string;
  code: string;
};

export const proposition: Snippet[] = [
  {
    id: 1,
    title: "1",
    description: `What is the truth value of the proposition: 5 > 3?

A) True
B) False
C) Cannot determine
D) Depends on context`,
    code: `The proposition '5 > 3' is True, so the correct answer is A.`,
  },
  {
    id: 2,
    title: "2",
    description: `Express in symbolic form: "If it rains, I will take an umbrella."

A) p ∨ q
B) p ∧ q
C) p → q
D) ¬p ∨ ¬q`,
    code: `Let p = "It rains", q = "I will take an umbrella". The symbolic form is p → q, so the correct answer is C.`,
  },
  {
    id: 3,
    title: "3",
    description: `What is the truth value of p ∧ q when p = True and q = False?

A) True
B) False
C) Cannot determine
D) Both True and False`,
    code: `p ∧ q evaluates to False because True AND False is False. Correct answer: B.`,
  },
  {
    id: 4,
    title: "4",
    description: `Determine the truth value of ¬(p ∨ q) if p = True and q = False.

A) True
B) False
C) Cannot determine
D) Both True and False`,
    code: `p ∨ q = True, so ¬(p ∨ q) = False. Correct answer: B.`,
  },
  {
    id: 5,
    title: "5",
    description: `Write the negation of: "All cats are black."

A) No cat is black
B) Some cats are not black
C) All cats are white
D) Some cats are black`,
    code: `The negation is: "Some cats are not black." Correct answer: B.`,
  },
  {
    id: 6,
    title: "6",
    description: `Is p → q equivalent to ¬p ∨ q?

A) ¬p ∧ q
B) ¬p ∨ q
C) p ∧ ¬q
D) ¬p ∧ ¬q`,
    code: `Yes, by the definition of implication, p → q is logically equivalent to ¬p ∨ q. Correct answer: B.`,
  },
  {
    id: 7,
    title: "7",
    description: `Determine if p ∨ ¬p is a tautology, contradiction, or neither.

A) Tautology
B) Contradiction
C) Neither
D) Depends on p`,
    code: `p ∨ ¬p is a tautology because it is always True regardless of p. Correct answer: A.`,
  },
  {
    id: 8,
    title: "8",
    description: `Express in English: ¬(p ∧ q)

A) p or q
B) Not p and q
C) Not p or not q
D) Not p or q`,
    code: `¬(p ∧ q) is "Not p or not q" by De Morgan's law. Correct answer: C.`,
  },
  {
    id: 9,
    title: "9",
    description: `Find the truth value of (p → q) ∧ (q → p) if p = False and q = True.

A) True
B) False
C) Cannot determine
D) Both True and False`,
    code: `(p → q) = True, (q → p) = False, so the conjunction is False. Correct answer: B.`,
  },
  {
    id: 10,
    title: "10",
    description: `Convert ¬(p ∨ q) into conjunctive normal form (CNF).

A) ¬p ∨ ¬q
B) ¬p ∧ ¬q
C) p ∧ q
D) p ∨ q`,
    code: `By De Morgan's law, ¬(p ∨ q) = ¬p ∧ ¬q. Correct answer: B.`,
  },
  {
    id: 11,
    title: "11",
    description: `Determine if (p → q) ↔ (¬q → ¬p) is a tautology.

A) Tautology
B) Contradiction
C) Neither
D) Depends on p and q`,
    code: `Yes, it is a tautology because an implication is always equivalent to its contrapositive. Correct answer: A.`,
  },
  {
    id: 12,
    title: "12",
    description: `Simplify ¬(p ∨ (¬p ∧ q)) using logical equivalences.

A) ¬p ∧ ¬q
B) ¬p ∨ ¬q
C) p ∧ ¬q
D) p ∨ q`,
    code: `¬(p ∨ (¬p ∧ q)) simplifies to ¬p ∧ ¬q. Correct answer: A.`,
  },
  {
    id: 13,
    title: "13",
    description: `Is the compound proposition (p ∨ q) ∧ (¬p ∨ r) ∧ (¬q ∨ ¬r) satisfiable?

A) Yes
B) No
C) Only if p = True
D) Cannot determine`,
    code: `Yes, it is satisfiable. For example, p = True, q = False, r = True satisfies all clauses. Correct answer: A.`,
  },
  {
    id: 14,
    title: "14",
    description: `Express "Exactly one of p, q, r is true" using propositional logic symbols.

A) p ∧ q ∧ r
B) (p ∧ ¬q ∧ ¬r) ∨ (¬p ∧ q ∧ ¬r) ∨ (¬p ∧ ¬q ∧ r)
C) p ∨ q ∨ r
D) (p ∧ q) ∨ (q ∧ r) ∨ (p ∧ r)`,
    code: `Exactly one is true if only one variable is True at a time, expressed as B.`,
  },
  {
    id: 15,
    title: "15",
    description: `Determine if (p → q) ∧ (q → r) → (p → r) is a tautology.

A) Tautology
B) Contradiction
C) Neither
D) Depends on values`,
    code: `Yes, it is a tautology by the transitivity of implication. Correct answer: A.`,
  },
  {
    id: 16,
    title: "16",
    description: `Translate: "If the battery is dead, the car won’t start. The car starts. Therefore, the battery is not dead."

A) ¬p
B) p
C) q
D) ¬q`,
    code: `Let p = "Battery is dead", q = "Car starts". Given q = True, by contrapositive, battery is not dead. Correct answer: A.`,
  },
  {
    id: 17,
    title: "17",
    description: `Simplify ¬(p ∧ ¬q) ∨ (¬p ∧ q) using De Morgan’s laws.

A) ¬p ∨ q
B) p ∨ ¬q
C) p ∧ q
D) ¬p ∧ ¬q`,
    code: `¬(p ∧ ¬q) ∨ (¬p ∧ q) simplifies to ¬p ∨ q. Correct answer: A.`,
  },
  {
    id: 18,
    title: "18",
    description: `Are p ↔ q and (p ∧ q) ∨ (¬p ∧ ¬q) logically equivalent?

A) Yes
B) No
C) Only if p = True
D) Only if q = True`,
    code: `Yes, p ↔ q is defined as (p ∧ q) ∨ (¬p ∧ ¬q). Correct answer: A.`,
  },
  {
    id: 19,
    title: "19",
    description: `Determine the truth value of [(p → q) ∧ (r ∨ ¬q)] → (p → r) if p = True, q = False, r = True.

A) True
B) False
C) Cannot determine
D) Both`,
    code: `Evaluating step by step, the expression is True. Correct answer: A.`,
  },
  {
    id: 20,
    title: "20",
    description: `Express p ∨ (q → r) using only ∧ and ¬ (no ∨, →, ↔).

A) ¬(¬p ∧ (q ∧ ¬r))
B) ¬p ∧ (q ∧ ¬r)
C) ¬(¬p ∨ (¬q ∧ r))
D) p ∧ (¬q ∨ r)`,
    code: `q → r is ¬q ∨ r, so p ∨ (q → r) = p ∨ (¬q ∨ r) = ¬(¬p ∧ (q ∧ ¬r)). Correct answer: A.`,
  },
];
