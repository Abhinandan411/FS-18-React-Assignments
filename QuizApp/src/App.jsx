import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);

  const fetchQue = () => {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        if (data.response_code === 0) {
          setQuestions(data.results);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchQue();
  }, []);

  const validAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setIndex(index + 1);
  };

  const skipQuestion = () => {
    setIndex(index + 1);
  };

  return (
    <div className="container">
      <div className="box">
        {index < 10 ? (
          <div>
            <h1>Quiz Questions</h1>
            {questions.length > 0 && (
              <div>
                <p>{questions[index].question}</p>
                {questions[index].incorrect_answers.map((item, idx) => (
                  <button
                    key={idx}
                    className="incorrect-answer"
                    onClick={() => validAnswer(false)}
                  >
                    {item}
                  </button>
                ))}
                <button
                  className="correct-answer"
                  onClick={() => validAnswer(true)}
                >
                  {questions[index].correct_answer}
                </button>
              </div>
            )}
            <button className="skip-button" onClick={skipQuestion}>Skip</button>
          </div>
        ) : (
          <div>
            <h3>Quiz is over</h3>
            <p className="score">Your score: {score} / 10</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
