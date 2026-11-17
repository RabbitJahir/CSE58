# DSA 1 Theory Final Syllabus

---

# Stack (LIFO) — 3 Algo

1. **Definition** of all keywords
2. **Array based stack (Vertical)** — *Graphical representation*
3. **Link based stack (Horizontal)** — *Graphical representation*
4. **Algorithm for push and pop with graphics**
5. **Push & pop given, make & show input, Stack & Output** 
6. **Algorithm for Infix to Postfix and converting** *(page: 4-5)*
6. **Evaluating postfix expression** *(page: 7-8)*

---

# Stack Extended 
1. Quicksort, Recursion, Towers of Hanoi *(page: 7-10)*
2. Recursive solution to Towers of Hanoi *(page: 11)*



## Sorting — 3 Algo

1. **Definition**
2. **Internal sorting**
3. **External sorting**
4. **Stable / Not Stable sorting**
5. **Adaptive / Non-adaptive sorting**
6. **Terms** (Increasing, Decreasing, Non-Increasing, Non-Decreasing order)
7. **Algorithm Bubble sort showcase**  *(page: 3)*
8. **Algorithm Selection sort** *(page: 5)*
9. **Algorithm Insertion sort** *(page: 6)*
10. **Merge sort** *(page: 7)*
11. **Divide & Conquer method** *(page: 8)*

---

## Queue (FIFO) — 2 Algo

1. **Definition all**
2. **Array based / Link based**
3. **Algorithm for push and pop with graphics** *(page: 2)*
4. **Deque**
   * Input / Output Restricted *(page: 3)*
   * Operations *(page: 4–6)*
5. **Priority Queue**
   * Ascending / Descending *(page: 6–8)*

---

## Graph — 4 Algo (DFS, BFS, Prim's, Kruskal's)

1. **Definitions**
2. **Nodes, edge, Vertices, backtracking**
3. **Use of graphs**
4. **Types**
   * Directed
   * Undirected
   * Weighted
   * Complete
   * Connected
   * Disconnected
5. **Adjacency matrix** *(representation for all types)*
6. **Adjacency list** *(representation for all types)*
7. **Graph Traversal**
   * **DFS:** Stack graphics *(page: 7–8)*
   * **BFS:** Queue graphics *(page: 9–10)*
8. **Prim's & Kruskal's Algorithm** *(Prim's: page 10–12, Kruskal's: page 13–16)*

---

## Tree — 1 Algo (Huffman Coding)

1. **Definitions**
2. **Node, Internal Node, Leaf (External Node), Root, Path, Height, Depth, Level**
3. **Types**
   * - Binary
   * - Full / Proper / Strict
   * - Complete
   * - Perfect
   * - Degenerate / Pathological
4. **Traversing** *(page: 5 graphics)*
   * - Preorder
   * - Postorder
   * - Inorder
   * - **Converting from given orders to tree**
      * - From Preorder and Postorder to Binary tree
      * - From Preorder and Inorder to Binary tree
      * - From Postorder and Inorder to Binary tree
5. **Constructing BST**
6. **Building Heap (max, min)** *(page: 6)*
7. **Huffman Coding** *(page: 7–10)*

---

## Hashing — 
1. **Hashing/ Message Digest Function**
2. **Division Method**: 
   * values given, use mod with total number of rows to find which value is in which index 
   * h (key_value) = key_value mod m 
   * write formula and draw the stack
3. **Mid-square Method**
   * square the value, 
   * if square_value is less than 4, convert it to 4 using 0 at front, then take middle 2 digits,  
   * 16 = 0016, 01 |  3 = 0003, 00 | 1890 = 89 | mod middle 2 digits with the total number of rows
   * Have the value, need to find index
4. **Folding Method**
   * group the big number into 2 digits, add the 2 digits, then mod with total number of rows
   * Have the value, need to find index