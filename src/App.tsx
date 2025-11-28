
// import './App.css'
// import Home from './pages/home'
// // import Home from"../arc/pages/";
// function App() {
 

//   return (
//     <>
//     <Home/>
//     </>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.tsx";
import Footer from "./components/footer.tsx";
import CreateDCL from "./components/hero";
import ChecklistReview from "./pages/ChecklistReview.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Always show Navbar */}
      
      <Routes>
        <Route path="/" element={<CreateDCL />} />
        <Route path="/review-checklist" element={<ChecklistReview />} />
      </Routes>

      <Footer /> {/* Always show Footer */}
    </BrowserRouter>
  );
}

export default App;
