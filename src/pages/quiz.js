import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "bulma/css/bulma.min.css";
import Question from "../Components/Question";
import End from "../Components/End";
import Modal from "../Components/Modal";
import Start from "../Components/Start";
import { useParams } from "react-router";


let interval;
function Quiz() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const { id } = useParams();
  const questions =
          

  useEffect(() => {
    axios.get(`http://localhost:8000/dashboard/quizs/${id}/questions`).then((res) => {
      setQuizData(res.data);
    });
  }, []);
  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  return (
    <div>
      <div>
        {step === 1 && <Start onQuizStart={quizStartHandler} />}
        {step === 2 && (
            <Question
            data={questions[activeQuestion]}
            onAnswerUpdate={setAnswers}
            numberOfQuestions={quizData.length}
            activeQuestion={activeQuestion}
            onSetActiveQuestion={setActiveQuestion}
            onSetStep={setStep}
          />
        )
        }
        {step === 3 && (
          <End
            results={answers}
            data={questions}
            onAnswersCheck={() => setShowModal(true)}
            time={time}
          />
        )}

        {showModal && (
          <Modal
            onClose={() => setShowModal(false)}
            results={answers}
            data={quizData}
          />
        )}
      </div>
    </div>
  );
}

export default Quiz;
