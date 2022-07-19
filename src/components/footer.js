import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return(
        <footer className="mt-5">
            <div className="container">
                <div className="row border-top justify-content-between p-3">
                    <div className="col-6 col-md-3 col-sm-3">
                        FELAYO
                    </div>
                    <div className="col-6 col-md-3 col-sm-3 p-0 d-flex justify-content-end">
                        This site was made by me
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;