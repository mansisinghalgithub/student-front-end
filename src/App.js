import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation';
import { Home } from './Pages/Home';
import { BrowserRouter, Route,Routes, useLocation } from 'react-router-dom';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Feedback } from './Pages/Feedback';
import { Courses } from './Pages/Courses';
// import LoginPage from './Pages/LoginPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import { Footer } from './Component/footer';
import { StdList } from './Pages/StdList';
import { StudentRegistration } from './Component/StudentRegistration';
// import { StudentEditForm } from './Pages/StudentEditForm';
import { STUDENT_EDIT_ROUTE } from './constants/AppRoute';
import { StudentEditForm } from './Component/StudentEditForm';
import { PrivateRoute } from './Component/privateRoute';


function App() {

  const location = useLocation();
  const showNavAndFooter = location.pathname!=='/';

  return (
    <>
    {showNavAndFooter && <Navigation/>}
    <Routes>
    <Route  path='/' element={< LoginPage />} />
    <Route  path='/signup' element={< SignUpPage />} />
    <Route element = {<PrivateRoute/>}>
    <Route  path='/home' element={< Home />} />
    <Route  path='/about' element={< About />} />
      <Route  path='/contact' element={< Contact />} />
      <Route  path='/feedback' element={< Feedback />} />
      <Route  path='/course' element={< Courses />} />
      <Route  path='/signup' element={< SignUpPage />} />
      <Route  path='/studentregistration' element={< StudentRegistration/>} />
      <Route  path='/students-list' element={< StdList/>} />
      <Route path={STUDENT_EDIT_ROUTE} element={<StudentEditForm/>} />
    </Route>
    </Routes>
    {showNavAndFooter && <Footer/>}
    </>
  );
}

export default function Main() {
  return (
      <BrowserRouter>
          <App />
      </BrowserRouter>
  );
}
