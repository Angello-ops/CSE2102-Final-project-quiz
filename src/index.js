import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from './pages/About';
import Quiz from "./pages/Quiz";
import Score from "./pages/Score";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";

import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="Quiz" element={<Quiz q_prop={"Hello"} />} />
          <Route path="Score" element={<Score s_prop={"Score"} />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="thank-you" element={<ThankYou />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App />);
