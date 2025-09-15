import Footer from "../components/Footer";
import Header from "../components/Header";

const Mainlayout = ({ children }) => {
    return (
        <>
            <Header />
                {children}
             <Footer />
        </>
    )
};

export default Mainlayout;