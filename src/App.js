import './App.css';

import Layout from "./Layout";
import NoPage from "./pages/NoPage";
import HomePage from "./HomePage";
import MatchupPage from "./pages/MatchupPage"

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
  	<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/:teams" element={<MatchupPage />} />

          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  	</>
  );
  }

export default App;
