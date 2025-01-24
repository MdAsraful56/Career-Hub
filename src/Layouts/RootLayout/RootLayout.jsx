import { Outlet } from "react-router";
import Navber from "../../components/Navber/Navber";
import Footer from "../../components/Footer/Footer";


const RootLayout = () => {
    return (
        <div>
            <Navber />

            <Outlet />

            <Footer />
        </div>
    );
};

export default RootLayout;