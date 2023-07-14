import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./Components/AdminPanel"
import PropertyList from './Components/PropertyList';
import EditProperty from './Components/EditProperty';
import PropertyDetails from './Components/PropertyDetails';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/property-list" element={<PropertyList />} />
        <Route path="/edit-property/:id" element={<EditProperty />} />
        <Route path="/property-details/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
