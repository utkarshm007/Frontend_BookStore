import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/page/Home/Home";
import ProductList from "./components/page/Product list/ProductList";
import ProductDetails from "./components/page/ProductDetails/ProductDetails";
import Cart from "./components/page/Cart/Cart";
import AddressDetails from "./components/page/Cart/AddressDetails";
import Payment from "./components/page/Cart/Payment";
import OrderConfiramation from "./components/page/Cart/OrderConfiramation";
import Register from "./components/page/Login/Register";
import Login from "./components/page/Login/Login";
import VerifyOtp from "./components/page/Login/VerifyOtp";
import User from "./components/User/User";
import ManageAddress from "./components/User/manage address/ManageAddress";
import ChangePaassword from "./components/User/Change Password/ChangePaassword";
import ManageOrders from "./components/User/Orders/ManageOrders";
import Search from "./components/page/Search/Search";
import AboutUs from "./components/page/AboutUs/aboutUs";
import Privacy from "./components/page/Privacy/privacy";
import Terms from "./components/page/Terms&Condition/terms";
import ContactUs from "./components/page/ContactUs/ContactUs";
import UpdateAddress from "./components/User/manage address/UpdateAddress";
import Wishlist from "./components/page/Wishlist/Wishlist";
import AddAddress from "./components/page/Cart/AddAddress";
import OrderDetails from "./components/User/Orders/OrderDetails";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminLogin from "./components/page/AdminLogin/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <div className="all-bg">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart/address" element={<AddressDetails />} />
          <Route path="/cart/addnewaddress" element={<AddAddress />} />
          <Route path="/cart/payment" element={<Payment />} />
          <Route path="/order/confiramation" element={<OrderConfiramation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verifyotp" element={<VerifyOtp />} />
          <Route path="/myaccount" element={<User />} />
          <Route path="/me/manageaddress" element={<ManageAddress />} />
          <Route path="/me/updateaddress/:addressId" element={<UpdateAddress />} />
          <Route path="/me/changepassword" element={<ChangePaassword />} />
          <Route path="/me/orders" element={<ManageOrders />} />
          <Route path="/me/orderdetails/:orderId" element={<OrderDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-conidtions" element={<Terms />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminSignUp" element={<AdminLogin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;




