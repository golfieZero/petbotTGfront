import React from "react";
import './ActionBar.css';
import Button from "../Button/Button.jsx";
import { useNavigate } from 'react-router-dom';

const ActionBar = () => {
    const navigate = useNavigate();

    const handleCreateOrder = () => navigate('/create');
    const handleViewListings = () => navigate('/listings');
    const handleTopUpWallet = () => navigate('/wallet');

    return (
        <section>
            <div className="actions">
                <Button onClick={handleViewListings}>Заказы</Button>
                <Button onClick={handleTopUpWallet}>Пополнить</Button>
                <Button onClick={handleCreateOrder}>Разместить заказ</Button>
            </div>
        </section>
    );
}

export default ActionBar;
