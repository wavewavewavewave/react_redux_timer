import {COUNTDOWN, DECREMENT, INCREMENT, RESET} from "./types";

const initialState = {
    time: {
        h: 0,
        m: 0,
        s: 0,
    },
    seconds: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                seconds: state.seconds + 60,
                time: action.payload(state.seconds + 60),
            };
        case DECREMENT:
            return {
                ...state,
                seconds: state.seconds - 60,
                time: action.payload(state.seconds - 60),
            };
        case COUNTDOWN:
            return {
                ...state,
                seconds: state.seconds - 1,
                time: action.payload(state.seconds - 1),
            };
        case RESET:
            return {
                ...state,
                time: {
                    h: 0,
                    m: 0,
                    s: 0,
                },
                seconds: 0,
            };

        default:
            return state;
    }
};

export default reducer;
