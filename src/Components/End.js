import React, { useEffect, useState } from "react";
import axios from 'axios'
import {Container,Form} from 'react-bootstrap'
const End = ({  onAnswersCheck }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const [result, setResult] = useState({
    name: "",
    email: "",
    answers: "",
  });
 const handleChange = (e) => {
   setResult({ ...result, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   const form = new FormData();
   form.append("name", result.name);
   form.append("email", result.email);

   axios
     .post(`http://localhost:8000/api/submitResult`, form)
     .then((res) => {
       if (res.status === 200) {
       }
     })
     .catch((err) => {
       console.log(err);
       alert("!!");
     });
 };
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          {/*<Form onSubmit={handleSubmit} >
            <Container fluid>
              <div className="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="nom"
                  name="name"
                  value={result.name}
                  onChange={handleChange}
                />
              </div>
             
              <div className="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="email"
                  name="email"
                  value={result.email}
                  onChange={handleChange}
                />
              </div>
             
            </Container>
          </Form>*/}
          <button className="button is-info mr-2" onClick={onAnswersCheck}>
            résultat{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
