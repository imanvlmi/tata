import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";
import Profile from "./pages/profile/profile";
import PrivateRoute from "./components/privateRoute";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
