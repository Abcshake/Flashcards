import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  topics: {}
}

export const topicSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
      addTopic: (state, action) => {
        const { id, name, icon } = action.payload;
        state.topics[id] = {
          id: id,
          name,
          icon,
          quizIds: []
        };
      },
      addQuizId: (state, action) => {
        const { quizId, topicId } = action.payload;
        state.topics[topicId].quizIds.push(quizId);
      },
    },
  });
  
export const { addTopic } = topicSlice.actions;

export const selectTopics = state => state.topics; // Update the selector to access the correct state slice

export default topicSlice; // Use `reducer`, not `reducers`

