import React from "react";
import EduviJoinAsTeacher from "pages/EduviJoinAsTeacher";
import Allmentors from "pages/Allmentors";
import Singlementordetails from "pages/Singlementordetails";
import Eduvifirst from "pages/Eduvifirst";
import Eduvi from "pages/Eduvi";
import EduviShop from "pages/EduviShop";
import EduviCourses from "pages/EduviCourses";
import EduviCoursesDetails from "pages/EduviCoursesDetails";
import EduviCoursesPricing from "pages/EduviCoursesPricing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Eduvifirst />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/eduvicoursespricing" element={<EduviCoursesPricing />} />
        <Route path="/eduvicoursesdetails" element={<EduviCoursesDetails />} />
        <Route path="/eduvicourses" element={<EduviCourses />} />
        <Route path="/eduvishop" element={<EduviShop />} />
        <Route path="/eduvi" element={<Eduvi />} />
        <Route path="/singlementordetails" element={<Singlementordetails />} />
        <Route path="/allmentors" element={<Allmentors />} />
        <Route path="/eduvijoinasteacher" element={<EduviJoinAsTeacher />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
