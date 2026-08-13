import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FoodList from "./pages/FoodList";
import "./index.css"
import { Routes, Route} from "react-router-dom"
import DetailsPage from "./pages/DetailsPage"
import About from "./pages/About"


function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <main className="app-content">
         <Routes>
            <Route path="/" element={<FoodList />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipe/:id" element={<DetailsPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}
import { Form } from "react-router-dom";

export default App;
