import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { qs } from "../Questions/question";

const Quiz = ({ setPoints }) => {
    let [ index, setIndex ] = useState(0);
    let [ question, setQuestion ] = useState(qs[index]);
    let [ selectedOption, setSelectedOption ] = useState(null);
    let [ lock, setLock ] = useState(false);
    let [ score, setScore ] = useState(0);
    let [ result, setResult ] = useState(false);
    let [ greeting, setGreeting ] = useState("");

    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);

    let option_array = [option1, option2, option3, option4];

    const checkAns = (selectedOption, e) => {
        if (lock === false) {
            const isCorrect = selectedOption === question.ans;
            if (isCorrect) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev+1);
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans-1].current.classList.add("correct");
            }
        }
    }

    const next = () => {
        if(lock === true) {
            if(index === qs.length -1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(qs[index]);
            setLock(false);
            option_array.forEach((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
            });
            {if (score >= 4) {
                setGreeting("Great job!");
            } else if (score === 3) {
                setGreeting("Better luck next time!");
            } else {
                setGreeting("Eh...");
            }}
            setPoints(score);
        }
    }

    const handleClick = (selectedOption, e) => {
        setSelectedOption(selectedOption);
        checkAns(selectedOption, e);
    };

    return(
        <div className="quiz-page">
            <Header />
            <hr />
            { result ? <>
                <h3>{`${greeting} you got ${score} out of ${qs.length}`}</h3>
                <hr />
                <hr />
            </> : <>
            <div className="quiz-box">
                <h2>{index+1}. {question.question}</h2>
                <ul className="ul">
                    <li ref={option1} onClick={(e) => handleClick(1, e)}>{question.option1}</li>
                    <li ref={option2} onClick={(e) => handleClick(2, e)}>{question.option2}</li>
                    <li ref={option3} onClick={(e) => handleClick(3, e)}>{question.option3}</li>
                    <li ref={option4} onClick={(e) => handleClick(4, e)}>{question.option4}</li>
                </ul>
                <hr />
                {lock ? <button onClick={next} id="next">next</button> : null}
                <hr />
                {`Question no ${index+1} out of ${qs.length}`}
            </div>
            </> }
        </div>
    );
}

export default Quiz;