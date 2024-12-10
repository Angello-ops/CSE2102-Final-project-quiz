import React, { useState } from 'react';

function Quiz() {
  const questions = [
    {
      id: 1,
      question: "What is the capital of Connecticut?",
      answers: [
        { "Stamford": false },
        { "Storrs": false },
        { "Hartford": true },
      ],
    },
    {
      id: 2,
      question: "What is the square root of 16?",
      answers: [
        { "4": true },
        { "8": false },
        { "16": false },
      ],
    },
    {
      id: 3,
      question: "What is 2 + 2?",
      answers: [
        { "3": false },
        { "4": true },
        { "5": false },
      ],
    },
    {
      id: 4,
      question: "Which is a primary color?",
      answers: [
        { "Green": false },
        { "Blue": true },
        { "Purple": false },
      ],
    },
    {
      id: 5,
      question: "What is the boiling point of water (°C)?",
      answers: [
        { "50": false },
        { "100": true },
        { "200": false },
      ],
    },
  ];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the score
    let calculatedScore = 0;
    questions.forEach((q) => {
      const correctAnswer = Object.entries(q.answers.find((a) =>
        Object.values(a).includes(true)
      ))[0][0];

      if (answers[q.id] === correctAnswer) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
    setSubmitted(true);
    setAnswers({}); // Reset the answers for a fresh start
  };

  return (
    <div className="quiz-container" style={styles.container}>
      <h1 style={styles.header}>Quiz</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          {questions.map((question, index) => (
            <div
              key={question.id}
              style={{
                ...styles.questionBlock,
                borderBottom: index === questions.length - 1 ? 'none' : '1px solid #ddd',
              }}
            >
              <p style={styles.questionText}>
                {index + 1}. {question.question}
              </p>
              {question.answers.map((answerObj) =>
                Object.entries(answerObj).map(([answer, isCorrect]) => (
                  <label key={answer} style={styles.option}>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={answer}
                      checked={answers[question.id] === answer}
                      onChange={() => handleAnswerChange(question.id, answer)}
                      style={styles.radioButton}
                    />
                    {answer}
                  </label>
                ))
              )}
            </div>
          ))}

          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      ) : (
        <div style={styles.result}>
          <h2 style={styles.resultHeader}>Your Score</h2>
          <p style={styles.resultText}>
            You got {score} / {questions.length} correct.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            style={styles.button}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    textAlign: 'left', // Align content to the left
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  questionBlock: {
    padding: '15px',
  },
  questionText: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  option: {
    display: 'block',
    marginTop: '5px',
    fontSize: '16px',
    color: '#555',
  },
  radioButton: {
    marginRight: '10px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    alignSelf: 'center',
  },
  result: {
    textAlign: 'center',
    marginTop: '30px',
  },
  resultHeader: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#333',
  },
  resultText: {
    fontSize: '18px',
    color: '#555',
  },
};

export default Quiz;
