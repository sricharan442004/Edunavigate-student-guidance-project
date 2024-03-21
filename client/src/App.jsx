import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Intermediate from "./Components/Intermediate";
import CareerPath from "./Components/CareerPath";
import CoursesAfter12 from "./Components/CoursesAfter12";
import Exams from "./Components/Exams";
import CoursesAfterUG from "./Components/CousesAfterUG";
import Error404 from "./Components/Error404";
import Schools from "./Components/Schools";
import LiveWebinars from "./Components/LiveWebinars";
import Admin from "./Components/Admin";
import ScheduleWebinar from "./Components/ScheduleWebinar";
import Aboutus from "./Components/Aboutus";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');
    const documentName = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'Home';
    document.title = `EduNavigate - ${documentName}`;
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<><NavBar/><Home/></>}></Route>
        <Route path="/GetSchoolsLists" element={<Schools/>}></Route>
        <Route path="/GetCoursesAfter10" element={<Intermediate/>}></Route>
        <Route path="/GetCoursesAfter12" element={<CoursesAfter12/>}></Route>
        <Route path="/careerpath" element={<CareerPath/>}></Route>
        <Route path="/exams" element={<Exams/>}></Route>
        <Route path="/coursepg" element={<CoursesAfterUG/>}></Route>
        <Route path="/404" element={<Error404/>}></Route>
        <Route path="/livewebinars" element={<LiveWebinars/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/schedulewebinar" element={<ScheduleWebinar/>}></Route>
        <Route path="/about-us" element={<Aboutus/>}></Route>

        <Route path="*" element={<Error404/>}></Route>
      </Routes>
    </>
  );
}

export default App;
