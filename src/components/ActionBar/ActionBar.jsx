import React from "react";
import './ActionBar.css';
import Button from "../Button/Button.jsx";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const ActionBar = () => {
    const navigate = useNavigate();

    const handleCashOut = () => navigate('/wallet/out');
    const handleViewListings = () => navigate('/listings');
    const handleTopUpWallet = () => navigate('/wallet/in');

    return (
        <section>
            <div className="actions">
                <div className="buttonRow" onClick={handleViewListings}>
                    <FontAwesomeIcon className="fontIcon" icon={faInfoCircle} />
                    <Button className={'listings'}>Заказы</Button>
                </div>
                <div className="buttonRow" onClick={handleTopUpWallet}>
                    <FontAwesomeIcon className="fontIcon" icon={faInfoCircle} />
                    <Button className={'wallet'} >Пополнить</Button>
                </div>
                <div className="buttonRow" onClick={handleCashOut}>
                    <FontAwesomeIcon className="fontIcon" icon={faInfoCircle} />
                    <Button className={'cashout'} >Вывод</Button>
                </div>
            </div>
        </section>
    );
}

export default ActionBar;
