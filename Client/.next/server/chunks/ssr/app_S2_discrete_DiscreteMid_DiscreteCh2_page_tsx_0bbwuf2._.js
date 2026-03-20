module.exports=[78617,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(90128);let e=[{id:1,title:"Exercise 2.1, 1",description:`List the members of these sets.
a) {x ∣ x is a real number such that x\xb2 = 1}
b) {x ∣ x is a positive integer less than 12}
c) {x ∣ x is the square of an integer and x < 100}
d) {x ∣ x is an integer such that x\xb2 = 2}`,code:`// a) Solve x\xb2 = 1 → x = \xb11
// Answer: {1, -1}

// b) Positive integers less than 12 → list 1 through 11
// Answer: {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}

// c) Square each integer until result ≥ 100: 0\xb2=0, 1\xb2=1, 2\xb2=4, ..., 9\xb2=81, 10\xb2=100 (stop)
// Answer: {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}

// d) Solve x\xb2 = 2 → x = \xb1√2, but √2 is not an integer
// Answer: ∅ (empty set)`},{id:2,title:"Exercise 2.1, 2",description:`Use set builder notation to give a description of each of these sets.
a) {0, 3, 6, 9, 12}
b) {−3,−2,−1, 0, 1, 2, 3}
c) {m, n, o, p}`,code:`// a) Multiples of 3 from 0 to 12
// Answer: {x ∈ Z | x = 3k, 0 ≤ k ≤ 4}  or  {x ∈ Z | 0 ≤ x ≤ 12 and 3|x}

// b) Integers between -3 and 3 inclusive
// Answer: {x ∈ Z | -3 ≤ x ≤ 3}

// c) Letters m, n, o, p — consecutive letters of the English alphabet
// Answer: {x | x is a letter of the English alphabet, m ≤ x ≤ p}`},{id:3,title:"Exercise 2.1, 3",description:`Which of the intervals (0, 5), (0, 5], [0, 5), [0, 5], (1, 4], [2, 3], (2, 3) contains
a) 0?
b) 1?
c) 2?
d) 3?
e) 4?
f) 5?`,code:`// Key: [ ] = inclusive endpoint, ( ) = exclusive endpoint

// a) 0: only [0,5) and [0,5] include 0 (left bracket)
// b) 1: (0,5), (0,5], [0,5), [0,5] — not (1,4] since 1 is excluded
// c) 2: (0,5), (0,5], [0,5), [0,5], (1,4], [2,3], NOT (2,3) since 2 excluded
// d) 3: (0,5), (0,5], [0,5), [0,5], (1,4], [2,3], (2,3) — all contain 3
// e) 4: (0,5), (0,5], [0,5), [0,5], (1,4] — not [2,3] or (2,3)
// f) 5: only (0,5] and [0,5] — right bracket includes 5`},{id:4,title:"Exercise 2.1, 4",description:`For each of these intervals, list all its elements or explain why it is empty.
a) [a, a]
b) [a, a)
c) (a, a]
d) (a, a)
e) (a, b), where a > b
f) [a, b], where a > b`,code:`// a) [a,a]: contains exactly one element → {a}

// b) [a,a): includes a on left, excludes a on right → no elements → ∅

// c) (a,a]: excludes a on left, includes a on right → no elements → ∅

// d) (a,a): excludes a on both sides → no elements → ∅

// e) (a,b) where a > b: lower bound exceeds upper bound → ∅

// f) [a,b] where a > b: lower bound exceeds upper bound → ∅`},{id:5,title:"Exercise 2.1, 5",description:`For each of these pairs of sets, determine whether the first is a subset of the second, the second is a subset of the first, or neither is a subset of the other.
a) the set of airline flights from New York to New Delhi, the set of nonstop airline flights from New York to New Delhi
b) the set of people who speak English, the set of people who speak Chinese
c) the set of flying squirrels, the set of living creatures that can fly`,code:`// a) Every nonstop flight IS a NY→Delhi flight, but not vice versa
// → Second is a subset of the first

// b) English speakers and Chinese speakers overlap but neither contains the other
// → Neither is a subset of the other

// c) Flying squirrels can glide but technically cannot truly fly
// → Neither is a subset of the other (flying squirrels are not in the "can fly" set)`},{id:6,title:"Exercise 2.1, 6",description:`For each of these pairs of sets, determine whether the first is a subset of the second, the second is a subset of the first, or neither is a subset of the other.
a) the set of people who speak English, the set of people who speak English with an Australian accent
b) the set of fruits, the set of citrus fruits
c) the set of students studying discrete mathematics, the set of students studying data structures`,code:`// a) Australian-accent English speakers are a specific group within all English speakers
// → Second is a subset of the first

// b) All citrus fruits ARE fruits, but not all fruits are citrus
// → Second is a subset of the first

// c) Some students may study both, some only one — no guaranteed containment
// → Neither is a subset of the other`},{id:7,title:"Exercise 2.1, 7",description:`Determine whether each of these pairs of sets are equal.
a) {1, 3, 3, 3, 5, 5, 5, 5, 5}, {5, 3, 1}
b) {{1}}, {1, {1}}
c) ∅, {∅}`,code:`// a) Sets ignore duplicates and order → {1,3,5} = {5,3,1}
// → EQUAL

// b) {{1}} has one element (the set {1}); {1,{1}} has two elements (1 and {1})
// → NOT EQUAL

// c) ∅ is empty (0 elements); {∅} contains one element (the empty set)
// → NOT EQUAL`},{id:8,title:"Exercise 2.1, 8",description:"Suppose that A = {2, 4, 6}, B = {2, 6}, C = {4, 6}, and D = {4, 6, 8}. Determine which of these sets are subsets of which other of these sets.",code:`// Check each pair — every element of the smaller must be in the larger:

// B = {2,6} ⊆ A = {2,4,6} ✓
// C = {4,6} ⊆ A = {2,4,6} ✓
// C = {4,6} ⊆ D = {4,6,8} ✓
// B ⊄ C (2 ∉ C), B ⊄ D (2 ∉ D)
// A ⊄ D (2 ∉ D), D ⊄ A (8 ∉ A)

// Summary: B ⊆ A, C ⊆ A, C ⊆ D`},{id:9,title:"Exercise 2.1, 9",description:`For each of the following sets, determine whether 2 is an element of that set.
a) {x ∈ R | x is an integer greater than 1}
b) {x ∈ R | x is the square of an integer}
c) {2, {2}}
d) {{2}, {{2}}}
e) {{2}, {2, {2}}}
f) {{{2}}}`,code:`// a) 2 is an integer greater than 1 → YES, 2 ∈ set

// b) 2 is not a perfect square (√2 is not an integer) → NO

// c) 2 is listed explicitly → YES, 2 ∈ {2, {2}}

// d) Elements are {2} and {{2}}, not 2 itself → NO

// e) Elements are {2} and {2,{2}}, not 2 itself → NO

// f) Only element is {{2}} → NO`},{id:10,title:"Exercise 2.1, 10",description:"For each of the sets in Exercise 9, determine whether {2} is an element of that set.",code:`// a) {2} is not an integer, it's a set → NO

// b) {2} is not a real number → NO

// c) {2} is explicitly listed in {2, {2}} → YES

// d) {2} is explicitly listed in {{2}, {{2}}} → YES

// e) {2} is explicitly listed in {{2}, {2,{2}}} → YES

// f) Only element is {{2}}, not {2} → NO`},{id:11,title:"Exercise 2.1, 11",description:`Determine whether each of these statements is true or false.
a) 0 ∈ ∅
b) ∅ ∈ {0}
c) {0} ⊂ ∅
d) ∅ ⊂ {0}
e) {0} ∈ {0}
f) {0} ⊂ {0}
g) {∅} ⊆ {∅}`,code:`// a) FALSE — ∅ has no elements, so 0 cannot be in it

// b) FALSE — {0} contains only the number 0, not the empty set

// c) FALSE — nothing is a subset of ∅ except ∅ itself

// d) TRUE — ∅ is a subset of every set

// e) FALSE — {0} contains 0, not the set {0}

// f) FALSE — {0} ⊆ {0} is true, but ⊂ (proper subset) requires at least one extra element

// g) TRUE — every set is a subset of itself`},{id:12,title:"Exercise 2.1, 12",description:`Determine whether these statements are true or false.
a) ∅ ∈ {∅}
b) ∅ ∈ {∅, {∅}}
c) {∅} ∈ {∅}
d) {∅} ∈ {{∅}}
e) {∅} ⊂ {∅, {∅}}
f) {{∅}} ⊂ {∅, {∅}}
g) {{∅}} ⊂ {{∅}, {∅}}`,code:`// a) TRUE — {∅} contains exactly one element: ∅

// b) TRUE — ∅ is one of the two listed elements

// c) FALSE — {∅} contains ∅, not the set {∅}

// d) TRUE — {{∅}} contains exactly one element: {∅}

// e) TRUE — {∅} ⊆ {∅,{∅}} and {∅} ≠ {∅,{∅}}, so proper subset holds

// f) TRUE — {{∅}} has element {∅} which is in {∅,{∅}}, and {{∅}} ≠ {∅,{∅}}

// g) FALSE — {{∅},{∅}} = {{∅}} (duplicate), so they are equal → not a proper subset`},{id:13,title:"Exercise 2.1, 13",description:`Determine whether each of these statements is true or false.
a) x ∈ {x}
b) {x} ⊆ {x}
c) {x} ∈ {x}
d) {x} ∈ {{x}}
e) ∅ ⊆ {x}
f) ∅ ∈ {x}`,code:`// a) TRUE — {x} is defined as the set containing x

// b) TRUE — every set is a subset of itself

// c) FALSE — {x} contains x, not the set {x}

// d) TRUE — {{x}} contains exactly the element {x}

// e) TRUE — ∅ is a subset of every set

// f) FALSE — {x} contains x (some element), not the empty set`},{id:14,title:"Exercise 2.1, 14",description:"Use a Venn diagram to illustrate the subset of odd integers in the set of all positive integers not exceeding 10.",code:`// Draw a large circle U = {1,2,3,4,5,6,7,8,9,10}
// Inside it, draw a smaller circle A = {1,3,5,7,9} (odd integers)
// The even integers {2,4,6,8,10} lie in U but outside A
// Key point: A ⊂ U, showing subset relationship`},{id:15,title:"Exercise 2.1, 15",description:"Use a Venn diagram to illustrate the set of all months of the year whose names do not contain the letter R in the set of all months of the year.",code:`// U = all 12 months
// Months WITH 'R': January, February, March, April, September, October, November, December
// Months WITHOUT 'R': May, June, July, August
// Draw large circle U, smaller circle A = {May, June, July, August} inside it`},{id:16,title:"Exercise 2.1, 16",description:"Use a Venn diagram to illustrate the relationship A ⊆ B and B ⊆ C.",code:`// Draw three nested circles:
// Innermost: A
// Middle: B (contains A)
// Outermost: C (contains B and A)
// This shows A ⊆ B ⊆ C (and by transitivity A ⊆ C)`},{id:17,title:"Exercise 2.1, 17",description:"Use a Venn diagram to illustrate the relationships A ⊂ B and B ⊂ C.",code:`// Same as #16 but with PROPER subsets:
// Draw three strictly nested circles (each strictly inside the next)
// A is strictly inside B (B has elements not in A)
// B is strictly inside C (C has elements not in B)
// Innermost: A, Middle: B, Outermost: C`},{id:18,title:"Exercise 2.1, 18",description:"Use a Venn diagram to illustrate the relationships A ⊂ B and A ⊂ C.",code:`// A is a proper subset of BOTH B and C
// Draw B and C as two overlapping circles
// Draw A entirely within the overlapping region of B and C
// A sits in the intersection, B and C each have regions outside A`},{id:19,title:"Exercise 2.1, 19",description:"Suppose that A, B, and C are sets such that A ⊆ B and B ⊆ C. Show that A ⊆ C.",code:`// Proof strategy: take any element x ∈ A and show x ∈ C

// Let x ∈ A
// Since A ⊆ B, we have x ∈ B
// Since B ⊆ C, we have x ∈ C
// Therefore every element of A is in C → A ⊆ C ∎

// This is the TRANSITIVITY of the subset relation`},{id:20,title:"Exercise 2.1, 20",description:"Find two sets A and B such that A ∈ B and A ⊆ B.",code:`// Need A to be both an ELEMENT of B and a SUBSET of B

// Let A = {1} and B = {1, {1}}
// A ∈ B? Yes — {1} is listed as an element of B ✓
// A ⊆ B? Yes — 1 ∈ B, so every element of A is in B ✓`},{id:21,title:"Exercise 2.1, 21",description:`What is the cardinality of each of these sets?
a) {a}
b) {{a}}
c) {a, {a}}
d) {a, {a}, {a, {a}}}`,code:`// Cardinality = number of elements (count top-level items only)

// a) {a} → 1 element → |{a}| = 1

// b) {{a}} → 1 element (the set {a}) → |{{a}}| = 1

// c) {a, {a}} → 2 elements: a and {a} → |{a,{a}}| = 2

// d) {a, {a}, {a,{a}}} → 3 elements → cardinality = 3`},{id:22,title:"Exercise 2.1, 22",description:`What is the cardinality of each of these sets?
a) ∅
b) {∅}
c) {∅, {∅}}
d) {∅, {∅}, {∅, {∅}}}`,code:`// a) ∅ has no elements → |∅| = 0

// b) {∅} has one element (the empty set) → |{∅}| = 1

// c) {∅, {∅}} has two elements → cardinality = 2

// d) {∅, {∅}, {∅,{∅}}} has three elements → cardinality = 3`},{id:23,title:"Exercise 2.1, 23",description:`Find the power set of each of these sets, where a and b are distinct elements.
a) {a}
b) {a, b}
c) {∅, {∅}}`,code:`// Power set 𝒫(S) = set of ALL subsets of S
// If |S| = n, then |𝒫(S)| = 2ⁿ

// a) 𝒫({a}) = {∅, {a}}  → 2\xb9 = 2 subsets

// b) 𝒫({a,b}) = {∅, {a}, {b}, {a,b}}  → 2\xb2 = 4 subsets

// c) 𝒫({∅,{∅}}) = {∅, {∅}, {{∅}}, {∅,{∅}}}  → 2\xb2 = 4 subsets
// Be careful: ∅ and {∅} are distinct elements here`},{id:24,title:"Exercise 2.1, 24",description:"Can you conclude that A = B if A and B are two sets with the same power set?",code:`// YES — if 𝒫(A) = 𝒫(B), then A = B

// Proof: Since A ∈ 𝒫(A) = 𝒫(B), we have A ⊆ B
// Since B ∈ 𝒫(B) = 𝒫(A), we have B ⊆ A
// A ⊆ B and B ⊆ A → A = B ∎`},{id:25,title:"Exercise 2.1, 25",description:`How many elements does each of these sets have where a and b are distinct elements?
a) 𝒫({a, b, {a, b}})
b) 𝒫({∅, a, {a}, {{a}}})
c) 𝒫(𝒫(∅))`,code:`// |𝒫(S)| = 2^|S|

// a) {a, b, {a,b}} has 3 elements → |𝒫(...)| = 2\xb3 = 8

// b) {∅, a, {a}, {{a}}} has 4 elements → |𝒫(...)| = 2⁴ = 16

// c) 𝒫(∅) = {∅}, which has 1 element
//    𝒫({∅}) = {∅, {∅}}, which has 2 elements → answer = 2`},{id:26,title:"Exercise 2.1, 26",description:`Determine whether each of these sets is the power set of a set, where a and b are distinct elements.
a) ∅
b) {∅, {a}}
c) {∅, {a}, {∅, a}}
d) {∅, {a}, {b}, {a, b}}`,code:`// Power sets must: contain ∅, contain the full set, have 2ⁿ elements

// a) ∅ — NO: 𝒫(S) always contains at least ∅, so it's never empty

// b) {∅, {a}} — YES: this is 𝒫({a}), has 2\xb9=2 elements ✓

// c) {∅, {a}, {∅,a}} — NO: has 3 elements, but 2ⁿ is never 3

// d) {∅, {a}, {b}, {a,b}} — YES: this is 𝒫({a,b}), has 2\xb2=4 elements ✓`},{id:27,title:"Exercise 2.1, 27",description:`Prove that 𝒫(A) ⊆ 𝒫(B) if and only if A ⊆ B.`,code:`// Biconditional proof — prove both directions:

// (→) Assume 𝒫(A) ⊆ 𝒫(B). Show A ⊆ B.
//   A ∈ 𝒫(A) ⊆ 𝒫(B), so A ∈ 𝒫(B), meaning A ⊆ B ✓

// (←) Assume A ⊆ B. Show 𝒫(A) ⊆ 𝒫(B).
//   Let X ∈ 𝒫(A) → X ⊆ A ⊆ B → X ⊆ B → X ∈ 𝒫(B) ✓`},{id:28,title:"Exercise 2.1, 28",description:"Show that if A ⊆ C and B ⊆ D, then A × B ⊆ C × D.",code:`// Take any ordered pair (x, y) ∈ A \xd7 B
// By definition: x ∈ A and y ∈ B
// Since A ⊆ C: x ∈ C
// Since B ⊆ D: y ∈ D
// Therefore (x,y) ∈ C \xd7 D
// Since every element of A\xd7B is in C\xd7D → A\xd7B ⊆ C\xd7D ∎`},{id:29,title:"Exercise 2.1, 29",description:`Let A = {a, b, c, d} and B = {y, z}. Find
a) A \xd7 B.
b) B \xd7 A.`,code:`// A \xd7 B = all ordered pairs (a_i, b_j) where a_i ∈ A, b_j ∈ B

// a) A \xd7 B = {(a,y),(a,z),(b,y),(b,z),(c,y),(c,z),(d,y),(d,z)}
//    |A\xd7B| = 4\xd72 = 8

// b) B \xd7 A = {(y,a),(y,b),(y,c),(y,d),(z,a),(z,b),(z,c),(z,d)}
//    Note: (a,y) ≠ (y,a) → A\xd7B ≠ B\xd7A`},{id:30,title:"Exercise 2.1, 30",description:"What is the Cartesian product A × B, where A is the set of courses offered by the mathematics department at a university and B is the set of mathematics professors at this university? Give an example of how this Cartesian product can be used.",code:`// A \xd7 B = {(course, professor) | course ∈ A, professor ∈ B}
// Each pair represents a possible course-professor assignment

// Example use: A\xd7B can represent all possible teaching assignments.
// A relation R ⊆ A\xd7B could show which professor teaches which course.
// e.g., (Calculus I, Dr. Smith) ∈ R means Dr. Smith teaches Calculus I`},{id:31,title:"Exercise 2.1, 31",description:"What is the Cartesian product A × B × C, where A is the set of all airlines and B and C are both the set of all cities in the United States? Give an example of how this Cartesian product can be used.",code:`// A\xd7B\xd7C = {(airline, city1, city2)} = all possible (airline, departure, destination) triples

// Example use: A triple (Delta, NYC, LA) represents a Delta flight from New York to Los Angeles.
// A relation R ⊆ A\xd7B\xd7C shows which routes each airline actually offers.`},{id:32,title:"Exercise 2.1, 32",description:"Suppose that A × B = ∅, where A and B are sets. What can you conclude?",code:`// A\xd7B = ∅ means there are no ordered pairs (a,b) with a∈A and b∈B
// This happens only when A = ∅ OR B = ∅ (or both)

// Conclusion: at least one of A or B must be the empty set`},{id:33,title:"Exercise 2.1, 33",description:"Let A be a set. Show that ∅ × A = A × ∅ = ∅.",code:`// For ∅ \xd7 A: an ordered pair (x,y) ∈ ∅\xd7A requires x ∈ ∅
// But ∅ has no elements → no such x exists → ∅\xd7A = ∅

// For A \xd7 ∅: an ordered pair (x,y) ∈ A\xd7∅ requires y ∈ ∅
// But ∅ has no elements → no such y exists → A\xd7∅ = ∅ ∎`},{id:34,title:"Exercise 2.1, 34",description:`Let A = {a, b, c}, B = {x, y}, and C = {0, 1}. Find
a) A \xd7 B \xd7 C.
b) C \xd7 B \xd7 A.
c) C \xd7 A \xd7 B.
d) B \xd7 B \xd7 B.`,code:`// Each Cartesian product has |A|\xd7|B|\xd7|C| = 3\xd72\xd72 = 12 elements

// a) A\xd7B\xd7C = {(a,x,0),(a,x,1),(a,y,0),(a,y,1),(b,x,0),(b,x,1),
//             (b,y,0),(b,y,1),(c,x,0),(c,x,1),(c,y,0),(c,y,1)}

// b) C\xd7B\xd7A = {(0,x,a),(0,x,b),(0,x,c),(0,y,a),(0,y,b),(0,y,c),
//             (1,x,a),(1,x,b),(1,x,c),(1,y,a),(1,y,b),(1,y,c)}

// c) C\xd7A\xd7B = {(0,a,x),(0,a,y),(0,b,x),(0,b,y),(0,c,x),(0,c,y),
//             (1,a,x),(1,a,y),(1,b,x),(1,b,y),(1,c,x),(1,c,y)}

// d) B\xd7B\xd7B = {(x,x,x),(x,x,y),(x,y,x),(x,y,y),(y,x,x),(y,x,y),(y,y,x),(y,y,y)}
//            2\xb3 = 8 elements`},{id:35,title:"Exercise 2.1, 35",description:`Find A\xb2 if
a) A = {0, 1, 3}.
b) A = {1, 2, a, b}.`,code:`// A\xb2 = A \xd7 A = all ordered pairs (x,y) where x,y ∈ A

// a) A = {0,1,3} → A\xb2 has 3\xb2=9 elements:
// {(0,0),(0,1),(0,3),(1,0),(1,1),(1,3),(3,0),(3,1),(3,3)}

// b) A = {1,2,a,b} → A\xb2 has 4\xb2=16 elements:
// {(1,1),(1,2),(1,a),(1,b),(2,1),(2,2),(2,a),(2,b),
//  (a,1),(a,2),(a,a),(a,b),(b,1),(b,2),(b,a),(b,b)}`},{id:36,title:"Exercise 2.1, 36",description:`Find A\xb3 if
a) A = {a}.
b) A = {0, a}.`,code:`// A\xb3 = A \xd7 A \xd7 A — all ordered triples (x,y,z) where x,y,z ∈ A

// a) A = {a} → only one triple possible:
// A\xb3 = {(a,a,a)}

// b) A = {0,a} → 2\xb3 = 8 triples:
// {(0,0,0),(0,0,a),(0,a,0),(0,a,a),(a,0,0),(a,0,a),(a,a,0),(a,a,a)}`},{id:37,title:"Exercise 2.1, 37",description:"How many different elements does A × B have if A has m elements and B has n elements?",code:`// Each element of A\xd7B is an ordered pair (a,b) with a∈A, b∈B
// For each of m choices for a, there are n choices for b
// By the multiplication rule: |A\xd7B| = m \xd7 n`},{id:38,title:"Exercise 2.1, 38",description:"How many different elements does A × B × C have if A has m elements, B has n elements, and C has p elements?",code:`// Each element is an ordered triple (a,b,c)
// m choices \xd7 n choices \xd7 p choices
// |A\xd7B\xd7C| = m \xd7 n \xd7 p`},{id:39,title:"Exercise 2.1, 39",description:"How many different elements does Aⁿ have when A has m elements and n is a positive integer?",code:`// Aⁿ = A \xd7 A \xd7 ... \xd7 A (n times)
// Each element is an ordered n-tuple
// Applying the multiplication rule n times:
// |Aⁿ| = mⁿ`},{id:40,title:"Exercise 2.1, 40",description:"Show that A × B ≠ B × A, when A and B are nonempty, unless A = B.",code:`// If A ≠ B, then ∃ an element in one not in the other.
// WLOG assume a ∈ A, a ∉ B.
// Pick any b ∈ B.
// (a,b) ∈ A\xd7B but (a,b) ∉ B\xd7A (since a ∉ B)
// So A\xd7B ≠ B\xd7A

// Conversely, if A = B, then A\xd7B = A\xd7A = B\xd7A ✓`},{id:41,title:"Exercise 2.1, 41",description:"Explain why A × B × C and (A × B) × C are not the same.",code:`// A\xd7B\xd7C contains ordered TRIPLES: (a, b, c)
// (A\xd7B)\xd7C contains ordered PAIRS where first element is itself a pair: ((a,b), c)

// These are structurally different objects:
// (a, b, c) ≠ ((a,b), c)
// Example: (1,2,3) vs ((1,2),3)`},{id:42,title:"Exercise 2.1, 42",description:"Explain why (A × B) × (C × D) and A × (B × C) × D are not the same.",code:`// (A\xd7B)\xd7(C\xd7D): elements are pairs of pairs → ((a,b),(c,d))
// A\xd7(B\xd7C)\xd7D: elements are triples where middle is a pair → (a,(b,c),d)

// These have different structure/type:
// ((a,b),(c,d)) ≠ (a,(b,c),d)
// The grouping changes what type each component is`},{id:43,title:"Exercise 2.1, 43",description:`Prove or disprove that if A and B are sets, then 𝒫(A \xd7 B) = 𝒫(A) \xd7 𝒫(B).`,code:`// DISPROVE with a counterexample:
// Let A = {1}, B = {2}
// A\xd7B = {(1,2)}
// 𝒫(A\xd7B) = {∅, {(1,2)}} → 2 elements

// 𝒫(A) = {∅,{1}}, 𝒫(B) = {∅,{2}}
// 𝒫(A)\xd7𝒫(B) = {(∅,∅),(∅,{2}),({1},∅),({1},{2})} → 4 elements

// 2 ≠ 4, so 𝒫(A\xd7B) ≠ 𝒫(A)\xd7𝒫(B) ∎`},{id:44,title:"Exercise 2.1, 44",description:"Prove or disprove that if A, B, and C are nonempty sets and A × B = A × C, then B = C.",code:`// PROVE: This is TRUE for nonempty A.

// Let y ∈ B. Since A is nonempty, pick any a ∈ A.
// Then (a,y) ∈ A\xd7B = A\xd7C → y ∈ C
// So B ⊆ C.

// By symmetric argument, C ⊆ B.
// Therefore B = C ∎

// Note: If A = ∅, then A\xd7B = ∅ = A\xd7C regardless of B,C — so nonemptiness is essential`},{id:45,title:"Exercise 2.1, 45",description:`Translate each of these quantifications into English and determine its truth value.
a) ∀x∈ℝ (x\xb2 ≠ −1)
b) ∃x∈ℤ (x\xb2 = 2)
c) ∀x∈ℤ (x\xb2 > 0)
d) ∃x∈ℝ (x\xb2 = x)`,code:`// a) "For every real number x, x\xb2 ≠ −1"
//    TRUE — squares of real numbers are always ≥ 0

// b) "There exists an integer x such that x\xb2 = 2"
//    FALSE — √2 is irrational, not an integer

// c) "For every integer x, x\xb2 > 0"
//    FALSE — counterexample: x=0, 0\xb2=0, not > 0

// d) "There exists a real number x such that x\xb2 = x"
//    TRUE — x=0: 0\xb2=0 ✓, also x=1: 1\xb2=1 ✓`},{id:46,title:"Exercise 2.1, 46",description:`Translate each of these quantifications into English and determine its truth value.
a) ∃x∈ℝ (x\xb3 = −1)
b) ∃x∈ℤ (x + 1 > x)
c) ∀x∈ℤ (x − 1 ∈ ℤ)
d) ∀x∈ℤ (x\xb2 ∈ ℤ)`,code:`// a) "There exists a real number x such that x\xb3 = −1"
//    TRUE — x = −1: (−1)\xb3 = −1 ✓

// b) "There exists an integer x such that x+1 > x"
//    TRUE — true for ALL integers, e.g. x=5: 6>5 ✓

// c) "For every integer x, x−1 is also an integer"
//    TRUE — integers are closed under subtraction

// d) "For every integer x, x\xb2 is an integer"
//    TRUE — integers are closed under multiplication`},{id:47,title:"Exercise 2.1, 47",description:`Find the truth set of each of these predicates where the domain is the set of integers.
a) P(x): x\xb2 < 3
b) Q(x): x\xb2 > x
c) R(x): 2x + 1 = 0`,code:`// Truth set = all integers making the predicate true

// a) x\xb2 < 3: test integers... (−1)\xb2=1<3 ✓, 0\xb2=0<3 ✓, 1\xb2=1<3 ✓, (\xb12)\xb2=4 ✗
//    Truth set: {−1, 0, 1}

// b) x\xb2 > x: x\xb2−x > 0 → x(x−1) > 0 → x<0 or x>1
//    Truth set: {...,−2,−1} ∪ {2,3,4,...}

// c) 2x+1=0 → x=−1/2, not an integer
//    Truth set: ∅`},{id:48,title:"Exercise 2.1, 48",description:`Find the truth set of each of these predicates where the domain is the set of integers.
a) P(x): x\xb3 ≥ 1
b) Q(x): x\xb2 = 2
c) R(x): x < x\xb2`,code:`// a) x\xb3 ≥ 1: x\xb3 is increasing, x\xb3≥1 when x≥1
//    Truth set: {1, 2, 3, 4, ...} = all positive integers

// b) x\xb2=2 → x=\xb1√2, neither is an integer
//    Truth set: ∅

// c) x < x\xb2 → x\xb2−x > 0 → x(x−1) > 0 → x<0 or x>1
//    Truth set: {...,−2,−1} ∪ {2,3,...}`},{id:49,title:"Exercise 2.1, 49",description:`★ The defining property of an ordered pair is that two ordered pairs are equal if and only if their first elements are equal and their second elements are equal. Surprisingly, instead of taking the ordered pair as a primitive concept, we can construct ordered pairs using basic notions from set theory. Show that if we define the ordered pair (a, b) to be {{a}, {a, b}}, then (a, b) = (c, d) if and only if a = c and b = d.
[Hint: First show that {{a}, {a, b}} = {{c}, {c, d}} if and only if a = c and b = d.]`,code:`// Define (a,b) = {{a},{a,b}}. Must show (a,b)=(c,d) ↔ a=c and b=d.

// (←) If a=c and b=d: {{a},{a,b}} = {{c},{c,d}} trivially ✓

// (→) Assume {{a},{a,b}} = {{c},{c,d}}.
//   Case 1: a ≠ b → {a} and {a,b} are distinct.
//     {a} must match {c} or {c,d} in the right side.
//     If {a}={c,d}: then a=c=d, and {a,b}={c} → b=c=a, contradicting a≠b.
//     So {a}={c} → a=c, then {a,b}={c,d}={a,d} → b=d ✓

//   Case 2: a = b → {a}={a,b}, so both elements of left set are {a}.
//     Right set {{c},{c,d}} must also have both elements equal → {c}={c,d} → c=d.
//     Then a=c and b=d ✓`},{id:50,title:"Exercise 2.1, 50",description:`★ This exercise presents Russell's Paradox. Let S be the set that contains a set x if the set x does not belong to itself, so that S = {x ∣ x ∉ x}.
a) Show the assumption that S is a member of S leads to a contradiction.
b) Show the assumption that S is not a member of S leads to a contradiction.`,code:`// a) Assume S ∈ S.
//    By definition of S: x ∈ S only if x ∉ x.
//    Applying this with x = S: S ∈ S → S ∉ S. Contradiction! ✗

// b) Assume S ∉ S.
//    By definition of S: if x ∉ x then x ∈ S.
//    Applying this with x = S: S ∉ S → S ∈ S. Contradiction! ✗

// Both cases lead to contradiction → S cannot exist as a well-defined set.
// Resolution: restrict comprehension (e.g., ZF set theory axioms)`},{id:51,title:"Exercise 2.1, 51",description:"★ Describe a procedure for listing all the subsets of a finite set.",code:`// Method: Binary representation / Bit-string enumeration

// For a set S with n elements, label elements e₁, e₂, ..., eₙ
// Each subset corresponds to a unique binary string of length n
// Bit i = 1 means eᵢ is included, 0 means excluded

// Procedure:
// 1. List all integers from 0 to 2ⁿ − 1
// 2. Write each in binary (n bits)
// 3. Each binary string maps to a subset

// Example: S = {a,b,c}, n=3
// 000 → ∅
// 001 → {c}
// 010 → {b}
// 011 → {b,c}
// 100 → {a}
// 101 → {a,c}
// 110 → {a,b}
// 111 → {a,b,c}
// Total: 2\xb3 = 8 subsets`},{id:52,title:"Exercise 2.2, 1",description:`Let A be the set of students who live within one mile of school and let B be the set of students who walk to classes. Describe the students in each of these sets.
a) A ∩ B
b) A ∪ B
c) A − B
d) B − A`,code:`// a) A ∩ B: students who BOTH live within one mile AND walk to class

// b) A ∪ B: students who live within one mile OR walk to class (or both)

// c) A − B: students who live within one mile but do NOT walk to class

// d) B − A: students who walk to class but do NOT live within one mile`},{id:53,title:"Exercise 2.2, 2",description:`Suppose that A is the set of sophomores at your school and B is the set of students in discrete mathematics at your school. Express each of these sets in terms of A and B.
a) the set of sophomores taking discrete mathematics in your school
b) the set of sophomores at your school who are not taking discrete mathematics
c) the set of students at your school who either are sophomores or are taking discrete mathematics
d) the set of students at your school who either are not sophomores or are not taking discrete mathematics`,code:`// a) Sophomores AND in discrete math → A ∩ B

// b) Sophomores NOT in discrete math → A − B

// c) Sophomores OR in discrete math → A ∪ B

// d) NOT sophomore OR NOT in discrete math → A ∪ B  (De Morgan: complement of A ∩ B)`},{id:54,title:"Exercise 2.2, 3",description:`Let A = {1, 2, 3, 4, 5} and B = {0, 3, 6}. Find
a) A ∪ B.
b) A ∩ B.
c) A − B.
d) B − A.`,code:`// a) A ∪ B = all elements in A or B = {0, 1, 2, 3, 4, 5, 6}

// b) A ∩ B = elements in both = {3}

// c) A − B = elements in A but not B = {1, 2, 4, 5}

// d) B − A = elements in B but not A = {0, 6}`},{id:55,title:"Exercise 2.2, 4",description:`Let A = {a, b, c, d, e} and B = {a, b, c, d, e, f, g, h}. Find
a) A ∪ B.
b) A ∩ B.
c) A − B.
d) B − A.`,code:`// a) A ∪ B = {a, b, c, d, e, f, g, h}  (B already contains all of A)

// b) A ∩ B = {a, b, c, d, e}  (all of A, since A ⊆ B)

// c) A − B = ∅  (every element of A is in B)

// d) B − A = {f, g, h}  (elements in B not in A)`},{id:56,title:"Exercise 2.2, 5",description:"Prove the complementation law in Table 1 by showing that $\\overline{\\overline{A}} = A$.",code:`// Double complement law: the complement of the complement is the original set

// Let x ∈ A̿ (double complement)
// → x ∉ Ā (definition of complement)
// → x ∈ A (definition of complement)
// So A̿ ⊆ A

// Conversely, let x ∈ A
// → x ∉ Ā → x ∈ A̿
// So A ⊆ A̿

// Therefore A̿ = A ∎`},{id:57,title:"Exercise 2.2, 6",description:`Prove the identity laws in Table 1 by showing that
a) A ∪ ∅ = A.
b) A ∩ U = A.`,code:`// a) A ∪ ∅ = A:
//   x ∈ A∪∅ ↔ x∈A or x∈∅ ↔ x∈A or FALSE ↔ x∈A ✓

// b) A ∩ U = A:
//   x ∈ A∩U ↔ x∈A and x∈U ↔ x∈A and TRUE ↔ x∈A ✓
//   (Every element is in U by definition of universal set)`},{id:58,title:"Exercise 2.2, 7",description:`Prove the domination laws in Table 1 by showing that
a) A ∪ U = U.
b) A ∩ ∅ = ∅.`,code:`// a) A ∪ U = U:
//   A ⊆ U, so A∪U ⊆ U. Also U ⊆ A∪U trivially.
//   Therefore A∪U = U ✓

// b) A ∩ ∅ = ∅:
//   x ∈ A∩∅ requires x∈A AND x∈∅. But nothing is in ∅.
//   So A∩∅ = ∅ ✓`},{id:59,title:"Exercise 2.2, 8",description:`Prove the idempotent laws in Table 1 by showing that
a) A ∪ A = A.
b) A ∩ A = A.`,code:`// a) A ∪ A = A:
//   x ∈ A∪A ↔ x∈A or x∈A ↔ x∈A ✓

// b) A ∩ A = A:
//   x ∈ A∩A ↔ x∈A and x∈A ↔ x∈A ✓

// Both follow directly from idempotence of OR and AND`},{id:60,title:"Exercise 2.2, 9",description:`Prove the complement laws in Table 1 by showing that
a) A ∪ Ā = U.
b) A ∩ Ā = ∅.`,code:`// a) A ∪ Ā = U:
//   For any x∈U: either x∈A or x∉A (i.e., x∈Ā). So every x∈U is in A∪Ā.
//   Also A∪Ā ⊆ U by definition. Therefore A∪Ā = U ✓

// b) A ∩ Ā = ∅:
//   Suppose x ∈ A∩Ā → x∈A and x∈Ā → x∈A and x∉A → contradiction.
//   So no element can be in A∩Ā → A∩Ā = ∅ ✓`},{id:61,title:"Exercise 2.2, 10",description:`Show that
a) A − ∅ = A.
b) ∅ − A = ∅.`,code:`// a) A − ∅ = A:
//   x ∈ A−∅ ↔ x∈A and x∉∅ ↔ x∈A and TRUE ↔ x∈A ✓

// b) ∅ − A = ∅:
//   x ∈ ∅−A requires x∈∅, but ∅ has no elements → ∅−A = ∅ ✓`},{id:62,title:"Exercise 2.2, 11",description:`Let A and B be sets. Prove the commutative laws from Table 1 by showing that
a) A ∪ B = B ∪ A.
b) A ∩ B = B ∩ A.`,code:`// a) A ∪ B = B ∪ A:
//   x ∈ A∪B ↔ x∈A or x∈B ↔ x∈B or x∈A ↔ x ∈ B∪A
//   (OR is commutative) ✓

// b) A ∩ B = B ∩ A:
//   x ∈ A∩B ↔ x∈A and x∈B ↔ x∈B and x∈A ↔ x ∈ B∩A
//   (AND is commutative) ✓`},{id:63,title:"Exercise 2.2, 12",description:"Prove the first absorption law from Table 1 by showing that if A and B are sets, then A ∪ (A ∩ B) = A.",code:`// Show A ∪ (A∩B) = A by double inclusion:

// (⊇) A ⊆ A∪(A∩B) trivially ✓

// (⊆) Let x ∈ A∪(A∩B)
//   Case 1: x∈A → done ✓
//   Case 2: x∈A∩B → x∈A → done ✓
// So A∪(A∩B) ⊆ A

// Therefore A∪(A∩B) = A ∎`},{id:64,title:"Exercise 2.2, 13",description:"Prove the second absorption law from Table 1 by showing that if A and B are sets, then A ∩ (A ∪ B) = A.",code:`// Show A ∩ (A∪B) = A by double inclusion:

// (⊆) Let x ∈ A∩(A∪B) → x∈A ✓

// (⊇) Let x ∈ A → x∈A∪B, so x∈A and x∈A∪B → x∈A∩(A∪B) ✓

// Therefore A∩(A∪B) = A ∎`},{id:65,title:"Exercise 2.2, 14",description:"Find the sets A and B if A − B = {1, 5, 7, 8}, B − A = {2, 10}, and A ∩ B = {3, 6, 9}.",code:`// A − B = elements only in A = {1,5,7,8}
// A ∩ B = elements in both = {3,6,9}
// B − A = elements only in B = {2,10}

// A = (A−B) ∪ (A∩B) = {1,5,7,8} ∪ {3,6,9} = {1,3,5,6,7,8,9}
// B = (B−A) ∪ (A∩B) = {2,10} ∪ {3,6,9} = {2,3,6,9,10}`},{id:66,title:"Exercise 2.2, 15",description:`Prove the second De Morgan law in Table 1 by showing that if A and B are sets, then $\\overline{A \\cup B} = \\bar{A} \\cap \\bar{B}$
a) by showing each side is a subset of the other side.
b) using a membership table.`,code:`// a) Double inclusion proof:
//   (⊆) x ∈ (A∪B)̄ → x∉A∪B → x∉A and x∉B → x∈Ā and x∈B̄ → x∈Ā∩B̄
//   (⊇) x ∈ Ā∩B̄ → x∉A and x∉B → x∉A∪B → x∈(A∪B)̄

// b) Membership table (1=in, 0=not in):
//   A  B | A∪B | (A∪B)̄ | Ā | B̄ | Ā∩B̄
//   1  1 |  1  |   0   | 0 | 0 |  0
//   1  0 |  1  |   0   | 0 | 1 |  0
//   0  1 |  1  |   0   | 1 | 0 |  0
//   0  0 |  0  |   1   | 1 | 1 |  1
//   Columns (A∪B)̄ and Ā∩B̄ are identical ✓`},{id:67,title:"Exercise 2.2, 16",description:`Let A and B be sets. Show that
a) (A ∩ B) ⊆ A.
b) A ⊆ (A ∪ B).
c) A − B ⊆ A.
d) A ∩ (B − A) = ∅.
e) A ∪ (B − A) = A ∪ B.`,code:`// a) x∈A∩B → x∈A and x∈B → x∈A ✓

// b) x∈A → x∈A or x∈B → x∈A∪B ✓

// c) x∈A−B → x∈A and x∉B → x∈A ✓

// d) Suppose x∈A∩(B−A) → x∈A and x∈B−A → x∈A and x∉A → contradiction → ∅ ✓

// e) (⊆) x∈A∪(B−A) → x∈A or (x∈B and x∉A); either way x∈A∪B ✓
//    (⊇) x∈A∪B → x∈A, or x∈B. If x∈B and x∉A then x∈B−A ⊆ A∪(B−A) ✓`},{id:68,title:"Exercise 2.2, 17",description:"Show that if A and B are sets in a universe U then A ⊆ B if and only if $\\bar{B} \\subseteq \\bar{A}$.",code:`// Biconditional — prove both directions:

// (→) Assume A ⊆ B. Let x∈B̄ → x∉B → x∉A (since A⊆B) → x∈Ā ✓

// (←) Assume B̄⊆Ā. Let x∈A.
//   Suppose x∉B → x∈B̄ ⊆ Ā → x∉A, contradiction.
//   So x∈B → A⊆B ✓`},{id:69,title:"Exercise 2.2, 18",description:`Given sets A and B in a universe U, draw the Venn diagrams of each of these sets.
a) A → B = {x ∈ U | x ∈ A → x ∈ B}
b) A ↔ B = {x ∈ U | x ∈ A ↔ x ∈ B}`,code:`// a) A → B = {x | if x∈A then x∈B}
//   Logically: x∉A OR x∈B = Ā ∪ B
//   Shade: everything EXCEPT (A − B), i.e., shade Ā, B, and A∩B
//   The only unshaded region is A−B (in A but not B)

// b) A ↔ B = {x | x∈A iff x∈B}
//   Logically: (A∩B) ∪ (Ā∩B̄)
//   Shade: A∩B (middle overlap) and the region outside both A and B
//   Leave unshaded: A−B and B−A`},{id:70,title:"Exercise 2.2, 19",description:`Show that if A, B, and C are sets, then $\\overline{A \\cap B \\cap C} = \\bar{A} \\cup \\bar{B} \\cup \\bar{C}$
a) by showing each side is a subset of the other side.
b) using a membership table.`,code:`// a) Double inclusion:
//   x ∈ (A∩B∩C)̄ → x∉A∩B∩C → x∉A or x∉B or x∉C → x∈Ā∪B̄∪C̄ ✓
//   x ∈ Ā∪B̄∪C̄ → x∉A or x∉B or x∉C → x∉A∩B∩C → x∈(A∩B∩C)̄ ✓

// b) Membership table: enumerate all 8 combinations of A,B,C (0/1)
//   Compute A∩B∩C and its complement, then Ā∪B̄∪C̄
//   The two columns will be identical in all 8 rows
//   Key rows: (1,1,1)→complement=0, Ā∪B̄∪C̄=0 ✓; all others→1 ✓`},{id:71,title:"Exercise 2.2, 20",description:`Let A, B, and C be sets. Show that
a) (A ∪ B) ⊆ (A ∪ B ∪ C).
b) (A ∩ B ∩ C) ⊆ (A ∩ B).
c) (A − B) − C ⊆ A − C.
d) (A − C) ∩ (C − B) = ∅.
e) (B − A) ∪ (C − A) = (B ∪ C) − A.`,code:`// a) x∈A∪B → x∈A or x∈B → x∈A∪B∪C ✓

// b) x∈A∩B∩C → x∈A and x∈B and x∈C → x∈A∩B ✓

// c) x∈(A−B)−C → x∈A, x∉B, x∉C → x∈A and x∉C → x∈A−C ✓

// d) Suppose x∈(A−C)∩(C−B) → x∉C (from A−C) and x∈C (from C−B) → contradiction → ∅ ✓

// e) x∈(B−A)∪(C−A) ↔ (x∈B or x∈C) and x∉A ↔ x∈(B∪C)−A ✓`},{id:72,title:"Exercise 2.2, 21",description:`Show that if A and B are sets, then
a) A − B = A ∩ $\\bar{B}$.
b) (A ∩ B) ∪ (A ∩ $\\bar{B}$) = A.`,code:`// a) A − B = A ∩ B̄:
//   x∈A−B ↔ x∈A and x∉B ↔ x∈A and x∈B̄ ↔ x∈A∩B̄ ✓

// b) (A∩B) ∪ (A∩B̄) = A:
//   Use distributive law: A∩(B∪B̄) = A∩U = A ✓
//   Key insight: B∪B̄ = U (complement law)`},{id:73,title:"Exercise 2.2, 22",description:`Show that if A and B are sets with A ⊆ B, then
a) A ∪ B = B.
b) A ∩ B = A.`,code:`// a) A∪B = B when A⊆B:
//   (⊆) x∈A∪B → x∈A or x∈B. If x∈A then x∈B (since A⊆B). So x∈B ✓
//   (⊇) x∈B → x∈A∪B trivially ✓

// b) A∩B = A when A⊆B:
//   (⊆) x∈A∩B → x∈A ✓
//   (⊇) x∈A → x∈B (since A⊆B) → x∈A∩B ✓`},{id:74,title:"Exercise 2.2, 23",description:"Prove the first associative law from Table 1 by showing that if A, B, and C are sets, then A ∪ (B ∪ C) = (A ∪ B) ∪ C.",code:`// x ∈ A∪(B∪C)
// ↔ x∈A or (x∈B or x∈C)
// ↔ (x∈A or x∈B) or x∈C   [associativity of logical OR]
// ↔ x∈(A∪B)∪C ✓

// Associativity of ∪ mirrors associativity of logical OR`},{id:75,title:"Exercise 2.2, 24",description:"Prove the second associative law from Table 1 by showing that if A, B, and C are sets, then A ∩ (B ∩ C) = (A ∩ B) ∩ C.",code:`// x ∈ A∩(B∩C)
// ↔ x∈A and (x∈B and x∈C)
// ↔ (x∈A and x∈B) and x∈C   [associativity of logical AND]
// ↔ x∈(A∩B)∩C ✓

// Associativity of ∩ mirrors associativity of logical AND`},{id:76,title:"Exercise 2.2, 25",description:"Prove the first distributive law from Table 1 by showing that if A, B, and C are sets, then A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C).",code:`// x ∈ A∪(B∩C)
// ↔ x∈A or (x∈B and x∈C)
// ↔ (x∈A or x∈B) and (x∈A or x∈C)   [distributivity of OR over AND]
// ↔ x∈(A∪B) and x∈(A∪C)
// ↔ x∈(A∪B)∩(A∪C) ✓`},{id:77,title:"Exercise 2.2, 26",description:"Let A, B, and C be sets. Show that (A − B) − C = (A − C) − (B − C).",code:`// Use A−B = A∩B̄ to convert to intersections:

// (A−B)−C = (A∩B̄)∩C̄ = A∩B̄∩C̄

// (A−C)−(B−C) = (A∩C̄) ∩ (B∩C̄)̄
//             = (A∩C̄) ∩ (B̄∪C)      [De Morgan]
//             = (A∩C̄∩B̄) ∪ (A∩C̄∩C)  [distributive]
//             = (A∩B̄∩C̄) ∪ ∅        [C̄∩C = ∅]
//             = A∩B̄∩C̄  ✓`},{id:78,title:"Exercise 2.2, 27",description:`Let A = {0, 2, 4, 6, 8, 10}, B = {0, 1, 2, 3, 4, 5, 6}, and C = {4, 5, 6, 7, 8, 9, 10}. Find
a) A ∩ B ∩ C.
b) A ∪ B ∪ C.
c) (A ∪ B) ∩ C.
d) (A ∩ B) ∪ C.`,code:`// A = {0,2,4,6,8,10}, B = {0,1,2,3,4,5,6}, C = {4,5,6,7,8,9,10}

// a) A∩B = {0,2,4,6}; then ∩C = {4,6}
//    Answer: {4, 6}

// b) A∪B = {0,1,2,3,4,5,6,8,10}; then ∪C = {0,1,2,3,4,5,6,7,8,9,10}
//    Answer: {0,1,2,3,4,5,6,7,8,9,10}

// c) A∪B = {0,1,2,3,4,5,6,8,10}; then ∩C = {4,5,6,8,10}
//    Answer: {4, 5, 6, 8, 10}

// d) A∩B = {0,2,4,6}; then ∪C = {0,2,4,5,6,7,8,9,10}
//    Answer: {0, 2, 4, 5, 6, 7, 8, 9, 10}`},{id:79,title:"Exercise 2.2, 28",description:`Draw the Venn diagrams for each of these combinations of the sets A, B, and C.
a) A ∩ (B ∪ C)
b) A ∩ B ∩ C
c) (A − B) ∪ (A − C) ∪ (B − C)`,code:`// Use a 3-circle Venn diagram with 7 regions.

// a) A ∩ (B∪C): shade all parts of A that overlap with B or C
//    = A∩B, A∩C, and A∩B∩C (everything in A except A only)

// b) A ∩ B ∩ C: shade only the center region (all three overlap)

// c) (A−B)∪(A−C)∪(B−C) = A∪B−(A∩B∩C) by simplification
//    Shade: A-only, B-only, A∩C-only, A∩B-only, B∩C... analyze each region
//    Key: every region EXCEPT C-only and the center (A∩B∩C) is shaded`},{id:80,title:"Exercise 2.2, 29",description:`Draw the Venn diagrams for each of these combinations of the sets A, B, and C.
a) A ∩ (B − C)
b) (A ∩ B) ∪ (A ∩ C)
c) $\\overline{(A ∩ B)} \\cup \\overline{(A ∩ C)}$`,code:`// a) A∩(B−C): elements in A AND in B but NOT in C
//    Shade the region: A∩B minus the center (A∩B∩C)

// b) (A∩B)∪(A∩C) = A∩(B∪C) by distributive law
//    Shade: all of A that overlaps B or C (same as 28a)

// c) (A∩B)̄ ∪ (A∩C)̄ = (Ā∪B̄)∪(Ā∪C̄) by De Morgan
//    = Ā∪B̄∪C̄ = (A∩B∩C)̄
//    Shade: everything EXCEPT the center region (A∩B∩C)`},{id:81,title:"Exercise 2.2, 30",description:`Draw the Venn diagrams for each of these combinations of the sets A, B, C, and D.
a) (A ∩ B) ∪ (C ∩ D)
b) A ∪ B ∪ C ∪ D
c) A − (B ∩ C ∩ D)`,code:`// Use a 4-set Venn diagram (ellipses arranged to show all 15 non-empty regions + outside)

// a) (A∩B)∪(C∩D): shade all regions where both A,B overlap, plus all where C,D overlap

// b) A∪B∪C∪D: shade everything inside any of the four sets (all 15 regions)

// c) A−(B∩C∩D): shade all of A EXCEPT the part where B, C, and D all overlap with A
//    = entire A region minus A∩B∩C∩D`},{id:82,title:"Exercise 2.2, 31",description:`What can you say about the sets A and B if we know that
a) A ∪ B = A?
b) A ∩ B = A?
c) A − B = A?
d) A ∩ B = B ∩ A?
e) A − B = B − A?`,code:`// a) A∪B = A → B ⊆ A (all of B is already in A)

// b) A∩B = A → A ⊆ B (all of A is in B)

// c) A−B = A → A∩B = ∅ (A and B are disjoint)

// d) A∩B = B∩A → always true for any sets (commutativity); no special conclusion

// e) A−B = B−A → A = B
//    (elements only in A = elements only in B → both sides must be empty → A=B)`},{id:83,title:"Exercise 2.2, 32",description:`Can you conclude that A = B if A, B, and C are sets such that
a) A ∪ C = B ∪ C?
b) A ∩ C = B ∩ C?
c) A ∪ C = B ∪ C and A ∩ C = B ∩ C?`,code:`// a) NO — counterexample: A={1}, B={1,2}, C={2}
//    A∪C = {1,2} = B∪C but A ≠ B

// b) NO — counterexample: A={1}, B={2}, C=∅
//    A∩C = ∅ = B∩C but A ≠ B

// c) YES — if both A∪C=B∪C and A∩C=B∩C, then A=B
//    Proof: A = A∩(A∪C) = A∩(B∪C) = (A∩B)∪(A∩C) = (A∩B)∪(B∩C) = B∩(A∪C) = B∩(B∪C) = B ✓`},{id:84,title:"Exercise 2.2, 33",description:"Let A and B be subsets of a universal set U. Show that A ⊆ B if and only if $\\bar{B} ⊆ \\bar{A}$.",code:`// (→) Assume A⊆B. Let x∈B̄ → x∉B → x∉A (since A⊆B) → x∈Ā. So B̄⊆Ā ✓

// (←) Assume B̄⊆Ā. Let x∈A.
//    Suppose x∉B → x∈B̄ ⊆ Ā → x∉A, contradiction.
//    So x∈B → A⊆B ✓

// This is the contrapositive law applied to sets`},{id:85,title:"Exercise 2.2, 34",description:"Let A, B, and C be sets. Use the identity A − B = A ∩ $\\bar{B}$ and the identities from Table 1 to show that (A − B) ∩ (B − C) ∩ (A − C) = ∅.",code:`// Convert using A−B = A∩B̄:
// (A∩B̄) ∩ (B∩C̄) ∩ (A∩C̄)
// = A ∩ B̄ ∩ B ∩ C̄ ∩ A ∩ C̄   [associative + commutative]
// = A ∩ (B̄∩B) ∩ C̄ ∩ A        [regroup]
// = A ∩ ∅ ∩ C̄ ∩ A             [complement law: B̄∩B = ∅]
// = ∅ ✓`},{id:86,title:"Exercise 2.2, 35",description:`Let A, B, and C be sets. Use the identities in Table 1 to show that (A ∪ B) ∩ (B ∪ C) ∩ (A ∪ C) = A ∩ B ∩ C.

Wait — the correct statement is: show (A ∪ B) ∩ (B ∪ C) ∩ (A ∪ C) equals (A ∩ B) ∪ (A ∩ C) ∪ (B ∩ C). Use set identities to simplify step by step.`,code:`// (A∪B)∩(B∪C)∩(A∪C)
// Step 1: (A∪B)∩(B∪C) = B∪(A∩C)  [distributive]
// Step 2: [B∪(A∩C)]∩(A∪C)
//       = [B∩(A∪C)] ∪ [(A∩C)∩(A∪C)]  [distributive]
//       = (B∩A)∪(B∩C) ∪ (A∩C)         [absorption: (A∩C)⊆(A∪C)]
//       = (A∩B) ∪ (B∩C) ∪ (A∩C) ✓`},{id:87,title:"Exercise 2.2, 36",description:`Prove or disprove that for all sets A, B, and C, we have
a) A \xd7 (B ∪ C) = (A \xd7 B) ∪ (A \xd7 C).
b) A \xd7 (B ∩ C) = (A \xd7 B) ∩ (A \xd7 C).`,code:`// a) PROVE: A\xd7(B∪C) = (A\xd7B)∪(A\xd7C)
//   (x,y) ∈ A\xd7(B∪C) ↔ x∈A and (y∈B or y∈C)
//   ↔ (x∈A and y∈B) or (x∈A and y∈C)
//   ↔ (x,y)∈A\xd7B or (x,y)∈A\xd7C
//   ↔ (x,y)∈(A\xd7B)∪(A\xd7C) ✓

// b) PROVE: A\xd7(B∩C) = (A\xd7B)∩(A\xd7C)
//   (x,y) ∈ A\xd7(B∩C) ↔ x∈A and y∈B and y∈C
//   ↔ (x∈A and y∈B) and (x∈A and y∈C)
//   ↔ (x,y)∈A\xd7B and (x,y)∈A\xd7C
//   ↔ (x,y)∈(A\xd7B)∩(A\xd7C) ✓`},{id:88,title:"Exercise 2.2, 37",description:`Prove or disprove that for all sets A, B, and C, we have
a) A \xd7 (B − C) = (A \xd7 B) − (A \xd7 C).
b) $\\overline{A \xd7 (B ∪ C)} = \\overline{A} \xd7 \\overline{(B ∪ C)}$.`,code:`// a) PROVE: A\xd7(B−C) = (A\xd7B)−(A\xd7C)
//   (x,y)∈A\xd7(B−C) ↔ x∈A and y∈B and y∉C
//   ↔ (x∈A and y∈B) and NOT(x∈A and y∈C)
//   ↔ (x,y)∈A\xd7B and (x,y)∉A\xd7C
//   ↔ (x,y)∈(A\xd7B)−(A\xd7C) ✓

// b) DISPROVE: complements of Cartesian products don't distribute this way
//   The complement of A\xd7(B∪C) is taken within some universal U\xd7U
//   Ā\xd7(B∪C)̄ only covers pairs where BOTH components are in complements
//   But the complement also includes (a, not-B∪C) and (not-a, b∪c) pairs
//   These are missed by Ā\xd7(B∪C)̄ → statement is FALSE`},{id:89,title:"Exercise 2.2, 38",description:"Find the symmetric difference of {1, 3, 5} and {1, 2, 3}.",code:`// A ⊕ B = elements in A or B but NOT both

// A = {1,3,5}, B = {1,2,3}
// A∩B = {1,3} (in both — exclude these)
// A only: {5}
// B only: {2}

// A ⊕ B = {2, 5}`},{id:90,title:"Exercise 2.2, 39",description:"Find the symmetric difference of the set of computer science majors at a school and the set of mathematics majors at this school.",code:`// Let CS = set of CS majors, M = set of math majors
// CS ⊕ M = students who major in CS or math, but NOT both (no double majors)

// = (CS − M) ∪ (M − CS)
// = students who are exclusively CS majors OR exclusively math majors`},{id:91,title:"Exercise 2.2, 40",description:"Draw a Venn diagram for the symmetric difference of the sets A and B.",code:`// A ⊕ B = (A−B) ∪ (B−A)
// In the Venn diagram of A and B (two overlapping circles):

// Shade: left crescent (A only) and right crescent (B only)
// Leave unshaded: the middle overlap (A∩B) and the outside (neither)
// This is the "XOR" region`},{id:92,title:"Exercise 2.2, 41",description:"Show that A ⊕ B = (A ∪ B) − (A ∩ B).",code:`// (A∪B) − (A∩B) = (A∪B) ∩ (A∩B)̄
//               = (A∪B) ∩ (Ā∪B̄)         [De Morgan]
//               = (A∩Ā)∪(A∩B̄)∪(B∩Ā)∪(B∩B̄)  [distributive]
//               = ∅ ∪ (A∩B̄) ∪ (B∩Ā) ∪ ∅
//               = (A−B) ∪ (B−A)
//               = A ⊕ B ✓`},{id:93,title:"Exercise 2.2, 42",description:"Show that A ⊕ B = (A − B) ∪ (B − A).",code:`// This is the DEFINITION of symmetric difference:
// A ⊕ B contains elements in A or B but not both

// (A−B) = elements in A not in B
// (B−A) = elements in B not in A
// Their union = all elements in exactly one of A, B
// = A ⊕ B ✓

// To be rigorous: show (A−B)∪(B−A) has no element in both A and B,
// and includes every element that is in exactly one of them`},{id:94,title:"Exercise 2.2, 43",description:`Show that if A is a subset of a universal set U, then
a) A ⊕ A = ∅.
b) A ⊕ ∅ = A.
c) A ⊕ U = $\\bar{A}$.
d) A ⊕ $\\bar{A}$ = U.`,code:`// a) A⊕A = (A−A)∪(A−A) = ∅∪∅ = ∅ ✓

// b) A⊕∅ = (A−∅)∪(∅−A) = A∪∅ = A ✓

// c) A⊕U = (A−U)∪(U−A) = ∅∪Ā = Ā ✓

// d) A⊕Ā = (A−Ā)∪(Ā−A) = A∪Ā = U ✓`},{id:95,title:"Exercise 2.2, 44",description:`Show that if A and B are sets, then
a) A ⊕ B = B ⊕ A.
b) (A ⊕ B) ⊕ B = A.`,code:`// a) A⊕B = (A−B)∪(B−A) = (B−A)∪(A−B) = B⊕A ✓ (union is commutative)

// b) (A⊕B)⊕B:
//   Use A⊕B = (A∩B̄)∪(B∩Ā)
//   Then ⊕B means XOR with B again
//   Elements in exactly one of {A⊕B, B}:
//   (A⊕B)⊕B = A∩(B⊕B)̄... 
//   Simpler: think of XOR as addition mod 2 → (A⊕B)⊕B = A⊕(B⊕B) = A⊕∅ = A ✓`},{id:96,title:"Exercise 2.2, 45",description:"What can you say about the sets A and B if A ⊕ B = A?",code:`// A⊕B = A means (A−B)∪(B−A) = A

// For this to hold, B−A must be empty (otherwise A⊕B would have elements outside A)
// AND A−B = A (meaning A∩B = ∅)

// So: B∩A = ∅ → B and A are DISJOINT (no common elements)
// Also B⊆A must be false (B−A=∅) → B=∅ OR B⊆A... wait:
// B−A=∅ means B⊆A, but A∩B=∅ and B⊆A → B=∅

// Conclusion: B = ∅`},{id:97,title:"Exercise 2.2, 46",description:"★ Determine whether the symmetric difference is associative; that is, if A, B, and C are sets, does it follow that A ⊕ (B ⊕ C) = (A ⊕ B) ⊕ C?",code:`// YES — symmetric difference IS associative.

// Key insight: model membership with bit values (1=in, 0=not in)
// A⊕B corresponds to XOR (addition mod 2) of membership bits

// XOR is associative: a⊕(b⊕c) = (a⊕b)⊕c for bits a,b,c
// Since this holds for every element independently, it holds for sets ✓

// Alternatively: verify using membership tables (8 rows for A,B,C)
// Both sides produce identical columns`},{id:98,title:"Exercise 2.2, 47",description:"★ Suppose that A, B, and C are sets such that A ⊕ C = B ⊕ C. Must it be the case that A = B?",code:`// YES — symmetric difference has the cancellation property.

// Proof: A⊕C = B⊕C
// XOR both sides with C:
// (A⊕C)⊕C = (B⊕C)⊕C
// A⊕(C⊕C) = B⊕(C⊕C)   [associativity]
// A⊕∅ = B⊕∅             [C⊕C=∅]
// A = B ✓`},{id:99,title:"Exercise 2.2, 48",description:"If A, B, C, and D are sets, does it follow that (A ⊕ B) ⊕ (C ⊕ D) = (A ⊕ C) ⊕ (B ⊕ D)?",code:`// YES — both sides are equal.

// Use associativity and commutativity of ⊕ (XOR):
// (A⊕B)⊕(C⊕D)
// = A⊕B⊕C⊕D        [associativity, remove parens]
// = A⊕C⊕B⊕D        [commutativity: swap B and C]
// = (A⊕C)⊕(B⊕D) ✓`},{id:100,title:"Exercise 2.2, 49",description:"If A, B, C, and D are sets, does it follow that (A ⊕ B) ⊕ (C ⊕ D) = (A ⊕ D) ⊕ (B ⊕ C)?",code:`// YES — both sides equal A⊕B⊕C⊕D.

// (A⊕B)⊕(C⊕D) = A⊕B⊕C⊕D
// (A⊕D)⊕(B⊕C) = A⊕D⊕B⊕C = A⊕B⊕C⊕D  [commutativity]
// Both equal the same expression ✓`},{id:101,title:"Exercise 2.2, 50",description:"Show that if A and B are finite sets, then A ∪ B is a finite set.",code:`// Since A is finite, it has m elements; B is finite with n elements.
// A∪B ⊆ A∪B (trivially), and every element of A∪B is in A or B.
// |A∪B| ≤ |A| + |B| = m + n (finite)
// A set with a finite upper bound on elements is finite.
// Therefore A∪B is finite ✓`},{id:102,title:"Exercise 2.2, 51",description:"Show that if A is an infinite set, then whenever B is a set, A ∪ B is also an infinite set.",code:`// Proof by contradiction:
// Suppose A∪B is finite.
// Then every subset of A∪B is also finite.
// But A ⊆ A∪B, so A would be finite — contradicting that A is infinite.
// Therefore A∪B must be infinite ✓`},{id:103,title:"Exercise 2.2, 52",description:`★ Show that if A, B, and C are sets, then
|A ∪ B ∪ C| = |A| + |B| + |C| − |A ∩ B| − |A ∩ C| − |B ∩ C| + |A ∩ B ∩ C|.
(This is a special case of the inclusion–exclusion principle.)`,code:`// Strategy: write A∪B∪C as disjoint regions, count each once.

// |A∪B| = |A| + |B| − |A∩B|  (basic inclusion-exclusion for 2 sets)

// Apply again with C:
// |A∪B∪C| = |A∪B| + |C| − |(A∪B)∩C|
//          = |A∪B| + |C| − |A∩C| − |B∩C| + |A∩B∩C|  [distributive]
//          = |A|+|B|−|A∩B| + |C| − |A∩C| − |B∩C| + |A∩B∩C| ✓

// Each element in exactly k of the sets gets counted: C(k,1)−C(k,2)+C(k,3) = 1 ✓`},{id:104,title:"Exercise 2.2, 53",description:`Let Aᵢ = {1, 2, 3, … , i} for i = 1, 2, 3, …. Find
a) ⋃ⁿᵢ₌₁ Aᵢ.
b) ⋂ⁿᵢ₌₁ Aᵢ.`,code:`// Aᵢ = {1, 2, ..., i} — each set grows as i increases
// A₁⊆A₂⊆A₃⊆...⊆Aₙ (nested/increasing sets)

// a) ⋃Aᵢ = largest set = Aₙ = {1, 2, 3, ..., n}

// b) ⋂Aᵢ = smallest set = A₁ = {1}`},{id:105,title:"Exercise 2.2, 54",description:`Let Aᵢ = {…, −2, −1, 0, 1, … , i}. Find
a) ⋃ⁿᵢ₌₁ Aᵢ.
b) ⋂ⁿᵢ₌₁ Aᵢ.`,code:`// Aᵢ = all integers ≤ i (extends infinitely to the left)
// A₁⊆A₂⊆...⊆Aₙ (still nested/increasing on the right side)

// a) ⋃Aᵢ = Aₙ = {..., −2, −1, 0, 1, ..., n}  (largest upper bound is n)

// b) ⋂Aᵢ = A₁ = {..., −2, −1, 0, 1}  (smallest upper bound is 1)`},{id:106,title:"Exercise 2.2, 55",description:`Let Aᵢ be the set of all nonempty bit strings of length not exceeding i. Find
a) ⋃ⁿᵢ₌₁ Aᵢ.
b) ⋂ⁿᵢ₌₁ Aᵢ.`,code:`// Aᵢ = all bit strings of length 1 to i
// A₁⊆A₂⊆...⊆Aₙ (each Aᵢ adds longer strings)

// a) ⋃Aᵢ = Aₙ = all nonempty bit strings of length 1 to n

// b) ⋂Aᵢ = A₁ = {0, 1}  (only strings of length 1 are in every Aᵢ)`},{id:107,title:"Exercise 2.2, 56",description:`Find ⋃∞ᵢ₌₁ Aᵢ and ⋂∞ᵢ₌₁ Aᵢ if for every positive integer i,
a) Aᵢ = {i, i+1, i+2, …}.
b) Aᵢ = {0, i}.
c) Aᵢ = (0, i), the set of real x with 0 < x < i.
d) Aᵢ = (i, ∞), the set of real x with x > i.`,code:`// a) Aᵢ = {i, i+1, ...} — decreasing sets (A₁⊇A₂⊇...)
//   ⋃Aᵢ = A₁ = {1,2,3,...} = ℤ⁺
//   ⋂Aᵢ = ∅  (no integer is in ALL Aᵢ, since i eventually exceeds any fixed integer)

// b) Aᵢ = {0,i}
//   ⋃Aᵢ = {0,1,2,3,...} = {0}∪ℤ⁺
//   ⋂Aᵢ = {0}  (0 is in every Aᵢ; no positive integer is in all sets)

// c) Aᵢ = (0,i) — increasing intervals
//   ⋃Aᵢ = (0,∞)  (union grows without bound)
//   ⋂Aᵢ = A₁ = (0,1)  (smallest interval)

// d) Aᵢ = (i,∞) — decreasing intervals
//   ⋃Aᵢ = A₁ = (1,∞)
//   ⋂Aᵢ = ∅  (for any real x, x ≤ i for some i, so x ∉ Aᵢ)`},{id:108,title:"Exercise 2.2, 57",description:`Find ⋃∞ᵢ₌₁ Aᵢ and ⋂∞ᵢ₌₁ Aᵢ if for every positive integer i,
a) Aᵢ = {−i, −i+1, …, i−1, i}.
b) Aᵢ = {−i, i}.
c) Aᵢ = [−i, i], the set of real x with −i ≤ x ≤ i.
d) Aᵢ = [i, ∞), the set of real x with x ≥ i.`,code:`// a) Aᵢ = all integers from −i to i — increasing sets
//   ⋃Aᵢ = ℤ (all integers)
//   ⋂Aᵢ = A₁ = {−1, 0, 1}

// b) Aᵢ = {−i, i} — two-element sets
//   ⋃Aᵢ = {...,−3,−2,−1,1,2,3,...} = ℤ  {0}
//   ⋂Aᵢ = ∅  (no value is in every {−i,i} for all i)

// c) Aᵢ = [−i,i] — increasing closed intervals
//   ⋃Aᵢ = (−∞,∞) = ℝ
//   ⋂Aᵢ = [−1,1]

// d) Aᵢ = [i,∞) — decreasing intervals
//   ⋃Aᵢ = [1,∞)
//   ⋂Aᵢ = ∅  (for any real x, x < i for large enough i)`},{id:109,title:"Exercise 2.2, 58",description:`Suppose that the universal set is U = {1,2,3,4,5,6,7,8,9,10}. Express each of these sets with bit strings where the ith bit is 1 if i is in the set and 0 otherwise.
a) {3, 4, 5}
b) {1, 3, 6, 10}
c) {2, 3, 4, 7, 8, 9}`,code:`// Bit positions 1–10. Bit i = 1 if i ∈ set, else 0.

// a) {3,4,5}: positions 3,4,5 are 1
//    00 1110 0000

// b) {1,3,6,10}: positions 1,3,6,10 are 1
//    10 1001 0001

// c) {2,3,4,7,8,9}: positions 2,3,4,7,8,9 are 1
//    01 1100 1110`},{id:110,title:"Exercise 2.2, 59",description:`Using the same universal set as in the last exercise, find the set specified by each of these bit strings.
a) 11 1100 1111
b) 01 0111 1000
c) 10 0000 0001`,code:`// Read bit string left to right: position i has 1 → i is in set

// a) 11 1100 1111 → positions 1,2,3,4,7,8,9,10 are 1
//    {1, 2, 3, 4, 7, 8, 9, 10}

// b) 01 0111 1000 → positions 2,4,5,6,7 are 1
//    {2, 4, 5, 6, 7}

// c) 10 0000 0001 → positions 1,10 are 1
//    {1, 10}`},{id:111,title:"Exercise 2.2, 60",description:`What subsets of a finite universal set do these bit strings represent?
a) the string with all zeros
b) the string with all ones`,code:`// a) All zeros: no position is 1 → no element is included
//    Represents: ∅ (the empty set)

// b) All ones: every position is 1 → every element is included
//    Represents: U (the universal set)`},{id:112,title:"Exercise 2.2, 61",description:"What is the bit string corresponding to the difference of two sets?",code:`// A − B = elements in A but NOT in B
// In bits: bit i of (A−B) = 1 iff bit i of A is 1 AND bit i of B is 0

// Bit operation: A AND (NOT B)
// i.e., bitwise AND of A's bit string with the complement of B's bit string`},{id:113,title:"Exercise 2.2, 62",description:"What is the bit string corresponding to the symmetric difference of two sets?",code:`// A ⊕ B = elements in exactly one of A or B
// In bits: bit i of (A⊕B) = 1 iff bits differ (one is 1, other is 0)

// Bit operation: A XOR B
// i.e., bitwise exclusive OR of the two bit strings`},{id:114,title:"Exercise 2.2, 63",description:`Show how bitwise operations on bit strings can be used to find these combinations of A = {a,b,c,d,e}, B = {b,c,d,g,p,t,v}, C = {c,e,i,o,u,x,y,z}, and D = {d,e,h,i,n,o,t,u,x,y}.
a) A ∪ B
b) A ∩ B
c) (A ∪ D) ∩ (B ∪ C)
d) A ∪ B ∪ C ∪ D`,code:`// Universal set U = {a,b,c,d,e,g,h,i,n,o,p,t,u,v,x,y,z} (all letters that appear)
// Represent each set as a bit string over U

// A: 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0  (a,b,c,d,e)
// B: 0 1 1 1 0 1 0 0 0 0 1 1 0 1 0 0 0  (b,c,d,g,p,t,v)
// C: 0 0 1 0 1 0 0 1 0 1 0 0 1 0 1 1 1  (c,e,i,o,u,x,y,z)
// D: 0 0 0 1 1 0 1 1 1 1 0 1 1 0 1 1 0  (d,e,h,i,n,o,t,u,x,y)

// a) A∪B = A OR B  (bitwise OR)   → {a,b,c,d,e,g,p,t,v}
// b) A∩B = A AND B (bitwise AND)  → {b,c,d}
// c) (A∪D)∩(B∪C): compute A OR D, compute B OR C, then AND the results
// d) A∪B∪C∪D = A OR B OR C OR D  → all letters that appear in any set`},{id:115,title:"Exercise 2.2, 64",description:"How can the union and intersection of n sets that all are subsets of the universal set U be found using bit strings?",code:`// Represent each set as a bit string of length |U|

// Union of n sets:
//   Take bitwise OR of all n bit strings
//   Bit i = 1 if element i is in ANY of the sets

// Intersection of n sets:
//   Take bitwise AND of all n bit strings
//   Bit i = 1 only if element i is in ALL of the sets`},{id:116,title:"Exercise 2.2, 65",description:`Find the successors of the following sets.
(The successor of set A is A ∪ {A}.)
a) {1, 2, 3}
b) ∅
c) {∅}
d) {∅, {∅}}`,code:`// Successor of A = A ∪ {A} (add A itself as a new element)

// a) {1,2,3} ∪ {{1,2,3}} = {1, 2, 3, {1,2,3}}

// b) ∅ ∪ {∅} = {∅}

// c) {∅} ∪ {{∅}} = {∅, {∅}}

// d) {∅,{∅}} ∪ {{∅,{∅}}} = {∅, {∅}, {∅,{∅}}}`},{id:117,title:"Exercise 2.2, 66",description:"How many elements does the successor of a set with n elements have?",code:`// Successor of A = A ∪ {A}
// A has n elements.
// {A} is a new element (the set A itself) not already in A
// (A set cannot contain itself — well-foundedness)
// So A and {A} contribute n + 1 distinct elements.

// Answer: n + 1`},{id:118,title:"Exercise 2.2, 67",description:`Let A and B be the multisets {3\xb7a, 2\xb7b, 1\xb7c} and {2\xb7a, 3\xb7b, 4\xb7d}, respectively. Find
a) A ∪ B.
b) A ∩ B.
c) A − B.
d) B − A.
e) A + B.`,code:`// Multiset operations use MAX, MIN, and subtraction of multiplicities

// A = {3\xb7a, 2\xb7b, 1\xb7c, 0\xb7d}, B = {2\xb7a, 3\xb7b, 0\xb7c, 4\xb7d}

// a) A∪B = MAX of each: {max(3,2)\xb7a, max(2,3)\xb7b, max(1,0)\xb7c, max(0,4)\xb7d}
//        = {3\xb7a, 3\xb7b, 1\xb7c, 4\xb7d}

// b) A∩B = MIN of each: {min(3,2)\xb7a, min(2,3)\xb7b, min(1,0)\xb7c, min(0,4)\xb7d}
//        = {2\xb7a, 2\xb7b, 0\xb7c, 0\xb7d} = {2\xb7a, 2\xb7b}

// c) A−B = max(mA−mB, 0): {max(3−2,0)\xb7a, max(2−3,0)\xb7b, max(1−0,0)\xb7c, max(0−4,0)\xb7d}
//        = {1\xb7a, 0\xb7b, 1\xb7c, 0\xb7d} = {1\xb7a, 1\xb7c}

// d) B−A = {max(2−3,0)\xb7a, max(3−2,0)\xb7b, max(0−1,0)\xb7c, max(4−0,0)\xb7d}
//        = {0\xb7a, 1\xb7b, 0\xb7c, 4\xb7d} = {1\xb7b, 4\xb7d}

// e) A+B = SUM of each: {(3+2)\xb7a, (2+3)\xb7b, (1+0)\xb7c, (0+4)\xb7d}
//        = {5\xb7a, 5\xb7b, 1\xb7c, 4\xb7d}`},{id:119,title:"Exercise 2.2, 68",description:`Assume that a ∈ A, where A is a set. Which of these statements are true and which are false, where all sets shown are ordinary sets (not multisets)?
a) {a, a} ∪ {a, a, a} = {a, a, a, a, a}
b) {a, a} ∪ {a, a, a} = {a}
c) {a, a} ∩ {a, a, a} = {a, a}
d) {a, a} ∩ {a, a, a} = {a}
e) {a, a, a} − {a, a} = {a}`,code:`// In ordinary sets, duplicates are ignored: {a,a} = {a}

// a) FALSE — {a,a,a,a,a} = {a}, not meaningful with duplicates; but as ordinary sets: {a}∪{a}={a}
// b) TRUE — {a}∪{a} = {a} ✓
// c) FALSE — as ordinary sets: {a}∩{a} = {a}, not {a,a}
// d) TRUE — {a}∩{a} = {a} ✓
// e) FALSE — {a}−{a} = ∅, not {a}`},{id:120,title:"Exercise 2.2, 69",description:"Answer the same questions as posed in Exercise 68 where all sets are multisets (not ordinary sets).",code:`// In multisets, multiplicities matter.
// {a,a} = {2\xb7a}, {a,a,a} = {3\xb7a}

// a) {2\xb7a} ∪ {3\xb7a} = {max(2,3)\xb7a} = {3\xb7a} ≠ {5\xb7a} → FALSE
// b) {2\xb7a} ∪ {3\xb7a} = {3\xb7a} ≠ {1\xb7a} → FALSE
// c) {2\xb7a} ∩ {3\xb7a} = {min(2,3)\xb7a} = {2\xb7a} → TRUE
// d) {2\xb7a} ∩ {3\xb7a} = {2\xb7a} ≠ {1\xb7a} → FALSE
// e) {3\xb7a} − {2\xb7a} = {max(3−2,0)\xb7a} = {1\xb7a} → TRUE`},{id:121,title:"Exercise 2.2, 70",description:`Suppose that A is the multiset of computer equipment needed by one department and B is the analogous multiset for a second department.
a) What combination represents equipment the university should buy assuming both departments use the same equipment?
b) What combination represents equipment used by both departments if both use the same equipment?
c) What combination represents equipment the second department uses but the first does not?
d) What combination represents equipment the university should purchase if departments do not share equipment?`,code:`// A = {107\xb7PC, 44\xb7routers, 6\xb7servers}, B = {14\xb7PC, 6\xb7routers, 2\xb7mainframes}

// a) Buy enough for both (shared use) → need the MAX of each type
//    A ∪ B (multiset union) = {max multiplicities}
//    e.g., {107\xb7PC, 44\xb7routers, 6\xb7servers, 2\xb7mainframes}

// b) Equipment used by both → MIN of each type
//    A ∩ B (multiset intersection)
//    e.g., {14\xb7PC, 6\xb7routers}

// c) Equipment B uses that A doesn't (or has more of) → B − A
//    e.g., {0\xb7PC, 0\xb7routers, 2\xb7mainframes} = {2\xb7mainframes}

// d) Buy for both independently (no sharing) → SUM of multiplicities
//    A + B (multiset sum)
//    e.g., {121\xb7PC, 50\xb7routers, 6\xb7servers, 2\xb7mainframes}`},{id:122,title:"Exercise 2.2, 71",description:`Find J(A,B) and dJ(A,B) for these pairs of sets.
(J(A,B) = |A∩B| / |A∪B|, dJ(A,B) = 1 − J(A,B))
a) A = {1,3,5}, B = {2,4,6}
b) A = {1,2,3,4}, B = {3,4,5,6}
c) A = {1,2,3,4,5,6}, B = {1,2,3,4,5,6}
d) A = {1}, B = {1,2,3,4,5,6}`,code:`// a) A∩B=∅ → |A∩B|=0; A∪B={1,2,3,4,5,6} → |A∪B|=6
//    J = 0/6 = 0;  dJ = 1

// b) A∩B={3,4} → 2; A∪B={1,2,3,4,5,6} → 6
//    J = 2/6 = 1/3;  dJ = 2/3

// c) A=B → A∩B=A, A∪B=A → |A∩B|=|A∪B|=6
//    J = 6/6 = 1;  dJ = 0

// d) A∩B={1} → 1; A∪B={1,2,3,4,5,6} → 6
//    J = 1/6;  dJ = 5/6`},{id:123,title:"Exercise 2.2, 72",description:`Prove that each of the properties holds whenever A and B are finite sets.
a) J(A,A) = 1 and dJ(A,A) = 0
b) J(A,B) = J(B,A) and dJ(A,B) = dJ(B,A)
c) J(A,B) = 1 and dJ(A,B) = 0 if and only if A = B
d) 0 ≤ J(A,B) ≤ 1 and 0 ≤ dJ(A,B) ≤ 1
★★e) Triangle inequality: dJ(A,C) ≤ dJ(A,B) + dJ(B,C)`,code:`// a) J(A,A) = |A∩A|/|A∪A| = |A|/|A| = 1; dJ = 1−1 = 0 ✓

// b) A∩B = B∩A and A∪B = B∪A → J(A,B) = J(B,A); same for dJ ✓

// c) (→) J=1 → |A∩B|=|A∪B| → every element of A∪B is in A∩B → A=B
//    (←) A=B → J(A,A)=1 (from a) ✓

// d) |A∩B| ≤ |A∪B| always (intersection ⊆ union)
//    So 0 ≤ J ≤ 1 → 0 ≤ dJ = 1−J ≤ 1 ✓

// e) Triangle inequality (hard): use |A∪C| ≤ |A∪B| + |B∪C|
//    and |A∩C| ≥ |A∩B| + |B∩C| − |B| relationships
//    Requires careful algebraic manipulation with inclusion-exclusion`},{id:124,title:"Exercise 2.2, 73",description:`The complement of a fuzzy set S is the set S̄, with degree of membership = 1 − (degree in S). Find F̄ (not famous) and R̄ (not rich).
F = {0.6 Alice, 0.9 Brian, 0.4 Fred, 0.1 Oscar, 0.5 Rita}
R = {0.4 Alice, 0.8 Brian, 0.2 Fred, 0.9 Oscar, 0.7 Rita}`,code:`// Complement: subtract each degree from 1

// F̄ (not famous):
// Alice: 1−0.6=0.4, Brian: 1−0.9=0.1, Fred: 1−0.4=0.6
// Oscar: 1−0.1=0.9, Rita: 1−0.5=0.5
// F̄ = {0.4 Alice, 0.1 Brian, 0.6 Fred, 0.9 Oscar, 0.5 Rita}

// R̄ (not rich):
// Alice: 1−0.4=0.6, Brian: 1−0.8=0.2, Fred: 1−0.2=0.8
// Oscar: 1−0.9=0.1, Rita: 1−0.7=0.3
// R̄ = {0.6 Alice, 0.2 Brian, 0.8 Fred, 0.1 Oscar, 0.3 Rita}`},{id:125,title:"Exercise 2.2, 74",description:`The union of two fuzzy sets S and T: degree in S∪T = max of degrees in S and T. Find the fuzzy set F∪R of rich or famous people.
F = {0.6 Alice, 0.9 Brian, 0.4 Fred, 0.1 Oscar, 0.5 Rita}
R = {0.4 Alice, 0.8 Brian, 0.2 Fred, 0.9 Oscar, 0.7 Rita}`,code:`// Fuzzy union: take MAX of degrees for each person

// Alice: max(0.6, 0.4) = 0.6
// Brian: max(0.9, 0.8) = 0.9
// Fred:  max(0.4, 0.2) = 0.4
// Oscar: max(0.1, 0.9) = 0.9
// Rita:  max(0.5, 0.7) = 0.7

// F∪R = {0.6 Alice, 0.9 Brian, 0.4 Fred, 0.9 Oscar, 0.7 Rita}`},{id:126,title:"Exercise 2.2, 75",description:`The intersection of two fuzzy sets S and T: degree in S∩T = min of degrees in S and T. Find the fuzzy set F∩R of rich and famous people.
F = {0.6 Alice, 0.9 Brian, 0.4 Fred, 0.1 Oscar, 0.5 Rita}
R = {0.4 Alice, 0.8 Brian, 0.2 Fred, 0.9 Oscar, 0.7 Rita}`,code:`// Fuzzy intersection: take MIN of degrees for each person

// Alice: min(0.6, 0.4) = 0.4
// Brian: min(0.9, 0.8) = 0.8
// Fred:  min(0.4, 0.2) = 0.2
// Oscar: min(0.1, 0.9) = 0.1
// Rita:  min(0.5, 0.7) = 0.5

// F∩R = {0.4 Alice, 0.8 Brian, 0.2 Fred, 0.1 Oscar, 0.5 Rita}`}],f=[{href:"/",label:"Home",className:"HeaderButton"},{href:"/S2",label:"S2 Page",className:"HeaderButton"},{href:"/S2/discrete",label:"Discrete Page",className:"HeaderButton"}];a.s(["default",0,function(){let[a,g]=(0,c.useState)(null),[h,i]=(0,c.useState)("");return(0,b.jsxs)("div",{children:[(0,b.jsx)(d.default,{links:f}),(0,b.jsxs)("main",{className:"main-box",children:[(0,b.jsx)("h1",{className:"page-header",children:"Discrete Chapter 1 Page"}),(0,b.jsxs)("div",{className:"SubButton",children:["Exercise: 2.1, ID: 1-51",(0,b.jsx)("br",{}),"Exercise: 2.2, ID: 52- 126",(0,b.jsx)("br",{}),"UNDER CONSTRUCTION"]}),(0,b.jsx)("input",{type:"number",placeholder:"Search by ID",className:"w-full p-2 rounded border border-gray-400 mb-4 text-black",value:h,onChange:a=>i(a.target.value)}),e.filter(a=>""===h||a.id===Number(h)).map(c=>(0,b.jsxs)("div",{className:"bg-black/20 p-4 rounded-lg text-white backdrop-blur-sm",children:[(0,b.jsx)("h3",{className:"text-lg font-semibold",children:c.title}),(0,b.jsx)("pre",{className:"text-gray-300 mt-2 whitespace-pre-wrap",children:c.description}),(0,b.jsx)("button",{className:"HeaderButton mt-3",onClick:()=>{let b;return g(a===(b=c.id)?null:b)},children:a===c.id?"Hide Solution ▲":"Show Solution ▼"}),a===c.id&&(0,b.jsxs)("div",{className:"mt-3 bg-black/40 p-3 rounded",children:[(0,b.jsx)("h4",{className:"font-semibold text-yellow-400 mb-2",children:"Solution"}),(0,b.jsx)("pre",{className:"whitespace-pre-wrap text-gray-200",children:c.code}),(0,b.jsx)("button",{className:"mt-2 bg-yellow-500 text-black px-2 py-1 rounded hover:bg-yellow-400",onClick:()=>{var a;return a=c.code,void(navigator.clipboard.writeText(a),alert("Code copied!"))},children:"Copy"})]})]},c.id))]})]})}],78617)}];

//# sourceMappingURL=app_S2_discrete_DiscreteMid_DiscreteCh2_page_tsx_0bbwuf2._.js.map