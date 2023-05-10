import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index.js";
import Show from "./Pages/Show.js";

import NewSnack from "./Components/NewSnack";
import Edit from "./Pages/Edit.js";
import Nav from "./Components/NavBar";
import Home from "./Pages/Home";
import FourOFour from "./Pages/FourOFour";

function App() {
  return (
    <div className="App">
     <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Index />} />
          <Route path="/snacks/:id" element={<Show/>} />
          <Route path="/snacks/new" element={<NewSnack />} />
          <Route path="/snacks/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
      <h4>Snack-A-Log!</h4>
    </div>
  );
}

export default App;
