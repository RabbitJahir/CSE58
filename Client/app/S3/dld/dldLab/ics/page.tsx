"use client";

import { useState } from "react";

export default function Page() {
  const categories = {
    "Basic Gates": [
      {
        name: "equal pins",
        title: "",
        diagram: `
        and(7408), or(7432), nand(7400), xor(7486)
        not(7404), nor(7402) `,
      },
      {
        name: "7408",
        title: "Quad 2-Input AND, multiplication",
        diagram: `
          +--notch(U)---+
1A ----|1          14|---- VCC
1B ----|2          13|---- 4B
1Y ----|3          12|---- 4A
2A ----|4   7408   11|---- 4Y
2B ----|5          10|---- 3B
2Y ----|6           9|---- 3A
GND ---|7           8|---- 3Y
          +------------+
`,
        truthTable: [
          { A: 0, B: 0, Y: 0 },
          { A: 0, B: 1, Y: 0 },
          { A: 1, B: 0, Y: 0 },
          { A: 1, B: 1, Y: 1 },
        ],
      },
      {
        name: "7432",
        title: "Quad 2-Input OR, addition",
        diagram: `
          +--notch(U)---+
1A ----|1          14|---- VCC
1B ----|2          13|---- 4B
1Y ----|3          12|---- 4A
2A ----|4   7432   11|---- 4Y
2B ----|5          10|---- 3B
2Y ----|6           9|---- 3A
GND ---|7           8|---- 3Y
          +------------+
`,
        truthTable: [
          { A: 0, B: 0, Y: 0 },
          { A: 0, B: 1, Y: 1 },
          { A: 1, B: 0, Y: 1 },
          { A: 1, B: 1, Y: 1 },
        ],
      },
      {
        name: "7404",
        title: "Hex Inverter (NOT), ulta",
        diagram: `
          +--notch(U)---+
1A ----|1          14|---- VCC
1Y ----|2          13|---- 6A
2A ----|3          12|---- 6Y
2Y ----|4   7404   11|---- 5A
3A ----|5          10|---- 5Y
3Y ----|6           9|---- 4A
GND ---|7           8|---- 4Y
          +------------+
`,
        truthTable: [
          { A: 0, Y: 1 },
          { A: 1, Y: 0 },
        ],
      },
      {
        name: "7400",
        title: "Quad 2-Input NAND, and + not",
        diagram: `
          +--notch(U)---+
1A ----|1          14|---- VCC
1B ----|2          13|---- 4B
1Y ----|3          12|---- 4A
2A ----|4   7400   11|---- 4Y
2B ----|5          10|---- 3B
2Y ----|6           9|---- 3A
GND ---|7           8|---- 3Y
          +------------+
`,
        truthTable: [
          { A: 0, B: 0, Y: 1 },
          { A: 0, B: 1, Y: 1 },
          { A: 1, B: 0, Y: 1 },
          { A: 1, B: 1, Y: 0 },
        ],
      },
      {
        name: "7402",
        title: "Quad 2-Input NOR, or + not",
        diagram: `
          +--notch(U)---+
1Y ----|1          14|---- VCC
1A ----|2          13|---- 4Y
1B ----|3          12|---- 4B
2Y ----|4   7402   11|---- 4A
2A ----|5          10|---- 3Y
2B ----|6           9|---- 3B
GND ---|7           8|---- 3A
          +------------+
`,
        truthTable: [
          { A: 0, B: 0, Y: 1 },
          { A: 0, B: 1, Y: 0 },
          { A: 1, B: 0, Y: 0 },
          { A: 1, B: 1, Y: 0 },
        ],
      },
      {
        name: "7486",
        title: "Quad 2-Input XOR, same 0, different 1",
        diagram: `
          +--notch(U)---+
1A ----|1          14|---- VCC
1B ----|2          13|---- 4B
1Y ----|3          12|---- 4A
2A ----|4   7486   11|---- 4Y
2B ----|5          10|---- 3B
2Y ----|6           9|---- 3A
GND ---|7           8|---- 3Y
          +------------+
`,
        truthTable: [
          { A: 0, B: 0, Y: 0 },
          { A: 0, B: 1, Y: 1 },
          { A: 1, B: 0, Y: 1 },
          { A: 1, B: 1, Y: 0 },
        ],
      },
    ],

    "Flip-Flops": [
      { name: "7473", title: "Dual JK Flip-Flop", diagram: "" },
      { name: "7474", title: "Dual D Flip-Flop", diagram: "" },
      { name: "7476", title: "Dual JK Flip-Flop", diagram: "" },
    ],

    Counters: [
      { name: "7490", title: "Decade Counter", diagram: "" },
      { name: "7492", title: "Divide-by-12 Counter", diagram: "" },
      { name: "7493", title: "4-bit Binary Counter", diagram: "" },
      { name: "74161", title: "Synchronous 4-bit Counter", diagram: "" },
      { name: "74163", title: "Synchronous Binary Counter", diagram: "" },
      { name: "74193", title: "Up/Down Binary Counter", diagram: "" },
    ],

    Registers: [
      { name: "74164", title: "Serial-In Parallel-Out Register", diagram: "" },
      { name: "74165", title: "Parallel-In Serial-Out Register", diagram: "" },
      { name: "74173", title: "4-bit Register", diagram: "" },
      { name: "74174", title: "Hex D Register", diagram: "" },
      { name: "74194", title: "Universal Shift Register", diagram: "" },
      { name: "74195", title: "Shift Register", diagram: "" },
    ],

    Multiplexers: [
      { name: "74150", title: "16-to-1 Multiplexer", diagram: "" },
      { name: "74151", title: "8-to-1 Multiplexer", diagram: "" },
      { name: "74153", title: "Dual 4-to-1 Multiplexer", diagram: "" },
      { name: "74157", title: "Quad 2-to-1 Multiplexer", diagram: "" },
      {
        name: "74158",
        title: "Quad 2-to-1 Inverting Multiplexer",
        diagram: "",
      },
    ],

    Buffers: [
      { name: "74125", title: "Quad Tri-State Buffer", diagram: "" },
      { name: "74126", title: "Quad Tri-State Buffer", diagram: "" },
      { name: "74240", title: "Octal Inverting Buffer", diagram: "" },
      { name: "74244", title: "Octal Buffer", diagram: "" },
      { name: "74245", title: "Octal Bus Transceiver", diagram: "" },
    ],

    Arithmetic: [
      { name: "7483", title: "4-bit Binary Adder", diagram: "" },
      {
        name: "74181",
        title: "4-bit Arithmetic Logic Unit (ALU)",
        diagram: "",
      },
    ],
  };

  const [selected, setSelected] =
    useState<keyof typeof categories>("Basic Gates");
  const categoryKeys = Object.keys(categories) as Array<
    keyof typeof categories
  >;

  return (
    <main
      style={{
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        overflowX: "hidden",
        padding: "20px 16px",
        background: "#111",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "monospace",
      }}
    >
      <h1 style={{ fontSize: "1.4rem", marginBottom: 16 }}>
        74xx Logic IC Family
      </h1>

      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          marginBottom: 30,
          width: "100%",
        }}
      >
        {categoryKeys.map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            style={{
              padding: "10px 18px",
              cursor: "pointer",
              border: "1px solid #666",
              borderRadius: 6,
              background: selected === category ? "#0f0" : "#222",
              color: selected === category ? "#000" : "#fff",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {categories[selected].map((ic) => {
        const truthTable = (
          ic as { truthTable?: Array<Record<string, number | string>> }
        ).truthTable;

        return (
          <div
            key={ic.name}
            style={{
              border: "1px solid #555",
              borderRadius: 8,
              padding: 20,
              marginBottom: 20,
            }}
          >
            <h2>{ic.name}</h2>
            <p>{ic.title}</p>

            <pre
              style={{
                display: "block",
                marginBottom: 12,
                border: "1px solid #555",
                borderRadius: 8,
                padding: 12,
                maxWidth: "100%",
                overflowX: "auto",
                overflowY: "hidden",
                color: "green",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                fontSize: "0.9rem",
                lineHeight: 1.4,
              }}
            >
              {ic.diagram}
            </pre>

            {truthTable && (
              <div style={{ marginTop: 8 }}>
                <div style={{ fontSize: "0.95rem", marginBottom: 6 }}>
                  Truth Table
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: "0.9rem",
                      minWidth: 180,
                    }}
                  >
                    <thead>
                      <tr>
                        {Object.keys(truthTable[0] || {}).map((header) => (
                          <th
                            key={header}
                            style={{
                              border: "1px solid #666",
                              padding: "8px 6px",
                              textAlign: "center",
                              background: "#222",
                            }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {truthTable.map((row, index) => (
                        <tr key={`${ic.name}-${index}`}>
                          {Object.values(row).map((value, valueIndex) => (
                            <td
                              key={`${ic.name}-${index}-${valueIndex}`}
                              style={{
                                border: "1px solid #666",
                                padding: "8px 6px",
                                textAlign: "center",
                              }}
                            >
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </main>
  );
}
