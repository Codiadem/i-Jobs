import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Choice from "./pages/Choice";
import FindJobPage from "./pages/FindJobPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/choose" element={<Choice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/find-jobs" element={<FindJobPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
