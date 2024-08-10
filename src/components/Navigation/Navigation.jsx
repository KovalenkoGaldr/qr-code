import { Link } from "react-router-dom";
import s from "./Navigation.module.css"

export const Navigation =() => {
    return (
        <nav className={s.container}>
            <button className={s.buttonLink}><Link to="/qr-code/generate">Генерировать QR код</Link></button>
            <button className={s.buttonLink}><Link to="/qr-code/scan">Сканировать QR код</Link></button>
            <button className={s.buttonLink}><Link to="/qr-code/generateHistory">История генерирования</Link></button>
            <button className={s.buttonLink}><Link to="/qr-code/scanHistory">История сканирования</Link></button>
        </nav>
    ); 
}