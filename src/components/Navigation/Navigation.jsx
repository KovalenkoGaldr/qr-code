import { Link } from "react-router-dom";
import s from "./Navigation.module.css"

export const Navigation =() => {
    return (
        <nav className={s.container}>
            <button className={s.buttonLink}><Link to="/generate">Генерировать QR код</Link></button>
            <button className={s.buttonLink}><Link to="/scan">Сканировать QR код</Link></button>
            <button className={s.buttonLink}><Link to="/generateHistory">История генерирования</Link></button>
            <button className={s.buttonLink}><Link to="/scanHistory">История сканирования</Link></button>
        </nav>
    ); 
}