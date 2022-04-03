import {
  BrowserRouter as Router,
  Routes,
  Route,
}from"react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";



function App() {
  return (
  <Router>
    <Routes>
      <Route path="/detail" element={<Detail/>}></Route>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
  </Router>
  )
}

export default App;
 