/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
   render() {

    const {  location } = this.props
    let pathname = location.pathname

    return (
        <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-dashboard" /> <span> Dashboard</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('main/dashboard') ?"active" :""} href="/light/app/main/dashboard">Admin Dashboard</a></li>
                  <li><a className={pathname.includes('main/employee-') ?"active" :""}
                        href="/light/app/main/employee-dashboard">Employee Dashboard</a></li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-cube" /> <span> Apps</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a href="/light/conversation/chat">Chat</a></li>

              </ul>
              </li>
              <li className="menu-title">
                <span>Employees</span>
              </li>
              <li className="submenu">
                <a href="#" className="noti-dot"><i className="la la-user" /> <span> Employees</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('allemployees') ?"active" :pathname.includes('employees-list') ?"active" :""}
                        href="/light/app/employee/allemployees">All Employees</a></li>
                  <li><a className={pathname.includes('holidays') ?"active" :""} href="/light/app/employee/holidays">Holidays</a></li>
                  <li><a className={pathname.includes('es-admin') ?"active" :""} href="/light/app/employee/leaves-admin">Leaves (Admin) <span className="badge badge-pill bg-primary float-right">1</span></a></li>
                  <li><a className={pathname.includes('ves-employee') ?"active" :""} href="/light/app/employee/leaves-employee">Leaves (Employee)</a></li>
                  <li><a className={pathname.includes('e-settings') ?"active" :""} href="/light/app/employee/leave-settings">Leave Settings</a></li>
                  <li><a className={pathname.includes('nce-admin') ?"active" :""} href="/light/app/employee/attendance-admin">Attendance (Admin)</a></li>
                  <li><a className={pathname.includes('ce-employee') ?"active" :""} href="/light/app/employee/attendance-employee">Attendance (Employee)</a></li>
                  <li><a className={pathname.includes('departments') ?"active" :""} href="/light/app/employee/departments">Departments</a></li>
                  <li><a className={pathname.includes('designations') ?"active" :""} href="/light/app/employee/designations">Designations</a></li>
                 <li><a className={pathname.includes('overtime') ?"active" :""} href="/light/app/employee/overtime">Overtime</a></li>
                </ul>
              </li>



              <li className={pathname.includes('tickets') ?"active" :""}>
                <a href="/light/app/employees/tickets"><i className="la la-ticket" /> <span>Tickets</span></a>
              </li>






              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-user" /> <span> Profile </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('profile/employee-') ?"active" :""} href="/light/app/profile/employee-profile"> Employee Profile </a></li>
               </ul>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-key" /> <span> Authentication </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a href="/light/login"> Login </a></li>
                  <li><a href="/light/register"> Register </a></li>
                  <li><a href="/light/forgotpassword"> Forgot Password </a></li>
                  <li><a href="/light/otp"> OTP </a></li>
                  <li><a href="/light/lockscreen"> Lock Screen </a></li>
                </ul>
              </li>


              <li className="submenu">
                <a href="#"><i className="la la-columns" /> <span> Pages </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('pages/search') ?"active" :""} href="/light/app/pages/search"> Search </a></li>
                  <li><a className={pathname.includes('pages/faq') ?"active" :""} href="/light/app/pages/faq"> FAQ </a></li>
                  <li><a className={pathname.includes('pages/terms') ?"active" :""} href="/light/app/pages/terms"> Terms </a></li>
                  <li><a className={pathname.includes('privacypolicy') ?"active" :""} href="/light/app/pages/privacypolicy"> Privacy Policy </a></li>
                  <li><a className={pathname.includes('pages/blank') ?"active" :""} href="/light/app/pages/blank"> Blank Page </a></li>
                </ul>
              </li>



            </ul>
          </div>
        </div>
      </div>

      );
   }
}

export default withRouter(Sidebar);
