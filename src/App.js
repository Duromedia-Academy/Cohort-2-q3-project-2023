import { About, Downloads, Home } from "./containers";

import { Header, Footer } from "./components";

import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">

      <div>
      <Header/>
      </div>
      <div>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/about" element={<About  />} />
      </Routes>
      </div>
      <div>
      <Footer/>
      </div>
    
      
    </div>
  );
}

export default App;
