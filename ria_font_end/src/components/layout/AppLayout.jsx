import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import AppHeader from "../header";
import Footer from "../footer";
import { useNavigate } from 'react-router-dom';
const AppLayout = (props) => {
    const navigate = useNavigate();
    if (props.user == null) {
        navigate('/login');

    };
    console.log(props.user);
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        {/* {props.user == null ? navigate('/login') :
            <> */}
        <AppHeader user={props.user} />
        <Sidebar user={props.user}>
        </Sidebar>
        <Outlet />
        <Footer />
        {/* </>
         } */}
    </div>;
};

export default AppLayout;
