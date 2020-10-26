const loadData = (data) => ({
  type: "LOAD_DATA",
  payload: data,
});
const loadPosts = (data) => ({
  type: "GET_POSTS",
  payload: data,
});
const createPost = (data) => ({
  type: "CREATE_POST",
  payload: data,
});
export const setGeoLocation = (data) => ({
  type: "SET_LATLNG",
  payload: data,
});
export const selectGeoLocation = (state) => state.geoLocation;
export const getUser = () => async (dispatch) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    };
    const resp = await fetch(
      "http://localhost:8000/models/current_user/",
      options
    );
    const userData = await resp.json();
    dispatch(loadData(userData));
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      };
      const resp = await fetch("http://localhost:8000/models/posts/", options);
      const post = await resp.json();
      dispatch(loadPosts(post));
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
export const fetchLocation = (lat, lng) => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
      };
      await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&result_type=country|locality&key=${process.env.REACT_APP_google_key}`,
        options
      )
        .then((r) => r.json())
        .then((data) => {
          if (data.results[0].formatted_address != undefined) {
            dispatch(
              setGeoLocation({
                location: data.results[0].formatted_address,
              })
            );
          }
        });
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
