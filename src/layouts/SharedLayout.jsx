import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";

const SharedLayout = () => {
    return (
        <div>
            <header className="">
                <Header></Header>
            </header>
            <section className="container mx-auto my-40 p-5 md:p-0">
                <Outlet></Outlet>
            </section>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default SharedLayout;