import { Outlet } from "react-router-dom";
// import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";

const HomeLayout = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <section className="">
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;