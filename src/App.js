import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./Components/AdminPanel"
import PropertyList from './Components/PropertyList';
import EditProperty from './Components/EditProperty';
import PropertyDetails from './Components/PropertyDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/" element={<AdminPanel />} />
        <Route path="/property-list" element={<PropertyList />} />
        <Route path="/edit-property" element={<EditProperty />} />
        <Route path="/property-details" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
