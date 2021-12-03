import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import { Homepage } from "./Pages/Homepage/Homepage";
import { Gallerypage } from "./Pages/Gallerypage/Gallerypage";
import { Aboutpage } from "./Pages/Aboutpage/Aboutpage";
import { Blogpage } from "./Pages/Blogpage/Blogpage";
import { Notfoundpage } from "./Pages/Notfoundpage/Notfoundpage";

import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="blog" element={<Blogpage />} />
          <Route path="gallery" element={<Gallerypage />} />
          <Route path="about/*" element={<Aboutpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
