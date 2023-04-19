export const gcprSets = [
  {
    id: "1",
    name: "Set_01",
    gcprs: ["ADRA1A", "ADRA1B", "ADRA1D", "ADRA2A", "ADRA2B", "ADRA2C", "ADRB1", "ADRB2", "ADRB3", "HTR1A", "HTR1B", "HTR1D"]
  },
  {
    id: "2",
    name: "Set_02",
    gcprs: ["ADRA1A", "ADRA1B", "ADRA1D", "ADRA2A", "ADRA2B", "ADRA2C", "ADRB1", "ADRB2", "ADRB3", "HTR1A", "HTR1B", "HTR1D"]
  },
  {
    id: "3",
    name: "Set_03",
    gcprs: ["ADRA1A", "ADRA1B", "ADRA1D", "ADRA2A", "ADRA2B", "ADRA2C", "ADRB1", "ADRB2", "ADRB3", "HTR1A", "HTR1B", "HTR1D"]
  }
]

export const treatments = [
  {
    id: "1",
    name: "caffeine",
    color: "#C7C1E9"
  },
  {
    id: "2",
    name: "glutamate",
    color: "#C1E9D6"
  }
]

export const plates = [
  {
    id: "1",
    numRows: 8,
    numCols: 12,
    sets: [
      {
        setID: "1",
        rows: [0, 1], // start, end (exclusive)
        cols: [0, 12],
        treatments: null
      },
      {
        setID: "1",
        rows: [1, 2],
        cols: [0, 12],
        treatments: null
      }
    ]
  }
]