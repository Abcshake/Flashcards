import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
    name: 'topics',
    initialState: {
      topics: {}
    },
    reducers: {
      addTopic: (state, action) => {
        const { id, name, icon } = action.payload;
        return {
          ...state,
          [id]: {
            id,
            name,
            icon,
            quizIds: [],
          },
        };
      },
    },
  });
  
export const { addTopic } = topicSlice.actions;

export const selectTopics = state => state.topics; // Update the selector to access the correct state slice

export default topicSlice.reducer; // Use `reducer`, not `reducers`

