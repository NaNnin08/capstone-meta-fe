import { Route, Routes } from "react-router-dom";

// css
import "./App.css";

// component
import Layout from "./components/Layout";

// pages
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import SuccessPage from "./pages/SuccessPage";
import LoginPage from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/success" element={<SuccessPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

