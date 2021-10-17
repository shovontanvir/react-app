// import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div>
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href="/">Ristronate Con fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
