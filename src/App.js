
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/Home/HomePage/HomePage';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Book from './components/Dashboard/DashboardBody/Book/Book';
import AddAdmin from './components/Dashboard/DashboardBody/AddAdmin/AddAdmin';
import AddService from './components/Dashboard/DashboardBody/AddService/AddService';
import BookingList from './components/Dashboard/DashboardBody/BookingList/BookingList';
import ManageService from './components/Dashboard/DashboardBody/ManageServices/ManageService';
import OrderList from './components/Dashboard/DashboardBody/OrderList/OrderList';
import Review from './components/Dashboard/DashboardBody/Review/Review';
import UserRoute from './components/UserRoute/UserRoute';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  // loggedInUser.isAdmin = true;

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <UserRoute path="/book/:id">
            <Book></Book>
          </UserRoute>
          <UserRoute path="/book">
            <Book></Book>
          </UserRoute>
          <UserRoute path="/bookingList">
            <BookingList></BookingList>
          </UserRoute>
          <PrivateRoute path="/manageServices">
            <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList></OrderList>
          </PrivateRoute>
          <UserRoute path="/review">
            <Review></Review>
          </UserRoute>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
