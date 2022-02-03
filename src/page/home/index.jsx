import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { nextQues } from "../../action/quiz";
import './index.css';

const AllQuetsion = ({ correctAnswers, currentQuestion, dispatch }) => {
    const [time, setTime] = useState(0);
    const [nextQuestionNumber, setNextQuestionNumber] = useState(0);
    const [answer, setAnswer] = useState("");

    let interval = (stop) => stop != "y" ? setInterval(() => {
        if (time >= 60) {
            console.log(time);
            setNextQuestionNumber(pre => pre + 1)
            clearInterval(interval)
        }
        setTime((pre) => pre + 1)
    }, 1000) : () => ""


    useEffect(() => {
        setTimeout(() => {
            interval()
        }, 100);
        console.log(currentQuestion);
        console.log(correctAnswers);
    }, []);

    useEffect(() => {
        if (nextQuestionNumber >= 3) {
            interval("y")
        }
        dispatch(nextQues(nextQuestionNumber))
        setTime(0)
    }, [nextQuestionNumber]);



    return (
        <>
            <div className='blog-lst'>
                <h1 className='heading'>Quiz app </h1>
                <div className="bar">
                    <p>question {nextQuestionNumber}/3</p>
                    <p>Time left: 0:{time}</p>
                </div>
                <div className="questionbox">
                    {
                        currentQuestion ? (<>
                            <div className="question">
                                {currentQuestion?.question}
                            </div>
                            <div className="options">
                                {currentQuestion?.options?.map((item) => {
                                    return (
                                        <Button
                                            variant={"light"}
                                            size='lg'
                                            type='button'
                                            name={item.id}
                                            onClick={(e) => {
                                                setAnswer(e.target.name)
                                                setNextQuestionNumber((pre) => pre + 1)
                                            }}>
                                            {item.ansr}
                                        </Button>
                                    )
                                })}
                            </div>
                        </>) : (<div className="question">
                            ...............
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
    currentQuestion: state.quizs.currentQuestion,
    correctAnswers: state.quizs.ansr
})

// Connect Redux to React
export default connect(mapStateToProps)(AllQuetsion);
 // dispatch(nextQues(setNextQuestionNumber(pre => pre + 1)))