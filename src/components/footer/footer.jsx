import React from 'react';
import './footer.scss';
import bemCn from 'bem-cn-fast';
import Logo from '../logo';

const cn = bemCn('footer');

function Footer() {
    return (
        <div className={ cn() }>
            <Logo />
        </div>
    );
}
export default Footer;
