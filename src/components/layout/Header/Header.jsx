import style from './Header.module.scss'
import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import Logo from '../../../assets/Logo'
import ThemeSwitch from '../../ui/ThemeSwitch/ThemeSwitch'
import LngSelector from '../../ui/LngSelector/LngSelector'


function Header({ isMobile }) {
    const { t } = useTranslation('translations', { keyPrefix: 'header' })
    const activeClass = ` ${style.active}`

    // Estados de tema e idioma
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('isDarkMode') === 'true' || false)

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    // Manejar cambio de tema
    useEffect(() => {
        localStorage.setItem('isDarkMode', isDarkMode)
        document.documentElement.setAttribute('data-theme', `${!!isDarkMode ? 'dark' : 'light'}-theme`)
    }, [isDarkMode])

    return (
        <header className={style.Header}>
            <Link className={style.Logo} to="/"><Logo darkIcon={!isDarkMode} /></Link>

            {!isMobile && (
            <nav>
                <NavLink className={({isActive}) => `${style.NavLink}${isActive ? activeClass : ''}`} to="/">{t('home')}</NavLink>
                <NavLink className={({isActive}) => `${style.NavLink}${isActive ? activeClass : ''}`} to="/projects">{t('projects')}</NavLink>
                <NavLink className={({isActive}) => `${style.NavLink}${isActive ? activeClass : ''}`} to="/knowledge">{t('knowledge')}</NavLink>
                <NavLink className={({isActive}) => `${style.NavLink} btn${isActive ? activeClass : ''}`} to="/contact">{t('contact')}</NavLink>
            </nav>)}

            <div className='FlexRow'>
                <ThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                <LngSelector />
            </div>
        </header>
    )
}

export default Header