import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import ProfileItem from "./components/ProfileItems";
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
          path="/uploadpic"
          element={
            <>
              <NavBar />
              <UploadPic />
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
        {/* Add the route for the ChatPage component with user ID as a parameter */}
        <Route
          path="/chatpage/:userId"
          element={
            <>
              <NavBar />
              <ChatPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
