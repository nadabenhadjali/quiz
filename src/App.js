import "./App.css";

import "bulma/css/bulma.min.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Quiz from "./pages/quiz";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/Quiz/:id" />} />
          <Route path="/Quiz/:id" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
