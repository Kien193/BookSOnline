import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 border-top">
            <div className="container text-center mt-3">
                <h2 className="fw-bold mb-3">Join Our Newsletter</h2>
                <h4 className="fw-bold">Signup to be the first to hear about exclusive deals, special offers and upcoming collections</h4>
            </div>
            <div className="row mt-5">
                <div className="col-md-3 col-sm-6">
                    <h4 className='mb-4'>Explore</h4>
                    <ul className='list-unstyled'>
                        <li className='mb-4'>About us</li>
                        <li className='mb-4'>Bookmarks</li>
                        <li className='mb-4'>Sign in/join</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h4 className='mb-4'>Customer Service</h4>
                    <ul className='list-unstyled'>
                        <li className='mb-4'>Help Center</li>
                        <li className='mb-4'>Product Recalls</li>
                        <li className='mb-4'>Accessibility</li>
                        <li className='mb-4'>Contact Us</li>
                        <li className='mb-4'>Store Pickup</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h4 className='mb-4'>Policy</h4>
                    <ul className='list-unstyled'>
                        <li className='mb-4'>Return Policy</li>
                        <li className='mb-4'>Terms Of Use</li>
                        <li className='mb-4'>Security</li>
                        <li className='mb-4'>Privacy</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h4 className='mb-4'>Categories</h4>
                    <ul className='list-unstyled'>
                        <li className='mb-4'>Action</li>
                        <li className='mb-4'>Comedy</li>
                        <li className='mb-4'>Drama</li>
                        <li className='mb-4'>Horror</li>
                        <li className='mb-4'>Kids</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
