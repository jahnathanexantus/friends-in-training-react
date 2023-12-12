import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home'
import Profile from "./pages/profile/Profile";
import ProfileItem from "../src/components/ProfileItems";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='profile' element={<Profile/>}/>
        <Route path='profileItem' element={<ProfileItem/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
