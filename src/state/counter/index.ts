import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface State {
  adult: number;
  children: number;
  rooms: number;
}

const initialState: State = {
  adult: 2,
  children: 0,
  rooms: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addAdult: (state) => {
      state.adult += 1;
    },
    addChild: (state) => {
      state.children += 1;
    },
    addRoom: (state) => {
      state.rooms += 1;
    },
    removeAdult: (state) => {
      if (state.adult >= 1) state.adult -= 1;
    },
    removeChild: (state) => {
      if (state.children >= 1) state.children -= 1;
    },
    removeRoom: (state) => {
      if (state.rooms >= 1) state.rooms -= 1;
    },
  },
});

export const {
  addAdult,
  addChild,
  addRoom,
  removeAdult,
  removeChild,
  removeRoom,
} = counterSlice.actions;

export const selectAdult = (state: RootState) => state.counter.adult;
export const selectChildren = (state: RootState) => state.counter.children;
export const selectRooms = (state: RootState) => state.counter.rooms;

export default counterSlice.reducer;
