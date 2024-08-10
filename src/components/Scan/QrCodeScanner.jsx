import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from './QrCodeScanner.module.css';

import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {
    const [scannResult, setScannResult] = useState(null);

    const scanHandler = (result) => {
        setScannResult(result[0].rawValue);

       const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, result[0].rawValue]));
    };

    return (
        <div className={s.container}>
            <Scanner 
                styles={{
                    container: {width: 350}
                }}
                components={{
                    audio: false,
                    finder: false,
                }}
                onScan={scanHandler} />
            <p className={s.result}>{scannResult}</p>
        </div>
    );
};