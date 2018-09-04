import * as actionTypes from './actionTypes';

export const initSurvey = () => {
    return {
        type: actionTypes.INIT_SURVEY
    };
};
export const stopSurvey = () => {
    return {
        type: actionTypes.STOP_SURVEY
    };
};
export const finishSurvey = () => {
    return {
        type: actionTypes.FINISH_SURVEY
    };
};
export const continueSurvey = () => {
    return {
        type: actionTypes.CONTINUE_SURVEY
    };
};
export const questionPrev = () => {
    return {
        type: actionTypes.PREV_QUESTION
    };
};
export const questionVerify = () => {
    return {
        type: actionTypes.VERIFY_QUESTION
    };
};
export const questionSkip = () => {
    return {
        type: actionTypes.SKIP_QUESTION
    };
};
export const questionNext = () => {
    return {
        type: actionTypes.NEXT_QUESTION
    };
};
export const questionAnswered = (event) => {
    return {
        type: actionTypes.ANSWERED_QUESTION,
        event: event
    };
};

