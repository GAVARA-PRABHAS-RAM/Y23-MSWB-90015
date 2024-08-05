import logo from './logo.png';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Student from './Components/Student';
import Courses from './Components/Courses';
import User from './Components/User';
import './App.css';
import Faculty from './Components/Faculty';
const user={logo: logo}
function App() {
  return (
    <div className="App">
      <Header></Header>
      <img src={user.logo}></img>
       <Student></Student>
      <Faculty></Faculty>
      <Courses></Courses>
      <Footer></Footer>
    </div>
  );
}

export default App;
