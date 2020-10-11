import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import SignUp from "./components/User/SignUp/SignUp";
import Login from "./components/User/Login/Login";
import UserProfile from "./components/User/UserProfile/UserProfile";
import confirmEmail from "./components/User/UserProfile/confirmEmail";
import PurchaseContainer from "./components/User/userPurchase/PurchaseContainer";
import OnlineStore from "./components/OnlineStore/OnlineStore";
import Buy from "./components/Buy/Buy";
import IButton from "./components/Home/IButton";
import ServiceHome from "./components/Service/ServiceHome";
import RequestDelivery from "./components/Delivery/RequestingDelivery/RequestDelivery";
import Update from "./components/User/UserProfile/Update";
import ForgetPassword from "./components/User/ForgetPassword/ForgetPassword";
import GetRecoverCode from "./components/User/ForgetPassword/GetRecoverCode";
import Logout from "./components/User/Logout/Logout";
import ChangePassword from "./components/User/ForgetPassword/ChangePassword";
import RequestDesign from "./components/Service/Design/RequestDesign";
import PaymentInfo from "./components/Service/Design/PaymentInfo";
import RequestRepair from "./components/Service/Repair/RequestRepair";
import PurchuseTable from "./components/User/userPurchase/PurchuseTable";
import DesignTable from "./components/User/userPurchase/DesignTable";
import DeliveryRequestsFromCustomer from "./components/Delivery/DeliveryRequestAdminView/DeliveryRequestsFromCustomer";
import AssignDriver from "./components/Delivery/AssignDriver/AssignDriver";
import DeliveredItems from "./components/Delivery/DeliveredItems/DeliveredItems";
import DeliveryCancellRequest from "./components/Delivery/DeliverCancelRequest/DeliveryCancellRequest";
import DeliveryDriver from "./components/Delivery/DeliveryDriver/DeliveryDriver";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import DashBoard from "./components/Admin/DashBoard/DashBoard";
import ManageAdmin from "./components/Admin/ManageAdmin/ManageAdmin";
import ConfirmDelivery from "./components/Delivery/ConfirmDelivery/ConfirmDelivery";
import UpdateDelivery from "./components/Delivery/DeliveryDriver/UpdateDelivery";
import DeliveryDriverReport from "./components/Delivery/DeliveryDriverReport/DeliveryDriverReport";
import ConfirmDriver from "./components/Delivery/DeliveryDriverReport/ConfirmDriver";
import Report from "./components/Delivery/DeliveryDriverReport/Report";
import Moredetails from "./components/Delivery/DeliveryDriverReport/Moredetails";
import CancelPage from "./components/Delivery/DeliverCancelRequest/CancelPage";
import ManageLeaveDashboard from "./components/LeaveManagement/ManageLeaveDashboard";
import RecentLeave from "./components/LeaveManagement/RecentLeave";
import ApplyLeave from "./components/LeaveManagement/ApplyLeave";
import EditLeave from "./components/LeaveManagement/EditLeave";
import EmployeeLeave from "./components/LeaveManagement/EmployeeLeave";
import LeaveReports from "./components/LeaveManagement/LeaveReports";
import ServiceDashBoard from "./components/Admin/ManageService/ServiceDashBoard";
import NewDesign from "./components/Admin/ManageService/NewDesign";
import OngoingDesign from "./components/Admin/ManageService/OngoingDesign";
import CompletedOrders from "./components/Admin/ManageService/CompletedOrders";
import PendingPayment from "./components/Admin/AdminPayment/PendingPayment";
import VerifyPayment from "./components/Admin/AdminPayment/VerifyPayment";
import VerifyOrder from "./components/User/userPurchase/VerifyOrder";
import RecordDashBoard from "./components/Admin/Record/RecordDashBoard";
import AdminLogs from "./components/Admin/Record/AdminLogs/AdminLogs";
import UserCancel from "./components/Delivery/DeliverCancelRequest/UserCancel";
import UserDelivercancel from "./components/Delivery/DeliverCancelRequest/UserDelivercancel";
import DeliveredMoreDetails from "./components/Delivery/DeliveredItems/DeliveredMoreDetails";
import Search from "./components/Delivery/DeliveryDriverReport/Search";
import Ongoingdeliveries from "./components/Delivery/OngoingDeliveries/Ongoingdeliveries";
import More from "./components/Delivery/OngoingDeliveries/More";
import SearchMore from "./components/Delivery/DeliveryDriverReport/SearchMore";
import AddAdmin from "./components/Admin/ManageAdmin/AddAdmin";
import ServiceLogs from "./components/Admin/Record/ServiceLogs/ServiceLogs";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <IButton />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={UserProfile} />
          <Route path="/confirmEmail" exact component={confirmEmail} />
          <Route path="/myDetails" exact component={PurchaseContainer} />
          <Route path="/onlinestore" exact component={OnlineStore} />
          <Route path="/buy" exact component={Buy} />
          <Route path="/services" exact component={ServiceHome} />
          <Route path="/requestdelivery" exact component={RequestDelivery} />
          <Route path="/update" exact component={Update} />
          <Route path="/forgetpassword" exact component={ForgetPassword} />
          <Route path="/recover" exact component={GetRecoverCode} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/updatepassword" exact component={ChangePassword} />
          <Route path="/requestdesign" exact component={RequestDesign} />
          <Route path="/paymnentinfo" exact component={PaymentInfo} />
          <Route path="/requestrepair" exact component={RequestRepair} />
          <Route path="/purchusetable" exact component={PurchuseTable} />
          <Route path="/requestrepair" exact component={RequestRepair} />
          <Route path="/del" exact component={DeliveryRequestsFromCustomer} />
          <Route path="/designtable" exact component={DesignTable} />
          <Route path="/AssignDriver" exact component={AssignDriver} />
          <Route path="/DeliveredItems" exact component={DeliveredItems} />
          <Route
            path="/DeliveryCancellRequest"
            exact
            component={DeliveryCancellRequest}
          />
          <Route
            path="/DeliveryDriverReport"
            exact
            component={DeliveryDriverReport}
          />
          <Route path="/UserCancel" exact component={UserCancel} />
          <Route
            path="/UserDelivercancel"
            exact
            component={UserDelivercancel}
          />
          <Route path="/DeliveryDriver" exact component={DeliveryDriver} />
          <Route path="/adminlogin" exact component={AdminLogin} />
          <Route path="/dashboard" exact component={DashBoard} />
          <Route path="/manageadmin" exact component={ManageAdmin} />
          <Route path="/ConfirmDelivery" exact component={ConfirmDelivery} />
          <Route path="/UpdateDelivery" exact component={UpdateDelivery} />
          <Route path="/ConfirmDriver" exact component={ConfirmDriver} />
          <Route path="/Report" exact component={Report} />
          <Route path="/More" exact component={Moredetails} />
          <Route path="/cancel" exact component={CancelPage} />
          <Route
            path="/manageLeaveDashboard"
            exact
            component={ManageLeaveDashboard}
          />
          <Route path="/recentLeave" exact component={RecentLeave} />
          <Route path="/applyLeave" exact component={ApplyLeave} />
          <Route path="/editLeave" exact component={EditLeave} />
          <Route path="/employeeLeave" exact component={EmployeeLeave} />
          <Route path="/LeaveReports" exact component={LeaveReports} />
          <Route path="/servicedashBoard" exact component={ServiceDashBoard} />
          <Route path="/newdesign" exact component={NewDesign} />
          <Route path="/ongoingdesign" exact component={OngoingDesign} />
          <Route path="/completedorders" exact component={CompletedOrders} />
          <Route path="/pendingpayment" exact component={PendingPayment} />
          <Route path="/verifypayment" exact component={VerifyPayment} />
          <Route path="/verifyorder" exact component={VerifyOrder} />
          <Route path="/recorddashboard" exact component={RecordDashBoard} />
          <Route path="/adminlogs" exact component={AdminLogs} />
          <Route
            path="/DeliveredMore"
            exact
            component={DeliveredMoreDetails}
          />
          <Route path="/search" exact component={Search}/>
    <Route path="/OngoingDelivery" exact component={Ongoingdeliveries}/>
    <Route path="/OngoingMore" exact component={More}/>
    <Route path="/SearchMore" exact component={SearchMore}/>
          <Route path="/addadmin" exact component={AddAdmin} />
          <Route path="/servicelogs" exact component={ServiceLogs} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
