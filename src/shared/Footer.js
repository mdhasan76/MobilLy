import React from 'react';
import { BsFacebook, BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div>
                <p className='text-lg font-medium'>Contact With Us</p>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/profile.php?id=100026677590809" target='_blank' rel="noreferrer">
                        <BsFacebook className='text-3xl text-blue-700' />
                    </a>
                    <a href="https://github.com/mdhasan76" target='_blank' rel="noreferrer">
                        <BsGithub className='text-3xl' />
                    </a>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by Md Hasan</p>
            </div>
        </footer>
    );
};

export default Footer;