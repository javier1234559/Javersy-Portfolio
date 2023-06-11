import React, { createContext, useState } from 'react';

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastType, setToastType] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (type, message) => {
    setIsToastVisible(true);
    setToastType(type);
    setToastMessage(message);
  };

  const hideToast = () => {
    setIsToastVisible(false);
    setToastType('');
    setToastMessage('');
  };

  const toastContextValue = {
    isToastVisible,
    showToast,
    hideToast,
    toastType,
    toastMessage,
  };

  return (
    <ToastContext.Provider value={toastContextValue}>
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
