import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Signup from './components/SignUp.jsx';
// import Login from './components/StateLogin.jsx';
// import Login from './components/StateLogin.jsx';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Signup />
      </main>
    </>
  );
}

export default App;