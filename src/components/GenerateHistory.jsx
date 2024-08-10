import { GENERATE_DATA } from "../constants";
import { QRCodeSVG } from "qrcode.react";

export const GenerateHistory = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
return (
    <div>
    {prevData.map((text) => {
        return (
            <p key={text}>
                {text}
            <QRCodeSVG value={text} size={100} />
            </p>
        )
    })} 
</div>
);
}