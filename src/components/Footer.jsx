import logo from '../assets/logo-light.png'

const Footer = () => {
    return (
        <>
            <footer className="bg-[#333d47]">
                <div className="footer py-20 text-base-content container max-w-7xl mx-auto">
                    <aside>
                        <img src={logo} alt="" />
                        <p className='text-white text-xl opacity-70'>Adminox Industries Ltd.<br />Providing reliable tech since 2022</p>
                    </aside>
                    <nav className='text-white opacity-70'>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='text-white opacity-70'>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='text-white opacity-70'>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
            <footer className="bg-[#31373d] text-white text-sm footer-center p-4">
                <aside>
                    <p>COPYRIGHT 2023 COMMUNITY FOOD SHARE | ALL RIGHTS RESERVED</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;