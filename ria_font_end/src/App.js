import './App.scss';
// import './index.css'
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
// import Blank from './pages/Blank';t
import Home from './pages/Home';
import Class from './pages/class/Class'
import CalendarView from './pages/calendar/Calendar'
import User from './pages/User'
import Notes from "./pages/class/notes/notes";
import Devoirs from './pages/class/devoirs/devoirs';
import AddEven from './pages/calendar/addEven';
import AddClass from './pages/class/addClass';
import AddNotes from './pages/class/notes/addNotes';
import AddDevois from './pages/class/devoirs/addDevoirs';
import Notices from './pages/Notices';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Home title="Home" />} />
                    <Route path='/class' element={<Class title="Class" />} />
                    <Route path='/calendar' element={<CalendarView title="Calendar" />} />
                    <Route path='/notices' element={<Notices title="notices" />} />
                    <Route path='/user' element={<User title="User" />} />

                    {/* Sub-Routes */}

                    <Route path="/class/notes" element={<Notes />} />
                    <Route path="/class/notes/add" element={<AddNotes />} />

                    <Route path="/class/devoirs" element={<Devoirs />} />
                    <Route path="/class/devoirs/add" element={<AddDevois />} />


                    <Route path="/class/add" element={<AddClass />} />




                    <Route path="/calendar/add" element={<AddEven />} />


                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
