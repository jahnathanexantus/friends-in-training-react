import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/landingPage/LandingPage";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import MatchProfiles from "./components/MatchProfiles";
import NavBar from "./components/NavBar";
import ChatPage from "./components/ChatPage";
import SelectedProfile from "./components/SelectedProfile";
import UploadPic from "./components/UploadPic";
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
              <LandingPage />
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
          path="/home"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route
          path="/uploadpic"
          element={
            <>
              <NavBar />
              <UploadPic />
            </>
          }
        />
        <Route
          path="/matchprofiles"
          element={
            <>
              <NavBar />
              <MatchProfiles />
            </>
          }
        />
        <Route
          path="/chat/:userId"
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
