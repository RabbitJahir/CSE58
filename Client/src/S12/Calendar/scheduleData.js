// client/src/scheduleData.js
export const scheduleData = [
  {
    week: 15,
    title: "Week 15",
    days: [
      { day: "Sunday", date: "2026-05-10", slots: Array(8).fill(null) },
      { day: "Monday", date: "2026-05-11", slots: Array(8).fill(null) },
      // ... (Add other days here)
    ]
  },
  // --- WEEK 7 (Example of a complex week) ---
  {
    week: 7,
    title: "Week 7",
    days: [
      { 
        day: "Sunday", 
        date: "2026-03-01", 
        slots: [
          null,
          { subject: "CSE0613121", content: "OOP, RA, 203" },
          { subject: "MATH0541121", content: "OPDE, ST, 603" },
          { subject: "CSE0613124", content: "WAD, FTTE, MTS, 411", colspan: 3 },
          null,
          null
        ] 
      },
      { 
        day: "Monday", 
        date: "2026-03-02", 
        slots: [
          { subject: "GED0222121", content: "BS, ZS, B203" },
          { subject: "EEE0713121", content: "FEE, MUH, 512", colspan: 2 },
          null,
          { 
            type: "split", 
            sections: [
              { subject: "EEE0713122_A1", content: "FEE LAB, 2A1, FUZ, 503" },
              { subject: "ME0715122_A2", content: "ED, 2A2, TS, 210" }
            ] 
          },
          null,
          null
        ] 
      },
      // Add Tuesday, Wednesday, Thursday...
    ]
  },
  // --- WEEK 1 (Example) ---
  {
    week: 1,
    title: "Week 1",
    days: [
      // ... Add your specific data following the pattern above
    ]
  }
];