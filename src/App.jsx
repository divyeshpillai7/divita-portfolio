import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import background from "./assets/background.jpg";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen text-white overflow-x-hidden">

        {/* 🌌 Background */}
        <div className="fixed inset-0 -z-10">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Optional Green Glow */}
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] 
            bg-green-500/10 rounded-full blur-3xl 
            -translate-x-1/2 -translate-y-1/2">
          </div>

        </div>

        {/* 🌐 Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;