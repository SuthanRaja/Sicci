import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage  from './Components/Pages/LoginPage';
import Home from './Components/Pages/Home';
import HallBooking from './Components/Pages/HallBooking';
import User from './Components/Pages/MasterTables/User';
import Role from './Components/Pages/MasterTables/Role';
import LoanType from './Components/Pages/MasterTables/LoanType';
import Arbitrator from './Components/Pages/MasterTables/Arbitrator';
import Customer from './Components/Pages/MasterTables/Customer';
import Hall from './Components/Pages/MasterTables/Hall';
import IAAReport from './Components/Pages/Reports/IAAReport';
import HallBookingReport from './Components/Pages/Reports/HallBookingReport';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hall-booking" element={<HallBooking />} />
        <Route path="/user" element={<User/>} />
        <Route path="/role" element={<Role />} />
        <Route path="/loan-type" element={<LoanType/>} />
        <Route path="/arbitrator" element={<Arbitrator />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/hall" element={<Hall />} />
        <Route path="/iaa-report" element={<IAAReport />} />
        <Route path="/hall-report" element={<HallBookingReport />} />
      </Routes>
    </Router>
  );
};

export default App;
