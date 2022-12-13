import style from './SocialCard.module.scss'
import { Link } from 'react-router-dom'

function SocialCard({ link, icon, bgClassName, title, description, isOpen }) {
    return (
        <a href={link} target='_blank' className={style.CardWrapper}>
            <div className={style.CardContent + (isOpen ? ' ' + style.Open : '')}>
                <span className={style.CardTitle}>{title}</span>
                <span className={style.CardDescription}>{description}</span>
            </div>

            <div className={style.LogoCard
                + ` ${bgClassName}`
                + (isOpen ? ' ' + style.Open : '')}>{icon}</div>
        </a>
    )
}

export default SocialCard