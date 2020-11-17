const initState = {
  userData: [],
  blogPost: [],
  geoLocation: { lat: "", lng: "", location: "" },
};

function Reducer(state = initState, action) {
  switch (action.type) {
    case "LOAD_DATA":
      return { ...state, userData: action.payload };
    case "GET_POST":
      return { ...state, post: action.payload };

    case "GET_POSTS":
      return { ...state, blogPost: action.payload };
    case "SET_LATLNG":
      return {
        ...state,
        geoLocation: {
          ...state.geoLocation,
          ...action.payload,
        },
      };

    default:
      return state;
  }
}

export default Reducer;
