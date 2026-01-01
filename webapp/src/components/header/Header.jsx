import "./Header.css";
import ScreechBankLogoBlack from "../../assets/ScreechBankHorizontalStacked.svg"


function Headers() {
    return(
        <header className="header">
        <div className="header-container">
            <div className="header-logo"> <img src={ScreechBankLogoBlack} alt="ScreechBank Logo"/></div>
            <nav className="header-nav footer-nav link-primary-black bold letter-spacing">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/services">Services</a>
                <a href="/customersupport" className="multi-line-center">Customer <br />Support</a>
                <a href="/about">About Us</a>
            </nav>
            <div className="header-actions">
                <button className="button-primary">Login</button>
                <button className="button-secondary-text">Sign Up</button>
            </div>
        </div>
        </header>        
    );
}
export default Headers;            