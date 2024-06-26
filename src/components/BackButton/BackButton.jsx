import {React, useEffect} from 'react'
import { useTelegram } from "../../hooks/useTelegram";
import { useNavigate, useLocation } from 'react-router-dom'

const BackButton = () => {
    const { tg } = useTelegram();
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        navigate(-1);
    };
    if (!tg.SettingsButton.isVisible) {
        tg.SettingsButton.show()
    }

    useEffect(() => {
        tg.onEvent('backButtonClicked', handleClick)
        return () => {
            tg.offEvent('backButtonClicked', handleClick);
        };
    }, [tg, handleClick]);

  if (location.pathname === '/') {
    return null;
}

}

export default BackButton