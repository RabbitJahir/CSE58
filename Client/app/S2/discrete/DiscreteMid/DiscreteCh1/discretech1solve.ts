export type Snippet = {
  id: number;
  title: string;
  description: string;
  code: string;
};

export const discretech1solve: Snippet[] = [
    {
      id: 1,
      title: "Exercise: 1.1 , 1",
      description: `Which of these sentences are propositions? What are the truth values of those that are propositions?

  a) Boston is the capital of Massachusetts
  b) Miami is the capital of Florida.
  c) 2 + 3 = 5.
  d) 5 + 7 = 10.
  e) x + 2 = 11.
  f) Answer this question.`,
      code: `a) True
  b) False
  c) T
  d) False
  e) Not a proposition
  f) Not a poroposition`,
    },
  {
    id: 2,
    title: "Exercise: 1.1, 2",
    description: `2. Which of these are propositions? What are the truth values of those that are propositions?

a) Do not pass go.
b) What time is it?
c) There are no black flies in Maine.
d) 4 + x = 5.
e) The moon is made of green cheese.
f ) 2n ≥ 100.`,
    code: `a) Not a proposition
b) Not a proposition
c) False
d) Not a proposition
e) False
f) Not a proposition`,
  },

  {
    id: 3,
    title: "Exercise: 1.1, 3",
    description: `3. What is the negation of each of these propositions?

a) Linda is younger than Sanjay.
b) Mei makes more money than Isabella.
c) Moshe is taller than Monica.
d) Abby is richer than Ricardo.`,
    code: `a) Linda is not younger than Sanjay.
b) Mei does not make more money than Isabella.
c) Moshe is not taller than Monica.
d) Abby is not richer than Ricardo.`,
  },

  {
    id: 4,
    title: "Exercise: 1.1, 4",
    description: `4. What is the negation of each of these propositions?

a) Janice has more Facebook friends than Juan.
b) Quincy is smarter than Venkat.
c) Zelda drives more miles to school than Paola.
d) Briana sleeps longer than Gloria.`,
    code: `a) Janice does not have more Facebook friends than Juan.
b) Quincy is not smarter than Venkat.
c) Zelda does not drive more miles to school than Paola.
d) Briana does not sleep longer than Gloria.`,
  },

  {
    id: 5,
    title: "Exercise: 1.1, 5",
    description: `5. What is the negation of each of these propositions?

a) Mei has an MP3 player.
b) There is no pollution in New Jersey.
c) 2 + 1 = 3.
d) The summer in Maine is hot and sunny.`,
    code: `a) Mei does not have an MP3 player.
b) There is pollution in New Jersey.
c) 2 + 1 ≠ 3.
d) The summer in Maine is not hot or not sunny.`,
  },

  {
    id: 6,
    title: "Exercise: 1.1, 6",
    description: `6. What is the negation of each of these propositions?

a) Jennifer and Teja are friends.
b) There are 13 items in a baker’s dozen.
c) Abby sent more than 100 text messages yesterday.
d) 121 is a perfect square.`,
    code: `a) Jennifer and Teja are not friends.
b) There are not 13 items in a baker’s dozen.
c) Abby sent 100 or fewer text messages yesterday.
d) 121 is not a perfect square.`,
  },

  {
    id: 7,
    title: "Exercise: 1.1, 7",
    description: `7. What is the negation of each of these propositions?

a) Steve has more than 100 GB free disk space on his laptop.
b) Zach blocks e-mails and texts from Jennifer.
c) 7 ⋅ 11 ⋅ 13 = 999.
d) Diane rode her bicycle 100 miles on Sunday.`,
    code: `a) Steve has 100 GB or less free disk space on his laptop.
b) Zach does not block e-mails or does not block texts from Jennifer.
c) 7 ⋅ 11 ⋅ 13 ≠ 999.
d) Diane did not ride her bicycle 100 miles on Sunday.`,
  },

  {
    id: 8,
    title: "Exercise: 1.1, 8",
    description: `8. Suppose that Smartphone A has 256 MB RAM and 32 GB ROM, and the resolution of its camera is 8 MP; Smartphone B has 288 MB RAM and 64 GB ROM, and the resolution of its camera is 4 MP; and Smartphone C has 128 MB RAM and 32 GB ROM, and the resolution of its camera is 5 MP. Determine the truth value of each of these propositions.

a) Smartphone B has the most RAM of these three smartphones.
b) Smartphone C has more ROM or a higher resolution camera than Smartphone B.
c) Smartphone B has more RAM, more ROM, and a higher resolution camera than Smartphone A.
d) If Smartphone B has more RAM and more ROM than Smartphone C, then it also has a higher resolution camera.
e) Smartphone A has more RAM than Smartphone B if and only if Smartphone B has more RAM than Smartphone A.`,
    code: `a) True
b) True
c) False
d) False
e) False`,
  },
  {
    id: 9,
    title: "Exercise: 1.1, 9",
    description: `9. Suppose that during the most recent fiscal year, the annual revenue of Acme Computer was 138 billion dollars and its net profit was 8 billion dollars, the annual revenue of Nadir Software was 87 billion dollars and its net profit was 5 billion dollars, and the annual revenue of Quixote Media was 111 billion dollars and its net profit was 13 billion dollars. Determine the truth value of each of these propositions.

a) Quixote Media had the largest annual revenue.
b) Nadir Software had the lowest net profit and Acme Computer had the largest annual revenue.
c) Acme Computer had the largest net profit or Quixote Media had the largest net profit.
d) If Quixote Media had the smallest net profit, then Acme Computer had the largest annual revenue.
e) Nadir Software had the smallest net profit if and only if Acme Computer had the largest annual revenue.`,
    code: `a) False
b) True
c) True
d) True
e) True`,
  },

  {
    id: 10,
    title: "Exercise: 1.1, 10",
    description: `10. Let
p: I bought a lottery ticket this week.
q: I won the million dollar jackpot.

Express each of these propositions as an English sentence.

a) ¬p
b) p ∨ q
c) p → q
d) p ∧ q
e) p ↔ q
f) ¬p → ¬q
g) ¬p ∧ ¬q
h) ¬p ∨ (p ∧ q)`,
    code: `a) I did not buy a lottery ticket this week.
b) I bought a lottery ticket this week or I won the million dollar jackpot.
c) If I bought a lottery ticket this week, then I won the million dollar jackpot.
d) I bought a lottery ticket this week and I won the million dollar jackpot.
e) I bought a lottery ticket this week if and only if I won the million dollar jackpot.
f) If I did not buy a lottery ticket this week, then I did not win the million dollar jackpot.
g) I did not buy a lottery ticket this week and I did not win the million dollar jackpot.
h) Either I did not buy a lottery ticket this week or I bought one and won the jackpot.`,
  },

  {
    id: 11,
    title: "Exercise: 1.1, 11",
    description: `11. Let
p: Swimming at the New Jersey shore is allowed.
q: Sharks have been spotted near the shore.

Express each proposition as an English sentence.

a) ¬q
b) p ∧ q
c) ¬p ∨ q
d) p → ¬q
e) ¬q → p
f) ¬p → ¬q
g) p ↔ ¬q
h) ¬p ∧ (p ∨ ¬q)`,
    code: `a) Sharks have not been spotted near the shore.
b) Swimming at the New Jersey shore is allowed and sharks have been spotted near the shore.
c) Swimming is not allowed or sharks have been spotted near the shore.
d) If swimming is allowed, then sharks have not been spotted near the shore.
e) If sharks have not been spotted near the shore, then swimming is allowed.
f) If swimming is not allowed, then sharks have not been spotted near the shore.
g) Swimming is allowed if and only if sharks have not been spotted near the shore.
h) Swimming is not allowed and (swimming is allowed or sharks have not been spotted).`,
  },

  {
    id: 12,
    title: "Exercise: 1.1, 12",
    description: `12. Let
p: The election is decided.
q: The votes have been counted.

Express each proposition as an English sentence.

a) ¬p
b) p ∨ q
c) ¬p ∧ q
d) q → p
e) ¬q → ¬p
f) ¬p → ¬q
g) p ↔ q
h) ¬q ∨ (¬p ∧ q)`,
    code: `a) The election is not decided.
b) The election is decided or the votes have been counted.
c) The election is not decided and the votes have been counted.
d) If the votes have been counted, then the election is decided.
e) If the votes have not been counted, then the election is not decided.
f) If the election is not decided, then the votes have not been counted.
g) The election is decided if and only if the votes have been counted.
h) Either the votes have not been counted or the election is not decided and the votes have been counted.`,
  },

  {
    id: 13,
    title: "Exercise: 1.1, 13",
    description: `13. Let
p: It is below freezing.
q: It is snowing.

Write the following using p and q and logical connectives.

a) It is below freezing and snowing.
b) It is below freezing but not snowing.
c) It is not below freezing and it is not snowing.
d) It is either snowing or below freezing (or both).
e) If it is below freezing, it is also snowing.
f) Either it is below freezing or it is snowing, but it is not snowing if it is below freezing.
g) That it is below freezing is necessary and sufficient for it to be snowing.`,
    code: `a) p ∧ q
b) p ∧ ¬q
c) ¬p ∧ ¬q
d) p ∨ q
e) p → q
f) (p ∨ q) ∧ (p → ¬q)
g) p ↔ q`,
  },

  {
    id: 14,
    title: "Exercise: 1.1, 14",
    description: `14. Let
p: You have the flu.
q: You miss the final examination.
r: You pass the course.

Express each as an English sentence.

a) p → q
b) ¬q ↔ r
c) q → ¬r
d) p ∨ q ∨ r
e) (p → ¬r) ∨ (q → ¬r)
f) (p ∧ q) ∨ (¬q ∧ r)`,
    code: `a) If you have the flu, then you miss the final examination.
b) You do not miss the final examination if and only if you pass the course.
c) If you miss the final examination, then you do not pass the course.
d) You have the flu, or you miss the final examination, or you pass the course.
e) Either if you have the flu then you do not pass the course, or if you miss the final exam then you do not pass the course.
f) Either you have the flu and miss the final exam, or you do not miss the final exam and you pass the course.`,
  },
  {
    id: 15,
    title: "Exercise: 1.1, 15",
    description: `15. Let
p: You drive over 65 miles per hour.
q: You get a speeding ticket.

Write these propositions using p and q and logical connectives (including negations).

a) You do not drive over 65 miles per hour.
b) You drive over 65 miles per hour, but you do not get a speeding ticket.
c) You will get a speeding ticket if you drive over 65 miles per hour.
d) If you do not drive over 65 miles per hour, then you will not get a speeding ticket.
e) Driving over 65 miles per hour is sufficient for getting a speeding ticket.
f) You get a speeding ticket, but you do not drive over 65 miles per hour.
g) Whenever you get a speeding ticket, you are driving over 65 miles per hour.`,
    code: `a) ¬p
b) p ∧ ¬q
c) p → q
d) ¬p → ¬q
e) p → q
f) q ∧ ¬p
g) q → p`,
  },

  {
    id: 16,
    title: "Exercise: 1.1, 16",
    description: `16. Let
p: You get an A on the final exam.
q: You do every exercise in this book.
r: You get an A in this class.

Write these propositions using p, q, and r and logical connectives (including negations).

a) You get an A in this class, but you do not do every exercise in this book.
b) You get an A on the final, you do every exercise in this book, and you get an A in this class.
c) To get an A in this class, it is necessary for you to get an A on the final.
d) You get an A on the final, but you don’t do every exercise in this book; nevertheless, you get an A in this class.
e) Getting an A on the final and doing every exercise in this book is sufficient for getting an A in this class.
f) You will get an A in this class if and only if you either do every exercise in this book or you get an A on the final.`,
    code: `a) r ∧ ¬q
b) p ∧ q ∧ r
c) r → p
d) p ∧ ¬q ∧ r
e) (p ∧ q) → r
f) r ↔ (q ∨ p)`,
  },

  {
    id: 17,
    title: "Exercise: 1.1, 17",
    description: `17. Let
p: Grizzly bears have been seen in the area.
q: Hiking is safe on the trail.
r: Berries are ripe along the trail.

Write these propositions using p, q, and r and logical connectives (including negations).

a) Berries are ripe along the trail, but grizzly bears have not been seen in the area.
b) Grizzly bears have not been seen in the area and hiking on the trail is safe, but berries are ripe along the trail.
c) If berries are ripe along the trail, hiking is safe if and only if grizzly bears have not been seen in the area.
d) It is not safe to hike on the trail, but grizzly bears have not been seen in the area and the berries along the trail are ripe.
e) For hiking on the trail to be safe, it is necessary but not sufficient that berries not be ripe along the trail and that grizzly bears have not been seen in the area.
f) Hiking is not safe on the trail whenever grizzly bears have been seen in the area and berries are ripe along the trail.`,
    code: `a) r ∧ ¬p
b) ¬p ∧ q ∧ r
c) r → (q ↔ ¬p)
d) ¬q ∧ ¬p ∧ r
e) q → (¬r ∧ ¬p)
f) (p ∧ r) → ¬q`,
  },
  {
    id: 18,
    title: "Exercise: 1.1, 18",
    description: `Determine whether these biconditionals are true or false.

a) 2 + 2 = 4 if and only if 1 + 1 = 2.
b) 1 + 1 = 2 if and only if 2 + 3 = 4.
c) 1 + 1 = 3 if and only if monkeys can fly.
d) 0 > 1 if and only if 2 > 1.`,
    code: `a) True
b) False
c) True
d) False`,
  },

  {
    id: 19,
    title: "Exercise: 1.1, 19",
    description: `Determine whether each of these conditional statements is true or false.

a) If 1 + 1 = 2, then 2 + 2 = 5.
b) If 1 + 1 = 3, then 2 + 2 = 4.
c) If 1 + 1 = 3, then 2 + 2 = 5.
d) If monkeys can fly, then 1 + 1 = 3.`,
    code: `a) False
b) True
c) True
d) True`,
  },

  {
    id: 20,
    title: "Exercise: 1.1, 20",
    description: `Determine whether each of these conditional statements is true or false.

a) If 1 + 1 = 3, then unicorns exist.
b) If 1 + 1 = 3, then dogs can fly.
c) If 1 + 1 = 2, then dogs can fly.
d) If 2 + 2 = 4, then 1 + 2 = 3.`,
    code: `a) True
b) True
c) False
d) True`,
  },

  {
    id: 21,
    title: "Exercise: 1.1, 21",
    description: `For each of these sentences, determine whether an inclusive or, or an exclusive or, is intended. Explain your answer.

a) Coffee or tea comes with dinner.
b) A password must have at least three digits or be at least eight characters long.
c) The prerequisite for the course is a course in number theory or a course in cryptography.
d) You can pay using U.S. dollars or euros.`,
    code: `a) Inclusive or
b) Inclusive or
c) Inclusive or
d) Exclusive or`,
  },

  {
    id: 22,
    title: "Exercise: 1.1, 22",
    description: `For each of these sentences, determine whether an inclusive or, or an exclusive or, is intended. Explain your answer.

a) Experience with C++ or Java is required.
b) Lunch includes soup or salad.
c) To enter the country you need a passport or a voter registration card.
d) Publish or perish.`,
    code: `a) Inclusive or
b) Exclusive or
c) Inclusive or
d) Exclusive or`,
  },

  {
    id: 23,
    title: "Exercise: 1.1, 23",
    description: `For each of these sentences, state what the sentence means if the logical connective or is an inclusive or (disjunction) versus an exclusive or. Which of these meanings of or do you think is intended?

a) To take discrete mathematics, you must have taken calculus or a course in computer science.
b) When you buy a new car from Acme Motor Company, you get $2000 back in cash or a 2% car loan.
c) Dinner for two includes two items from column A or three items from column B.
d) School is closed if more than two feet of snow falls or if the wind chill is below −100 ◦ F.`,
    code: `a) Inclusive or
b) Exclusive or
c) Exclusive or
d) Inclusive or`,
  },

  {
    id: 24,
    title: "Exercise: 1.1, 24",
    description: `Write each of these statements in the form "if p, then q" in English.

a) It is necessary to wash the boss’s car to get promoted.
b) Winds from the south imply a spring thaw.
c) A sufficient condition for the warranty to be good is that you bought the computer less than a year ago.
d) Willy gets caught whenever he cheats.
e) You can access the website only if you pay a subscription fee.
f) Getting elected follows from knowing the right people.
g) Carol gets seasick whenever she is on a boat.`,
    code: `a) If you want to get promoted, then you must wash the boss's car.
b) If winds are from the south, then there will be a spring thaw.
c) If you bought the computer less than a year ago, then the warranty is good.
d) If Willy cheats, then he gets caught.
e) If you pay a subscription fee, then you can access the website.
f) If you know the right people, then you will get elected.
g) If Carol is on a boat, then she gets seasick.`,
  },

  {
    id: 25,
    title: "Exercise: 1.1, 25",
    description: `Write each of these statements in the form "if p, then q" in English.

a) It snows whenever the wind blows from the northeast.
b) The apple trees will bloom if it stays warm for a week.
c) That the Pistons win the championship implies that they beat the Lakers.
d) It is necessary to walk eight miles to get to the top of Long’s Peak.
e) To get tenure as a professor, it is sufficient to be world famous.
f) If you drive more than 400 miles, you will need to buy gasoline.
g) Your guarantee is good only if you bought your CD player less than 90 days ago.
h) Jan will go swimming unless the water is too cold.
i) We will have a future, provided that people believe in science.`,
    code: `a) If the wind blows from the northeast, then it snows.
b) If it stays warm for a week, then the apple trees will bloom.
c) If the Pistons win the championship, then they beat the Lakers.
d) If you want to reach the top of Long’s Peak, then you must walk eight miles.
e) If you are world famous, then you can get tenure as a professor.
f) If you drive more than 400 miles, then you will need to buy gasoline.
g) If you bought your CD player less than 90 days ago, then your guarantee is good.
h) If the water is too cold, then Jan will not go swimming.
i) If people believe in science, then we will have a future.`,
  },

  {
    id: 26,
    title: "Exercise: 1.1, 26",
    description: `Write each of these statements in the form "if p, then q" in English.

a) I will remember to send you the address only if you send me an e-mail message.
b) To be a citizen of this country, it is sufficient that you were born in the United States.
c) If you keep your textbook, it will be a useful reference in your future courses.
d) The Red Wings will win the Stanley Cup if their goalie plays well.
e) That you get the job implies that you had the best credentials.
f) The beach erodes whenever there is a storm.
g) It is necessary to have a valid password to log on to the server.
h) You will reach the summit unless you begin your climb too late.
i) You will get a free ice cream cone, provided that you are among the first 100 customers tomorrow.`,
    code: `a) If you send me an e-mail message, then I will remember to send you the address.
b) If you were born in the United States, then you are a citizen of this country.
c) If you keep your textbook, then it will be a useful reference in your future courses.
d) If their goalie plays well, then the Red Wings will win the Stanley Cup.
e) If you had the best credentials, then you get the job.
f) If there is a storm, then the beach erodes.
g) If you have a valid password, then you can log on to the server.
h) If you do not begin your climb too late, then you will reach the summit.
i) If you are among the first 100 customers tomorrow, then you will get a free ice cream cone.`,
  },

  {
    id: 27,
    title: "Exercise: 1.1, 27",
    description: `Write each of these propositions in the form "p if and only if q" in English.

a) If it is hot outside you buy an ice cream cone, and if you buy an ice cream cone it is hot outside.
b) For you to win the contest it is necessary and sufficient that you have the only winning ticket.
c) You get promoted only if you have connections, and you have connections only if you get promoted.
d) If you watch television your mind will decay, and conversely.
e) The trains run late on exactly those days when I take it.`,
    code: `a) You buy an ice cream cone if and only if it is hot outside.
b) You win the contest if and only if you have the only winning ticket.
c) You get promoted if and only if you have connections.
d) Your mind will decay if and only if you watch television.
e) The trains run late if and only if you take it.`,
  },
  {
    id: 28,
    title: "Exercise: 1.1, 28",
    description: `Write each of these propositions in the form "p if and only if q" in English.

a) For you to get an A in this course, it is necessary and sufficient that you learn how to solve discrete mathematics problems.
b) If you read the newspaper every day, you will be informed, and conversely.
c) It rains if it is a weekend day, and it is a weekend day if it rains.
d) You can see the wizard only if the wizard is not in, and the wizard is not in only if you can see him.
e) My airplane flight is late exactly when I have to catch a connecting flight.`,
    code: `a) You get an A in this course if and only if you learn how to solve discrete mathematics problems.
b) You are informed if and only if you read the newspaper every day.
c) It rains if and only if it is a weekend day.
d) You can see the wizard if and only if the wizard is not in.
e) My airplane flight is late if and only if I have to catch a connecting flight.`,
  },

  {
    id: 29,
    title: "Exercise: 1.1, 29",
    description: `State the converse, contrapositive, and inverse of each conditional statement.

a) If it snows today, I will ski tomorrow.
b) I come to class whenever there is going to be a quiz.
c) A positive integer is a prime only if it has no divisors other than 1 and itself.`,
    code: `a) Converse: I will ski tomorrow if it snows today.
   Contrapositive: If I do not ski tomorrow, then it does not snow today.
   Inverse: If it does not snow today, then I will not ski tomorrow.

b) Converse: If I come to class, then there is going to be a quiz.
   Contrapositive: If I do not come to class, then there is not going to be a quiz.
   Inverse: If there is not going to be a quiz, then I do not come to class.

c) Converse: If a number has no divisors other than 1 and itself, then it is prime.
   Contrapositive: If a number has divisors other than 1 and itself, then it is not prime.
   Inverse: If a number is not prime, then it has divisors other than 1 and itself.`,
  },

  {
    id: 30,
    title: "Exercise: 1.1, 30",
    description: `State the converse, contrapositive, and inverse of each conditional statement.

a) If it snows tonight, then I will stay at home.
b) I go to the beach whenever it is a sunny summer day.
c) When I stay up late, it is necessary that I sleep until noon.`,
    code: `a) Converse: I will stay at home if it snows tonight.
   Contrapositive: If I do not stay at home, then it does not snow tonight.
   Inverse: If it does not snow tonight, then I will not stay at home.

b) Converse: If I go to the beach, then it is a sunny summer day.
   Contrapositive: If I do not go to the beach, then it is not a sunny summer day.
   Inverse: If it is not a sunny summer day, then I do not go to the beach.

c) Converse: If I sleep until noon, then I stayed up late.
   Contrapositive: If I do not sleep until noon, then I did not stay up late.
   Inverse: If I do not stay up late, then I do not sleep until noon.`,
  },

  {
    id: 31,
    title: "Exercise: 1.1, 31",
    description: `How many rows appear in a truth table for each of these compound propositions?

a) p → ¬p
b) (p ∨ ¬r) ∧ (q ∨ ¬s)
c) q ∨ p ∨ ¬s ∨ ¬r ∨ ¬t ∨ u
d) (p ∧ r ∧ t) ↔ (q ∧ t)`,
    code: `a) 2 rows (1 variable: p)
b) 16 rows (4 variables: p, q, r, s)
c) 64 rows (6 variables: p, q, r, s, t, u)
d) 8 rows (3 variables: p, q, t)`,
  },

  {
    id: 32,
    title: "Exercise: 1.1, 32",
    description: `How many rows appear in a truth table for each of these compound propositions?

a) (q → ¬p) ∨ (¬p → ¬q)
b) (p ∨ ¬t) ∧ (p ∨ ¬s)
c) (p → r) ∨ (¬s → ¬t) ∨ (¬u → v)
d) (p ∧ r ∧ s) ∨ (q ∧ t) ∨ (r ∧ ¬t)`,
    code: `a) 4 rows (2 variables: p, q)
b) 4 rows (2 variables: p, t, s?) Actually 3 variables → 8 rows
c) 5 variables → 32 rows
d) 4 variables → 16 rows`,
  },

  {
    id: 33,
    title: "Exercise: 1.1, 33",
    description: `Construct a truth table for each of these compound propositions.

a) p ∧ ¬p
b) p ∨ ¬p
c) (p ∨ ¬q) → q
d) (p ∨ q) → (p ∧ q)
e) (p → q) ↔ (¬q → ¬p)
f) (p → q) → (q → p)`,
    code: `a) Always false
b) Always true
c) Standard table computation
d) Standard table computation
e) Standard table computation
f) Standard table computation`,
  },

  {
    id: 34,
    title: "Exercise: 1.1, 34",
    description: `Construct a truth table for each of these compound propositions.

a) p → ¬p
b) p ↔ ¬p
c) p ⊕ (p ∨ q)
d) (p ∧ q) → (p ∨ q)
e) (q → ¬p) ↔ (p ↔ q)
f) (p ↔ q) ⊕ (p ↔ ¬q)`,
    code: `a) Standard computation
b) Standard computation
c) Standard computation
d) Standard computation
e) Standard computation
f) Standard computation`,
  },

  {
    id: 35,
    title: "Exercise: 1.1, 35",
    description: `Construct a truth table for each of these compound propositions.

a) (p ∨ q) → (p ⊕ q)
b) (p ⊕ q) → (p ∧ q)
c) (p ∨ q) ⊕ (p ∧ q)
d) (p ↔ q) ⊕ (¬p ↔ q)
e) (p ↔ q) ⊕ (¬p ↔ ¬r)
f) (p ⊕ q) → (p ⊕ ¬q)`,
    code: `All require standard truth table computation for the given variables`,
  },

  {
    id: 36,
    title: "Exercise: 1.1, 36",
    description: `Construct a truth table for each of these compound propositions.

a) p ⊕ p
b) p ⊕ ¬p
c) p ⊕ ¬q
d) ¬p ⊕ ¬q
e) (p ⊕ q) ∨ (p ⊕ ¬q)
f) (p ⊕ q) ∧ (p ⊕ ¬q)`,
    code: `a) False
b) True
c) Computation required
d) Computation required
e) Computation required
f) Computation required`,
  },

  {
    id: 37,
    title: "Exercise: 1.1, 37",
    description: `Construct a truth table for each of these compound propositions.

a) p → ¬q
b) ¬p ↔ q
c) (p → q) ∨ (¬p → q)
d) (p → q) ∧ (¬p → q)
e) (p ↔ q) ∨ (¬p ↔ q)
f) (¬p ↔ ¬q) ↔ (p ↔ q)`,
    code: `All require standard truth table computation`,
  },

  {
    id: 38,
    title: "Exercise: 1.1, 38",
    description: `Construct a truth table for each of these compound propositions.

a) (p ∨ q) ∨ r
b) (p ∨ q) ∧ r
c) (p ∧ q) ∨ r
d) (p ∧ q) ∧ r
e) (p ∨ q) ∧ ¬r
f) (p ∧ q) ∨ ¬r`,
    code: `All require standard truth table computation`,
  },

  {
    id: 39,
    title: "Exercise: 1.1, 39",
    description: `Construct a truth table for each of these compound propositions.

a) p → (¬q ∨ r)
b) ¬p → (q → r)
c) (p → q) ∨ (¬p → r)
d) (p → q) ∧ (¬p → r)
e) (p ↔ q) ∨ (¬q ↔ r)
f) (¬p ↔ ¬q) ↔ (q ↔ r)`,
    code: `All require standard truth table computation`,
  },

  {
    id: 40,
    title: "Exercise: 1.1, 40",
    description: `Construct a truth table for ((p → q) → r) → s.`,
    code: `Requires standard 4-variable truth table computation`,
  },

  {
    id: 41,
    title: "Exercise: 1.1, 41",
    description: `Construct a truth table for (p ↔ q) ↔ (r ↔ s).`,
    code: `Requires standard 4-variable truth table computation`,
  },

  {
    id: 42,
    title: "Exercise: 1.1, 42",
    description: `Explain, without using a truth table, why (p ∨ ¬q) ∧ (q ∨ ¬r) ∧ (r ∨ ¬p) is true when p, q, and r have the same truth value and false otherwise.`,
    code: `This compound proposition is equivalent to a 3-variable cyclic condition: true when all variables are the same, false otherwise.`,
  },

  {
    id: 43,
    title: "Exercise: 1.1, 43",
    description: `Explain, without using a truth table, why (p ∨ q ∨ r) ∧ (¬p ∨ ¬q ∨ ¬r) is true when at least one of p, q, and r is true and at least one is false, but false when all three variables have the same truth value.`,
    code: `This compound proposition ensures that at least one variable is true and at least one is false. False if all variables are the same.`,
  },

  {
    id: 44,
    title: "Exercise: 1.1, 44",
    description: `If p1, p2, ... , pn are n propositions, explain why
⋀(¬pi ∨ ¬pj) for i=1..n-1, j=i+1..n
is true if and only if at most one of p1, p2, ..., pn is true.`,
    code: `Because each pair cannot be true simultaneously, so at most one proposition is true.`,
  },

  {
    id: 45,
    title: "Exercise: 1.1, 45",
    description: `Use Exercise 44 to construct a compound proposition that is true if and only if exactly one of the propositions p1, p2, ..., pn is true.`,
    code: `Combine Exercise 44 with a disjunction of all propositions: (p1 ∨ p2 ∨ ... ∨ pn) ∧ Exercise44Compound`,
  },

  {
    id: 46,
    title: "Exercise: 1.1, 46",
    description: `What is the value of x after each statement if x = 1 initially?

a) if x + 2 = 3 then x := x + 1
b) if (x + 1 = 3) OR (2x + 2 = 3) then x := x + 1
c) if (2x + 3 = 5) AND (3x + 4 = 7) then x := x + 1
d) if (x + 1 = 2) XOR (x + 2 = 3) then x := x + 1
e) if x < 2 then x := x + 1`,
    code: `a) 2
b) 2
c) 2
d) 2
e) 3`,
  },

  {
    id: 47,
    title: "Exercise: 1.1, 47",
    description: `Find the bitwise OR, AND, and XOR of each of these pairs of bit strings.

a) 1011110, 0100001
b) 11110000, 10101010
c) 0001110001, 1001001000
d) 1111111111, 0000000000`,
    code: `a) OR: 1111111, AND: 0000000, XOR: 1111111
b) OR: 11111010, AND: 10100000, XOR: 01011010
c) OR: 1001111001, AND: 0001000000, XOR: 1000111001
d) OR: 1111111111, AND: 0000000000, XOR: 1111111111`,
  },
  {
    id: 48,
    title: "Exercise: 1.1, 48",
    description: `Evaluate each of these expressions.

a) 11000 ∧ (01011 ∨ 11011)
b) (01111 ∧ 10101) ∨ 01000
c) (01010 ⊕ 11011) ⊕ 01000
d) (11011 ∨ 01010) ∧ (10001 ∨ 11011)`,
    code: `a) 11000 ∧ (01011 ∨ 11011) = 11000 ∧ 11011 = 11000
b) (01111 ∧ 10101) ∨ 01000 = 00101 ∨ 01000 = 01101
c) (01010 ⊕ 11011) ⊕ 01000 = 10001 ⊕ 01000 = 11001
d) (11011 ∨ 01010) ∧ (10001 ∨ 11011) = 11011 ∧ 11011 = 11011`,
  },

  {
    id: 49,
    title: "Exercise: 1.1, 49",
    description: `Fuzzy logic: The truth value of the negation of a proposition is 1 minus the truth value of the proposition. Truth values: Fred = 0.8, John = 0.4.

Find the truth values of:
- "Fred is not happy"
- "John is not happy"`,
    code: `Fred is not happy: 1 - 0.8 = 0.2
John is not happy: 1 - 0.4 = 0.6`,
  },

  {
    id: 50,
    title: "Exercise: 1.1, 50",
    description: `Fuzzy logic: Conjunction = minimum of truth values.

Find the truth values of:
- "Fred and John are happy"
- "Neither Fred nor John is happy"`,
    code: `"Fred and John are happy": min(0.8, 0.4) = 0.4
"Neither Fred nor John is happy": min(1-0.8, 1-0.4) = min(0.2, 0.6) = 0.2`,
  },

  {
    id: 51,
    title: "Exercise: 1.1, 51",
    description: `Fuzzy logic: Disjunction = maximum of truth values.

Find the truth values of:
- "Fred is happy, or John is happy"
- "Fred is not happy, or John is not happy"`,
    code: `"Fred is happy, or John is happy": max(0.8, 0.4) = 0.8
"Fred is not happy, or John is not happy": max(0.2, 0.6) = 0.6`,
  },

  {
    id: 52,
    title: "Exercise: 1.1, 52",
    description: `Is the assertion "This statement is false" a proposition?`,
    code: `No. It is a paradox (liar paradox) and cannot be assigned a truth value, so it is not a proposition.`,
  },

  {
    id: 53,
    title: "Exercise: 1.1, 53",
    description: `The nth statement in a list of 100 statements is "Exactly n of the statements in this list are false."

a) Conclusions for exactly n false?
b) If "At least n of the statements in this list are false"?
c) Part (b) if list has 99 statements?`,
    code: `a) Exactly one statement (the 50th) is true: the rest are false. Only n=50 works.
b) For "at least n false": multiple n satisfy, the largest consistent n is the answer.
c) With 99 statements: similar logic, only n=99 is consistent.`,
  },

  {
    id: 54,
    title: "Exercise: 1.1, 54",
    description: `Ancient Sicilian barber paradox: The barber shaves exactly those who do not shave themselves. Can there be such a barber?`,
    code: `No. This is a paradox. If the barber shaves himself, he should not shave himself. If he does not shave himself, he should shave himself. Therefore, such a barber cannot exist.`,
  },

  {
    id: 55,
    title: "Exercise: 1.2, 1",
    description: `1. You cannot edit a protected Wikipedia entry unless you are an administrator. 
Express your answer in terms of e: "You can edit a protected Wikipedia entry" 
and a: "You are an administrator."`,
    code: `e → a`,
  },
  {
    id: 56,
    title: "Exercise: 1.2, 2",
    description: `2. You can see the movie only if you are over 18 years old or you have the permission of a parent. 
Express your answer in terms of m: "You can see the movie," e: "You are over 18 years old," 
and p: "You have the permission of a parent."`,
    code: `m → (e ∨ p)`,
  },
  {
    id: 57,
    title: "Exercise: 1.2, 3",
    description: `3. You can graduate only if you have completed the requirements of your major 
and you do not owe money to the university and you do not have an overdue library book. 
Express your answer in terms of g: "You can graduate," m: "You owe money to the university," 
r: "You have completed the requirements of your major," and b: "You have an overdue library book."`,
    code: `g → (r ∧ ¬m ∧ ¬b)`,
  },
  {
    id: 58,
    title: "Exercise: 1.2, 4",
    description: `4. To use the wireless network in the airport you must pay the daily fee unless you are a subscriber to the service. 
Express your answer in terms of w: "You can use the wireless network in the airport," 
d: "You pay the daily fee," and s: "You are a subscriber to the service."`,
    code: `w → (d ∨ s)`,
  },
  {
    id: 59,
    title: "Exercise: 1.2, 5",
    description: `5. You are eligible to be President of the U.S.A. only if you are at least 35 years old, 
were born in the U.S.A., or at the time of your birth both of your parents were citizens, 
and you have lived at least 14 years in the country. 
Express your answer in terms of e: "You are eligible to be President of the U.S.A.," 
a: "You are at least 35 years old," b: "You were born in the U.S.A.," 
p: "At the time of your birth, both of your parents were citizens," 
and r: "You have lived at least 14 years in the U.S.A."`,
    code: `e → ((a ∧ (b ∨ p)) ∧ r)`,
  },
  {
    id: 60,
    title: "Exercise: 1.2, 6",
    description: `6. You can upgrade your operating system only if you have a 32-bit processor running at 1 GHz or faster, 
at least 1 GB RAM, and 16 GB free hard disk space, or a 64-bit processor running at 2 GHz or faster, 
at least 2 GB RAM, and at least 32 GB free hard disk space. 
Express your answer in terms of u: "You can upgrade your operating system," 
b32: "You have a 32-bit processor," b64: "You have a 64-bit processor," 
g1: "Your processor runs at 1 GHz or faster," g2: "Your processor runs at 2 GHz or faster," 
r1: "Your processor has at least 1 GB RAM," r2: "Your processor has at least 2 GB RAM," 
h16: "You have at least 16 GB free hard disk space," and h32: "You have at least 32 GB free hard disk space."`,
    code: `u → ((b32 ∧ g1 ∧ r1 ∧ h16) ∨ (b64 ∧ g2 ∧ r2 ∧ h32))`,
  },
  {
    id: 61,
    title: "Exercise: 1.2, 7",
    description: `7. Express these system specifications using the propositions p: "The message is scanned for viruses" 
and q: "The message was sent from an unknown system" together with logical connectives (including negations):
a) "The message is scanned for viruses whenever the message was sent from an unknown system."
b) "The message was sent from an unknown system but it was not scanned for viruses."
c) "It is necessary to scan the message for viruses whenever it was sent from an unknown system."
d) "When a message is not sent from an unknown system it is not scanned for viruses."`,
    code: `a) q → p
b) q ∧ ¬p
c) q → p
d) ¬q → ¬p`,
  },

  {
    id: 62,
    title: "Exercise: 1.2, 8",
    description: `8. Express these system specifications using the propositions 
p: "The user enters a valid password," q: "Access is granted," 
and r: "The user has paid the subscription fee" and logical connectives (including negations):
a) "The user has paid the subscription fee, but does not enter a valid password."
b) "Access is granted whenever the user has paid the subscription fee and enters a valid password."
c) "Access is denied if the user has not paid the subscription fee."
d) "If the user has not entered a valid password but has paid the subscription fee, then access is granted."`,
    code: `a) r ∧ ¬p
b) (p ∧ r) → q
c) ¬r → ¬q
d) (¬p ∧ r) → q`,
  },
  {
    id: 63,
    title: "Exercise: 1.2, 9",
    description: `9. Are these system specifications consistent? 
"The system is in multiuser state if and only if it is operating normally. 
If the system is operating normally, the kernel is functioning. 
The kernel is not functioning or the system is in interrupt mode. 
If the system is not in multiuser state, then it is in interrupt mode. 
The system is not in interrupt mode."`,
    code: `Let M = multiuser, N = operating normally, K = kernel functioning, I = interrupt mode
M ↔ N
N → K
¬K ∨ I
¬M → I
¬I
Check for contradictions → consistent? No, there is a contradiction.`,
  },
  {
    id: 64,
    title: "Exercise: 1.2, 10",
    description: `10. Are these system specifications consistent? 
"Whenever the system software is being upgraded, users cannot access the file system. 
If users can access the file system, then they can save new files. 
If users cannot save new files, then the system software is not being upgraded."`,
    code: `Let U = system upgraded, A = users can access, S = users can save
U → ¬A
A → S
¬S → ¬U
Check consistency → yes, no contradictions found.`,
  },
  {
    id: 65,
    title: "Exercise: 1.2, 11",
    description: `11. Are these system specifications consistent? 
"The router can send packets to the edge system only if it supports the new address space. 
For the router to support the new address space it is necessary that the latest software release be installed. 
The router can send packets to the edge system if the latest software release is installed. 
The router does not support the new address space."`,
    code: `Let R = router can send packets, N = supports new address space, L = latest software installed
R → N
L → N
R ↔ L
¬N
Check consistency → contradiction exists.`,
  },
  {
    id: 66,
    title: "Exercise: 1.2, 12",
    description: `12. Are these system specifications consistent? 
"If the file system is not locked, then new messages will be queued. 
If the file system is not locked, then the system is functioning normally, and conversely. 
If new messages are not queued, then they will be sent to the message buffer. 
If the file system is not locked, then new messages will be sent to the message buffer. 
New messages will not be sent to the message buffer."`,
    code: `Let L = locked, Q = messages queued, F = system functioning, B = messages sent to buffer
¬L → Q
¬L ↔ F
¬Q → B
¬L → B
¬B
Check consistency → contradiction exists.`,
  },
  {
    id: 67,
    title: "Exercise: 1.2, 13",
    description: `13. What Boolean search would you use to look for Web pages about beaches in New Jersey? 
What if you wanted to find Web pages about beaches on the isle of Jersey (in the English Channel)?`,
    code: `"beaches AND 'New Jersey'" ; "beaches AND Jersey AND NOT 'New Jersey'"`,
  },
  {
    id: 68,
    title: "Exercise: 1.2, 14",
    description: `14. What Boolean search would you use to look for Web pages about hiking in West Virginia? 
What if you wanted to find Web pages about hiking in Virginia, but not in West Virginia?`,
    code: `"hiking AND 'West Virginia'" ; "hiking AND Virginia AND NOT 'West Virginia'"`,
  },
  {
    id: 69,
    title: "Exercise: 1.2, 15",
    description: `15. What Google search would you use to look for Web pages relating to Ethiopian restaurants in New York or New Jersey?`,
    code: `"Ethiopian restaurants AND (New York OR New Jersey)"`,
  },
  {
    id: 70,
    title: "Exercise: 1.2, 16",
    description: `16. What Google search would you use to look for men's shoes or boots not designed for work?`,
    code: `"men's shoes OR boots NOT work"`,
  },
  {
    id: 71,
    title: "Exercise: 1.2, 17",
    description: `17. Suppose that in Example 7, the inscriptions on Trunks 1, 2, and 3 are 
"The treasure is in Trunk 3," "The treasure is in Trunk 1," and "This trunk is empty." 
For each of these statements, determine whether the Queen who never lies could state this, and if so, which trunk the treasure is in:
a) "All the inscriptions are false."
b) "Exactly one of the inscriptions is true."
c) "Exactly two of the inscriptions are true."
d) "All three inscriptions are true."`,
    code: `a) Yes, Treasure in Trunk 1 or 2?
b) Yes, Treasure in Trunk 3
c) Contradiction
d) Contradiction`,
  },
  {
    id: 72,
    title: "Exercise: 1.2, 18",
    description: `18. Suppose that in Example 7 there are treasures in two of the three trunks. 
The inscriptions on Trunks 1, 2, and 3 are "This trunk is empty," "There is a treasure in Trunk 1," 
and "There is a treasure in Trunk 2." 
For each of these statements, determine whether the Queen who never lies could state this, and if so, which two trunks the treasures are in:
a) "All the inscriptions are false."
b) "Exactly one of the inscriptions is true."
c) "Exactly two of the inscriptions are true."
d) "All three inscriptions are true."`,
    code: `a) Yes, Treasures in Trunks 1 & 2
b) Contradiction
c) Yes, Treasures in Trunks 2 & 3
d) Contradiction`,
  },
  {
    id: 73,
    title: "Exercise: 1.2, 19",
    description: `19. Each inhabitant of a remote village always tells the truth or always lies. 
A villager will give only a "Yes" or a "No" response to a question a tourist asks. 
Suppose you are a tourist visiting this area and come to a fork in the road. 
One branch leads to the ruins you want to visit; the other branch leads deep into the jungle. 
A villager is standing at the fork in the road. 
What one question can you ask the villager to determine which branch to take?`,
    code: `"Which path would you tell me leads to the ruins?" → take the opposite if he lies`,
  },
  {
    id: 74,
    title: "Exercise: 1.2, 20",
    description: `20. An explorer is captured by a group of cannibals. There are two types of cannibals—those who always tell the truth and those who always lie. 
The cannibals will barbecue the explorer unless he can determine whether a particular cannibal always lies or always tells the truth. 
He is allowed to ask the cannibal exactly one question.
a) Explain why the question "Are you a liar?" does not work.
b) Find a question that the explorer can use to determine whether the cannibal always lies or always tells the truth.`,
    code: `a) "Are you a liar?" fails because a liar would lie and a truth-teller would answer truthfully, giving ambiguity.
b) Ask "If I asked you whether you are a liar, would you say yes?" → consistent answer reveals type`,
  },
  {
    id: 75,
    title: "Exercise: 1.2, 21",
    description: `21. When three professors are seated in a restaurant, the hostess asks them: "Does everyone want coffee?" 
The first professor says "I do not know." The second professor then says "I do not know." 
Finally, the third professor says "No, not everyone wants coffee." 
The hostess comes back and gives coffee to the professors who want it. How did she figure out who wanted coffee?`,
    code: `By process of elimination: first two professors could not be sure, the last professor confirms someone does not want coffee → hostess serves only those who want coffee.`,
  },

  {
    id: 76,
    title: "Exercise: 1.2, 22",
    description: `22. When planning a party you want to know whom to invite. 
Among the people you would like to invite are three touchy friends. 
You know that if Jasmine attends, she will become unhappy if Samir is there, 
Samir will attend only if Kanti will be there, 
and Kanti will not attend unless Jasmine also does. 
Which combinations of these three friends can you invite so as not to make someone unhappy?`,
    code: `Let J = Jasmine, S = Samir, K = Kanti
Constraints: 
1) J ∧ S → unhappy → cannot have J & S together
2) S → K
3) K → J
Valid combinations: 
- No one attends
- Jasmine alone
- Kanti alone
- Jasmine & Kanti
- Samir & Kanti is invalid (because K → J, need Jasmine)
- Jasmine & Samir invalid (J ∧ S = unhappy)
- Jasmine & Samir & Kanti invalid (J ∧ S = unhappy)
- Samir alone invalid (S → K, K missing)
✅ So valid: {}, {J}, {K}, {J, K}`,
  },
  {
    id: 77,
    title: "Exercise: 1.2, 23",
    description: `23. A and B are inhabitants of the island of knights and knaves. 
Determine, if possible, what A and B are if they address you in the ways described. 
A says "At least one of us is a knave" and B says nothing.`,
    code: `A: "At least one of us is a knave"
- If A is knight → true → at least one is knave → B is knave
- If A is knave → false → neither is knave → A is not knave → contradiction
✅ So A is knight, B is knave`,
  },
  {
    id: 78,
    title: "Exercise: 1.2, 24",
    description: `24. A says "The two of us are both knights" and B says "A is a knave."`,
    code: `A: "Both are knights"
B: "A is a knave"
Analysis:
- If A is knight → both are knights → B knight → B's statement "A is knave" is false → B is not knight → contradiction
- If A is knave → statement false → at least one is not knight → A is knave, B could be knight or knave
- Check B:
  If B is knight → statement true → A is knave ✅
  If B is knave → statement false → A is not knave ❌
✅ So A = knave, B = knight`,
  },
  {
    id: 79,
    title: "Exercise: 1.2, 25",
    description: `25. A says "I am a knave or B is a knight" and B says nothing.`,
    code: `A: "I am a knave ∨ B is a knight"
- If A is knight → statement true → A is not knave → B is knight ✅
- If A is knave → statement false → "I am a knave ∨ B is a knight" false → A is knave, B not knight ✅
Cannot uniquely determine B if A is knave. 
✅ Most likely: A = knight, B = knight`,
  },
  {
    id: 80,
    title: "Exercise: 1.2, 26",
    description: `26. Both A and B say "I am a knight."`,
    code: `- Only knights tell the truth
- If A says "I am a knight" and is knight → true ✅
- If A is knave → statement false → A is not knight ✅
Same for B
- Cannot have spy? In Smullyan variant, one knight, one knave, one spy (exercise 28 onward)
- Need context, assuming only knight/knave:
✅ A = knight, B = knave, or both knights if both truthful variant`,
  },
  {
    id: 81,
    title: "Exercise: 1.2, 27",
    description: `27. A says "We are both knaves" and B says nothing.`,
    code: `A: "We are both knaves"
- If A is knight → statement true → A & B are knaves → contradiction, knight cannot be knave
- If A is knave → statement false → not both knaves → at least one knight → A is knave ✅
- B must be knight
✅ Solution: A = knave, B = knight`,
  },
  {
    id: 82,
    title: "Exercise: 1.2, 28",
    description: `28. A says "C is the knave," B says "A is the knight," and C says "I am the spy."`,
    code: `- Assign types: Knight (truth), Knave (lies), Spy (either)
- C says "I am the spy" → if spy → true, if knight → false (impossible)
- B says "A is knight" → depends on A
- A says "C is knave"
Analysis:
- Possible: A = knight, B = knight/knave? C = spy ✅
- Unique assignment requires checking constraints:
✅ Likely solution: A = knight, B = knave, C = spy`,
  },
  {
    id: 83,
    title: "Exercise: 1.2, 29",
    description: `29. A says "I am the knight," B says "I am the knave," and C says "B is the knight."`,
    code: `- A says "I am knight" → A = knight
- B says "I am knave" → B cannot be knight (truth) → B = knave
- C says "B is knight" → false → C = knave or spy
✅ Likely: A = knight, B = knave, C = spy`,
  },
  {
    id: 84,
    title: "Exercise: 1.2, 30",
    description: `30. A says "I am the knave," B says "I am the knave," and C says "I am the knave."`,
    code: `- Statement "I am knave"
- Knight cannot claim to be knave → lie → cannot be knight
- Knave cannot claim to be knave → lie → must be knave
- Spy could say anything
✅ A, B, C are likely knave/spy depending on constraints`,
  },
  {
    id: 85,
    title: "Exercise: 1.2, 31",
    description: `31. How many rows appear in a truth table for each of these compound propositions?
a) p → ¬p
b) (p ∨ ¬r) ∧ (q ∨ ¬s)
c) q ∨ p ∨ ¬s ∨ ¬r ∨ ¬t ∨ u
d) (p ∧ r ∧ t) ↔ (q ∧ t)`,
    code: `- Truth table rows = 2^(number of distinct variables)
a) p → ¬p → 1 variable → 2^1 = 2 rows
b) (p ∨ ¬r) ∧ (q ∨ ¬s) → variables: p, q, r, s → 2^4 = 16 rows
c) q ∨ p ∨ ¬s ∨ ¬r ∨ ¬t ∨ u → variables: p, q, r, s, t, u → 2^6 = 64 rows
d) (p ∧ r ∧ t) ↔ (q ∧ t) → variables: p, q, r, t → 2^4 = 16 rows`,
  },
  {
    id: 86,
    title: "Exercise: 1.2, 32",
    description: `32. How many rows appear in a truth table for each of these compound propositions?
a) (q → ¬p) ∨ (¬p → ¬q)
b) (p ∨ ¬t) ∧ (p ∨ ¬s)
c) (p → r) ∨ (¬s → ¬t) ∨ (¬u → v)
d) (p ∧ r ∧ s) ∨ (q ∧ t) ∨ (r ∧ ¬t)`,
    code: `- Count distinct variables for each:
a) q, p → 2^2 = 4 rows
b) p, t, s → 2^3 = 8 rows
c) p, r, s, t, u, v → 2^6 = 64 rows
d) p, r, s, q, t → 2^5 = 32 rows`,
  },
  {
    id: 87,
    title: "Exercise: 1.2, 33",
    description: `33. Construct a truth table for each of these compound propositions.
a) p ∧ ¬p
b) p ∨ ¬p
c) (p ∨ ¬q) → q
d) (p ∨ q) → (p ∧ q)
e) (p → q) ↔ (¬q → ¬p)
f) (p → q) → (q → p)`,
    code: `Truth table outputs:
a) p ∧ ¬p → always false → F, F
b) p ∨ ¬p → always true → T, T
c) (p ∨ ¬q) → q → p F, q F → T, F; etc.
d) (p ∨ q) → (p ∧ q) → T/F depending on values
e) (p → q) ↔ (¬q → ¬p) → always true (contrapositive)
f) (p → q) → (q → p) → T/F depending on values`,
  },
  {
    id: 88,
    title: "Exercise: 1.2, 34",
    description: `34. Construct a truth table for each of these compound propositions.
a) p → ¬p
b) p ↔ ¬p
c) p ⊕ (p ∨ q)
d) (p ∧ q) → (p ∨ q)
e) (q → ¬p) ↔ (p ↔ q)
f) (p ↔ q) ⊕ (p ↔ ¬q)`,
    code: `- a) p → ¬p → F/T
- b) p ↔ ¬p → always false
- c) p ⊕ (p ∨ q) → T/F depending on p, q
- d) (p ∧ q) → (p ∨ q) → always true
- e) (q → ¬p) ↔ (p ↔ q) → T/F
- f) (p ↔ q) ⊕ (p ↔ ¬q) → T/F`,
  },
  {
    id: 89,
    title: "Exercise: 1.2, 35",
    description: `35. Construct a truth table for each of these compound propositions.
a) (p ∨ q) → (p ⊕ q)
b) (p ⊕ q) → (p ∧ q)
c) (p ∨ q) ⊕ (p ∧ q)
d) (p ↔ q) ⊕ (¬p ↔ q)
e) (p ↔ q) ⊕ (¬p ↔ ¬r)
f) (p ⊕ q) → (p ⊕ ¬q)`,
    code: `- a) T/F depending on p, q
- b) T/F
- c) XOR of OR and AND → T/F
- d) XOR of equivalences → T/F
- e) XOR with ¬p ↔ ¬r → T/F
- f) XOR implications → T/F`,
  },
  {
    id: 90,
    title: "Exercise: 1.2, 36",
    description: `36. Construct a truth table for each of these compound propositions.
a) p ⊕ p
b) p ⊕ ¬p
c) p ⊕ ¬q
d) ¬p ⊕ ¬q
e) (p ⊕ q) ∨ (p ⊕ ¬q)
f) (p ⊕ q) ∧ (p ⊕ ¬q)`,
    code: `- a) p ⊕ p → always false
- b) p ⊕ ¬p → always true
- c) p ⊕ ¬q → T/F
- d) ¬p ⊕ ¬q → T/F
- e) (p ⊕ q) ∨ (p ⊕ ¬q) → T/F
- f) (p ⊕ q) ∧ (p ⊕ ¬q) → T/F`,
  },
  {
    id: 91,
    title: "Exercise: 1.2, 37",
    description: `37. Construct a truth table for each of these compound propositions.
a) p → ¬q
b) ¬p ↔ q
c) (p → q) ∨ (¬p → q)
d) (p → q) ∧ (¬p → q)
e) (p ↔ q) ∨ (¬p ↔ q)
f) (¬p ↔ ¬q) ↔ (p ↔ q)`,
    code: `- a) T/F depending on p, q
- b) equivalence T/F
- c) disjunction of implications → always true
- d) conjunction of implications → T/F
- e) disjunction equivalences → T/F
- f) (¬p ↔ ¬q) ↔ (p ↔ q) → always true`,
  },
  {
    id: 92,
    title: "Exercise: 1.2, 38",
    description: `38. Construct a truth table for each of these compound propositions.
a) (p ∨ q) ∨ r
b) (p ∨ q) ∧ r
c) (p ∧ q) ∨ r
d) (p ∧ q) ∧ r
e) (p ∨ q) ∧ ¬r
f) (p ∧ q) ∨ ¬r`,
    code: `- a) OR chain → T unless all F
- b) AND with r → T if r=T and p∨q=T
- c) AND/OR combination → T/F
- d) AND chain → T if all T
- e) AND with ¬r → T if r=F and p∨q=T
- f) OR with ¬r → T if r=F or p∧q=T`,
  },
  {
    id: 93,
    title: "Exercise: 1.2, 39",
    description: `39. Construct a truth table for each of these compound propositions.
a) p → (¬q ∨ r)
b) ¬p → (q → r)
c) (p → q) ∨ (¬p → r)
d) (p → q) ∧ (¬p → r)
e) (p ↔ q) ∨ (¬q ↔ r)
f) (¬p ↔ ¬q) ↔ (q ↔ r)`,
    code: `- a) T/F depending on p,q,r
- b) implication chain → T/F
- c) disjunction of implications → T/F
- d) conjunction of implications → T/F
- e) OR of equivalences → T/F
- f) equivalence chain → T/F`,
  },
  {
    id: 94,
    title: "Exercise: 1.2, 40",
    description: `40. Construct a truth table for ((p → q) → r) → s.`,
    code: `- Variables: p,q,r,s → 4 variables → 16 rows
- Evaluate innermost →, then middle →, then outer →
- Result T/F depending on values`,
  },
  {
    id: 95,
    title: "Exercise: 1.2, 41",
    description: `41. Construct a truth table for (p ↔ q) ↔ (r ↔ s).`,
    code: `- Variables: p,q,r,s → 4 variables → 16 rows
- Evaluate p↔q, r↔s, then equivalence of the two
- Result T/F`,
  },
  {
    id: 96,
    title: "Exercise: 1.2, 42",
    description: `42. Explain, without using a truth table, why (p ∨ ¬q) ∧ (q ∨ ¬r) ∧ (r ∨ ¬p) is true when p, q, and r have the same truth value and it is false otherwise.`,
    code: `- If p=q=r=T:
(p ∨ ¬q) ∧ (q ∨ ¬r) ∧ (r ∨ ¬p)
= (T ∨ F) ∧ (T ∨ F) ∧ (T ∨ F) = T ∧ T ∧ T = T
- If p=q=r=F:
(F ∨ T) ∧ (F ∨ T) ∧ (F ∨ T) = T ∧ T ∧ T = T
- If values differ:
At least one conjunct = F → overall F
✅ So true only if all same, false otherwise`,
  },

  {
    id: 97,
    title: "Exercise: 1.2, 43",
    description: `43. Freedonia has 50 senators. Each senator is either honest or corrupt. Suppose you know that at least one of the Freedonian senators is honest and that, given any two Freedonian senators, at least one is corrupt. Based on these facts, can you determine how many Freedonian senators are honest and how many are corrupt? If so, what is the answer?`,
    code: `Reasoning:
- Let H = honest senators, C = corrupt senators, total = 50
- At least one senator is honest → H ≥ 1
- For any pair of senators, at least one is corrupt → no two honest senators exist together
  → So there cannot be more than 1 honest senator
- Combining: H ≥ 1 and H ≤ 1 → H = 1
- Total senators = 50 → C = 50 - 1 = 49

Answer:
- Honest senators: 1
- Corrupt senators: 49`,
  },
  {
    id: 98,
    title: "Exercise: 1.2, 44",
    description: `still not done.`,
    code: `still not done`,
  },
  {
    id: 99,
    title: "Exercise: 1.2, 45   ",
    description: `still not done.`,
    code: `still not done`,
  },

  {
    id: 100,
    title: "Exercise: 1.2, 46",
    description: `46. Construct a combinatorial circuit using inverters, OR gates, and AND gates that produces the output (p ∧ ¬r) ∨ (¬q ∧ r) from input bits p, q, and r.`,
    code: `Circuit Design Steps:
1. Inputs: p, q, r
2. Invert r → ¬r
3. Invert q → ¬q
4. Compute AND gates:
   - p ∧ ¬r
   - ¬q ∧ r
5. Compute OR gate to combine the two AND outputs:
   - (p ∧ ¬r) ∨ (¬q ∧ r)

Output: (p ∧ ¬r) ∨ (¬q ∧ r)`,
  },
  {
    id: 101,
    title: "Exercise: 1.2, 47",
    description: `47. Construct a combinatorial circuit using inverters, OR gates, and AND gates that produces the output ((¬p ∨ ¬r) ∧ ¬q) ∨ (¬p ∧ (q ∨ r)) from input bits p, q, and r.`,
    code: `Circuit Design Steps:
1. Inputs: p, q, r
2. Invert p → ¬p
3. Invert q → ¬q
4. Invert r → ¬r
5. Compute AND/OR combinations:
   - ¬p ∨ ¬r
   - (¬p ∨ ¬r) ∧ ¬q
   - q ∨ r
   - ¬p ∧ (q ∨ r)
6. Compute final OR gate combining the two main AND outputs:
   - ((¬p ∨ ¬r) ∧ ¬q) ∨ (¬p ∧ (q ∨ r))

Output: ((¬p ∨ ¬r) ∧ ¬q) ∨ (¬p ∧ (q ∨ r))`,
  },
  {
    id: 102,
    title: "Exercise: 1.3, 1",
    description:
      "Use truth tables to verify these equivalences.\na) p ∧ T ≡ p\nb) p ∨ F ≡ p\nc) p ∧ F ≡ F\nd) p ∨ T ≡ T\ne) p ∨ p ≡ p\nf) p ∧ p ≡ p",
    code: "Truth Table Examples:\n\n| p | p ∧ T | p ∨ F | p ∧ F | p ∨ T | p ∨ p | p ∧ p |\n|---|-------|-------|-------|-------|-------|-------|\n| T |   T   |   T   |   F   |   T   |   T   |   T   |\n| F |   F   |   F   |   F   |   T   |   F   |   F   |",
  },
  {
    id: 103,
    title: "Exercise: 1.3, 2",
    description: "Show that ¬(¬p) and p are logically equivalent.",
    code: "Truth Table:\n\n| p | ¬p | ¬(¬p) |\n|---|----|-------|\n| T | F  |   T   |\n| F | T  |   F   |",
  },
  {
    id: 104,
    title: "Exercise: 1.3, 3",
    description:
      "Use truth tables to verify the commutative laws.\na) p ∨ q ≡ q ∨ p\nb) p ∧ q ≡ q ∧ p",
    code: "Truth Table:\n\n| p | q | p ∨ q | q ∨ p | p ∧ q | q ∧ p |\n|---|---|-------|-------|-------|-------|\n| T | T |   T   |   T   |   T   |   T   |\n| T | F |   T   |   T   |   F   |   F   |\n| F | T |   T   |   T   |   F   |   F   |\n| F | F |   F   |   F   |   F   |   F   |",
  },
  {
    id: 105,
    title: "Exercise: 1.3, 4",
    description:
      "Use truth tables to verify the associative laws.\na) (p ∨ q) ∨ r ≡ p ∨ (q ∨ r)\nb) (p ∧ q) ∧ r ≡ p ∧ (q ∧ r)",
    code: "Truth Table Example:\n\n| p | q | r | (p ∨ q) ∨ r | p ∨ (q ∨ r) | (p ∧ q) ∧ r | p ∧ (q ∧ r) |\n|---|---|---|-------------|-------------|-------------|-------------|\n| T | T | T |      T      |      T      |      T      |      T      |\n| T | T | F |      T      |      T      |      F      |      F      |\n| T | F | T |      T      |      T      |      F      |      F      |\n| T | F | F |      T      |      T      |      F      |      F      |\n| F | T | T |      T      |      T      |      F      |      F      |\n| F | T | F |      T      |      T      |      F      |      F      |\n| F | F | T |      T      |      T      |      F      |      F      |\n| F | F | F |      F      |      F      |      F      |      F      |",
  },
  {
    id: 106,
    title: "Exercise: 1.3, 5",
    description:
      "Use a truth table to verify the distributive law: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)",
    code: "Truth Table:\n\n| p | q | r | q ∨ r | p ∧ (q ∨ r) | p ∧ q | p ∧ r | (p ∧ q) ∨ (p ∧ r) |\n|---|---|---|-------|-------------|-------|-------|-----------------|\n| T | T | T |   T   |      T      |   T   |   T   |        T        |\n| T | T | F |   T   |      T      |   T   |   F   |        T        |\n| T | F | T |   T   |      T      |   F   |   T   |        T        |\n| T | F | F |   F   |      F      |   F   |   F   |        F        |\n| F | T | T |   T   |      F      |   F   |   F   |        F        |\n| F | T | F |   T   |      F      |   F   |   F   |        F        |\n| F | F | T |   T   |      F      |   F   |   F   |        F        |\n| F | F | F |   F   |      F      |   F   |   F   |        F        |",
  },
  {
    id: 107,
    title: "Exercise: 1.3, 6",
    description:
      "Use a truth table to verify the first De Morgan law: ¬(p ∧ q) ≡ ¬p ∨ ¬q",
    code: "Truth Table:\n\n| p | q | p ∧ q | ¬(p ∧ q) | ¬p | ¬q | ¬p ∨ ¬q |\n|---|---|-------|-----------|----|----|---------|\n| T | T |   T   |     F     | F  | F  |    F    |\n| T | F |   F   |     T     | F  | T  |    T    |\n| F | T |   F   |     T     | T  | F  |    T    |\n| F | F |   F   |     T     | T  | T  |    T    |",
  },
  {
    id: 108,
    title: "Exercise: 1.3, 7",
    description:
      "Express these system specifications using the propositions p: “The message is scanned for viruses” and q: “The message was sent from an unknown system” together with logical connectives (including negations).\na) The message is scanned for viruses whenever the message was sent from an unknown system.\nb) The message was sent from an unknown system but it was not scanned for viruses.\nc) It is necessary to scan the message for viruses whenever it was sent from an unknown system.\nd) When a message is not sent from an unknown system it is not scanned for viruses.",
    code: "a) q → p\nb) q ∧ ¬p\nc) q → p\n(d) ¬q → ¬p",
  },
  {
    id: 109,
    title: "Exercise: 1.3, 8",
    description:
      "Express these system specifications using the propositions p: “The user enters a valid password,” q: “Access is granted,” and r: “The user has paid the subscription fee” and logical connectives (including negations).\na) The user has paid the subscription fee, but does not enter a valid password.\nb) Access is granted whenever the user has paid the subscription fee and enters a valid password.\nc) Access is denied if the user has not paid the subscription fee.\nd) If the user has not entered a valid password but has paid the subscription fee, then access is granted.",
    code: "a) r ∧ ¬p\nb) (p ∧ r) → q\nc) ¬r → ¬q\nd) (¬p ∧ r) → q",
  },
  {
    id: 110,
    title: "Exercise: 1.3, 9",
    description:
      "For each of these compound propositions, use the conditional-disjunction equivalence to find an equivalent compound proposition that does not involve conditionals.\na) p → ¬q\nb) (p → q) → r\nc) (¬q → p) → (p → ¬q)",
    code: "a) ¬p ∨ ¬q\nb) ¬(¬p ∨ q) ∨ r ≡ (p ∧ ¬q) ∨ r\nc) ¬(¬q ∨ p) ∨ (¬p ∨ ¬q) ≡ (q ∧ ¬p) ∨ (¬p ∨ ¬q)",
  },
  {
    id: 111,
    title: "Exercise: 1.3, 10",
    description:
      "For each of these compound propositions, use the conditional-disjunction equivalence to find an equivalent compound proposition that does not involve conditionals.\na) ¬p → ¬q\nb) (p ∨ q) → ¬p\nc) (p → ¬q) → (¬p → q)",
    code: "a) p ∨ ¬q\nb) ¬(p ∨ q) ∨ ¬p ≡ ¬p ∧ ¬q ∨ ¬p ≡ ¬p\nc) ¬(¬p ∨ ¬q) ∨ (p ∨ q) ≡ (p ∧ q) ∨ (p ∨ q) ≡ p ∨ q",
  },
  {
    id: 112,
    title: "Exercise: 1.3, 11",
    description:
      "Show that each of these conditional statements is a tautology by using truth tables.\na) (p ∧ q) → p\nb) p → (p ∨ q)\nc) ¬p → (p → q)\nd) (p ∧ q) → (p → q)\ne) ¬(p → q) → p\nf) ¬(p → q) → ¬q",
    code: "Truth Table:\nAll evaluate to T for all p, q combinations, confirming tautology.",
  },
  {
    id: 113,
    title: "Exercise: 1.3, 12",
    description:
      "Show that each of these conditional statements is a tautology by using truth tables.\na) [¬p ∧ (p ∨ q)] → q\nb) [(p → q) ∧ (q → r)] → (p → r)\nc) [p ∧ (p → q)] → q\nd) [(p ∨ q) ∧ (p → r) ∧ (q → r)] → r",
    code: "Truth Table:\nAll evaluate to T for all combinations of p, q, r, confirming tautology.",
  },
  {
    id: 114,
    title: "Exercise: 1.3, 13",
    description:
      "Show that each conditional statement in Exercise 11 is a tautology using the fact that a conditional statement is false exactly when the hypothesis is true and the conclusion is false. (Do not use truth tables.)",
    code: "Analyze each conditional:\nIf p ∧ q is true, then p is true → T\np → p ∨ q: if p=T, p ∨ q=T → T\n¬p → (p → q): if ¬p=F, conditional holds → T\n(p ∧ q) → (p → q): if p ∧ q=T, p→q=T → T\n¬(p→q)→p: if p→q=T then ¬(p→q)=F → T\n¬(p→q)→¬q: similar reasoning → T",
  },
  {
    id: 115,
    title: "Exercise: 1.3, 14",
    description:
      "Show that each conditional statement in Exercise 12 is a tautology using the fact that a conditional statement is false exactly when the hypothesis is true and the conclusion is false. (Do not use truth tables.)",
    code: "Analyze conditionals similarly by evaluating when hypotheses are true and conclusions false. All cases evaluate to T.",
  },
  {
    id: 116,
    title: "Exercise: 1.3, 15",
    description:
      "Show that each conditional statement in Exercise 11 is a tautology by applying a chain of logical identities. (Do not use truth tables.)",
    code: "Example: (p ∧ q) → p ≡ ¬(p ∧ q) ∨ p ≡ ¬p ∨ ¬q ∨ p ≡ ¬q ∨ p ≡ T when simplified → Tautology. Apply similar identities to the rest.",
  },
  {
    id: 117,
    title: "Exercise: 1.3, 16",
    description:
      "Show that each conditional statement in Exercise 12 is a tautology by applying a chain of logical identities. (Do not use truth tables.)",
    code: "Use ¬(p ∧ q) ≡ ¬p ∨ ¬q, distributive, and associative laws to simplify each statement to T.",
  },
  {
    id: 118,
    title: "Exercise: 1.3, 17",
    description:
      "Use truth tables to verify the absorption laws.\na) p ∨ (p ∧ q) ≡ p\nb) p ∧ (p ∨ q) ≡ p",
    code: "Truth Table:\n| p | q | p ∧ q | p ∨ (p ∧ q) | p ∨ q | p ∧ (p ∨ q) |\n|---|---|-------|--------------|-------|-------------|\n| T | T |   T   |      T       |   T   |      T      |\n| T | F |   F   |      T       |   T   |      T      |\n| F | T |   F   |      F       |   T   |      F      |\n| F | F |   F   |      F       |   F   |      F      |",
  },
  {
    id: 119,
    title: "Exercise: 1.3, 18",
    description: "Determine whether (¬p ∧ (p → q)) → ¬q is a tautology.",
    code: "Truth Table shows that for p=T, q=F, hypothesis=¬p∧(p→q)=F∧F=F → conditional=T. All cases evaluate to T → Yes, tautology.",
  },
  {
    id: 120,
    title: "Exercise: 1.3, 19",
    description: "Determine whether (¬q ∧ (p → q)) → ¬p is a tautology.",
    code: "Check truth table: p=T,q=F → p→q=F, ¬q∧(p→q)=T∧F=F → conditional=T. All combinations yield T → tautology.",
  },

  {
    id: 121,
    title: "Exercise: 1.3, 20",
    description:
      "Show that p ↔ q and (p ∧ q) ∨ (¬p ∧ ¬q) are logically equivalent.",
    code: "Truth Table:\n| p | q | p ∧ q | ¬p | ¬q | ¬p ∧ ¬q | (p ∧ q) ∨ (¬p ∧ ¬q) | p ↔ q |\n|---|---|-------|----|----|---------|----------------------|-------|\n| T | T |   T   | F  | F  |    F    |          T           |   T   |\n| T | F |   F   | F  | T  |    F    |          F           |   F   |\n| F | T |   F   | T  | F  |    F    |          F           |   F   |\n| F | F |   F   | T  | T  |    T    |          T           |   T   |",
  },
  {
    id: 122,
    title: "Exercise: 1.3, 21",
    description: "Show that ¬(p ↔ q) and p ↔ ¬q are logically equivalent.",
    code: "Truth Table:\n| p | q | ¬q | p ↔ ¬q | p ↔ q | ¬(p ↔ q) |\n|---|---|----|---------|-------|-----------|\n| T | T | F  |   F     |   T   |     F     |\n| T | F | T  |   T     |   F   |     T     |\n| F | T | F  |   T     |   F   |     T     |\n| F | F | T  |   F     |   T   |     F     |",
  },
  {
    id: 123,
    title: "Exercise: 1.3, 22",
    description: "Show that p → q and ¬q → ¬p are logically equivalent.",
    code: "Truth Table:\n| p | q | ¬p | ¬q | p → q | ¬q → ¬p |\n|---|---|----|----|-------|-----------|\n| T | T | F  | F  |   T   |     T     |\n| T | F | F  | T  |   F   |     F     |\n| F | T | T  | F  |   T   |     T     |\n| F | F | T  | T  |   T   |     T     |",
  },
  {
    id: 124,
    title: "Exercise: 1.3, 23",
    description: "Show that ¬p ↔ q and p ↔ ¬q are logically equivalent.",
    code: "Truth Table:\n| p | q | ¬p | ¬q | ¬p ↔ q | p ↔ ¬q |\n|---|---|----|----|--------|---------|\n| T | T | F  | F  |   F    |   F     |\n| T | F | F  | T  |   T    |   T     |\n| F | T | T  | F  |   T    |   T     |\n| F | F | T  | T  |   F    |   F     |",
  },
  {
    id: 125,
    title: "Exercise: 1.3, 24",
    description: "Show that ¬(p ⊕ q) and p ↔ q are logically equivalent.",
    code: "Truth Table:\n| p | q | p ⊕ q | ¬(p ⊕ q) | p ↔ q |\n|---|---|-------|-----------|-------|\n| T | T |   F   |     T     |   T   |\n| T | F |   T   |     F     |   F   |\n| F | T |   T   |     F     |   F   |\n| F | F |   F   |     T     |   T   |",
  },
  {
    id: 126,
    title: "Exercise: 1.3, 25",
    description: "Show that ¬(p ↔ q) and ¬p ↔ q are logically equivalent.",
    code: "Truth Table:\n| p | q | ¬p | p ↔ q | ¬(p ↔ q) | ¬p ↔ q |\n|---|---|----|-------|-----------|---------|\n| T | T | F  |   T   |     F     |   F     |\n| T | F | F  |   F   |     T     |   T     |\n| F | T | T  |   F   |     T     |   T     |\n| F | F | T  |   T   |     F     |   F     |",
  },
  {
    id: 127,
    title: "Exercise: 1.3, 26",
    description:
      "Show that (p → q) ∧ (p → r) and p → (q ∧ r) are logically equivalent.",
    code: "Truth Table:\n| p | q | r | p→q | p→r | (p→q)∧(p→r) | q∧r | p→(q∧r) |\n|---|---|---|-----|-----|---------------|-----|----------|\n| T | T | T |  T  |  T  |       T       |  T  |    T     |\n| T | T | F |  T  |  F  |       F       |  F  |    F     |\n| T | F | T |  F  |  T  |       F       |  F  |    F     |\n| T | F | F |  F  |  F  |       F       |  F  |    F     |\n| F | T | T |  T  |  T  |       T       |  T  |    T     |\n| F | T | F |  T  |  T  |       T       |  F  |    T     |\n| F | F | T |  T  |  T  |       T       |  F  |    T     |\n| F | F | F |  T  |  T  |       T       |  F  |    T     |",
  },
  {
    id: 128,
    title: "Exercise: 1.3, 27",
    description:
      "Show that (p → r) ∧ (q → r) and (p ∨ q) → r are logically equivalent.",
    code: "Truth Table:\n| p | q | r | p→r | q→r | (p→r)∧(q→r) | p∨q | (p∨q)→r |\n|---|---|---|-----|-----|---------------|-----|----------|\n| T | T | T |  T  |  T  |       T       |  T  |    T     |\n| T | T | F |  F  |  F  |       F       |  T  |    F     |\n| T | F | T |  T  |  T  |       T       |  T  |    T     |\n| T | F | F |  F  |  T  |       F       |  T  |    F     |\n| F | T | T |  T  |  T  |       T       |  T  |    T     |\n| F | T | F |  T  |  F  |       F       |  T  |    F     |\n| F | F | T |  T  |  T  |       T       |  F  |    T     |\n| F | F | F |  T  |  T  |       T       |  F  |    T     |",
  },
  {
    id: 129,
    title: "Exercise: 1.3, 28",
    description:
      "Show that (p → q) ∨ (p → r) and p → (q ∨ r) are logically equivalent.",
    code: "Truth Table:\n| p | q | r | p→q | p→r | (p→q)∨(p→r) | q∨r | p→(q∨r) |\n|---|---|---|-----|-----|---------------|-----|-----------|\n| T | T | T |  T  |  T  |       T       |  T  |     T     |\n| T | T | F |  T  |  F  |       T       |  T  |     T     |\n| T | F | T |  F  |  T  |       T       |  T  |     T     |\n| T | F | F |  F  |  F  |       F       |  F  |     F     |\n| F | T | T |  T  |  T  |       T       |  T  |     T     |\n| F | T | F |  T  |  T  |       T       |  T  |     T     |\n| F | F | T |  T  |  T  |       T       |  T  |     T     |\n| F | F | F |  T  |  T  |       T       |  F  |     T     |",
  },
  {
    id: 130,
    title: "Exercise: 1.3, 29",
    description:
      "Show that (p → r) ∨ (q → r) and (p ∧ q) → r are logically equivalent.",
    code: "Truth Table:\n| p | q | r | p→r | q→r | (p→r)∨(q→r) | p∧q | (p∧q)→r |\n|---|---|---|-----|-----|---------------|-----|-----------|\n| T | T | T |  T  |  T  |       T       |  T  |     T     |\n| T | T | F |  F  |  F  |       F       |  T  |     F     |\n| T | F | T |  T  |  T  |       T       |  F  |     T     |\n| T | F | F |  F  |  T  |       T       |  F  |     T     |\n| F | T | T |  T  |  T  |       T       |  F  |     T     |\n| F | T | F |  T  |  F  |       T       |  F  |     T     |\n| F | F | T |  T  |  T  |       T       |  F  |     T     |\n| F | F | F |  T  |  T  |       T       |  F  |     T     |",
  },
  {
    id: 131,
    title: "Exercise: 1.3, 30",
    description:
      "Show that ¬p → (q → r) and q → (p ∨ r) are logically equivalent.",
    code: "Truth Table:\n| p | q | r | ¬p | q→r | ¬p→(q→r) | p∨r | q→(p∨r) |\n|---|---|---|----|-----|-----------|-----|----------|\n| T | T | T | F  |  T  |     T     |  T  |    T     |\n| T | T | F | F  |  F  |     T     |  T  |    T     |\n| T | F | T | F  |  T  |     T     |  T  |    T     |\n| T | F | F | F  |  T  |     T     |  F  |    T     |\n| F | T | T | T  |  T  |     T     |  T  |    T     |\n| F | T | F | T  |  F  |     F     |  F  |    F     |\n| F | F | T | T  |  T  |     T     |  T  |    T     |\n| F | F | F | T  |  T  |     T     |  F  |    T     |",
  },
  {
    id: 132,
    title: "Exercise: 1.3, 31",
    description:
      "Show that p ↔ q and (p → q) ∧ (q → p) are logically equivalent.",
    code: "Truth Table:\n| p | q | p→q | q→p | (p→q)∧(q→p) | p↔q |\n|---|---|-----|-----|---------------|-------|\n| T | T |  T  |  T  |       T       |   T   |\n| T | F |  F  |  T  |       F       |   F   |\n| F | T |  T  |  F  |       F       |   F   |\n| F | F |  T  |  T  |       T       |   T   |",
  },
  {
    id: 133,
    title: "Exercise: 1.3, 32",
    description: "Show that p ↔ q and ¬p ↔ ¬q are logically equivalent.",
    code: "Truth Table:\n| p | q | ¬p | ¬q | ¬p↔¬q | p↔q |\n|---|---|----|----|--------|------|\n| T | T | F  | F  |   T    |  T   |\n| T | F | F  | T  |   F    |  F   |\n| F | T | T  | F  |   F    |  F   |\n| F | F | T  | T  |   T    |  T   |",
  },
  {
    id: 134,
    title: "Exercise: 1.3, 33",
    description: "Show that (p → q) ∧ (q → r) → (p → r) is a tautology.",
    code: "Truth Table:\nCheck all p,q,r combinations → all evaluate to T → tautology.",
  },
  {
    id: 135,
    title: "Exercise: 1.3, 34",
    description: "Show that (p ∨ q) ∧ (¬p ∨ r) → (q ∨ r) is a tautology.",
    code: "Truth Table:\nCheck all p,q,r combinations → all evaluate to T → tautology.",
  },
  {
    id: 136,
    title: "Exercise: 1.3, 35",
    description:
      "Show that (p → q) → r and p → (q → r) are not logically equivalent.",
    code: "Truth Table:\nFor p=T, q=F, r=F → (p→q)→r = (F)→F = F → T? (evaluate carefully) yields different truth values → not equivalent.",
  },
  {
    id: 137,
    title: "Exercise: 1.3, 36",
    description:
      "Show that (p ∧ q) → r and (p → r) ∧ (q → r) are not logically equivalent.",
    code: "Truth Table:\nFor p=T, q=T, r=F → (p∧q)→r = F, (p→r)∧(q→r) = F∧F=F; for p=T,q=F,r=F → (p∧q)→r=T→F? yields different truth values → not equivalent.",
  },
  {
    id: 138,
    title: "Exercise: 1.3, 37",
    description:
      "Show that (p → q) → (r → s) and (p → r) → (q → s) are not logically equivalent.",
    code: "Truth Table:\nCheck combinations of p,q,r,s → find cases where ((p→q)→(r→s)) ≠ ((p→r)→(q→s)) → not equivalent.",
  },
  {
    id: 139,
    title: "Exercise: 1.3, 38",
    description:
      "Find the dual of each of these compound propositions.\na) p ∨ ¬q\nb) p ∧ (q ∨ (r ∧ T))\nc) (p ∧ ¬q) ∨ (q ∧ F)",
    code: "Duals:\na) p ∧ ¬q\nb) p ∨ (q ∧ (r ∨ F))\nc) (p ∨ ¬q) ∧ (q ∨ T)",
  },
  {
    id: 140,
    title: "Exercise: 1.3, 39",
    description:
      "Find the dual of each of these compound propositions.\na) p ∧ ¬q ∧ ¬r\nb) (p ∧ q ∧ r) ∨ s\nc) (p ∨ F) ∧ (q ∨ T)",
    code: "Duals:\na) p ∨ ¬q ∨ ¬r\nb) (p ∨ q ∨ r) ∧ s\nc) (p ∧ T) ∨ (q ∧ F)",
  },
  {
    id: 141,
    title: "Exercise: 1.3, 40",
    description: "When does s* = s, where s is a compound proposition?",
    code: "s* = s if the proposition is self-dual (unchanged when ∧↔∨, T↔F, F↔T)",
  },
  {
    id: 142,
    title: "Exercise: 1.3, 41",
    description: "Show that (s*)* = s when s is a compound proposition.",
    code: "Applying dual twice returns the original: ((s*)*) = s",
  },
  {
    id: 143,
    title: "Exercise: 1.3, 42",
    description:
      "Show that the logical equivalences in Table 6, except for double negation, come in pairs where each pair contains compound propositions that are duals of each other.",
    code: "Check each law: swap ∧↔∨, T↔F to see duals → each pair equivalent",
  },
  {
    id: 144,
    title: "Exercise: 1.3, 43",
    description:
      "Why are the duals of two equivalent compound propositions also equivalent, where these propositions contain only ∧, ∨, ¬?",
    code: "If p ≡ q, then replacing ∧↔∨, T↔F preserves truth table equivalence → duals also equivalent",
  },
  {
    id: 145,
    title: "Exercise: 1.3, 44",
    description:
      "Find a compound proposition involving p, q, r that is true when p and q are true and r is false, but false otherwise.",
    code: "Solution: (p ∧ q ∧ ¬r)",
  },
  {
    id: 146,
    title: "Exercise: 1.3, 45",
    description:
      "Find a compound proposition involving p, q, r that is true when exactly two of p, q, r are true and false otherwise.",
    code: "Solution: (p ∧ q ∧ ¬r) ∨ (p ∧ ¬q ∧ r) ∨ (¬p ∧ q ∧ r)",
  },
  {
    id: 147,
    title: "Exercise: 1.3, 46",
    description:
      "Show that a compound proposition with any truth table in n variables can be expressed as a disjunction of conjunctions of variables or their negations (disjunctive normal form).",
    code: "Form conjunctions for all rows where the proposition is true → disjoin them → DNF",
  },
  {
    id: 148,
    title: "Exercise: 1.3, 47",
    description:
      "Show that {¬, ∧, ∨} form a functionally complete collection of logical operators.",
    code: "Since any compound proposition can be written in DNF using ¬, ∧, ∨ → {¬, ∧, ∨} is functionally complete",
  },
  {
    id: 149,
    title: "Exercise: 1.3, 48",
    description:
      "Show that {¬, ∧} form a functionally complete collection of logical operators.",
    code: "Use De Morgan: p ∨ q ≡ ¬(¬p ∧ ¬q) → all propositions using ∨ can be expressed with ¬, ∧ → {¬, ∧} complete",
  },
  {
    id: 150,
    title: "Exercise: 1.3, 49",
    description:
      "Show that {¬, ∨} form a functionally complete collection of logical operators.",
    code: "Use De Morgan: p ∧ q ≡ ¬(¬p ∨ ¬q) → all propositions using ∧ can be expressed with ¬, ∨ → {¬, ∨} complete",
  },
  {
    id: 151,
    title: "Exercise: 1.3, 50",
    description: "Construct a truth table for the logical operator NAND.",
    code: "Truth Table for p ∣ q (NAND):\n| p | q | p ∣ q |\n|---|---|-------|\n| T | T |   F   |\n| T | F |   T   |\n| F | T |   T   |\n| F | F |   T   |",
  },
  {
    id: 152,
    title: "Exercise: 1.3, 51",
    description: "Show that p ∣ q is logically equivalent to ¬(p ∧ q).",
    code: "Truth Table:\np ∣ q = ¬(p ∧ q) for all combinations of p,q → equivalent",
  },
  {
    id: 153,
    title: "Exercise: 1.3, 52",
    description: "Construct a truth table for the logical operator NOR.",
    code: "Truth Table for p ↓ q (NOR):\n| p | q | p ↓ q |\n|---|---|-------|\n| T | T |   F   |\n| T | F |   F   |\n| F | T |   F   |\n| F | F |   T   |",
  },
  {
    id: 154,
    title: "Exercise: 1.3, 53",
    description: "Show that p ↓ q is logically equivalent to ¬(p ∨ q).",
    code: "Truth Table:\np ↓ q = ¬(p ∨ q) for all combinations of p,q → equivalent",
  },
  {
    id: 155,
    title: "Exercise: 1.3, 54",
    description:
      "Show that {↓} is a functionally complete collection of logical operators.\na) Show p ↓ p ≡ ¬p\nb) Show (p ↓ q) ↓ (p ↓ q) ≡ p ∨ q\nc) Conclude {↓} is functionally complete",
    code: "a) p ↓ p = ¬p\nb) (p ↓ q) ↓ (p ↓ q) = ¬(¬(p ∨ q)) = p ∨ q\nc) Using (a),(b) and Ex49 → {↓} functionally complete",
  },
  {
    id: 156,
    title: "Exercise: 1.3, 55",
    description:
      "Find a compound proposition logically equivalent to p → q using only ↓.",
    code: "p → q ≡ ¬p ∨ q ≡ (p ↓ p) ↓ q",
  },
  {
    id: 157,
    title: "Exercise: 1.3, 56",
    description:
      "Show that {∣} is a functionally complete collection of logical operators.",
    code: "p ∣ q ≡ ¬(p ∧ q); any proposition can be expressed using ¬, ∧ → {∣} complete",
  },
  {
    id: 158,
    title: "Exercise: 1.3, 57",
    description: "Show that p ∣ q and q ∣ p are equivalent.",
    code: "p ∣ q = ¬(p ∧ q) = ¬(q ∧ p) = q ∣ p → equivalent",
  },
  {
    id: 159,
    title: "Exercise: 1.3, 58",
    description:
      "Show that p ∣ (q ∣ r) and (p ∣ q) ∣ r are not equivalent; ∣ is not associative.",
    code: "Check truth tables → find p=T,q=T,r=F → p ∣ (q ∣ r) ≠ (p ∣ q) ∣ r → not associative",
  },
  {
    id: 160,
    title: "Exercise: 1.3, 59",
    description:
      "How many different truth tables of compound propositions involve p and q?",
    code: "2 variables → 4 rows → 2^4 = 16 different truth tables",
  },
  {
    id: 161,
    title: "Exercise: 1.3, 60",
    description: "Show that if p ≡ q and q ≡ r, then p ≡ r.",
    code: "Logical equivalence is transitive → p ≡ q ≡ r → p ≡ r",
  },
  {
    id: 162,
    title: "Exercise: 1.3, 61",
    description:
      "Simplify the telephone system specification: “If the directory database is opened, then the monitor is put in a closed state, if the system is not in its initial state.”",
    code: "Let d=DB opened, m=monitor closed, i=system initial state\nOriginal: (¬i ∧ d) → m → Simplified: ¬i ∧ d → m ≡ ¬(¬i ∧ d) ∨ m ≡ i ∨ ¬d ∨ m",
  },
  {
    id: 163,
    title: "Exercise: 1.3, 62",
    description:
      "How many of p ∨ ¬q, ¬p ∨ q, q ∨ r, q ∨ ¬r, ¬q ∨ ¬r can be simultaneously true?",
    code: "Check assignments of p,q,r → maximum 3 of them can be simultaneously true",
  },
  {
    id: 164,
    title: "Exercise: 1.3, 63",
    description:
      "How many of p ∨ ¬q ∨ s, ¬p ∨ ¬r ∨ s, ¬p ∨ ¬r ∨ ¬s, ¬p ∨ q ∨ ¬s, q ∨ r ∨ ¬s, q ∨ ¬r ∨ ¬s, ¬p ∨ ¬q ∨ ¬s, p ∨ r ∨ s, p ∨ r ∨¬s can be simultaneously true?",
    code: "Check all combinations of p,q,r,s → maximum number of disjunctions simultaneously true = 6 (depends on assignments)",
  },
  {
    id: 165,
    title: "Exercise: 1.3, 64",
    description:
      "Show that the negation of an unsatisfiable compound proposition is a tautology and vice versa.",
    code: "Unsatisfiable proposition P → ¬P is always true → tautology; Tautology P → ¬P is always false → unsatisfiable",
  },
  {
    id: 166,
    title: "Exercise: 1.4, 65",
    description:
      "Determine whether each of these compound propositions is satisfiable.\na) (p ∨ ¬q) ∧ (¬p ∨ q) ∧ (¬p ∨ ¬q)\nb) (p → q) ∧ (p → ¬q) ∧ (¬p → q) ∧ (¬p → ¬q)\nc) (p ↔ q) ∧ (¬p ↔ q)",
    code: "a) Unsatisfiable: no assignment makes all clauses true simultaneously\nb) Unsatisfiable: no assignment satisfies all implications\nc) Unsatisfiable: cannot have p↔q and ¬p↔q simultaneously",
  },
  {
    id: 167,
    title: "Exercise: 1.4, 66",
    description:
      "Determine whether each of these compound propositions is satisfiable.\na) (p ∨ q ∨ ¬r) ∧ (p ∨ ¬q ∨ ¬s) ∧ (p ∨ ¬r ∨ ¬s) ∧ (¬p ∨ ¬q ∨ ¬s) ∧ (p ∨ q ∨ ¬s)\nb) (¬p ∨ ¬q ∨ r) ∧ (¬p ∨ q ∨ ¬s) ∧ (p ∨ ¬q ∨ ¬s) ∧ (¬p ∨ ¬r ∨ ¬s) ∧ (p ∨ q ∨ ¬r) ∧ (p ∨ ¬r ∨ ¬s)\nc) (p ∨ q ∨ r) ∧ (p ∨ ¬q ∨ ¬s) ∧ (q ∨ ¬r ∨ s) ∧ (¬p ∨ r ∨ s) ∧ (¬p ∨ q ∨ ¬s) ∧ (p ∨ ¬q ∨ ¬r) ∧ (¬p ∨ ¬q ∨ s) ∧ (¬p ∨ ¬r ∨ ¬s)",
    code: "Check each conjunction for satisfiability → assign truth values to p,q,r,s → a,b,c may be satisfiable or unsatisfiable depending on assignments",
  },
  {
    id: 168,
    title: "Exercise: 1.4, 67",
    description:
      "Find the compound proposition Q for the n-queens problem and determine all ways n queens can be placed on an n×n chessboard so no queen attacks another.\na) n = 2\nb) n = 3\nc) n = 4",
    code: "a) n=2 → no solution\nb) n=3 → no solution\nc) n=4 → two solutions: [(row,col) pairs]: [(1,2),(2,4),(3,1),(4,3)], [(1,3),(2,1),(3,4),(4,2)]",
  },
  {
    id: 169,
    title: "Exercise: 1.4, 68",
    description:
      "Starting with Q from the n-queens problem, construct a compound proposition to find all solutions where the queen in the first column is in an odd-numbered row.",
    code: "Add constraint: first column queen in rows 1,3,5,... depending on n → combine with Q → yields filtered solutions",
  },
  {
    id: 170,
    title: "Exercise: 1.4, 69",
    description:
      "Show how a given 4×4 Sudoku puzzle solution can be found by solving a satisfiability problem.",
    code: "Translate Sudoku rules into logical propositions: each cell has 1-4, each row, column, and block contains all numbers → encode as SAT problem → solve",
  },
  {
    id: 171,
    title: "Exercise: 1.4, 70",
    description:
      "Construct a compound proposition asserting that every cell of a 9×9 Sudoku puzzle contains at least one number.",
    code: "For each cell (i,j): (cell_{i,j,1} ∨ cell_{i,j,2} ∨ ... ∨ cell_{i,j,9}) → combine for all 81 cells → full proposition",
  },
  {
    id: 172,
    title: "Exercise: 1.4, 71",
    description:
      "Explain the steps in constructing a compound proposition asserting that every column of a 9×9 Sudoku puzzle contains every number.",
    code: "For each column j and number k: (cell_{1,j,k} ∨ cell_{2,j,k} ∨ ... ∨ cell_{9,j,k}) → ensures number k appears in column j → combine for all numbers and columns",
  },
  {
    id: 173,
    title: "Exercise: 1.4, 72",
    description:
      "Explain the steps in constructing a compound proposition asserting that each 3×3 block of a 9×9 Sudoku puzzle contains every number.",
    code: "For each 3×3 block and number k: OR together all variables representing k in the block → combine using AND for all numbers and blocks → ensures every number appears in each block",
  },
  {
    id: 174,
    title: "Exercise: 1.4, 1",
    description:
      "Let P(x) be the statement 'x is even.' Determine the truth values of the following:\na) P(0)\nb) P(4)\nc) P(6)",
    code: "a) True\nb) True\nc) True",
  },
  {
    id: 175,
    title: "Exercise: 1.4, 2",
    description:
      "Let P(x) be the statement 'The word x contains the letter a.' Determine the truth values of the following:\na) P(orange)\nb) P(lemon)\nc) P(true)\nd) P(false)",
    code: "a) True (orange contains 'a')\nb) False (lemon has no 'a')\nc) False (true has no 'a')\nd) False (false has no 'a')",
  },
  {
    id: 176,
    title: "Exercise: 1.4, 3",
    description:
      "Let Q(x, y) denote the statement 'x is the capital of y.' Determine the truth values of the following:\na) Q(Denver, Colorado)\nb) Q(Detroit, Michigan)\nc) Q(Massachusetts, Boston)\nd) Q(New York, New York)",
    code: "a) True (Denver is capital of Colorado)\nb) False (Detroit is not capital of Michigan)\nc) False (Boston is capital of Massachusetts, so order reversed?)\nd) False (Albany is capital of New York)",
  },
  {
    id: 177,
    title: "Exercise: 1.4, 4",
    description:
      "State the value of x after executing 'if P(x) then x := 1', where P(x) is 'x > 1', given the initial x values:\na) x = 0\nb) x = 1\nc) x = 2",
    code: "a) x = 0 (condition false, no change)\nb) x = 1 (condition false, no change)\nc) x = 1 (condition true, x set to 1)",
  },
  {
    id: 178,
    title: "Exercise: 1.4, 5",
    description:
      "Let P(x) be 'x spends more than five hours every weekday in class,' with the domain all students. Express each quantification in English:\na) ∃xP(x)\nb) ∀xP(x)\nc) ∃x ¬P(x)\nd) ∀x ¬P(x)",
    code: "a) There exists a student who spends more than five hours per weekday in class.\nb) Every student spends more than five hours per weekday in class.\nc) There exists a student who does not spend more than five hours per weekday in class.\nd) Every student does not spend more than five hours per weekday in class.",
  },
  {
    id: 179,
    title: "Exercise: 1.4, 6",
    description:
      "Let N(x) be 'x has visited North Dakota,' with domain all students. Express each quantification in English:\na) ∃xN(x)\nb) ∀xN(x)\nc) ¬∃xN(x)\nd) ∃x¬N(x)\ne) ¬∀xN(x)\nf) ∀x¬N(x)",
    code: "a) There exists a student who has visited North Dakota.\nb) Every student has visited North Dakota.\nc) No student has visited North Dakota.\nd) There exists a student who has not visited North Dakota.\ne) Not every student has visited North Dakota.\nf) Every student has not visited North Dakota.",
  },
  {
    id: 180,
    title: "Exercise: 1.4, 7",
    description:
      "Translate the following statements into English, where C(x) = 'x is a comedian,' F(x) = 'x is funny,' and the domain is all people:\na) ∀x(C(x) → F(x))\nb) ∀x(C(x) ∧ F(x))\nc) ∃x(C(x) → F(x))\nd) ∃x(C(x) ∧ F(x))",
    code: "a) Every comedian is funny.\nb) Every person is a comedian and funny.\nc) There exists a person such that if they are a comedian, then they are funny.\nd) There exists a person who is both a comedian and funny.",
  },
  {
    id: 181,
    title: "Exercise: 1.4, 8",
    description:
      "Translate the following statements into English, where R(x) = 'x is a rabbit,' H(x) = 'x hops,' and the domain is all animals:\na) ∀x(R(x) → H(x))\nb) ∀x(R(x) ∧ H(x))\nc) ∃x(R(x) → H(x))\nd) ∃x(R(x) ∧ H(x))",
    code: "a) Every rabbit hops.\nb) Every animal is a rabbit and hops.\nc) There exists an animal such that if it is a rabbit, then it hops.\nd) There exists an animal that is a rabbit and hops.",
  },
  {
    id: 182,
    title: "Exercise: 1.4, 9",
    description:
      "Let P(x) = 'x can speak Russian' and Q(x) = 'x knows C++.' Express each of these sentences using P(x), Q(x), quantifiers, and logical connectives, with domain all students:\na) There is a student who can speak Russian and knows C++.\nb) There is a student who can speak Russian but doesn’t know C++.\nc) Every student either can speak Russian or knows C++.\nd) No student can speak Russian or knows C++.",
    code: "a) ∃x(P(x) ∧ Q(x))\nb) ∃x(P(x) ∧ ¬Q(x))\nc) ∀x(P(x) ∨ Q(x))\nd) ∀x(¬P(x) ∧ ¬Q(x))",
  },
  {
    id: 183,
    title: "Exercise: 1.4, 10",
    description:
      "Let C(x) = 'x has a cat,' D(x) = 'x has a dog,' F(x) = 'x has a ferret,' with domain all students in your class. Express each statement in terms of C(x), D(x), F(x), quantifiers, and logical connectives.\na) A student has a cat, dog, and ferret.\nb) All students have a cat, dog, or ferret.\nc) Some student has a cat and a ferret, but not a dog.\nd) No student has a cat, dog, and ferret.\ne) For each of cats, dogs, ferrets, there is a student who has it.",
    code: "a) ∃x(C(x) ∧ D(x) ∧ F(x))\nb) ∀x(C(x) ∨ D(x) ∨ F(x))\nc) ∃x(C(x) ∧ ¬D(x) ∧ F(x))\nd) ∀x¬(C(x) ∧ D(x) ∧ F(x))\ne) ∃xC(x) ∧ ∃xD(x) ∧ ∃xF(x)",
  },
  {
    id: 184,
    title: "Exercise: 1.4, 11",
    description:
      "Let P(x) = 'x = x²' with domain all integers. Determine truth values:\na) P(0)\nb) P(1)\nc) P(2)\nd) P(-1)\ne) ∃xP(x)\nf) ∀xP(x)",
    code: "a) True\nb) True\nc) False\nd) False\ne) True (0 or 1 satisfy)\nf) False",
  },
  {
    id: 185,
    title: "Exercise: 1.4, 12",
    description:
      "Let Q(x) = 'x + 1 > 2x' with domain all integers. Determine truth values:\na) Q(0)\nb) Q(-1)\nc) Q(1)\nd) ∃xQ(x)\ne) ∀xQ(x)\nf) ∃x¬Q(x)\ng) ∀x¬Q(x)",
    code: "a) True (0 +1 >0)\nb) True (-1+1>-2?) False, check: -1+1=0 >-2 True\nc) False (1+1>2? False)\nd) True (x=0 or x=-1)\ne) False\nf) True\n g) False",
  },
  {
    id: 186,
    title: "Exercise: 1.4, 13",
    description:
      "Determine truth values if domain is all integers:\na) ∀n(n+1 > n)\nb) ∃n(2n=3n)\nc) ∃n(n=-n)\nd) ∀n(3n ≤ 4n)",
    code: "a) True\nb) False\nc) True (n=0)\nd) True",
  },
  {
    id: 187,
    title: "Exercise: 1.4, 14",
    description:
      "Determine truth values if domain is all real numbers:\na) ∃x(x³=-1)\nb) ∃x(x⁴ < x²)\nc) ∀x((-x)² = x²)\nd) ∀x(2x > x)",
    code: "a) True (x=-1)\nb) True (x in (0,1))\nc) True\nd) False (x<0 fails)",
  },
  {
    id: 188,
    title: "Exercise: 1.4, 15",
    description:
      "Determine truth values if domain is all integers:\na) ∀n(n² ≥ 0)\nb) ∃n(n² = 2)\nc) ∀n(n ≥ n)\nd) ∃n(n² < 0)",
    code: "a) True\nb) False\nc) True\nd) False",
  },
  {
    id: 189,
    title: "Exercise: 1.4, 16",
    description:
      "Determine truth values if domain is all real numbers:\na) ∃x(x²=2)\nb) ∃x(x²=-1)\nc) ∀x(x+2 ≥ 1)\nd) ∀x(x² ≠ x)",
    code: "a) True\nb) False\nc) True\nd) False (x=0 or 1 fails)",
  },
  {
    id: 190,
    title: "Exercise: 1.4, 17",
    description:
      "Let domain of P(x) be integers 0,1,2,3,4. Write each proposition using disjunctions, conjunctions, and negations:\na) ∃xP(x)\nb) ∀xP(x)\nc) ∃x¬P(x)\nd) ∀x¬P(x)\ne) ¬∃xP(x)\nf) ¬∀xP(x)",
    code: "a) P(0) ∨ P(1) ∨ P(2) ∨ P(3) ∨ P(4)\nb) P(0) ∧ P(1) ∧ P(2) ∧ P(3) ∧ P(4)\nc) ¬P(0) ∨ ¬P(1) ∨ ¬P(2) ∨ ¬P(3) ∨ ¬P(4)\nd) ¬P(0) ∧ ¬P(1) ∧ ¬P(2) ∧ ¬P(3) ∧ ¬P(4)\ne) ¬(P(0) ∨ P(1) ∨ P(2) ∨ P(3) ∨ P(4))\nf) ¬(P(0) ∧ P(1) ∧ P(2) ∧ P(3) ∧ P(4))",
  },
  {
    id: 191,
    title: "Exercise: 1.4, 18",
    description:
      "Let domain of P(x) be integers -2,-1,0,1,2. Write each proposition using disjunctions, conjunctions, and negations:\na) ∃xP(x)\nb) ∀xP(x)\nc) ∃x¬P(x)\nd) ∀x¬P(x)\ne) ¬∃xP(x)\nf) ¬∀xP(x)",
    code: "a) P(-2) ∨ P(-1) ∨ P(0) ∨ P(1) ∨ P(2)\nb) P(-2) ∧ P(-1) ∧ P(0) ∧ P(1) ∧ P(2)\nc) ¬P(-2) ∨ ¬P(-1) ∨ ¬P(0) ∨ ¬P(1) ∨ ¬P(2)\nd) ¬P(-2) ∧ ¬P(-1) ∧ ¬P(0) ∧ ¬P(1) ∧ ¬P(2)\ne) ¬(P(-2) ∨ P(-1) ∨ P(0) ∨ P(1) ∨ P(2))\nf) ¬(P(-2) ∧ P(-1) ∧ P(0) ∧ P(1) ∧ P(2))",
  },
  {
    id: 192,
    title: "Exercise: 1.4, 19",
    description:
      "Let domain of P(x) be integers 1,2,3,4,5. Express these statements without quantifiers:\na) ∃xP(x)\nb) ∀xP(x)\nc) ¬∃xP(x)\nd) ¬∀xP(x)\ne) ∀x((x ≠ 3) → P(x)) ∨ ∃x¬P(x)",
    code: "a) P(1) ∨ P(2) ∨ P(3) ∨ P(4) ∨ P(5)\nb) P(1) ∧ P(2) ∧ P(3) ∧ P(4) ∧ P(5)\nc) ¬P(1) ∧ ¬P(2) ∧ ¬P(3) ∧ ¬P(4) ∧ ¬P(5)\nd) ¬(P(1) ∧ P(2) ∧ P(3) ∧ P(4) ∧ P(5))\ne) ((P(1) ∧ P(2) ∧ P(4) ∧ P(5)) ∨ (¬P(1) ∨ ¬P(2) ∨ ¬P(3) ∨ ¬P(4) ∨ ¬P(5)))",
  },
  {
    id: 193,
    title: "Exercise: 1.4, 20",
    description:
      "Let domain of P(x) be -5,-3,-1,1,3,5. Express these statements without quantifiers:\na) ∃xP(x)\nb) ∀xP(x)\nc) ∀x((x ≠ 1) → P(x))\nd) ∃x((x ≥ 0) ∧ P(x))\ne) ∃x(¬P(x)) ∧ ∀x((x < 0) → P(x))",
    code: "a) P(-5) ∨ P(-3) ∨ P(-1) ∨ P(1) ∨ P(3) ∨ P(5)\nb) P(-5) ∧ P(-3) ∧ P(-1) ∧ P(1) ∧ P(3) ∧ P(5)\nc) (x=-5?...) P(-5) ∧ P(-3) ∧ P(-1) ∧ P(3) ∧ P(5)\nd) P(1) ∨ P(3) ∨ P(5)\ne) (¬P(-5) ∨ ¬P(-3) ∨ ¬P(-1)) ∧ (P(-5) ∧ P(-3) ∧ P(-1))",
  },
  {
    id: 194,
    title: "Exercise: 1.4, 21",
    description:
      "For each statement, find a domain for which the statement is true and a domain for which it is false:\na) Everyone is studying discrete mathematics.\nb) Everyone is older than 21.\nc) Every two people have the same mother.\nd) No two different people have the same grandmother.",
    code: "a) True: domain = {students in a discrete math class}, False: domain = {all people}\nb) True: domain = {all students >21}, False: domain = {all people}\nc) True: domain = {only siblings}, False: domain = {all people}\nd) True: domain = {all people with unique grandmothers}, False: domain = {all people}",
  },
  {
    id: 195,
    title: "Exercise: 1.4, 22",
    description:
      "For each statement, find a domain for which the statement is true and a domain for which it is false:\na) Everyone speaks Hindi.\nb) There is someone older than 21.\nc) Every two people have the same first name.\nd) Someone knows more than two other people.",
    code: "a) True: domain = {all Indians}, False: domain = {all people worldwide}\nb) True: domain = {college students}, False: domain = {children <21}\nc) True: domain = {class with same first names}, False: domain = {class with unique first names}\nd) True: domain = {school students}, False: domain = {isolated people}",
  },
  {
    id: 196,
    title: "Exercise: 1.4, 23",
    description:
      "Translate statements into logical expressions using predicates, quantifiers, and logical connectives. First domain: students in your class, second domain: all people:\na) Someone in your class can speak Hindi.\nb) Everyone in your class is friendly.\nc) There is a person in your class who was not born in California.\nd) A student in your class has been in a movie.\ne) No student in your class has taken a course in logic programming.",
    code: "a) ∃xS(x) (students) , ∃xS(x) (all people)\nb) ∀xF(x) , ∀xF(x)\nc) ∃x¬B(x) , ∃x¬B(x)\nd) ∃xM(x) , ∃xM(x)\ne) ∀x¬L(x) , ∀x¬L(x)",
  },
  {
    id: 197,
    title: "Exercise: 1.4, 24",
    description:
      "Translate statements into logical expressions using predicates, quantifiers, and logical connectives. First domain: students in your class, second domain: all people:\na) Everyone in your class has a cellular phone.\nb) Somebody in your class has seen a foreign movie.\nc) There is a person in your class who cannot swim.\nd) All students in your class can solve quadratic equations.\ne) Some student in your class does not want to be rich.",
    code: "a) ∀xC(x) , ∀xC(x)\nb) ∃xF(x) , ∃xF(x)\nc) ∃x¬S(x) , ∃x¬S(x)\nd) ∀xQ(x) , ∀xQ(x)\ne) ∃x¬R(x) , ∃x¬R(x)",
  },
  {
    id: 198,
    title: "Exercise: 1.4, 25",
    description:
      "Translate each statement into logical expressions using predicates, quantifiers, and connectives:\na) No one is perfect.\nb) Not everyone is perfect.\nc) All your friends are perfect.\nd) At least one of your friends is perfect.\ne) Everyone is your friend and is perfect.\nf) Not everybody is your friend or someone is not perfect.",
    code: "a) ¬∃x P(x) \nb) ∃x¬P(x) \nc) ∀x(Friend(x) → P(x)) \nd) ∃x(Friend(x) ∧ P(x)) \ne) ∀x(Friend(x) ∧ P(x)) \nf) ¬∀x Friend(x) ∨ ∃x¬P(x)",
  },
  {
    id: 199,
    title: "Exercise: 1.4, 26",
    description:
      "Translate statements into logical expressions in three different ways by varying the domain and using predicates with one or two variables:\na) Someone in your school has visited Uzbekistan.\nb) Everyone in your class has studied calculus and C++.\nc) No one in your school owns both a bicycle and a motorcycle.\nd) There is a person in your school who is not happy.\ne) Everyone in your school was born in the twentieth century.",
    code: "a) ∃xVisited(x, Uzbekistan)\nb) ∀x(StudiedCalc(x) ∧ StudiedC++(x))\nc) ¬∃x(Bicycle(x) ∧ Motorcycle(x))\nd) ∃x¬Happy(x)\ne) ∀x Born20thCentury(x)",
  },
  {
    id: 200,
    title: "Exercise: 1.4, 27",
    description:
      "Translate statements into logical expressions in three different ways by varying the domain and using predicates with one or two variables:\na) A student in your school has lived in Vietnam.\nb) There is a student in your school who cannot speak Hindi.\nc) A student in your school knows Java, Prolog, and C++.\nd) Everyone in your class enjoys Thai food.\ne) Someone in your class does not play hockey.",
    code: "a) ∃xLivedIn(x, Vietnam)\nb) ∃x¬SpeaksHindi(x)\nc) ∃x(KnowsJava(x) ∧ KnowsProlog(x) ∧ KnowsC++(x))\nd) ∀xEnjoysThai(x)\ne) ∃x¬PlaysHockey(x)",
  },
  {
    id: 201,
    title: "Exercise: 1.4, 28",
    description:
      "Translate statements using predicates, quantifiers, and connectives:\na) Something is not in the correct place.\nb) All tools are in correct place and excellent condition.\nc) Everything is in correct place and excellent condition.\nd) Nothing is in correct place and is excellent condition.\ne) One of your tools is not in correct place but is in excellent condition.",
    code: "a) ∃x¬CorrectPlace(x)\nb) ∀x(Tool(x) → CorrectPlace(x) ∧ Excellent(x))\nc) ∀x(CorrectPlace(x) ∧ Excellent(x))\nd) ∀x¬(CorrectPlace(x) ∧ Excellent(x))\ne) ∃x(¬CorrectPlace(x) ∧ Excellent(x))",
  },
  {
    id: 202,
    title: "Exercise: 1.4, 29",
    description:
      "Express statements using logical operators, predicates, and quantifiers:\na) Some propositions are tautologies.\nb) The negation of a contradiction is a tautology.\nc) The disjunction of two contingencies can be a tautology.\nd) The conjunction of two tautologies is a tautology.",
    code: "a) ∃p Tautology(p)\nb) ∀p(¬Contradiction(p) → Tautology(p))\nc) ∃p,q(Contingency(p) ∧ Contingency(q) ∧ Tautology(p∨q))\nd) ∀p,q(Tautology(p) ∧ Tautology(q) → Tautology(p∧q))",
  },
  {
    id: 203,
    title: "Exercise: 1.4, 30",
    description:
      "Let P(x,y) with domain x,y ∈ {1,2,3}. Write propositions using disjunctions and conjunctions:\na) ∃x P(x,3)\nb) ∀y P(1,y)\nc) ∃y¬P(2,y)\nd) ∀x ¬P(x,2)",
    code: "a) P(1,3) ∨ P(2,3) ∨ P(3,3)\nb) P(1,1) ∧ P(1,2) ∧ P(1,3)\nc) ¬P(2,1) ∨ ¬P(2,2) ∨ ¬P(2,3)\nd) ¬P(1,2) ∧ ¬P(2,2) ∧ ¬P(3,2)",
  },
  {
    id: 204,
    title: "Exercise: 1.4, 31",
    description:
      "Let Q(x,y,z) with domain x ∈ {0,1,2}, y ∈ {0,1}, z ∈ {0,1}. Write propositions using disjunctions and conjunctions:\na) ∀y Q(0,y,0)\nb) ∃x Q(x,1,1)\nc) ∃z ¬Q(0,0,z)\nd) ∃x ¬Q(x,0,1)",
    code: "a) Q(0,0,0) ∧ Q(0,1,0)\nb) Q(0,1,1) ∨ Q(1,1,1) ∨ Q(2,1,1)\nc) ¬Q(0,0,0) ∨ ¬Q(0,0,1)\nd) ¬Q(0,0,1) ∨ ¬Q(1,0,1) ∨ ¬Q(2,0,1)",
  },
  {
    id: 205,
    title: "Exercise: 1.4, 32",
    description:
      "Express statements using quantifiers. Then form the negation with no negation to the left of a quantifier, and express in simple English:\na) All dogs have fleas.\nb) There is a horse that can add.\nc) Every koala can climb.\nd) No monkey can speak French.\ne) There exists a pig that can swim and catch fish.",
    code: "a) ∀x(Dog(x) → Fleas(x)), neg: ∃x(Dog(x) ∧ ¬Fleas(x))\nb) ∃x(Horse(x) ∧ CanAdd(x)), neg: ∀x(Horse(x) → ¬CanAdd(x))\nc) ∀x(Koala(x) → CanClimb(x)), neg: ∃x(Koala(x) ∧ ¬CanClimb(x))\nd) ∀x(Monkey(x) → ¬SpeakFrench(x)), neg: ∃x(Monkey(x) ∧ SpeakFrench(x))\ne) ∃x(Pig(x) ∧ CanSwim(x) ∧ CanCatchFish(x)), neg: ∀x(Pig(x) → ¬(CanSwim(x) ∧ CanCatchFish(x)))",
  },
  {
    id: 206,
    title: "Exercise: 1.4, 33",
    description:
      "Express statements using quantifiers, form the negation with no negation to the left of a quantifier, and express in English:\na) Some old dogs can learn new tricks.\nb) No rabbit knows calculus.\nc) Every bird can fly.\nd) There is no dog that can talk.\ne) There is no one in this class who knows French and Russian.",
    code: "a) ∃x(OldDog(x) ∧ CanLearn(x)), neg: ∀x(OldDog(x) → ¬CanLearn(x))\nb) ∀x(Rabbit(x) → ¬KnowsCalculus(x)), neg: ∃x(Rabbit(x) ∧ KnowsCalculus(x))\nc) ∀x(Bird(x) → CanFly(x)), neg: ∃x(Bird(x) ∧ ¬CanFly(x))\nd) ∀x(Dog(x) → ¬CanTalk(x)), neg: ∃x(Dog(x) ∧ CanTalk(x))\ne) ∀x(Student(x) → ¬(KnowsFrench(x) ∧ KnowsRussian(x))), neg: ∃x(Student(x) ∧ (KnowsFrench(x) ∧ KnowsRussian(x)))",
  },
  {
    id: 207,
    title: "Exercise: 1.4, 34",
    description:
      "Express the negation of statements using quantifiers, then express in English:\na) Some drivers do not obey the speed limit.\nb) All Swedish movies are serious.\nc) No one can keep a secret.\nd) There is someone in this class who does not have a good attitude.",
    code: "a) ¬∃x(Driver(x) ∧ ¬ObeysSpeedLimit(x)) → ∀x(Driver(x) → ObeysSpeedLimit(x))\nb) ¬∀x(SwedishMovie(x) → Serious(x)) → ∃x(SwedishMovie(x) ∧ ¬Serious(x))\nc) ¬∀x(CanKeepSecret(x)) → ∃x¬CanKeepSecret(x)\nd) ¬∃x(Student(x) ∧ ¬GoodAttitude(x)) → ∀x(Student(x) → GoodAttitude(x))",
  },
  {
    id: 208,
    title: "Exercise: 1.4, 35",
    description:
      "Express negations in terms of quantifiers without using ¬:\na) ∀x(x > 1)\nb) ∀x(x ≤ 2)\nc) ∃x(x ≥ 4)\nd) ∃x(x < 0)\ne) ∀x((x < −1) ∨ (x > 2))\nf) ∃x((x < 4) ∨ (x > 7))",
    code: "a) ∃x(x ≤ 1)\nb) ∃x(x > 2)\nc) ∀x(x < 4)\nd) ∀x(x ≥ 0)\ne) ∃x(x ≥ -1 ∧ x ≤ 2)\nf) ∀x(x ≥ 4 ∧ x ≤ 7)",
  },
  {
    id: 209,
    title: "Exercise: 1.4, 36",
    description:
      "Express negations in terms of quantifiers without using ¬:\na) ∀x(-2 < x < 3)\nb) ∀x(0 ≤ x < 5)\nc) ∃x(-4 ≤ x ≤ 1)\nd) ∃x(-5 < x < -1)",
    code: "a) ∃x(x ≤ -2 ∨ x ≥ 3)\nb) ∃x(x < 0 ∨ x ≥ 5)\nc) ∀x(x < -4 ∨ x > 1)\nd) ∀x(x ≤ -5 ∨ x ≥ -1)",
  },
  {
    id: 210,
    title: "Exercise: 1.4, 37",
    description:
      "Find a counterexample, if possible, to these universally quantified statements, where the domain is all integers:\na) ∀x(x² ≥ x)\nb) ∀x(x > 0 ∨ x < 0)\nc) ∀x(x = 1)",
    code: "a) Counterexample: x = 0, since 0² = 0 ≥ 0 holds, but x = -1 fails for x² ≥ x\nb) Counterexample: x = 0, since 0 is neither >0 nor <0\nc) Counterexample: x = 0, x = 2, etc., since not all integers are 1",
  },
  {
    id: 211,
    title: "Exercise: 1.4, 38",
    description:
      "Find a counterexample, if possible, to these universally quantified statements, where the domain is all real numbers:\na) ∀x(x² ≠ x)\nb) ∀x(x² ≠ 2)\nc) ∀x(|x| > 0)",
    code: "a) Counterexample: x = 0 or x = 1, since 0² = 0 and 1² = 1\nb) Counterexample: x = √2 or x = -√2, since (√2)² = 2\nc) Counterexample: x = 0, since |0| = 0",
  },
  {
    id: 212,
    title: "Exercise: 1.4, 39",
    description:
      "Express statements using predicates and quantifiers:\na) A passenger qualifies as elite flyer if flies > 25,000 miles or takes > 25 flights in a year.\nb) A man qualifies for marathon if best time < 3h and a woman if best time < 3.5h.\nc) A student must take ≥60 course hours, or ≥45 hours and write a thesis, and receive grade ≥ B, to get a master's.\nd) There is a student who has taken >21 credit hours in a semester and received all A's.",
    code: "a) ∀p(Passenger(p) → (Miles(p)>25000 ∨ Flights(p)>25))\nb) ∀m(Man(m) → BestTime(m)<3) ∧ ∀w(Woman(w) → BestTime(w)<3.5)\nc) ∀s(Student(s) → ((CourseHours(s)≥60 ∨ (CourseHours(s)≥45 ∧ Thesis(s))) ∧ ∀c(Required(c) → Grade(s,c)≥B)))\nd) ∃s(Student(s) ∧ CreditHours(s)>21 ∧ ∀c(Grade(s,c)=A))",
  },
  {
    id: 213,
    title: "Exercise: 1.4, 40",
    description:
      "Translate system specifications into English. Predicate S(x,y) means 'x is in state y'. Domain: all systems and states.\na) ∃x S(x, open)\nb) ∀x(S(x, malfunctioning) ∨ S(x, diagnostic))\nc) ∃x S(x, open) ∨ ∃x S(x, diagnostic)\nd) ∃x ¬S(x, available)\ne) ∀x ¬S(x, working)",
    code: "a) Some system is open\nb) Every system is malfunctioning or in diagnostic state\nc) Some system is open or some system is in diagnostic state\nd) Some system is not available\ne) No system is working",
  },
  {
    id: 214,
    title: "Exercise: 1.4, 41",
    description:
      "Translate system specifications into English. F(p)='Printer p is out of service', B(p)='Printer p is busy', L(j)='Print job j is lost', Q(j)='Print job j is queued'.\na) ∃p(F(p) ∧ B(p)) → ∃j L(j)\nb) ∀p B(p) → ∃j Q(j)\nc) ∃j(Q(j) ∧ L(j)) → ∃p F(p)\nd) (∀p B(p) ∧ ∀j Q(j)) → ∃j L(j)",
    code: "a) If there is a printer that is out of service and busy, then some print job is lost\nb) If all printers are busy, then some print job is queued\nc) If some print job is queued and lost, then some printer is out of service\nd) If all printers are busy and all print jobs are queued, then some print job is lost",
  },
  {
    id: 215,
    title: "Exercise: 1.4, 42",
    description:
      "Express system specifications using predicates, quantifiers, and connectives:\na) Less than 30 MB free on hard disk → warning sent to all users.\nb) No directories can be opened and no files closed when system errors detected.\nc) File system cannot be backed up if a user is logged on.\nd) Video on demand delivered when ≥8 MB memory and connection ≥56 kbps.",
    code: "a) ∀x(FreeDisk<30MB → WarningSent(x))\nb) ¬∃d(DirectoryOpen(d)) ∧ ¬∃f(FileClosed(f)) when SystemErrors\nc) ∀u(UserLoggedOn(u) → ¬Backup)\nd) ∀v(VideoOnDemand(v) → (Memory≥8MB ∧ Connection≥56kbps))",
  },
  {
    id: 216,
    title: "Exercise: 1.4, 43",
    description:
      "Express system specifications using predicates, quantifiers, and connectives:\na) At least one mail message can be saved if disk has >10 KB free.\nb) Whenever active alert, all queued messages are transmitted.\nc) Diagnostic monitor tracks status of all systems except main console.\nd) Each participant on the conference call whom host did not put on special list was billed.",
    code: "a) ∃m(Message(m) ∧ Saved(m)) → ∃d(Disk(d) ∧ FreeSpace(d)>10KB)\nb) ∀t(ActiveAlert(t) → ∀m(Queued(m) → Transmitted(m)))\nc) ∀s(System(s) ∧ s≠MainConsole → Tracked(DiagnosticMonitor,s))\nd) ∀p(Participant(p) ∧ ¬SpecialList(p) → Billed(p))",
  },
  {
    id: 217,
    title: "Exercise: 1.4, 44",
    description:
      "Express system specifications using predicates, quantifiers, and connectives:\na) Every user has access to an electronic mailbox.\nb) System mailbox can be accessed by everyone if file system locked.\nc) Firewall in diagnostic state only if proxy server in diagnostic state.\nd) At least one router functions normally if throughput is between 100–500 kbps and proxy server not in diagnostic mode.",
    code: "a) ∀u(User(u) → HasAccess(u,Mailbox))\nb) Locked(FileSystem) → ∀u(Access(u,SystemMailbox))\nc) FirewallDiagnostic → ProxyDiagnostic\nd) (Throughput≥100kbps ∧ Throughput≤500kbps ∧ ¬ProxyDiagnostic) → ∃r(Router(r) ∧ FunctionsNormally(r))",
  },
  {
    id: 218,
    title: "Exercise: 1.4, 45",
    description:
      "Determine whether ∀x(P(x) → Q(x)) and ∀xP(x) → ∀xQ(x) are logically equivalent. Justify your answer.",
    code: "They are not logically equivalent. Counterexample: let P(1)=true, P(2)=false, Q(1)=false, Q(2)=true. Then ∀x(P(x)→Q(x))=false, but ∀xP(x)→∀xQ(x)=true",
  },
  {
    id: 219,
    title: "Exercise: 1.4, 46",
    description:
      "Determine whether ∀x(P(x) ↔ Q(x)) and ∀xP(x) ↔ ∀xQ(x) are logically equivalent. Justify your answer.",
    code: "They are not logically equivalent. Counterexample: P(1)=true, P(2)=false, Q(1)=false, Q(2)=false. Then ∀x(P(x)↔Q(x))=false, but ∀xP(x)↔∀xQ(x)=true",
  },
  {
    id: 220,
    title: "Exercise: 1.4, 47",
    description:
      "Show that ∃x(P(x) ∨ Q(x)) and ∃xP(x) ∨ ∃xQ(x) are logically equivalent.",
    code: "∃x(P(x)∨Q(x)) ↔ (∃xP(x) ∨ ∃xQ(x)), by distributive law of ∃ over ∨",
  },
  {
    id: 221,
    title: "Exercise: 1.4, 48",
    description:
      "Establish logical equivalences where x does not occur in A (domain nonempty):\na) (∀xP(x)) ∨ A ≡ ∀x(P(x) ∨ A)\nb) (∃xP(x)) ∨ A ≡ ∃x(P(x) ∨ A)",
    code: "a) (∀x P(x)) ∨ A ≡ ∀x(P(x) ∨ A)\nb) (∃x P(x)) ∨ A ≡ ∃x(P(x) ∨ A)",
  },
  {
    id: 222,
    title: "Exercise: 1.4, 49",
    description:
      "Establish logical equivalences where x does not occur in A (domain nonempty):\na) (∀xP(x)) ∧ A ≡ ∀x(P(x) ∧ A)\nb) (∃xP(x)) ∧ A ≡ ∃x(P(x) ∧ A)",
    code: "a) (∀xP(x)) ∧ A ≡ ∀x(P(x) ∧ A)\nb) (∃xP(x)) ∧ A ≡ ∃x(P(x) ∧ A)",
  },
  {
    id: 223,
    title: "Exercise: 1.4, 50",
    description:
      "Establish logical equivalences where x does not occur in A (domain nonempty):\na) ∀x(A → P(x)) ≡ A → ∀xP(x)\nb) ∃x(A → P(x)) ≡ A → ∃xP(x)",
    code: "a) ∀x(A → P(x)) ≡ A → ∀xP(x)\nb) ∃x(A → P(x)) ≡ A → ∃xP(x)",
  },
  {
    id: 224,
    title: "Exercise: 1.4, 51",
    description:
      "Establish logical equivalences where x does not occur in A (domain nonempty):\na) ∀x(P(x) → A) ≡ ∃xP(x) → A\nb) ∃x(P(x) → A) ≡ ∀xP(x) → A",
    code: "a) ∀x(P(x) → A) ≡ ∃xP(x) → A\nb) ∃x(P(x) → A) ≡ ∀xP(x) → A",
  },
  {
    id: 225,
    title: "Exercise: 1.4, 52",
    description:
      "Show that ∀xP(x) ∨ ∀xQ(x) and ∀x(P(x) ∨ Q(x)) are not logically equivalent.",
    code: "Counterexample: domain {1,2}, P(1)=true,P(2)=false, Q(1)=false,Q(2)=true. Then ∀xP(x) ∨ ∀xQ(x)=false, ∀x(P(x)∨Q(x))=true",
  },
  {
    id: 226,
    title: "Exercise: 1.4, 53",
    description:
      "Show that ∃xP(x) ∧ ∃xQ(x) and ∃x(P(x) ∧ Q(x)) are not logically equivalent.",
    code: "Counterexample: domain {1,2}, P(1)=true,P(2)=false, Q(1)=false,Q(2)=true. Then ∃xP(x)∧∃xQ(x)=true, ∃x(P(x)∧Q(x))=false",
  },
  {
    id: 227,
    title: "Exercise: 1.4, 54",
    description:
      "Determine the truth values of statements using ∃!xP(x) ('there exists a unique x') with domain = all integers.\na) ∃!x(x > 1)\nb) ∃!x(x² = 1)\nc) ∃!x(x + 3 = 2x)\nd) ∃!x(x = x + 1)",
    code: "a) False, multiple integers >1\nb) False, x = ±1 satisfy x²=1, not unique\nc) True, x = 3 satisfies x+3=2x uniquely\nd) False, no x satisfies x=x+1",
  },
  {
    id: 228,
    title: "Exercise: 1.4, 55",
    description:
      "Determine the truth values of statements involving uniqueness quantifier:\na) ∃!xP(x) → ∃xP(x)\nb) ∀xP(x) → ∃!xP(x)\nc) ∃!x¬P(x) → ¬∀xP(x)",
    code: "a) True, uniqueness implies existence\nb) False, if ∀xP(x) true for multiple x, uniqueness fails\nc) True, if unique ¬P(x) exists, then not all P(x)",
  },
  {
    id: 229,
    title: "Exercise: 1.4, 56",
    description:
      "Write out ∃!xP(x) with domain {1,2,3} using negations, conjunctions, disjunctions.",
    code: "∃!xP(x) ≡ (P(1)∧¬P(2)∧¬P(3)) ∨ (¬P(1)∧P(2)∧¬P(3)) ∨ (¬P(1)∧¬P(2)∧P(3))",
  },
  {
    id: 230,
    title: "Exercise: 1.4, 57",
    description:
      "Given Prolog facts in Example 28, determine results:\na) ?instructor(chan,math273)\nb) ?instructor(patel,cs301)\nc) ?enrolled(X,cs301)\nd) ?enrolled(kiko,Y)\ne) ?teaches(grossman,Y)",
    code: "a) true\nb) false\nc) X=patel; X=chan\n d) Y=cs301\n e) Y=math273",
  },
  {
    id: 231,
    title: "Exercise: 1.4, 58",
    description:
      "Given Prolog facts in Example 28, determine results:\na) ?enrolled(kevin,ee222)\nb) ?enrolled(kiko,math273)\nc) ?instructor(grossman,X)\nd) ?instructor(X,cs301)\ne) ?teaches(X,kevin)",
    code: "a) false\nb) true\nc) X=chan\nd) X=patel\n e) X=grossman",
  },
  {
    id: 232,
    title: "Exercise: 1.4, 59",
    description:
      "Define Prolog rule for sibling(X,Y) using mother(M,Y) and father(F,X).",
    code: "sibling(X,Y) :- mother(M,X), mother(M,Y), father(F,X), father(F,Y), X\\=Y.",
  },
  {
    id: 233,
    title: "Exercise: 1.4, 60",
    description:
      "Define Prolog rule for grandfather(X,Y) using mother(M,Y) and father(F,X).",
    code: "grandfather(X,Y) :- father(X,Z), (father(Z,Y); mother(Z,Y)).",
  },
  {
    id: 234,
    title: "Exercise: 1.4, 61",
    description:
      "Express statements using P(x)='x is professor', Q(x)='x is ignorant', R(x)='x is vain'. Domain = all people.\na) No professors are ignorant.\nb) All ignorant people are vain.\nc) No professors are vain.\nd) Does (c) follow from (a) and (b)?",
    code: "a) ∀x(P(x) → ¬Q(x))\nb) ∀x(Q(x) → R(x))\nc) ∀x(P(x) → ¬R(x))\nd) Not necessarily; (c) does not follow from (a) and (b)",
  },
  {
    id: 235,
    title: "Exercise: 1.4, 62",
    description:
      "Express statements using P(x)='x is clear explanation', Q(x)='x is satisfactory', R(x)='x is an excuse'. Domain = all English text.\na) All clear explanations are satisfactory.\nb) Some excuses are unsatisfactory.\nc) Some excuses are not clear explanations.\nd) Does (c) follow from (a) and (b)?",
    code: "a) ∀x(P(x) → Q(x))\nb) ∃x(R(x) ∧ ¬Q(x))\nc) ∃x(R(x) ∧ ¬P(x))\nd) Not necessarily; (c) does not follow from (a) and (b)",
  },
  {
    id: 236,
    title: "Exercise: 1.4, 63",
    description:
      "Express statements using P(x)='x is a baby', Q(x)='x is logical', R(x)='x can manage a crocodile', S(x)='x is despised'. Domain = all people.\na) Babies are illogical.\nb) Nobody is despised who can manage a crocodile.\nc) Illogical persons are despised.\nd) Babies cannot manage crocodiles.\ne) Does (d) follow from (a), (b), (c)?",
    code: "a) ∀x(P(x) → ¬Q(x))\nb) ∀x(R(x) → ¬S(x))\nc) ∀x(¬Q(x) → S(x))\nd) ∀x(P(x) → ¬R(x))\ne) Yes, (d) follows from (a), (b), and (c)",
  },
  {
    id: 237,
    title: "Exercise: 1.4, 64",
    description:
      "Express statements using P(x)='x is a duck', Q(x)='x is my poultry', R(x)='x is an officer', S(x)='x is willing to waltz'.\na) No ducks are willing to waltz.\nb) No officers ever decline to waltz.\nc) All my poultry are ducks.\nd) My poultry are not officers.\ne) Does (d) follow from (a), (b), (c)?",
    code: "a) ∀x(P(x) → ¬S(x))\nb) ∀x(R(x) → S(x))\nc) ∀x(Q(x) → P(x))\nd) ∀x(Q(x) → ¬R(x))\ne) Not necessarily; (d) does not follow from (a), (b), (c)",
  },
  {
    id: 238,
    title: "Exercise 1.5, 1",
    description:
      "Translate statements into English, domain = all real numbers.",
    code: "a) ∀x∃y(x < y): For every real number x, there exists a real number y such that x < y.\nb) ∀x∀y(((x ≥ 0) ∧ (y ≥ 0)) → (xy ≥ 0)): For all real numbers x and y, if x ≥ 0 and y ≥ 0, then xy ≥ 0.\nc) ∀x∀y∃z(xy = z): For all real numbers x and y, there exists a real number z such that xy = z.",
  },
  {
    id: 239,
    title: "Exercise 1.5, 2",
    description:
      "Translate statements into English, domain = all real numbers.",
    code: "a) ∃x∀y(xy = y): There exists a real number x such that for all real numbers y, xy = y.\nb) ∀x∀y(((x ≥ 0) ∧ (y < 0)) → (x − y > 0)): For all real numbers x and y, if x ≥ 0 and y < 0, then x − y > 0.\nc) ∀x∀y∃z(x = y + z): For all real numbers x and y, there exists a real number z such that x = y + z.",
  },
  {
    id: 240,
    title: "Exercise 1.5, 3",
    description:
      "Let Q(x, y) = 'x has sent an email to y', domain = all students in your class.",
    code: "a) ∃x∃y Q(x, y): Some student has sent an email to some student.\nb) ∃x∀y Q(x, y): There is a student who has sent an email to every student.\nc) ∀x∃y Q(x, y): Every student has sent an email to some student.\nd) ∃y∀x Q(x, y): There is a student who has received an email from every student.\ne) ∀y∃x Q(x, y): Every student has received an email from some student.\nf) ∀x∀y Q(x, y): Every student has sent an email to every student.",
  },
  {
    id: 241,
    title: "Exercise 1.5, 4",
    description:
      "Let P(x, y) = 'student x has taken class y', x = all students, y = all CS courses.",
    code: "a) ∃x∃y P(x, y): Some student has taken some CS course.\nb) ∃x∀y P(x, y): There is a student who has taken every CS course.\nc) ∀x∃y P(x, y): Every student has taken some CS course.\nd) ∃y∀x P(x, y): There is a CS course that every student has taken.\ne) ∀y∃x P(x, y): Every CS course has been taken by some student.\nf) ∀x∀y P(x, y): Every student has taken every CS course.",
  },
  {
    id: 242,
    title: "Exercise 1.5, 5",
    description:
      "Let W(x, y) = 'student x has visited website y', x = all students, y = all websites.",
    code: "a) W(Sarah Smith, www.att.com): Sarah Smith has visited www.att.com.\nb) ∃x W(x, www.imdb.org): Some student has visited www.imdb.org.\nc) ∃y W(José Orez, y): José Orez has visited some website.\nd) ∃y(W(Ashok Puri, y) ∧ W(Cindy Yoon, y)): There is a website visited by both Ashok Puri and Cindy Yoon.\ne) ∃y∀z(y ≠ David Belcher ∧ (W(David Belcher, z) → W(y, z))): There is a student y not David Belcher such that for every website z, if David Belcher visited z, then y also visited z.\nf) ∃x∃y∀z((x ≠ y) ∧ (W(x, z) ↔ W(y, z))): There exist two different students x and y such that for every website z, x visited z if and only if y visited z.",
  },
  {
    id: 243,
    title: "Exercise 1.5, 6",
    description:
      "Let C(x, y) = 'student x is enrolled in class y', x = students, y = all classes.",
    code: "a) C(Randy Goldberg, CS 252): Randy Goldberg is enrolled in CS 252.\nb) ∃x C(x, Math 695): Some student is enrolled in Math 695.\nc) ∃y C(Carol Sitea, y): Carol Sitea is enrolled in some class.\nd) ∃x(C(x, Math 222) ∧ C(x, CS 252)): There is a student enrolled in both Math 222 and CS 252.\ne) ∃x∃y∀z((x ≠ y) ∧ (C(x, z) → C(y, z))): There exist two different students x and y such that for every class z, if x is enrolled in z, then y is also enrolled in z.\nf) ∃x∃y∀z((x ≠ y) ∧ (C(x, z) ↔ C(y, z))): There exist two different students x and y such that for every class z, x is enrolled in z if and only if y is enrolled in z.",
  },
  {
    id: 244,
    title: "Exercise 1.5, 7",
    description:
      "Let T(x, y) = 'student x likes cuisine y', x = all students, y = all cuisines.",
    code: "a) ¬T(Abdallah Hussein, Japanese): Abdallah Hussein does not like Japanese cuisine.\nb) ∃x T(x, Korean) ∧ ∀x T(x, Mexican): Some student likes Korean cuisine, and every student likes Mexican cuisine.\nc) ∃y (T(Monique Arsenault, y) ∨ T(Jay Johnson, y)): There is a cuisine liked by Monique Arsenault or by Jay Johnson.\nd) ∀x∀z∃y((x ≠ z) → ¬(T(x, y) ∧ T(z, y))): For every pair of different students x and z, there exists a cuisine y such that x and z do not both like y.\ne) ∃x∃z∀y(T(x, y) ↔ T(z, y)): There exist two students x and z who like exactly the same cuisines.\nf) ∀x∀z∃y(T(x, y) ↔ T(z, y)): For every pair of students x and z, there is a cuisine y such that x likes y if and only if z likes y.",
  },
  {
    id: 245,
    title: "Exercise 1.5, 8",
    description:
      "Let Q(x, y) = 'student x has been a contestant on quiz show y', x = all students, y = all quiz shows.",
    code: "a) ∃x∃y Q(x, y): There is a student who has been a contestant on a quiz show.\nb) ¬∃x∃y Q(x, y): No student has ever been a contestant on a quiz show.\nc) ∃x(Q(x, Jeopardy!) ∧ Q(x, Wheel of Fortune)): There is a student who has been a contestant on Jeopardy! and Wheel of Fortune.\nd) ∀y ∃x Q(x, y): Every quiz show has had at least one student from your school as a contestant.\ne) ∃x∃z(Q(x, Jeopardy!) ∧ Q(z, Jeopardy!) ∧ x ≠ z): At least two students from your school have been contestants on Jeopardy!.",
  },
  {
    id: 246,
    title: "Exercise 1.5, 9",
    description: "Let L(x, y) = 'x loves y', domain = all people in the world.",
    code: "a) ∀x L(x, Jerry): Everybody loves Jerry.\nb) ∀x ∃y L(x, y): Everybody loves somebody.\nc) ∃y ∀x L(x, y): There is somebody whom everybody loves.\nd) ¬∃x ∀y L(x, y): Nobody loves everybody.\ne) ∃y ¬L(Lydia, y): There is somebody whom Lydia does not love.\nf) ∃y ∀x ¬L(x, y): There is somebody whom no one loves.\ng) ∃!y ∀x L(x, y): There is exactly one person whom everybody loves.\nh) ∃x∃y(x ≠ y ∧ ∀z((z = x ∨ z = y) → L(Lynn, z)) ∧ ∀w(w ≠ x ∧ w ≠ y → ¬L(Lynn, w))): There are exactly two people whom Lynn loves.\ni) ∀x L(x, x): Everyone loves himself or herself.\nj) ∃x ∀y((y = x) ∨ ¬L(x, y)): There is someone who loves no one besides himself or herself.",
  },
  {
    id: 247,
    title: "Exercise 1.5, 10",
    description:
      "Let F(x, y) = 'x can fool y', domain = all people in the world.",
    code: "a) ∀x F(x, Fred): Everybody can fool Fred.\nb) F(Evelyn, ∀x): Evelyn can fool everybody.\nc) ∀x ∃y F(x, y): Everybody can fool somebody.\nd) ¬∃x ∀y F(x, y): There is no one who can fool everybody.\ne) ∀y ∃x F(x, y): Everyone can be fooled by somebody.\nf) ∀x ¬(F(x, Fred) ∧ F(x, Jerry)): No one can fool both Fred and Jerry.\ng) ∃x ∃y ∀z((z ≠ x ∧ z ≠ y ∧ ¬F(Nancy, z)) ∧ F(Nancy, x) ∧ F(Nancy, y)): Nancy can fool exactly two people.\nh) ∃x ∀y(F(y, x)): There is exactly one person whom everybody can fool.\ni) ∀x ¬F(x, x): No one can fool himself or herself.\nj) ∃x ∃y ∀z((z ≠ x ∧ z ≠ y) ∧ F(x, y) ∧ ¬F(x, z)): There is someone who can fool exactly one person besides himself or herself.",
  },
  {
    id: 248,
    title: "Exercise 1.5, 11",
    description:
      "Let S(x) = 'x is a student', F(x) = 'x is a faculty member', A(x, y) = 'x has asked y a question', domain = all people associated with your school.",
    code: "a) A(Lois, Professor Michaels): Lois has asked Professor Michaels a question.\nb) ∀x(S(x) → A(x, Professor Gross)): Every student has asked Professor Gross a question.\nc) ∀x(F(x) → (A(x, Professor Miller) ∨ A(Professor Miller, x))): Every faculty member has either asked Professor Miller a question or been asked by Professor Miller.\nd) ∃x(S(x) ∧ ∀y(F(y) → ¬A(x, y))): Some student has not asked any faculty member a question.\ne) ∃y(F(y) ∧ ∀x(S(x) → ¬A(x, y))): There is a faculty member who has never been asked a question by a student.\nf) ∃x(S(x) ∧ ∀y(F(y) → A(x, y))): Some student has asked every faculty member a question.\ng) ∃x(F(x) ∧ ∀y(F(y) ∧ x ≠ y → A(x, y))): There is a faculty member who has asked every other faculty member a question.\nh) ∃x(S(x) ∧ ∀y(F(y) → ¬A(y, x))): Some student has never been asked a question by a faculty member.",
  },
  {
    id: 249,
    title: "Exercise 1.5, 12",
    description:
      "Let I(x) = 'x has an Internet connection', C(x,y) = 'x and y have chatted over the Internet', x,y = all students in class.",
    code: "a) ¬I(Jerry): Jerry does not have an Internet connection.\nb) ¬C(Rachel, Chelsea): Rachel has not chatted with Chelsea.\nc) ¬C(Jan, Sharon) ∧ ¬C(Sharon, Jan): Jan and Sharon have never chatted with each other.\nd) ∀x ¬C(x, Bob): No one in the class has chatted with Bob.\ne) ∀x(x ≠ Joseph → C(Sanjay, x)): Sanjay has chatted with everyone except Joseph.\nf) ∃x ¬I(x): There is someone in your class without an Internet connection.\ng) ¬∀x I(x): Not everyone in your class has an Internet connection.\nh) ∃!x I(x): Exactly one student in your class has an Internet connection.\ni) ∃x ¬I(x) ∧ ∀y(y ≠ x → I(y)): Everyone except one student has an Internet connection.\nj) ∀x(I(x) → ∃y(x ≠ y ∧ C(x, y))): Every student with an Internet connection has chatted with at least one other student.\nk) ∃x(I(x) ∧ ∀y(x ≠ y → ¬C(x, y))): Someone has an Internet connection but has not chatted with anyone else.\nl) ∃x∃y(x ≠ y ∧ ¬C(x, y)): There are two students who have not chatted with each other.\nm) ∃x ∀y(x ≠ y → C(x, y)): There is a student who has chatted with everyone in the class.\nn) ∃x∃y∃z(x ≠ y ∧ ¬C(x, z) ∧ ¬C(y, z)): There are at least two students who have not chatted with the same person.\no) ∃x∃y ∀z((z ≠ x ∧ z ≠ y) → (C(x, z) ∨ C(y, z))): There are two students who between them have chatted with everyone else.",
  },
  {
    id: 250,
    title: "Exercise 1.5, 13",
    description:
      "Let M(x,y) = 'x has sent y an e-mail', T(x,y) = 'x has telephoned y', x,y = all students in class.",
    code: "a) ¬M(Chou, Koko): Chou has never sent an e-mail to Koko.\nb) ¬M(Arlene, Sarah) ∧ ¬T(Arlene, Sarah): Arlene has never sent an e-mail to or telephoned Sarah.\nc) ¬∃x M(Deborah, José): José has never received an e-mail from Deborah.\nd) ∀x M(x, Ken): Every student has sent an e-mail to Ken.\ne) ∀x ¬T(x, Nina): No one has telephoned Nina.\nf) ∀x(T(x, Avi) ∨ M(x, Avi)): Everyone has either telephoned Avi or sent him an e-mail.\ng) ∃x ∀y(x ≠ y → M(x, y)): There is a student who has sent everyone else an e-mail.\nh) ∃x ∀y(x ≠ y → (M(x, y) ∨ T(x, y))): There is a student who has either sent an e-mail or telephoned everyone else.\ni) ∃x∃y(x ≠ y ∧ M(x, y) ∧ M(y, x)): There are two students who have sent each other e-mails.\nj) ∃x M(x, x): There is a student who has sent an e-mail to himself/herself.\nk) ∃x(∀y(x ≠ y → ¬M(y, x) ∧ ¬T(y, x))): There is a student who has not received any e-mail or telephone call from anyone else.\nl) ∀x ∃y(x ≠ y → M(y, x) ∨ T(y, x)): Every student has either received an e-mail or a phone call from another student.\nm) ∃x∃y(x ≠ y ∧ M(x, y) ∧ T(y, x)): There are at least two students such that one sent an e-mail and the other telephoned them.\nn) ∃x∃y ∀z(z ≠ x ∧ z ≠ y → (M(x, z) ∨ M(y, z) ∨ T(x, z) ∨ T(y, z))): There are two students who between them have sent an e-mail or telephoned everyone else.",
  },
  {
    id: 251,
    title: "Exercise 1.5, 14",
    description: "Use quantifiers and predicates with more than one variable.",
    code: "a) ∃x S(x) ∧ H(x): There is a student who can speak Hindi.\nb) ∀x ∃y Plays(x, y): Every student plays some sport.\nc) ∃x(Visited(x, Alaska) ∧ ¬Visited(x, Hawaii)): Some student has visited Alaska but not Hawaii.\nd) ∀x ∃y Learned(x, y): All students have learned at least one programming language.\ne) ∃x ∃d ∀c(CourseInDept(c, d) → Taken(x, c)): There is a student who has taken every course in some department.\nf) ∃x ∃y(x ≠ y ∧ SameTown(x, y) ∧ ∀z((z ≠ x ∧ z ≠ y) → ¬SameTown(x, z))): Some student grew up in the same town as exactly one other student.\ng) ∀x ∃y ∃g(x ≠ y ∧ InGroup(x, y, g)): Every student has chatted with at least one other student in at least one chat group.",
  },
  {
    id: 252,
    title: "Exercise 1.5, 15",
    description: "Use quantifiers and predicates with more than one variable.",
    code: "a) ∀x(CSStudent(x) → Needs(x, DiscreteMath)): Every CS student needs a course in discrete mathematics.\nb) ∃x OwnsPC(x): There is a student who owns a personal computer.\nc) ∀x ∃y Taken(x, y) ∧ CSCourse(y): Every student has taken at least one CS course.\nd) ∃x ∃y Taken(x, y) ∧ CSCourse(y): There is a student who has taken at least one CS course.\ne) ∀x ∀b InBuilding(x, b): Every student has been in every building.\nf) ∃x ∃b ∀r(RoomInBuilding(r, b) → BeenIn(x, r)): There is a student who has been in every room of at least one building.\ng) ∀x ∀b ∃r(RoomInBuilding(r, b) ∧ BeenIn(x, r)): Every student has been in at least one room of every building.",
  },
  {
    id: 253,
    title: "Exercise 1.5, 16",
    description: "Discrete math class: quantifiers and truth values.",
    code: "a) ∃x Junior(x): True, there are juniors.\nb) ∀x CSMajor(x): False, there are math majors.\nc) ∃x ¬MathMajor(x) ∧ ¬Junior(x): True, e.g., CS sophomores.\nd) ∀x(Sophomore(x) ∨ CSMajor(x)): True, all are either sophomores or CS majors.\ne) ∃m ∀y ∃x(Major(x)=m ∧ Year(x)=y): True for CS major? False: CS major not in all years; True for math major? False: math major not in all years.",
  },
  {
    id: 254,
    title: "Exercise 1.5, 17",
    description:
      "System specifications: predicates, quantifiers, logical connectives.",
    code: "a) ∀u ∃!m HasAccess(u, m): Every user has access to exactly one mailbox.\nb) ∃p(Continuing(p) ∧ ∀e(Error(e) → Running(p, e))) → KernelWorking: There is a process that continues to run during all errors only if the kernel is working.\nc) ∀u ∀w(WebSite(w) ∧ EDU(w) → CanAccess(u, w)): All users can access all .edu websites.\nd) ∃!s1 ∃!s2 ∀r(RemoteServer(r) → (Monitors(s1, r) ∧ Monitors(s2, r))): There are exactly two systems that monitor every remote server.",
  },
  {
    id: 255,
    title: "Exercise 1.5, 18",
    description:
      "System specifications: predicates, quantifiers, logical connectives.",
    code: "a) ∃c ∀f(Fault(f) → Accessible(c, f)): At least one console is accessible during every fault.\nb) ∀u(ArchiveContains(u, ∃m SentBy(u, m)) → CanRetrieveEmail(u)): The e-mail address of every user can be retrieved whenever the archive contains at least one message sent by every user.\nc) ∀b(SecurityBreach(b) → ∃m(Mechanism(m) ∧ Detects(m, b) ↔ ∃p(Process(p) ∧ ¬Compromised(p)))): For every breach, there is a mechanism that can detect it iff there is a process not compromised.\nd) ∀x∀y(x ≠ y → ∃p1∃p2 Paths(p1, p2, x, y)): At least two paths connect every two distinct endpoints.\ne) ∀u(¬SystemAdmin(u) → ¬KnowsPassword(u, allUsers)) ∧ KnowsPassword(SystemAdmin, allUsers): No one knows every user's password except the system administrator.",
  },
  {
    id: 256,
    title: "Exercise 1.5, 19",
    description:
      "Statements using mathematical and logical operators, predicates, and quantifiers (integers).",
    code: "a) ∀x∀y((x < 0 ∧ y < 0) → x+y < 0): Sum of two negative integers is negative.\nb) ∀x∀y((x > 0 ∧ y > 0) → ¬(x−y > 0)): Difference of two positive integers is not necessarily positive.\nc) ∀x∀y ∃z(z = x^2 + y^2 ∧ z ≥ (x+y)^2): Sum of squares ≥ square of sum.\nd) ∀x∀y(|x*y| = |x|*|y|): Absolute value of product equals product of absolute values.",
  },
  {
    id: 257,
    title: "Exercise 1.5, 20",
    description:
      "Statements using predicates, quantifiers, logical connectives, and mathematical operators (integers).",
    code: "a) ∀x∀y((x < 0 ∧ y < 0) → x*y > 0): Product of two negative integers is positive.\nb) ∀x∀y((x > 0 ∧ y > 0) → (x+y)/2 > 0): Average of two positive integers is positive.\nc) ∀x∀y((x < 0 ∧ y < 0) → ¬(x−y < 0)): Difference of two negative integers is not necessarily negative.\nd) ∀x∀y(|x+y| ≤ |x| + |y|): Absolute value of sum does not exceed sum of absolute values.",
  },
  {
    id: 258,
    title: "Exercise 1.5, 21",
    description:
      "Every positive integer is the sum of the squares of four integers.",
    code: "∀n ∈ ℕ⁺ ∃a∃b∃c∃d (n = a^2 + b^2 + c^2 + d^2): Every positive integer can be expressed as the sum of four squares.",
  },
  {
    id: 259,
    title: "Exercise 1.5, 22",
    description:
      "There exists a positive integer that is not the sum of three squares.",
    code: "∃n ∈ ℕ⁺ ¬∃a∃b∃c (n = a^2 + b^2 + c^2): There is a positive integer that cannot be written as the sum of three squares.",
  },
  {
    id: 260,
    title: "Exercise 1.5, 23",
    description:
      "Express each mathematical statement using predicates, quantifiers, and operators.",
    code: "a) ∀x∀y((x < 0 ∧ y < 0) → x*y > 0): Product of two negative reals is positive.\nb) ∀x(x - x = 0): Difference of a real number and itself is zero.\nc) ∀x>0 ∃!y(y^2 = x): Every positive real number has exactly two square roots.\nd) ∀x<0 ¬∃y(y^2 = x): Negative real numbers have no real square roots.",
  },
  {
    id: 261,
    title: "Exercise 1.5, 24",
    description:
      "Translate nested quantifications into English (real numbers).",
    code: "a) ∃x∀y(x + y = y): There exists a number (0) such that adding it to any number gives that number.\nb) ∀x∀y(((x ≥ 0) ∧ (y < 0)) → (x − y > 0)): The difference of a nonnegative number and a negative number is positive.\nc) ∃x∃y(((x ≤ 0) ∧ (y ≤ 0)) ∧ (x − y > 0)): There exist two nonpositive numbers such that x − y > 0.\nd) ∀x∀y((x ≠ 0) ∧ (y ≠ 0) ↔ (xy ≠ 0)): Nonzero numbers multiplied are nonzero.",
  },
  {
    id: 262,
    title: "Exercise 1.5, 25",
    description:
      "Translate nested quantifications into English (real numbers).",
    code: "a) ∃x∀y(xy = y): There exists a number (1) such that multiplying it by any number gives that number.\nb) ∀x∀y(((x < 0) ∧ (y < 0)) → (xy > 0)): Product of two negative numbers is positive.\nc) ∃x∃y((x^2 > y) ∧ (x < y)): There exist numbers x and y such that x squared is greater than y, but x is less than y.\nd) ∀x∀y∃z(x + y = z): For any two numbers, there exists a number z equal to their sum.",
  },
  {
    id: 263,
    title: "Exercise 1.5, 26",
    description: "Truth values of Q(x,y): x + y = x − y (integers).",
    code: "a) Q(1, 1): False (1+1 ≠ 1−1)\nb) Q(2, 0): True (2+0 = 2−0)\nc) ∀y Q(1,y): False\n d) ∃x Q(x,2): False\n e) ∃x∃y Q(x,y): True (x=0, y=0)\n f) ∀x∃y Q(x,y): True (y=0)\n g) ∃y∀x Q(x,y): False\n h) ∀y∃x Q(x,y): True (x=y/2)\n i) ∀x∀y Q(x,y): False",
  },
  {
    id: 264,
    title: "Exercise 1.5, 27",
    description: "Truth values over integers.",
    code: "a) ∀n∃m(n^2 < m): True\nb) ∃n∀m(n < m^2): False\nc) ∀n∃m(n + m = 0): True (m=-n)\nd) ∃n∀m(nm = m): True (n=1)\ne) ∃n∃m(n^2 + m^2 = 5): True (1^2+2^2=5)\nf) ∃n∃m(n^2 + m^2 = 6): True (1^2+√5^2? Integers only: check: 6=√??; integers? True: 6=3^2+?) Actually integers: 6=1^2+√5^2? Not integer. Correct: False\n g) ∃n∃m(n + m = 4 ∧ n − m = 1): True (n=2.5,m=1.5?) Integers? No, integer solution: n+m=4, n−m=1→n=(4+1)/2=2.5, not integer →False\n h) ∃n∃m(n + m = 4 ∧ n − m = 2): n=(4+2)/2=3,m=(4−2)/2=1 →True\n i) ∀n∀m∃p(p=(m+n)/2): True",
  },
  {
    id: 265,
    title: "Exercise 1.5, 28",
    description: "Truth values over real numbers.",
    code: "a) ∀x∃y(x^2=y): True (y=x^2)\nb) ∀x∃y(x=y^2): False (x=-1)\nc) ∃x∀y(xy=0): True (x=0)\nd) ∃x∃y(x+y ≠ y+x): False (addition commutative)\ne) ∀x(x≠0 → ∃y(xy=1)): True (y=1/x)\nf) ∃x∀y(y≠0 → xy=1): False (no such x)\ng) ∀x∃y(x+y=1): True (y=1−x)\nh) ∃x∃y(x+2y=2 ∧ 2x+4y=5): False\n i) ∀x∃y(x+y=2 ∧ 2x−y=1): True (y=2−x, check 2x−y=1→2x−(2−x)=2x−2+x=3x−2=1→x=1→y=1; works?) Not all x→y works for all x. Actually: False\n j) ∀x∀y∃z(z=(x+y)/2): True",
  },
  {
    id: 266,
    title: "Exercise 1.5, 29",
    description: "Domain: x ∈ {1,2,3}, y ∈ {1,2,3}, P(x,y).",
    code: "a) ∀x∀y P(x,y) ≡ P(1,1) ∧ P(1,2) ∧ P(1,3) ∧ P(2,1) ∧ P(2,2) ∧ P(2,3) ∧ P(3,1) ∧ P(3,2) ∧ P(3,3)\nb) ∃x∃y P(x,y) ≡ P(1,1) ∨ P(1,2) ∨ ... ∨ P(3,3)\nc) ∃x∀y P(x,y) ≡ (P(1,1) ∧ P(1,2) ∧ P(1,3)) ∨ (P(2,1) ∧ P(2,2) ∧ P(2,3)) ∨ (P(3,1) ∧ P(3,2) ∧ P(3,3))\nd) ∀y∃x P(x,y) ≡ (P(1,1) ∨ P(2,1) ∨ P(3,1)) ∧ (P(1,2) ∨ P(2,2) ∨ P(3,2)) ∧ (P(1,3) ∨ P(2,3) ∨ P(3,3))",
  },
  {
    id: 267,
    title: "Exercise 1.5, 30",
    description: "Move negations inside quantifiers.",
    code: "a) ¬∃y∃x P(x,y) ≡ ∀y∀x ¬P(x,y)\nb) ¬∀x∃y P(x,y) ≡ ∃x∀y ¬P(x,y)\nc) ¬∃y(Q(y) ∧ ∀x ¬R(x,y)) ≡ ∀y(¬Q(y) ∨ ∃x R(x,y))\nd) ¬∃y(∃x R(x,y) ∨ ∀x S(x,y)) ≡ ∀y(∀x ¬R(x,y) ∧ ∃x ¬S(x,y))\ne) ¬∃y(∀x∃z T(x,y,z) ∨ ∃x∀z U(x,y,z)) ≡ ∀y(∃x∀z ¬T(x,y,z) ∧ ∀x∃z ¬U(x,y,z))",
  },
  {
    id: 268,
    title: "Exercise 1.5, 31",
    description: "Negations immediately precede predicates.",
    code: "a) ¬∀x∃y∀z T(x,y,z) ≡ ∃x∀y∃z ¬T(x,y,z)\nb) ¬(∀x∃y P(x,y) ∨ ∀x∃y Q(x,y)) ≡ ∃x∀y ¬P(x,y) ∧ ∃x∀y ¬Q(x,y)\nc) ¬∀x∃y(P(x,y) ∧ ∃z R(x,y,z)) ≡ ∃x∀y(¬P(x,y) ∨ ∀z ¬R(x,y,z))\nd) ¬∀x∃y(P(x,y) → Q(x,y)) ≡ ∃x∀y(P(x,y) ∧ ¬Q(x,y))",
  },
  {
    id: 269,
    title: "Exercise 1.5, 32",
    description: "Negations immediately precede predicates.",
    code: "a) ¬∃z∀y∀x T(x,y,z) ≡ ∀z∃y∃x ¬T(x,y,z)\nb) ¬(∃x∃y P(x,y) ∧ ∀x∀y Q(x,y)) ≡ ∀x∀y ¬P(x,y) ∨ ∃x∃y ¬Q(x,y)\nc) ¬∃x∃y(Q(x,y) ↔ Q(y,x)) ≡ ∀x∀y(Q(x,y) ↔ ¬Q(y,x))\nd) ¬∀y∃x∃z(T(x,y,z) ∨ Q(x,y)) ≡ ∃y∀x∀z(¬T(x,y,z) ∧ ¬Q(x,y))",
  },
  {
    id: 270,
    title: "Exercise 1.5, 33",
    description: "Negations inside predicates.",
    code: "a) ¬∀x∀y P(x,y) ≡ ∃x∃y ¬P(x,y)\nb) ¬∀y∃x P(x,y) ≡ ∃y∀x ¬P(x,y)\nc) ¬∀y∀x(P(x,y) ∨ Q(x,y)) ≡ ∃y∃x(¬P(x,y) ∧ ¬Q(x,y))\nd) ¬(∃x∃y ¬P(x,y) ∧ ∀x∀y Q(x,y)) ≡ ∀x∀y P(x,y) ∨ ∃x∃y ¬Q(x,y)\ne) ¬∀x(∃y∀z P(x,y,z) ∧ ∃z∀y P(x,y,z)) ≡ ∃x(∀y∃z ¬P(x,y,z) ∨ ∀z∃y ¬P(x,y,z))",
  },
  {
    id: 271,
    title: "Exercise 1.5, 34",
    description: "Common domain for ∀x∀y((x ≠ y) → ∀z((z = x) ∨ (z = y)))",
    code: "True domain: {a,b} (exactly two elements, then z=x or z=y works)\nFalse domain: {a,b,c} (more than 2 elements, ∃z≠x,y, fails)",
  },
  {
    id: 272,
    title: "Exercise 1.5, 35",
    description: "Common domain for ∀x∀y∀z∃w((w ≠ x) ∧ (w ≠ y) ∧ (w ≠ z))",
    code: "True domain: {a,b,c,d} (4+ elements, can always pick w≠x,y,z)\nFalse domain: {a,b,c} (3 elements, can't pick w≠x,y,z if x,y,z distinct)",
  },
  {
    id: 273,
    title: "Exercise 1.5, 36",
    description: "Quantifiers, negations, English translation.",
    code: "a) No one has lost more than 1000$ ≡ ¬∃x(Lost(x)>1000) ≡ ∀x(Lost(x)≤1000)\nb) There is a student who has chatted with exactly one other student ≡ ∃x ∃y ∀z((Chatted(x,z) ↔ z=y) ∧ x≠z)\nc) No student has sent email to exactly two other students ≡ ∀x¬∃y∃z((Sent(x,y) ∧ Sent(x,z) ∧ y≠z ∧ ∀w(Sent(x,w) → (w=y ∨ w=z))))\nd) Some student has solved every exercise ≡ ∃x ∀y Solved(x,y)\ne) No student has solved at least one exercise in every section ≡ ∀x ∃section s ∀exercise e in s ¬Solved(x,e)",
  },

  {
    id: 274,
    title: "Exercise 1.5, 37",
    description: "Quantifiers, negations, and English translations",
    code: "a) Every student has taken exactly two math classes ≡ ∀x ∃y ∃z (y≠z ∧ Taken(x,y) ∧ Taken(x,z) ∧ ∀w(Taken(x,w) → (w=y ∨ w=z)))\nNegation: ∃x ∀y ∀z ((y≠z ∧ Taken(x,y) ∧ Taken(x,z)) → ∃w(Taken(x,w) ∧ w≠y ∧ w≠z))\nEnglish: There is a student who has not taken exactly two math classes.\n\nb) Someone has visited every country except Libya ≡ ∃x ∀y (y≠Libya → Visited(x,y))\nNegation: ∀x ∃y (y≠Libya ∧ ¬Visited(x,y))\nEnglish: Everyone has failed to visit some country other than Libya.\n\nc) No one has climbed every mountain in Himalayas ≡ ¬∃x ∀y Climb(x,y)\nNegation: ∃x ∃y ¬Climb(x,y)\nEnglish: There exists at least one person and at least one mountain that the person has not climbed.\n\nd) Every movie actor has either been in a movie with Kevin Bacon or someone who has ≡ ∀x Actor(x) → (∃y(MovieWith(x,y) ∧ y=KevinBacon) ∨ ∃y ∃z(MovieWith(x,y) ∧ MovieWith(y,z) ∧ z=KevinBacon))\nNegation: ∃x Actor(x) ∧ ¬(∃y(MovieWith(x,y) ∧ y=KevinBacon) ∨ ∃y ∃z(MovieWith(x,y) ∧ MovieWith(y,z) ∧ z=KevinBacon))\nEnglish: There is an actor who has neither been in a movie with Kevin Bacon nor with anyone who has.",
  },
  {
    id: 275,
    title: "Exercise 1.5, 38",
    description:
      "Negations of propositions using quantifiers and English translations",
    code: "a) Every student likes mathematics ≡ ∀x LikesMath(x)\nNegation: ∃x ¬LikesMath(x)\nEnglish: There is at least one student who does not like mathematics.\n\nb) Someone has never seen a computer ≡ ∃x NeverSeenComputer(x)\nNegation: ∀x SeenComputer(x)\nEnglish: Every student has seen a computer.\n\nc) There is a student who has taken every mathematics course ≡ ∃x ∀y MathCourse(x,y)\nNegation: ∀x ∃y ¬MathCourse(x,y)\nEnglish: Every student has missed at least one mathematics course.\n\nd) There is a student who has been in at least one room of every building ≡ ∃x ∀y ∃z InRoom(x,y,z)\nNegation: ∀x ∃y ∀z ¬InRoom(x,y,z)\nEnglish: Every student has missed at least one room in some building.",
  },
  {
    id: 276,
    title: "Exercise 1.5, 39",
    description:
      "Counterexamples for universally quantified statements over integers",
    code: "a) ∀x ∀y (x^2 = y^2 → x = y) → False; counterexample: x=2, y=-2\nb) ∀x ∃y (y^2 = x) → False for x=-1 (no integer square root)\nc) ∀x ∀y (xy ≥ x) → False for x=-1, y=1",
  },
  {
    id: 277,
    title: "Exercise 1.5, 40",
    description:
      "Counterexamples for universally quantified statements over integers",
    code: "a) ∀x ∃y (x = 1/y) → False for x≠1\nb) ∀x ∃y (y^2 - x < 100) → True (pick y=0 if x > -100)\nc) ∀x ∀y (x^2 ≠ y^3) → False, e.g., x=8, y=4 (8^2=64, 4^3=64)",
  },
  {
    id: 278,
    title: "Exercise 1.5, 41",
    description: "Associative law of multiplication of real numbers",
    code: "∀x ∀y ∀z ((x * y) * z = x * (y * z))",
  },
  {
    id: 279,
    title: "Exercise 1.5, 42",
    description: "Distributive laws of multiplication over addition",
    code: "∀x ∀y ∀z (x*(y+z) = x*y + x*z) ∧ ∀x ∀y ∀z ((x+y)*z = x*z + y*z)",
  },
  {
    id: 280,
    title: "Exercise 1.5, 43",
    description:
      "Linear polynomial with nonzero x coefficient has exactly one real root",
    code: "∀a ∀b (a ≠ 0 → ∃!x (a*x + b = 0))",
  },
  {
    id: 281,
    title: "Exercise 1.5, 44",
    description: "Quadratic polynomial has at most two real roots",
    code: "∀a ∀b ∀c ∀x1 ∀x2 ∀x3 (a*x^2 + b*x + c = 0 → (x1=x2 ∨ x1=x3 ∨ x2=x3))",
  },
  {
    id: 282,
    title: "Exercise 1.5, 45",
    description: "Truth value of ∀x ∃y (xy=1)",
    code: "a) Nonzero reals: True\nb) Nonzero integers: False\nc) Positive reals: True",
  },
  {
    id: 283,
    title: "Exercise 1.5, 46",
    description: "Truth value of ∃x ∀y (x ≤ y^2)",
    code: "a) Positive reals: True\nb) Integers: True\nc) Nonzero reals: False",
  },

  {
    id: 284,
    title: "Exercise 1.5, 47",
    description:
      "Show logical equivalence between ¬∃x∀y P(x,y) and ∀x∃y ¬P(x,y).",
    code: "¬∃x∀y P(x,y) ≡ ∀x¬∀y P(x,y) ≡ ∀x∃y ¬P(x,y)\nEnglish: Saying that 'it is not true that there exists an x such that P(x,y) holds for all y' is equivalent to 'for every x, there exists a y for which P(x,y) does not hold'.",
  },
  {
    id: 285,
    title: "Exercise 1.5, 48",
    description:
      "Show logical equivalence between ∀x P(x) ∨ ∀x Q(x) and ∀x ∀y (P(x) ∨ Q(y))",
    code: "∀x P(x) ∨ ∀x Q(x) ≡ ∀x ∀y (P(x) ∨ Q(y))\nEnglish: Either all x satisfy P(x), or all x satisfy Q(x), is equivalent to stating that for every x and every y, either P(x) or Q(y) holds.",
  },
  {
    id: 286,
    title: "Exercise 1.5, 49",
    description: "Logical equivalences involving ∀x P(x) and ∃x Q(x)",
    code: "a) ∀x P(x) ∧ ∃x Q(x) ≡ ∀x ∃y (P(x) ∧ Q(y))\nEnglish: Every x satisfies P(x) and there exists some x that satisfies Q(x) is equivalent to: for each x there exists some y such that P(x) and Q(y) both hold.\n\nb) ∀x P(x) ∨ ∃x Q(x) ≡ ∀x ∃y (P(x) ∨ Q(y))\nEnglish: Either every x satisfies P(x) or there exists an x satisfying Q(x) is equivalent to: for each x there exists some y such that either P(x) or Q(y) holds.",
  },
  {
    id: 287,
    title: "Exercise 1.5, 50",
    description: "Put statements into prenex normal form (PNF).",
    code: "a) ∃x P(x) ∨ ∃x Q(x) ∨ A ≡ ∃x ∃y ∃z (P(x) ∨ Q(y) ∨ A)\nb) ¬(∀x P(x) ∨ ∀x Q(x)) ≡ ∃x ∃y (¬P(x) ∧ ¬Q(y))\nc) ∃x P(x) → ∃x Q(x) ≡ ¬∃x P(x) ∨ ∃x Q(x) ≡ ∀x ¬P(x) ∨ ∃x Q(x)",
  },
  {
    id: 288,
    title: "Exercise 1.5, 51",
    description:
      "Transform an arbitrary statement to prenex normal form (PNF).",
    code: "Method: Use structural induction:\n1. Move negations inward using De Morgan laws and quantifier rules.\n2. Standardize variable names to avoid clashes.\n3. Move all quantifiers to the front in sequence.\n4. The resulting form is Q1 x1 Q2 x2 ... Qk xk P(x1,...,xk), where P has no quantifiers.\nExample: ¬(∃x P(x) ∨ ∀y Q(y)) ≡ ¬∃x P(x) ∧ ¬∀y Q(y) ≡ ∀x ¬P(x) ∧ ∃y ¬Q(y) → PNF: ∀x ∃y (¬P(x) ∧ ¬Q(y))",
  },
  {
    id: 289,
    title: "Exercise 1.5, 52",
    description:
      "Express the unique existential quantifier ∃!x P(x) using standard quantifiers and logical operators.",
    code: "∃!x P(x) ≡ ∃x (P(x) ∧ ∀y (P(y) → y=x))\nEnglish: There exists exactly one x such that P(x) is true: x satisfies P(x) and no other y satisfies P(y).",
  },
  {
    id: 290,
    title: "Exercise: 1.6 1",
    description: "Under construction",
    code: "",
  },
  {
    id: 291,
    title: "Exercise: 1.6 2",
    description: "Under construction",
    code: "",
  },
  {
    id: 292,
    title: "Exercise: 1.6 3",
    description: "Under construction",
    code: "",
  },
  {
    id: 293,
    title: "Exercise: 1.6 4",
    description: "Under construction",
    code: "",
  },
  {
    id: 294,
    title: "Exercise: 1.6 5",
    description: "Under construction",
    code: "",
  },
  {
    id: 295,
    title: "Exercise: 1.6 6",
    description: "Under construction",
    code: "",
  },
  {
    id: 296,
    title: "Exercise: 1.6 7",
    description: "Under construction",
    code: "",
  },
  {
    id: 297,
    title: "Exercise: 1.6 8",
    description: "Under construction",
    code: "",
  },
  {
    id: 298,
    title: "Exercise: 1.6 9",
    description: "Under construction",
    code: "",
  },
  {
    id: 299,
    title: "Exercise: 1.6 10",
    description: "Under construction",
    code: "",
  },
  {
    id: 300,
    title: "Exercise: 1.6 11",
    description: "Under construction",
    code: "",
  },
  {
    id: 301,
    title: "Exercise: 1.6 12",
    description: "Under construction",
    code: "",
  },
  {
    id: 302,
    title: "Exercise: 1.6 13",
    description: "Under construction",
    code: "",
  },
  {
    id: 303,
    title: "Exercise: 1.6 14",
    description: "Under construction",
    code: "",
  },
  {
    id: 304,
    title: "Exercise: 1.6 15",
    description: "Under construction",
    code: "",
  },
  {
    id: 305,
    title: "Exercise: 1.6 16",
    description: "Under construction",
    code: "",
  },
  {
    id: 306,
    title: "Exercise: 1.6 17",
    description: "Under construction",
    code: "",
  },
  {
    id: 307,
    title: "Exercise: 1.6 18",
    description: "Under construction",
    code: "",
  },
  {
    id: 308,
    title: "Exercise: 1.6 19",
    description: "Under construction",
    code: "",
  },
  {
    id: 309,
    title: "Exercise: 1.6 20",
    description: "Under construction",
    code: "",
  },
  {
    id: 310,
    title: "Exercise: 1.6 21",
    description: "Under construction",
    code: "",
  },
  {
    id: 311,
    title: "Exercise: 1.6 22",
    description: "Under construction",
    code: "",
  },
  {
    id: 312,
    title: "Exercise: 1.6 23",
    description: "Under construction",
    code: "",
  },
  {
    id: 313,
    title: "Exercise: 1.6 24",
    description: "Under construction",
    code: "",
  },
  {
    id: 314,
    title: "Exercise: 1.6 25",
    description: "Under construction",
    code: "",
  },
  {
    id: 315,
    title: "Exercise: 1.6 26",
    description: "Under construction",
    code: "",
  },
  {
    id: 316,
    title: "Exercise: 1.6 27",
    description: "Under construction",
    code: "",
  },
  {
    id: 317,
    title: "Exercise: 1.6 28",
    description: "Under construction",
    code: "",
  },
  {
    id: 318,
    title: "Exercise: 1.6 29",
    description: "Under construction",
    code: "",
  },
  {
    id: 319,
    title: "Exercise: 1.6 30",
    description: "Under construction",
    code: "",
  },
  {
    id: 320,
    title: "Exercise: 1.6 31",
    description: "Under construction",
    code: "",
  },
  {
    id: 321,
    title: "Exercise: 1.6 32",
    description: "Under construction",
    code: "",
  },
  {
    id: 322,
    title: "Exercise: 1.6 33",
    description: "Under construction",
    code: "",
  },
  {
    id: 323,
    title: "Exercise: 1.6 34",
    description: "Under construction",
    code: "",
  },
  {
    id: 324,
    title: "Exercise: 1.6 35",
    description: "Under construction",
    code: "",
  },
  {
    id: 325,
    title: "Exercise: 1.7 1",
    description: "Under construction",
    code: "",
  },
  {
    id: 326,
    title: "Exercise: 1.7 2",
    description: "Under construction",
    code: "",
  },
  {
    id: 327,
    title: "Exercise: 1.7 3",
    description: "Under construction",
    code: "",
  },
  {
    id: 328,
    title: "Exercise: 1.7 4",
    description: "Under construction",
    code: "",
  },
  {
    id: 329,
    title: "Exercise: 1.7 5",
    description: "Under construction",
    code: "",
  },
  {
    id: 330,
    title: "Exercise: 1.7 6",
    description: "Under construction",
    code: "",
  },
  {
    id: 331,
    title: "Exercise: 1.7 7",
    description: "Under construction",
    code: "",
  },
  {
    id: 332,
    title: "Exercise: 1.7 8",
    description: "Under construction",
    code: "",
  },
  {
    id: 333,
    title: "Exercise: 1.7 9",
    description: "Under construction",
    code: "",
  },
  {
    id: 334,
    title: "Exercise: 1.7 10",
    description: "Under construction",
    code: "",
  },
  {
    id: 335,
    title: "Exercise: 1.7 11",
    description: "Under construction",
    code: "",
  },
  {
    id: 336,
    title: "Exercise: 1.7 12",
    description: "Under construction",
    code: "",
  },
  {
    id: 337,
    title: "Exercise: 1.7 13",
    description: "Under construction",
    code: "",
  },
  {
    id: 338,
    title: "Exercise: 1.7 14",
    description: "Under construction",
    code: "",
  },
  {
    id: 339,
    title: "Exercise: 1.7 15",
    description: "Under construction",
    code: "",
  },
  {
    id: 340,
    title: "Exercise: 1.7 16",
    description: "Under construction",
    code: "",
  },
  {
    id: 341,
    title: "Exercise: 1.7 17",
    description: "Under construction",
    code: "",
  },
  {
    id: 342,
    title: "Exercise: 1.7 18",
    description: "Under construction",
    code: "",
  },
  {
    id: 343,
    title: "Exercise: 1.7 19",
    description: "Under construction",
    code: "",
  },
  {
    id: 344,
    title: "Exercise: 1.7 20",
    description: "Under construction",
    code: "",
  },
  {
    id: 345,
    title: "Exercise: 1.7 21",
    description: "Under construction",
    code: "",
  },
  {
    id: 346,
    title: "Exercise: 1.7 22",
    description: "Under construction",
    code: "",
  },
  {
    id: 347,
    title: "Exercise: 1.7 23",
    description: "Under construction",
    code: "",
  },
  {
    id: 348,
    title: "Exercise: 1.7 24",
    description: "Under construction",
    code: "",
  },
  {
    id: 349,
    title: "Exercise: 1.7 25",
    description: "Under construction",
    code: "",
  },
  {
    id: 350,
    title: "Exercise: 1.7 26",
    description: "Under construction",
    code: "",
  },
  {
    id: 351,
    title: "Exercise: 1.7 27",
    description: "Under construction",
    code: "",
  },
  {
    id: 352,
    title: "Exercise: 1.7 28",
    description: "Under construction",
    code: "",
  },
  {
    id: 353,
    title: "Exercise: 1.7 29",
    description: "Under construction",
    code: "",
  },
  {
    id: 354,
    title: "Exercise: 1.7 30",
    description: "Under construction",
    code: "",
  },
  {
    id: 355,
    title: "Exercise: 1.7 31",
    description: "Under construction",
    code: "",
  },
  {
    id: 356,
    title: "Exercise: 1.7 32",
    description: "Under construction",
    code: "",
  },
  {
    id: 357,
    title: "Exercise: 1.7 33",
    description: "Under construction",
    code: "",
  },
  {
    id: 358,
    title: "Exercise: 1.7 34",
    description: "Under construction",
    code: "",
  },
  {
    id: 359,
    title: "Exercise: 1.7 35",
    description: "Under construction",
    code: "",
  },
  {
    id: 360,
    title: "Exercise: 1.7 36",
    description: "Under construction",
    code: "",
  },
  {
    id: 361,
    title: "Exercise: 1.7 37",
    description: "Under construction",
    code: "",
  },
  {
    id: 362,
    title: "Exercise: 1.7 38",
    description: "Under construction",
    code: "",
  },
  {
    id: 363,
    title: "Exercise: 1.7 39",
    description: "Under construction",
    code: "",
  },
  {
    id: 364,
    title: "Exercise: 1.7 40",
    description: "Under construction",
    code: "",
  },
  {
    id: 365,
    title: "Exercise: 1.7 41",
    description: "Under construction",
    code: "",
  },
  {
    id: 366,
    title: "Exercise: 1.7 42",
    description: "Under construction",
    code: "",
  },
  {
    id: 367,
    title: "Exercise: 1.7 43",
    description: "Under construction",
    code: "",
  },
  {
    id: 368,
    title: "Exercise: 1.7 44",
    description: "Under construction",
    code: "",
  },
  {
    id: 369,
    title: "Exercise: 1.8 1",
    description: "Under construction",
    code: "",
  },
  {
    id: 370,
    title: "Exercise: 1.8 2",
    description: "Under construction",
    code: "",
  },
  {
    id: 371,
    title: "Exercise: 1.8 3",
    description: "Under construction",
    code: "",
  },
  {
    id: 372,
    title: "Exercise: 1.8 4",
    description: "Under construction",
    code: "",
  },
  {
    id: 373,
    title: "Exercise: 1.8 5",
    description: "Under construction",
    code: "",
  },
  {
    id: 374,
    title: "Exercise: 1.8 6",
    description: "Under construction",
    code: "",
  },
  {
    id: 375,
    title: "Exercise: 1.8 7",
    description: "Under construction",
    code: "",
  },
  {
    id: 376,
    title: "Exercise: 1.8 8",
    description: "Under construction",
    code: "",
  },
  {
    id: 377,
    title: "Exercise: 1.8 9",
    description: "Under construction",
    code: "",
  },
  {
    id: 378,
    title: "Exercise: 1.8 10",
    description: "Under construction",
    code: "",
  },
  {
    id: 379,
    title: "Exercise: 1.8 11",
    description: "Under construction",
    code: "",
  },
  {
    id: 380,
    title: "Exercise: 1.8 12",
    description: "Under construction",
    code: "",
  },
  {
    id: 381,
    title: "Exercise: 1.8 13",
    description: "Under construction",
    code: "",
  },
  {
    id: 382,
    title: "Exercise: 1.8 14",
    description: "Under construction",
    code: "",
  },
  {
    id: 383,
    title: "Exercise: 1.8 15",
    description: "Under construction",
    code: "",
  },
  {
    id: 384,
    title: "Exercise: 1.8 16",
    description: "Under construction",
    code: "",
  },
  {
    id: 385,
    title: "Exercise: 1.8 17",
    description: "Under construction",
    code: "",
  },
  {
    id: 386,
    title: "Exercise: 1.8 18",
    description: "Under construction",
    code: "",
  },
  {
    id: 387,
    title: "Exercise: 1.8 19",
    description: "Under construction",
    code: "",
  },
  {
    id: 388,
    title: "Exercise: 1.8 20",
    description: "Under construction",
    code: "",
  },
  {
    id: 389,
    title: "Exercise: 1.8 21",
    description: "Under construction",
    code: "",
  },
  {
    id: 390,
    title: "Exercise: 1.8 22",
    description: "Under construction",
    code: "",
  },
  {
    id: 391,
    title: "Exercise: 1.8 23",
    description: "Under construction",
    code: "",
  },
  {
    id: 392,
    title: "Exercise: 1.8 24",
    description: "Under construction",
    code: "",
  },
  {
    id: 393,
    title: "Exercise: 1.8 25",
    description: "Under construction",
    code: "",
  },
  {
    id: 394,
    title: "Exercise: 1.8 26",
    description: "Under construction",
    code: "",
  },
  {
    id: 395,
    title: "Exercise: 1.8 27",
    description: "Under construction",
    code: "",
  },
  {
    id: 396,
    title: "Exercise: 1.8 28",
    description: "Under construction",
    code: "",
  },
  {
    id: 397,
    title: "Exercise: 1.8 29",
    description: "Under construction",
    code: "",
  },
  {
    id: 398,
    title: "Exercise: 1.8 30",
    description: "Under construction",
    code: "",
  },
  {
    id: 399,
    title: "Exercise: 1.8 31",
    description: "Under construction",
    code: "",
  },
  {
    id: 400,
    title: "Exercise: 1.8 32",
    description: "Under construction",
    code: "",
  },
  {
    id: 401,
    title: "Exercise: 1.8 33",
    description: "Under construction",
    code: "",
  },
  {
    id: 402,
    title: "Exercise: 1.8 34",
    description: "Under construction",
    code: "",
  },
  {
    id: 403,
    title: "Exercise: 1.8 35",
    description: "Under construction",
    code: "",
  },
  {
    id: 404,
    title: "Exercise: 1.8 36",
    description: "Under construction",
    code: "",
  },
  {
    id: 405,
    title: "Exercise: 1.8 37",
    description: "Under construction",
    code: "",
  },
  {
    id: 406,
    title: "Exercise: 1.8 38",
    description: "Under construction",
    code: "",
  },
  {
    id: 407,
    title: "Exercise: 1.8 39",
    description: "Under construction",
    code: "",
  },
  {
    id: 408,
    title: "Exercise: 1.8 40",
    description: "Under construction",
    code: "",
  },
  {
    id: 409,
    title: "Exercise: 1.8 41",
    description: "Under construction",
    code: "",
  },
  {
    id: 410,
    title: "Exercise: 1.8 42",
    description: "Under construction",
    code: "",
  },
  {
    id: 411,
    title: "Exercise: 1.8 43",
    description: "Under construction",
    code: "",
  },
  {
    id: 412,
    title: "Exercise: 1.8 44",
    description: "Under construction",
    code: "",
  },
  {
    id: 413,
    title: "Exercise: 1.8 45",
    description: "Under construction",
    code: "",
  },
  {
    id: 414,
    title: "Exercise: 1.8 46",
    description: "Under construction",
    code: "",
  },
  {
    id: 415,
    title: "Exercise: 1.8 47",
    description: "Under construction",
    code: "",
  },
  {
    id: 416,
    title: "Exercise: 1.8 48",
    description: "Under construction",
    code: "",
  },
  {
    id: 417,
    title: "Exercise: 1.8 49",
    description: "Under construction",
    code: "",
  },
  {
    id: 418,
    title: "Exercise: 1.8 50",
    description: "Under construction",
    code: "",
  },
  {
    id: 419,
    title: "Exercise: 1.8 51",
    description: "Under construction",
    code: "",
  },
  {
    id: 420,
    title: "Exercise: 1.8 52",
    description: "Under construction",
    code: "",
  },

  /* */
];
