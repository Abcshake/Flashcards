import { configureStore } from "@reduxjs/toolkit";
import topicSlice from "../features/topics/topicSlice";

export default configureStore({
  reducer: {
    topics: topicSlice,
  },
});
