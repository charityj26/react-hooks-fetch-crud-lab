import React, {useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [Questions, setQuestions] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((data)=> {
      setQuestions(data)
    });

  }, []);
  
  function handleDeleteItem(id) {
  fetch(`http://localhost:4000/questions/${id}`, {
    method: 'DELETE'
  })
    .then((r) => r.json ())
    .then(()=> {
      const updatedQuestions = Questions.filter(
        (Question) => Question.id !== id);
        setQuestions(updatedQuestions);

    })
  }
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        <QuestionItem handleDeleteItem = {handleDeleteItem}/>
      </ul>
    </section>
  );
}

export default QuestionList;
