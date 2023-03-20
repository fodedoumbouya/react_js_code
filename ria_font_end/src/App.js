import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import Home from './pages/Home'
import Class from './pages/Class'
import Calendar from './pages/Calendar'
import Grade from './pages/Grade'
import User from './pages/User'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Home title="Home" />} />
                    <Route path='/class' element={<Class title="Class" />} />
                    <Route path='/calendar' element={<Calendar title="Calendar" />} />
                    <Route path='/grade' element={<Grade title="Grade" />} />
                    <Route path='/user' element={<User title="User" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
