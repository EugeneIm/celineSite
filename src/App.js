import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Community from './Pages/Community';
import Merch from './Pages/Merch';
import '../src/Styling/Home.css'

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
          <main>
            <Routes>
              <Route path = "/" element = {<HomePage/>}/>
              <Route path = "/merch" element = {<Merch/>}/>
              <Route path = "/community" element = {<Community/>}/>
            </Routes>
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;