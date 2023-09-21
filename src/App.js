import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Layout from './pages/layout/Layout';
import Action from './pages/action/Action';
import Work from './pages/work/Work';
import Blog from './pages/blog/Blog'

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/action' element={<Action/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Route>
     </Routes>  
    </div>
  );
}

export default App;
