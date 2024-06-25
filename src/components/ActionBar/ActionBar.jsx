import React from "react";
import './ActionBar.css';
import Button from "../Button/Button.jsx";
import { useNavigate } from 'react-router-dom';

const ActionBar = () => {
    const navigate = useNavigate();

    const handleCashOut = () => navigate('/wallet/out');
    const handleViewListings = () => navigate('/listings');
    const handleTopUpWallet = () => navigate('/wallet/in');

    return (
        <section>
            <div className="actions">
                <div className="buttonRow">
                    <Button className={'listings'} onClick={handleViewListings}>Заказы</Button>
                </div>
                <div className="buttonRow">
                    <Button className={'wallet'} onClick={handleTopUpWallet}>Пополнить</Button>
                </div>
                <div className="buttonRow">
                    <Button className={'cashout'} onClick={handleCashOut}>Вывод</Button>
                </div>
            </div>
        </section>
    );
}

export default ActionBar;
