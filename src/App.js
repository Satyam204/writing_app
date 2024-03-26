import './App.css';
import Header from './components/header/header';
import Add from './components/pages/add';
import All from './components/pages/all';
import Text from './components/pages/text';
import Photo from './components/pages/photo';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Add/>}exact />
          <Route path="/photo" element={<Photo />} />
          <Route path="/all" element={<All />} />
          <Route path="/text" element={<Text />} />
        </Routes>
       </div>
        </BrowserRouter>
  );
}

export default App;
