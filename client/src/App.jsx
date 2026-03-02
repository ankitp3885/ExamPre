import { Route, BrowserRouter as Router, Routes } from "react-router";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import Examination from "./pages/admin/Examination";
import QuestionBank from "./pages/admin/QuestionBank";
import Login from './pages/Login';
import Registration from "./pages/Registration";
import Session from "./pages/Session";
import Subject from "./pages/Subject";

import Getexams from "./pages/user/Getexams";
import Myexams from "./pages/user/Myexams";
import Myresult from "./pages/user/Myresult";
import UserDashboard from "./pages/user/UserDashboard";
import Message from "./pages/user/Message";
import ChangePassword from "./pages/user/ChangePassword";
import DashboardHome from "./pages/user/DashboardHome";
import Examinee from "./pages/admin/Examinee";
import ReportGeneration from "./pages/admin/ReportGeneration";

import MessageReply from "./pages/admin/MessageReply";
import AdminChangepassword from "./pages/admin/AdminChangepassword";


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/adminlogin" element={<AdminLogin />}></Route>

        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route path='session' element={<Session />}></Route>
          <Route path='subject' element={<Subject />}></Route>
          <Route path='examination' element={<Examination />}></Route>
          <Route path='questionbank' element={<QuestionBank />}></Route>
          <Route path="subject" element={<Subject />}></Route>
          <Route path="examination" element={<Examination />}></Route>
          <Route path="questionbank" element={<QuestionBank />}></Route>
          <Route path="examinee" element={<Examinee />}></Route>
          <Route path="reportgeneration" element={<ReportGeneration />}></Route>
        <Route path="adminchangepassword" element={<AdminChangepassword/>}></Route>
          <Route path="messagereply" element={<MessageReply />}></Route>
       
          
        </Route>
        <Route path="userDashboard" element={<UserDashboard />}>
          <Route index element={<DashboardHome />}></Route>
          <Route path="myexams" element={<Myexams />} />
          <Route path="myresult" element={<Myresult />} />
          <Route path="getexam/:id" element={<Getexams />} />
          <Route path='message' element={<Message />}></Route>
          <Route path='changepassword' element={<ChangePassword />}></Route>
        </Route>


      </Routes>


    </Router>
  );
}

export default App;
