import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
// import Blank from './pages/Blank';t
import Home from './pages/Home'
import Class from './pages/class/Class'
import CalendarView from './pages/Calendar'
import Grade from './pages/Grade'
import User from './pages/User'
import Notes from "./pages/class/notes";
import Devoirs from './pages/class/devoirs';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Home title="Home" />} />
                    <Route path='/class' element={<Class title="Class" />} />
                    <Route path='/calendar' element={<CalendarView title="Calendar" />} />
                    <Route path='/grade' element={<Grade title="Grade" />} />
                    <Route path='/user' element={<User title="User" />} />

                    {/* Sub-Routes */}

                    <Route path="/class/notes" element={<Notes />} />
                    <Route path="/class/devoirs" element={<Devoirs />} />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
