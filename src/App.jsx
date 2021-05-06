import {Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
// import  Nav  from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
import Logo from './assests/logo.png'
import { GrSearch } from "react-icons/gr";
import Ad from './components/Ad'

const App = () => {
return <> 
      {/* <Button variant="primary" style = {{margin:'50px', width:'120px',height:'50px'}}>Primary</Button>{' '} */}
    <Navbar className = 'd-flex flex-row justify-content-around'  variant='dark' style = {{backgroundColor:'#FAB011'}}>
    <Navbar.Brand href = '#'><img src ={Logo} alt="" height="80px"/> </Navbar.Brand>

    {/* <Nav className = 'ml-auto'>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Home</Nav.Link>
    </Nav> */}

    <Form  className = 'search_Bar'>
      <FormControl type="text"className="searchBar" />
    <div className="glass">
    <GrSearch/>
    </div>
    </Form>

    <div className="">ICON</div>
    </Navbar>

</>
}

export default App