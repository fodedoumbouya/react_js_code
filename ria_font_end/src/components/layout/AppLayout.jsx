import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import AppHeader from "../header";
const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <AppHeader />
        <Sidebar clas> </Sidebar>
        <Outlet />
    </div>;
};

export default AppLayout;
