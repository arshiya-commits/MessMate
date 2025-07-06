
import Suggestions from "./components/Suggestions"
import FeedBack from "./components/FeedBack"
import Login from "./components/Login"
import Home from "./components/Home"
import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
       <BrowserRouter>
      <Routes>
        {/* Login page without navbar */}
        <Route path="/" element={<Login />} />

        {/* Pages with navbar */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/feedback" element={<FeedBack />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </>
   
  )
}

export default App
