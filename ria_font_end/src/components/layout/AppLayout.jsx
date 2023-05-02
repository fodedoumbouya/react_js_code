import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import AppHeader from "../header";
import Footer from "../footer";
const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <AppHeader />
        <Sidebar clas> </Sidebar>
        <Outlet />
        <Footer />
    </div>;
};

export default AppLayout;
