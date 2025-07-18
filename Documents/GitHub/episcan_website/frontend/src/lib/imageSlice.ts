import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageState {
  image: string | null;
}

const initialState: ImageState = {
  image: null,
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string | null>) => {
      state.image = action.payload;
    },
  },
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;
