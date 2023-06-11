import React, { useState, useEffect, useContext } from 'react';
import { ToastContext } from '../../context';
import { MdClear, MdDone } from 'react-icons/md';
import './style.scss';

function ToastNotifiation() {
    const { isToastVisible, showToast, hideToast, toastType, toastMessage } = useContext(ToastContext);
    const [hideCounter, setHideCounter] = useState(0);

    useEffect(() => {
        let timer1, timer2;

        if (toastType === 'typeinfo') {
            showToast();

            timer1 = setTimeout(() => {
                hideToast();
            }, 5000);

            timer2 = setTimeout(() => {
                hideToast();
                setHideCounter((prevCounter) => prevCounter + 1);
            }, 5300);
        }

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [ hideCounter]);

    const handleCloseClick = () => {
        hideToast();
    };

    return (
        <div className={`toast ${isToastVisible ? 'active' : ''}`}>
            <div className="toast-content">
                <div
                    className="check"
                    style={{
                        backgroundColor:
                            toastType === 'typeinfo'
                                ? '#17a2b8'
                                : toastType === 'typesubmited'
                                ? '#28a745'
                                : '#dc3545'
                    }}
                >
                    {toastType === 'typeinfo' ? (
                        <MdDone />
                    ) : toastType === 'typesubmited' ? (
                        <MdDone />
                    ) : (
                        <MdClear />
                    )}
                </div>
                <div className="message">
                    <span className="text text-1">
                        {toastType === 'typeinfo'
                            ? 'Success'
                            : toastType === 'typesubmited'
                            ? 'Send Done'
                            : 'Send Failed'}
                    </span>
                    <span className="text text-2">{toastMessage}</span>
                    {console.log(toastType)}
                </div>
            </div>
            <div className="close" onClick={handleCloseClick}>
                <MdClear />
            </div>
            <div
                className={`progress ${isToastVisible ? 'active' : ''}`}
                style={{
                    '--progress-color':
                        toastType === 'typeinfo'
                            ? '#17a2b8'
                            : toastType === 'typesubmited'
                            ? '#28a745'
                            : '#dc3545',
                }}
            ></div>
        </div>
    );
}

export default ToastNotifiation;
