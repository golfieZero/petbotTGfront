import React, { useEffect } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css';
import Button from "../Button/Button";
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const { tg, user, onClose } = useTelegram();
    // const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate('/settings');
    // };
    // useEffect(() => {
    //     tg.onEvent('settingsButtonClicked', handleClick)
    //     if (!tg.SettingsButton.isVisible) {
    //         tg.SettingsButton.show()
    //     }
    // })

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span>{user?.username}</span>
        </div>

    )
}

export default Header;