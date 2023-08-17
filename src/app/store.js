import { configureStore } from "@reduxjs/toolkit";
import topicSlice from "../features/topics/topicSlice";
import quizSlice from "../features/quizzes/quizSlice";

export default configureStore({
  reducer: {
    topics: topicSlice.reducer,
    quizzes: quizSlice.reducer,
  },
});
