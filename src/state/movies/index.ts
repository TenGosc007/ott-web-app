import { createSlice } from "@reduxjs/toolkit";
import axios from "axios/myAxios";

import { RootState, AppThunk } from "state/store";

export interface Movie {
  id: number;
  title: string;
  img?: string;
  description?: string;
}

export interface CurrentMovie {
  url: string;
  id: number;
}

interface State {
  moviesData: Movie[];
  currentMovieUrl: CurrentMovie | null;
  loading: boolean;
}

const initialState: State = {
  moviesData: [],
  currentMovieUrl: null,
  loading: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    setMovies: (state, action) => {
      state.moviesData = action.payload;
      state.loading = false;
    },

    setCurrentMovie: (state, action) => {
      state.currentMovieUrl = action.payload;
      state.loading = false;
    },
  },
});

export const { setMovies, setCurrentMovie, startLoading } = moviesSlice.actions;

export const getMovies =
  (listId: number): AppThunk =>
  async (dispatch) => {
    dispatch(startLoading());
    try {
      const { data } = await axios.post(
        "/Media/GetMediaList",
        {
          MediaListId: listId,
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
        const image = e.Images.find(
          (img: any) => img.ImageTypeCode === "FRAME"
        );
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
    dispatch(startLoading());
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

      dispatch(setCurrentMovie({ url: data.ContentUrl, id: data.MediaId }));
    } catch (err) {
      console.log(err);
    }
  };

export const selectMovies = (state: RootState) => state.movies.moviesData;
export const selectLoading = (state: RootState) => state.movies.loading;
export const selectCurrent = (state: RootState) => state.movies.currentMovieUrl;

export default moviesSlice.reducer;
