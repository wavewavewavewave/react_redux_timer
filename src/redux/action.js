import {COUNTDOWN, DECREMENT, INCREMENT, RESET} from "./types";

export const onIncrement = (fn) => {
    return {
        type: INCREMENT,
        payload: fn
    }
}
export const onDecrement = (fn) => {
    return {
        type: DECREMENT,
        payload: fn
    }
}
export const onCountDown = (fn) => {
    return {
        type: COUNTDOWN,
        payload: fn
    }
}
export const onReset = () => {
    return {
        type: RESET
    }
}
