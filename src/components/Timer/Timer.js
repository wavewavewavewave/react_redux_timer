import {connect} from "react-redux";
import {useEffect, useState} from "react";
import Button from "../Button/Button";
import './Timer.css';
import {onCountDown, onDecrement, onIncrement, onReset} from "../../redux/action";


const Timer = (props) => {
    const [timer, setTimer] = useState(0);

    const secondsToTime = (secs) => {
        let hours = Math.floor(secs / (60 * 60));
        let minutes = Math.floor((secs % (60 * 60)) / 60);
        let seconds = Math.ceil((secs % (60 * 60)) % 60);
        return {h: hours, m: minutes, s: seconds};
    };

    const incTimer = () => {
        if (props.seconds >= 0) {
            props.increment(secondsToTime);
        }
    };

    const decTimer = () => {
        if (props.seconds > 0 && timer === 0) {
            props.decrement(secondsToTime);
        }
    };

    const startTimer = () => {
        if (props.seconds > 0 && timer === 0) {
            setTimer(setInterval(countDown, 1000));
        }
    };

    const countDown = () => {
        props.countDown(secondsToTime);
    };

    useEffect(() => {
        if (props.seconds <= 0) {
            clearInterval(timer);
        }
    }, [props.seconds])

    const stopTimer = () => {
        if (props.seconds !== 0 && timer !== 0) {
            clearInterval(timer);
            setTimer(0);
        }
    };

    const resetTimer = () => {
        props.reset();
        if (timer !== 0) {
            clearInterval(timer);
            setTimer(0);
        }
    };

    const timeFormatter = (time) => {
        let {h, m, s} = time;
        if (h.toString().length < 2) {
            h = `0${h}`;
        }
        if (m.toString().length < 2) {
            m = `0${m}`;
        }
        if (s.toString().length < 2) {
            s = `0${s}`;
        }
        return {h, m, s};
    };

    let {h, m, s} = timeFormatter(props.time);

    return (
        <>
      <span className="timer">
        {h}:{m}:{s}
      </span>
            <div>
                <Button clicked={incTimer}>+</Button>
                <Button clicked={startTimer}>Start</Button>
                <Button clicked={stopTimer}>Stop</Button>
                <Button clicked={resetTimer}>Reset</Button>
                <Button clicked={decTimer}>-</Button>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    time: state.time,
    seconds: state.seconds,
});

const mapDispatchToProps = (dispatch) => ({
    increment: (fn) => dispatch(onIncrement(fn)),
    decrement: (fn) => dispatch(onDecrement(fn)),
    countDown: (fn) => dispatch(onCountDown(fn)),
    reset: () => dispatch(onReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);