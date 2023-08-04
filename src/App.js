import React, { useState } from "react";
import {  Home, Courses,Online,OnSight,} from "./containers";
import { Header, Footer } from "./components";
import { Downloads,Teachable,Podcast,Events,Knowledge } from "./containers/";
import { AllFeatures,Coaching,Generator,DigitalDownloads,TeachablePay,OnlineCourses } from "./containers";
import { Routes, Route, useLocation } from "react-router-dom";
import { BlogHome, Creativity, Marketing, Mindset, Money, News } from "./containers/";
import  FrontEnd  from "./containers/Courses/FrontEnd/FrontEnd"


function App() {

  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);

  const shouldShowHeader = () => {
    const pathsWithoutHeader = ['/Podcast', '/Downloads', '/BlogHome', '/Creativity', '/Marketing', '/Mindset', '/Money', '/News']; 
    return !pathsWithoutHeader.includes(location.pathname);
  };

  React.useEffect(() => {
    setShowHeader(shouldShowHeader());
  }, [location]);



  return (
    <div className="App">
      {showHeader &&
              <div>
              <Header/>
              </div>
      }

      <div>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/Courses" element={<Courses  />} />
        <Route path="/Online" element={<Online />} />
        <Route path="/OnSight" element={<OnSight  />} />
         <Route path="/Downloads" element={<Downloads />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Knowledge" element={<Knowledge />} />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/Teachable" element={<Teachable />} />
         <Route path="/Generator" element={< Generator />} />
        <Route path="/AllFeatures" element={<AllFeatures />} />
        <Route path="/Coaching" element={<Coaching />} />
        <Route path="/DigitalDownloads" element={<DigitalDownloads />} />
        <Route path="/OnlineCourses" element={<OnlineCourses />} />
        <Route path="/TeachablePay" element={<TeachablePay />} /> 
        <Route path="/FrontEnd" element={<FrontEnd />} /> 
        <Route path="/BlogHome" element={<BlogHome />} /> 
        <Route path="/Creativity" element={<Creativity />} /> 
        <Route path="/Marketing" element={<Marketing />} /> 
        <Route path="/Mindset" element={<Mindset />} /> 
        <Route path="/Money" element={<Money />} /> 
        <Route path="/News" element={<News />} /> */
      </Routes>
      </div>
      <div>
      <Footer/>
      </div>
    
      
    </div>
  );
}

export default App;
