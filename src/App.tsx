import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ALL PROJECTS */}
        <Route
          path="/projects"
          element={<Projects />}
        />

        {/* SINGLE PROJECT */}
        <Route
          path="/projects/:id"
          element={<ProjectDetail />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;