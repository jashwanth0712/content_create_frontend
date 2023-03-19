import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/homepage';
import SelectIndustry from './components/selectindustry';
import Forms from './components/form';
import './App.css'


function App() {
  return (
    
    <div>
          
          <Router>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/form/:domain' element={<Forms />}></Route>
              <Route path='/content-select' element={<SelectIndustry/>} ></Route>
            </Routes>
         </Router>

    </div>
   
  );
}


export default App
