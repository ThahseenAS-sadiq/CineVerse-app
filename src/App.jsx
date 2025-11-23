import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import Moviedetails from "./pages/Moviedetails";
import { WatchListProvider } from "./context/WatchListContext";
import Footer from "./pages/Footer";

function App() {
  return (
    <WatchListProvider>
      <div className="min-h-screen flex flex-col bg-gray-950">
        <BrowserRouter>

          {/* Navbar fixed at top */}
          <Navbar />

          {/* Page Content grows and pushes footer down */}
          <div className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watchlist" element={<WatchList />} />
              <Route path="/movie/:id" element={<Moviedetails />} />
            </Routes>
          </div>

          {/* Sticky Footer */}
          <Footer />

        </BrowserRouter>
      </div>
    </WatchListProvider>
  );
}

export default App;



