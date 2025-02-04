import './App.css';

import './Styles/reset.css'
import './Styles/vars.css'

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';


function App() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
