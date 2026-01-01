import "./Footer.css";
import ScreechBankHorizontalLogoWhite  from "../../assets/ScreechBankHorizontalWhite.svg";
import LinkedInLogoWhite from "../../assets/linkedinWhite.svg";
import FacebookLogoWhite from "../../assets/facebookWhite.svg";
import TwitterLogoWhite from "../../assets/xWhite.svg";
import InstagramLogoWhite from "../../assets/instagramWhite.svg";


function Footers() {
    return(
        <footer className="footer">
            <div className="footer-container">
                <section className="footer-top">
                    <div className="footer-col">
                    <h5>Company</h5>
                    <ul className="footer-cols no-bullets-list body-regular link-muted-white">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/blog">Press & Media</a></li>
                        <li><a href="/sustainability">Sustainability</a></li>
                    </ul>
                    </div>

                    <div className="footer-col">
                        <h5>Support</h5>
                        <ul className="footer-cols no-bullets-list body-regular link-muted-white">
                            <li><a href="/help-center">Help Center</a></li>
                            <li><a href="/contact-us">Contact Us</a></li>
                            <li><a href="/security">Security & Fraud Prevention</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h5>Legal</h5>
                        <ul className="footer-cols no-bullets-list body-regular link-muted-white">
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms & Conditions</a></li>
                            <li><a href="/cookie">Cookie Policy</a></li>
                            <li><a href="/regulatory">Regulatory Statements</a></li>
                        </ul>
                    </div>

                    <div className="footer-subscribe">
                        <h5>Subscribe</h5>
                        <p>Stay updated with new features, promotions, and security alerts.</p>
                        <form>
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </section>

                <section className="footer-middle">
                    <div className="footer-middle-tagline body-regular">
                        <p>Reliable, secure, and built to support your financial journey.</p>
                    </div>
                    <div className="footer-middle-copyright body-regular">
                        <p>© 2026 Screech Bank Inc. All rights reserved.</p>
                    </div>
                </section>
                <hr className="separator"/>
                <section className="footer-bottom">
                    <div className="footer-bottom-logo">
                        <img src={ScreechBankHorizontalLogoWhite} alt="Screech Bank Logo" />
                    </div>
                    <nav className="footer-nav link-primary-white bold letter-spacing">
                        <a href="/">Home</a>
                        <a href="/products">Products</a>
                        <a href="/services">Services</a>
                        <a href="/customersupport">Customer Support</a>
                    </nav>
                    <div className="footer-social">
                        <a href="https://facebook.com" aria-label="Facebook" className="social-icon facebook-icon"><img src={FacebookLogoWhite} alt="Facebook Logo" /></a>
                        <a href="https://twitter.com" aria-label="Twitter" className="social-icon twitter-icon"><img src={TwitterLogoWhite} alt="X Logo" /></a>
                        <a href="https://linkedin.com" aria-label="LinkedIn" className="social-icon linkedin-icon"> <img src={LinkedInLogoWhite} alt="LinkedIn Logo" /></a>
                        <a href="https://instagram.com" aria-label="Instagram" className="social-icon instagram-icon"><img src={InstagramLogoWhite} alt="Instagram Logo" /></a>  
                    </div>
                </section>
            </div>
        </footer>
    );
}

export default Footers;