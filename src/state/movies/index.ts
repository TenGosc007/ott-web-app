import { createSlice } from "@reduxjs/toolkit";
import axios from "axios/myAxios";

import { RootState, AppThunk } from "state/store";

export interface Movie {
  id: number;
  title: string;
  img?: string;
  description?: string;
}

interface State {
  moviesData: Movie[];
  currentMovieUrl: string;
}

const initialState: State = {
  moviesData: [],
  currentMovieUrl: "",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.moviesData = action.payload;
    },

    setCurrentMovie: (state, action) => {
      state.currentMovieUrl = action.payload;
    },
  },
});

export const { setMovies, setCurrentMovie } = moviesSlice.actions;

export const getMovies = (): AppThunk => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "/Media/GetMediaList",
      {
        MediaListId: 3,
        IncludeCategories: false,
        IncludeImages: true,
        IncludeMedia: false,
        PageNumber: 1,
        PageSize: 15,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    const { Entities } = data;
    let moviesArr: Movie[] = [];

    Entities.forEach((e: any) => {
      const image = e.Images.find((img: any) => img.ImageTypeCode === "FRAME");
      moviesArr.push({
        id: e.Id,
        title: e.Title,
        img: image?.Url,
        description: e?.Description,
      });
    });

    dispatch(setMovies(moviesArr));
  } catch (err) {
    console.log(err);
  }
};

export const getMovieUrl =
  (movieId: number): AppThunk =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(
        "/Media/GetMediaPlayInfo",
        {
          MediaId: movieId,
          StreamType: "TRIAL",
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      dispatch(setCurrentMovie(data.ContentUrl));
    } catch (err) {
      console.log(err);
    }
  };

export const selectMovies = (state: RootState) => state.movies.moviesData;

export default moviesSlice.reducer;
