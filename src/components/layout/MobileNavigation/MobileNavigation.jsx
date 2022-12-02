import style from './MobileNavigation.module.scss'

import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Home from './icons/Home'
import Projects from './icons/Projects'
import Books from './icons/Books'
import Contact from './icons/Contact'

function MobileNavigation() {
    const { t } = useTranslation('translations', { keyPrefix: 'header' })
    const activeClass = ` ${style.active}`

    return (
        <nav className={style.MobileNavigation}>
            <NavLink className={({isActive}) => `${style.NavLink}${isActive ? activeClass : ''}`} to="/">
                <Home />
                <span className={style.Label}>{t('home')}</span>
            </NavLink>

            <NavLink className={({isActive}) => `${style.NavLink}${isActive ? activeClass : ''}`} to="/projects">
                <Projects />
                <span className={style.Label}>{t('projects')}</span>
            </NavLink>

            <NavLink className={({isActive}) => `${style.NavLink}${isActive ? activeClass : ''}`} to="/knowledge">
                <Books />
                <span className={style.Label}>{t('knowledge')}</span>
            </NavLink>

            <NavLink className={({isActive}) => `${style.NavLink}${isActive ? activeClass : ''}`} to="/contact">
                <Contact />
                <span className={style.Label}>{t('contact')}</span>
            </NavLink>
        </nav>
    )
}

export default MobileNavigation