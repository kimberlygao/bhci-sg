export const plates = [
  {
    id: "SGDEV01",
    name: "Plate_01",
    type: "1",
    status: "02",
    sets: [
      {
        setID: "1",
        rows: [0, 1], // start, end (exclusive)
        cols: [0, 12],
      },
      {
        setID: "1",
        rows: [1, 2],
        cols: [0, 12],
      }
    ],
    wells: 
          {"A1": {set: "1", loc: "A1", treatment: "1", conc: "1000um", heat: 72.34,
                  spots: [
                    {img: "", heat: 95},
                    {img: "", heat: 85},
                    {img: "", heat: 80},
                    {img: "", heat: 82},
                    {img: "", heat: 81},
                    {img: "", heat: 93},
                    {img: "", heat: 54},
                    {img: "", heat: 72},
                    {img: "", heat: 67},
                    {img: "", heat: 78},
                    {img: "", heat: 81},
                    {img: "", heat: 56},
                  ]
                  },
           "A2": {set: "1", loc: "A2", treatment: "1", conc: "100um", heat: 64.71},
           "A3": {set: "1",loc: "A3", treatment: "1", conc: "10um", heat: 60.71},
           "A4": {set: "1", loc: "A4", treatment: "1", conc: "1um", heat: 50.71},
           "A5": {set: "1", loc: "A5", treatment: "1", conc: "0.1um", heat: 40.71},
           "A6": {set: "1", loc: "A6", treatment: "1", conc: "0.01um", heat: 30.71},
           "B1": {set: "2", loc: "B1", treatment: "2", conc: "1000um", heat: 52.34},
           "B2": {set: "2", loc: "B2", treatment: "2", conc: "100um", heat: 34.71},
           "B3": {set: "2", loc: "B3", treatment: "2", conc: "10um", heat: 30.71},
           "B4": {set: "2", loc: "B4", treatment: "2", conc: "1um", heat: 20.71},
           "B5": {set: "2", loc: "B5", treatment: "2", conc: "0.1um", heat: 10.71},
           "B6": {set: "2", loc: "B6", treatment: "2", conc: "0.01um", heat: 10.71}
      }
    
  },
  {
    id: "SGDEV02",
    name: "Plate_02",
    type: "Type_01",
    status: "00",
  },
  {
    id: "SGDEV03",
    name: "Plate_03",
    type: "Type_01",
    status: "00",
  },
  {
    id: "SGDEV04",
    name: "Plate_04",
    type: "Type_01",
    status: "00",
  },
]

export const plateTypes = [
  {id: "1", name: "Type_01", rows: 8, cols: 12}
]

export const gcprs = {
  "ADRA1A": "α1A-adrenoceptor"
}

export const gcprSets = {
  "1": {
    id: "1",
    name: "Set_01",
    gcprs: ["ADRA1A", "ADRA1B", "ADRA1D", "ADRA2A", "ADRA2B", "ADRA2C", "ADRB1", "ADRB2", "ADRB3", "HTR1A", "HTR1B", "HTR1D"]
  },
  "2": {
    id: "2",
    name: "Set_02",
    gcprs: ["ADRA1A", "ADRA1B", "ADRA1D", "ADRA2A", "ADRA2B", "ADRA2C", "ADRB1", "ADRB2", "ADRB3", "HTR1A", "HTR1B", "HTR1D"]
  },
  3: {
    id: "3",
    name: "Set_03",
    gcprs: ["ADRA1A", "ADRA1B", "ADRA1D", "ADRA2A", "ADRA2B", "ADRA2C", "ADRB1", "ADRB2", "ADRB3", "HTR1A", "HTR1B", "HTR1D"]
  }
}

export const treatments = {
"1": {
    id: "1",
    name: "Caffeine",
    abr: "CAF",
    color: "#C7C1E9"
  },
 "2": {
    id: "2",
    name: "Glutamate",
    abr: "GLU",
    color: "#C1E9D6"
 }
}