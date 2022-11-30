import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footerComponent';
import {Route, Routes } from 'react-router-dom'
import About from './components/mainComponent/about/about';
import Mongo from './components/mainComponent/mongo/mongo';
import Gomoku from './components/mainComponent/games/gomoku';
import ReduxStore from './components/mainComponent/reduxStore/reduxStore';
import NavBarStrap from './components/navComponent';
import NoPage from './components/mainComponent/noPage';

function App() {
  return (
        <div className="body">
          <div className="topnav" >
            <NavBarStrap/>
          </div>
          <div className="content">
            <Routes>
              <Route path='/' element={<About/>}/>
              <Route path='/mongo' element={<Mongo/>}/>
              <Route path='/gomoku' element={<Gomoku/>}/>
              <Route path='/redux' element={<ReduxStore/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/*' element={<NoPage/>}/>
            </Routes>
          </div>
          <div className="footer" ><Footer/></div>
        </div>
    
  );
}

export default App;