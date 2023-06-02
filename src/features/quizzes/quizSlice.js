import { createSlice } from "@reduxjs/toolkit";
import {topicSlice as topic} from "../topics/topicSlice";

const quizSlice = createSlice(
    {
        name: "quizzes",
        initialState: {
            quizzes: {}
        },
        reducers: {
            addQuiz: (state, action) => {
               const {id, name, topicId, cardIds} = action.payload
               state.quizzes[id] = {
                name,
                topicId,
                cardIds: [],
               };
            },
            // addId : (state, action) => {
            //     const {topicId, quizId} = action.payload;
            //     return (
            //         ...state,
            //         topic[topicId].quizIds.push(quizId);
            //     )
            // },
        },
});

export const {addQuiz} = quizSlice.actions;

export const selectQuizzes = state => state.quizzes;

export default quizSlice.reducer;



