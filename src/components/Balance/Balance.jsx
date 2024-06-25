import React, { useEffect } from "react";
import './Balance.css';


const Balance = () => {
    return (
        <div>
            <div className="container">
                <div className="balance">
                    Баланс
                    <p></p>
                    <span className="int">0</span><span className="decimal">,00</span><span className="currency"> $</span>
                </div>
            </div>
            <p className="space"></p>
        </div>
    )
}

export default Balance;