import './App.scss';
// import './index.css'
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
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
import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';
import Filieres from './pages/filieres/filieres';
import AddFiliere from './pages/filieres/addFiliere';
import Teachers from './pages/teacher/teachers';
import AddTeacher from './pages/teacher/addTeacher';
import { useLocalStorage } from './utils/localStorage';
import { useNavigate } from 'react-router-dom';
import e from 'cors';

function App() {
    // const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("user");
        if (saved != "undefined" && saved != null) {
            console.log(saved != "undefined");
            const initialValue = JSON.parse(saved || "");
            console.log(initialValue);
            return initialValue || "";
        } else {
            // console.log(saved != null);

            return null;

        }
    });

    function changeData(nom, prenom) {
        if (nom != userInfo.nom || prenom != userInfo.prenom) {

            setUserInfo({ ...userInfo, ['nom']: nom, ['prenom']: prenom });
            localStorage.setItem("user", JSON.stringify(userInfo));

            const evenData = {
                'nom': nom,
                'prenom': prenom,
                'id_utilisateur': userInfo.id_utilisateur,
            }
            console.log(evenData);
            update(evenData);
        }

    }


    async function update(evenData) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(evenData)
        };
        const response = await fetch('/updateUser', requestOptions);
        const data = await response.json();

        alert(data.message)
        if (data.code == 200) {
        }
    }


    // If the user is not logged in, redirect to the login page
    // if (!userInfo) {
    // navigate('/login');
    //     return <Navigate replace to="/login" />;
    // }
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/' element={<AppLayout user={userInfo} />}>
                    <Route index element={<Home title="Home" user={userInfo} />} />
                    <Route path='/class' element={<Class title="Class" user={userInfo} />} />
                    <Route path='/calendar' element={<CalendarView title="Calendar" user={userInfo} />} />

                    <Route path='/notices' element={<Notices title="Notices" user={userInfo} />} />
                    <Route path='/filieres' element={<Filieres title="Filieres" user={userInfo} />} />
                    <Route path='/teachers' element={<Teachers title="Teachers" user={userInfo} />} />
                    <Route path='/user' element={<User title="User" user={userInfo} changeData={changeData} />} />

                    {/* Sub-Routes */}
                    {/* class-------------------------------------- */}
                    <Route path="/class/notes" element={<Notes user={userInfo} />} />
                    <Route path="/class/notes/add" element={<AddNotes user={userInfo} />} />
                    <Route path="/class/devoirs" element={<Devoirs user={userInfo} />} />
                    <Route path="/class/devoirs/add" element={<AddDevois user={userInfo} />} />
                    <Route path="/class/add" element={<AddClass user={userInfo} />} />
                    {/* Calendar-------------------------------------- */}
                    <Route path="/calendar/add" element={<AddEven user={userInfo} />} />
                    {/* Filieres-------------------------------------- */}
                    <Route path="/filieres/add" element={<AddFiliere user={userInfo} />} />
                    {/* Teachers-------------------------------------- */}
                    <Route path='/teachers/add' element={<AddTeacher user={userInfo} />} />



                </Route>

            </Routes>
        </BrowserRouter>
    );

}

export default App;
