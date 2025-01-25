import socialPng from "../../assets/icons/social.png"

const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <aside>
                <h2 className="text-3xl font-semibold">CareerHub</h2>
                <p>Empowering careers, connecting opportunities <br />
                        – Your future starts here.</p>
                <img src={socialPng} className=" h-9" alt="" />
            </aside>
            <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;