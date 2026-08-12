import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FoodList from "./components/FoodList";
import "./index.css"

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <main className="app-content">
            <FoodList />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
