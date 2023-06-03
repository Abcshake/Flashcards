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
               const {id, name, topicId} = action.payload
               state.quizzes[id] = {
                name,
                topicId,
                cardIds: [],
               };
            },
        },
});

export const AddtoQuizID = (quiz) => {
    const {quizId, topicId} = quiz;
    return (dispatch) => {
        dispatch(quizSlice.actions.addQuiz(quiz));
        dispatch(AddtoQuizID( { quizId: quizId, topicId: topicId } ));
    }
}

export const {addQuiz} = quizSlice.actions;

export const selectQuizzes = state => state.quizzes;

export default quizSlice.reducer;



