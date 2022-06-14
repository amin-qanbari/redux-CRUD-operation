import { GET_DETAILS } from "../type";

const initialState = {
  details: [
    {
      id: 1,
      name: "amin",
      email: "amin@gmail.com",
      phone: "09189250554",
      country: "iran",
    },
    {
      id: 2,
      name: "nima",
      email: "nima@gmail.com",
      phone: "09189250554",
      country: "usa",
    },
    {
      id: 3,
      name: "zahra",
      email: "zahra@gmail.com",
      phone: "09189250554",
      country: "australia",
    },
    {
      id: 4,
      name: "dariush",
      email: "dariush@gmail.com",
      phone: "09189250554",
      country: "uae",
    },
    {
      id: 5,
      name: "hosna",
      email: "hosna@gmail.com",
      phone: "09189250554",
      country: "iran",
    },
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return state;
    default:
      return state;
  }
};

export default Reducer
