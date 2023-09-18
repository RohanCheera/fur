import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Layout from './pages/layout/Layout';
import Contact from './pages/contact/Contact';
import Notifications from './pages/notifications/Notifications';
import Profile from './pages/profile/Profile'

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/notifications' element={<Notifications/>}/>
      <Route path='/profile' element={<Profile/>}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
