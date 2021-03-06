import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
// import Navbar from 'react-bootstrap/Navbar'
// import  Nav  from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
import DataNames from "./pages-data";

import Logo from "../assests/logo.png";
import { GrSearch } from "react-icons/gr";
// import Ad from "./components/Ad";
import Faker from "faker";
 
const NavBar = ({ setActive }) => {
  return (
    <>
      <Navbar
        className="d-flex flex-row justify-content-around"
        variant="dark"
        style={{ backgroundColor: "rgba(248, 142, 80, 0.9)"}}
      >
        <Navbar.Brand href="#">
          <img src={Logo} alt="" height="80px" />
        </Navbar.Brand>
        {/* <Nav className = 'ml-auto'>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Home</Nav.Link>
    </Nav> */}
    
 
        {/* <div className="icon d-flex align-items-center">
          <img src={Faker.image.avatar()} alt="" />
          <div className="fname ps-2" style={{ fontWeight: "bold", color:'black'}}>
            {Faker.name.firstName()}
          </div>
        </div> */}
        <Nav style = {{width:'400px'}} d-flex className = 'justify-content-between'>
        {DataNames.map((obj, i) => (
            <Nav.Link key={i} className = 'nav-item' style={{ color: "white", fontWeight: "bold",fontSize:'17px'}} onClick = {() => {setActive(obj.name)}}>
              {obj.name}
            </Nav.Link>
          ))}
        </Nav>

        <Form>
          <div className="glass">
            <input className="search" type="text" className="searchBar" />
 
            <GrSearch className="search-icon" />
          </div>
        </Form>
      </Navbar>
    </>
  );
};
 
export default NavBar;
