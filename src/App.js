import './App.css';
import { AddComputer } from './pages/AddComputer';
import { AddTotalInventory } from './pages/AddTotalInventory';
import { CreateStore } from './pages/CreateStore';
import { GenerateInventory } from './pages/GenerateInventory';
import { RemoveStore } from './pages/RemoveStore';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './pages/Menu';

function App() {
  return (
    <>
    <nav>
      <h1>EZConsignment</h1>
      <ul>
        <li><Link to="/addcomputer">Add Computer</Link></li>
        <li><Link to="/addtotalinventory">Add Total Inventory</Link>"</li>
        <li><Link to="/createstore">Create Store</Link></li>
        <li><Link to="/generateinventory">Generate Inventory</Link></li>
        <li><Link to="/removestore">Remove Store</Link></li>
      </ul>
    </nav>
    <hr></hr>



    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/addcomputer" element={<AddComputer />} />
      <Route path="/addtotalinventory" element={<AddTotalInventory />} />
      <Route path="/createstore" element={<CreateStore />} />
      <Route path="/generateinventory" element={<GenerateInventory />} />
      <Route path="/removestore" element={<RemoveStore />} />
    </Routes>
    </>
  );
}

export default App;
