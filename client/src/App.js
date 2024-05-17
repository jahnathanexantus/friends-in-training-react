import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import ProfileItem from "../src/components/ProfileItems";
import NavBar from "./components/NavBar";
import ChatPage from "./components/ChatPage";
import SelectedProfile from "./components/SelectedProfile";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <NavBar />
              <Profile />
            </>
          }
        />
        <Route
          path="/profileItem"
          element={
            <>
              <NavBar />
              <ProfileItem />
            </>
          }
        />
        <Route
          path="/chatpage"
          element={
            <>
              <NavBar />
              <ChatPage />
            </>
          }
        />
        <Route
          path="/selectedprofile/:id"
          element={
            <>
              <NavBar />
              <SelectedProfile />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
