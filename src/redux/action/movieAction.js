import api from "../api";

function movieAction() {
  return async (dispatch) => {
    const getUpcomingMovieAPI = await api.get(
      `/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`
    );
  };
}

export const movieAction = {
  getUpcomingMovieAPI,
}
