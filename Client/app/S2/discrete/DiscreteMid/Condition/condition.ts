export type Snippet = {
  id: number;
  title: string;
  description: string;
  code: string;
};

export const condition: Snippet[] = [
  {
    id: 1,
    title: "1",
    description: `Consider the proposition: "If it rains, the ground will be wet." If it is raining, what can we conclude?

A) The ground is wet
B) The ground is not wet
C) Cannot determine
D) The sky is clear`,
    code: `Since the conditional "If it rains, then the ground is wet" is given and it is raining, we can conclude that the ground is wet. Correct answer: A.`,
  },
  {
    id: 2,
    title: "2",
    description: `Which of the following is the contrapositive of "If it rains, then the ground is wet"?

A) If the ground is wet, then it rains
B) If the ground is not wet, then it does not rain
C) If it does not rain, then the ground is not wet
D) If it does not rain, then it rains`,
    code: `The contrapositive of p → q is ¬q → ¬p. Here, p = "It rains", q = "Ground is wet", so contrapositive is "If the ground is not wet, then it does not rain." Correct answer: B.`,
  },
  {
    id: 3,
    title: "3",
    description: `Determine the truth value of the conditional: "If 2 + 2 = 5, then I am king."

A) True
B) False
C) Cannot determine
D) Sometimes true`,
    code: `A conditional p → q is always True if p is False. Since 2 + 2 = 5 is False, the conditional is True. Correct answer: A.`,
  },
  {
    id: 4,
    title: "4",
    description: `Which statement is contrapositive of "If I study, then I will pass the exam"?

A) If I pass the exam, then I studied
B) If I do not pass the exam, then I did not study
C) I will pass the exam if and only if I study
D) If I do not study, then I will pass`,
    code: `The contrapositive of "If I study, then I will pass" is "If I do not pass, then I did not study". Correct answer: B.`,
  },
  {
    id: 5,
    title: "5",
    description: `The statement "If today is Monday, then I will go to school" is False. Which of the following must be True?

A) Today is Monday and I did not go to school
B) Today is Monday
C) I did not go to school
D) Today is not Monday`,
    code: `A conditional p → q is False only if p is True and q is False. So today is Monday and I did not go to school. Correct answer: A.`,
  },
  {
    id: 6,
    title: "6",
    description: `Which of the following is the inverse of "If it rains, then the ground is wet"?

A) If it does not rain, then the ground is not wet
B) If the ground is wet, then it rains
C) If it rains, then the ground is not wet
D) If it does not rain, then the ground is wet`,
    code: `The inverse of p → q is ¬p → ¬q. So the inverse is "If it does not rain, then the ground is not wet". Correct answer: A.`,
  },
  {
    id: 7,
    title: "7",
    description: `If the statement "If p then q" is True and p is True, what can we conclude?

A) q is True
B) q is False
C) Cannot determine
D) Both True and False`,
    code: `For a true conditional p → q, if p is True, then q must be True. Correct answer: A.`,
  },
  {
    id: 8,
    title: "8",
    description: `If the statement "If p then q" is True and q is False, what can we conclude?

A) p is True
B) p is False
C) Cannot determine
D) q must be True`,
    code: `If p → q is True and q is False, then p must be False, otherwise the conditional would be False. Correct answer: B.`,
  },
  {
    id: 9,
    title: "9",
    description: `Which of the following statements is always True (a tautology)?

A) p → p
B) p → ¬p
C) ¬p → p
D) p → q`,
    code: `p → p is always True for any p, so it is a tautology. Correct answer: A.`,
  },
  {
    id: 10,
    title: "10",
    description: `Which of the following is the converse of "If it rains, then the ground is wet"?

A) If the ground is wet, then it rains
B) If it does not rain, then the ground is not wet
C) If the ground is not wet, then it does not rain
D) If it rains, then the ground is not wet`,
    code: `The converse of p → q is q → p. So the converse is "If the ground is wet, then it rains". Correct answer: A.`,
  },
  {
    id: 11,
    title: "11",
    description: `Determine the truth value of "If 3 > 5, then 7 = 7".

A) True
B) False
C) Cannot determine
D) Sometimes True`,
    code: `Since the hypothesis (3 > 5) is False, the conditional is True. Correct answer: A.`,
  },
  {
    id: 12,
    title: "12",
    description: `Which of the following is NOT logically equivalent to "If p then q"?

A) ¬p ∨ q
B) ¬q → ¬p
C) p ∧ ¬q
D) The contrapositive`,
    code: `p → q is equivalent to ¬p ∨ q and to its contrapositive ¬q → ¬p. p ∧ ¬q is not equivalent. Correct answer: C.`,
  },
  {
    id: 13,
    title: "13",
    description: `If the conditional "If I eat, I am not hungry" is True, and I am hungry, what can we conclude?

A) I ate
B) I did not eat
C) Cannot determine
D) I am full`,
    code: `If p → q is True, and q is False (I am hungry), then p must be False (I did not eat). Correct answer: B.`,
  },
  {
    id: 14,
    title: "14",
    description: `The statement "If today is Friday, then I will watch a movie" is a conditional. Which part is the hypothesis?

A) I will watch a movie
B) Today is Friday
C) The whole statement
D) None`,
    code: `In a conditional p → q, p is the hypothesis. Here, p = "Today is Friday". Correct answer: B.`,
  },
  {
    id: 15,
    title: "15",
    description: `The conditional "If x = 0, then 2x = 0" is True. What is its contrapositive?

A) If 2x ≠ 0, then x ≠ 0
B) If 2x = 0, then x = 0
C) If x ≠ 0, then 2x ≠ 0
D) If 2x ≠ 0, then x = 0`,
    code: `Contrapositive of p → q is ¬q → ¬p. So ¬(2x = 0) → ¬(x = 0) = "If 2x ≠ 0, then x ≠ 0". Correct answer: A.`,
  },
  {
    id: 16,
    title: "16",
    description: `If "If p then q" is False, which combination of truth values of p and q is possible?

A) p = True, q = True
B) p = False, q = True
C) p = True, q = False
D) p = False, q = False`,
    code: `A conditional is False only if p = True and q = False. Correct answer: C.`,
  },
  {
    id: 17,
    title: "17",
    description: `Which of the following is a tautology?

A) p → p
B) p → ¬p
C) ¬p → p
D) p → q`,
    code: `p → p is always True, so it is a tautology. Correct answer: A.`,
  },
  {
    id: 18,
    title: "18",
    description: `If "If it rains then the park is wet" is True and the park is not wet, what can we conclude?

A) It rains
B) It does not rain
C) Cannot determine
D) The park is wet anyway`,
    code: `If p → q is True and q is False, then p must be False. Correct answer: B.`,
  },
  {
    id: 19,
    title: "19",
    description: `Which of the following is the inverse of "If it rains, the ground is wet"?

A) If it does not rain, then the ground is not wet
B) If it rains, then the ground is not wet
C) If the ground is wet, then it rains
D) If the ground is not wet, then it does not rain`,
    code: `The inverse of p → q is ¬p → ¬q. So it is "If it does not rain, then the ground is not wet". Correct answer: A.`,
  },
  {
    id: 20,
    title: "20",
    description: `Which of the following is the contrapositive of "If I sleep early, then I am healthy"?

A) If I am not healthy, then I did not sleep early
B) If I am healthy, then I slept early
C) If I sleep late, then I am not healthy
D) If I am not healthy, then I sleep late`,
    code: `Contrapositive of p → q is ¬q → ¬p. Correct answer: A.`,
  },
];
