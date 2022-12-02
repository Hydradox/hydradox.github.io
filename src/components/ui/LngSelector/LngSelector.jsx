import style from './LngSelector.module.scss'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function LngSelector() {
    const [openLngList, setOpenLngList] = useState(false)

    const { t, i18n } = useTranslation()
    const idiomas = [
        { idioma: 'Español', codigo: 'es' },
        { idioma: 'English', codigo: 'en' },
        { idioma: 'Català', codigo: 'ca' }
    ]

    const setNewLng = (lng) => {
        i18n.changeLanguage(lng)
        setOpenLngList(false)

        // Cambiar idioma de la página
        document.documentElement.lang = lng
    }

    let foundLng = idiomas.find(idioma => idioma.codigo === i18n.language)
    if(!foundLng) {
        setNewLng('en') // Idioma por defecto
    } else {
        document.documentElement.lang = i18n.language
    }


    // Manejar click fuera del componente
    const handleClickOutside = (e) => {
        if (e.target.closest(`.${style.LngSelector}`)) return
        setOpenLngList(false)
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])


    return (
        <div className={style.LngSelector}>
            <button className={style.SelectedLng} onClick={() => setOpenLngList(!openLngList)}>
                { i18n.language.toUpperCase() }
            </button>

            <div className={style.LngList + (openLngList ? ` ${style.Active}` : '')}>
                { idiomas.map((idioma, index) => (
                    <button key={index} className={style.LngItem} onClick={() => setNewLng(idioma.codigo)}>
                        {(i18n.language === idioma.codigo) && <span className={style.SelectedIcon}>✓</span>}
                        <span className={style.Lng}>{idioma.idioma}</span>
                    </button>
                )) }
            </div>
        </div>
    )
}

export default LngSelector