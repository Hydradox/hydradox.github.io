import style from './ThemeSwitch.module.scss'

import Sun from '../../../assets/Sun'
import Moon from '../../../assets/Moon'

function ThemeSwitch({ isDarkMode, toggleTheme }) {
    return (
        <button className={style.ThemeSwitch} onClick={toggleTheme}>
            <Sun className={style.Icon} />
            <Moon className={`${style.Icon} ${style.Right}`} />

            <div className={style.Thumb + (isDarkMode ? ' ' + style.Active : '')}></div>
        </button>
    )
}

export default ThemeSwitch