import { Home, Pricing, Blogs, Examples } from "./containers";
import { Header, Footer } from "./components";
import {
  Downloads,
  Teachable,
  Podcast,
  Events,
  Knowledge,
} from "./containers/";
import {
  AllFeatures,
  Coaching,
  Generator,
  DigitalDownloads,
  TeachablePay,
  OnlineCourses,
} from "./containers";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Examples" element={<Examples />} />
          <Route path="/Downloads" element={<Downloads />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Knowledge" element={<Knowledge />} />
          <Route path="/Podcast" element={<Podcast />} />
          <Route path="/Teachable" element={<Teachable />} />
          <Route path="/Generator" element={<Generator />} />
          <Route path="/AllFeatures" element={<AllFeatures />} />
          <Route path="/Coaching" element={<Coaching />} />
          <Route path="/DigitalDownloads" element={<DigitalDownloads />} />
          <Route path="/OnlineCourses" element={<OnlineCourses />} />
          <Route path="/TeachablePay" element={<TeachablePay />} /> */
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
