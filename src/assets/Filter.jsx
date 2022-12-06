import style from './Filter.module.scss'

function Filter({ isActive }) {
    return (
        <svg className={isActive ? style.Active : ''} width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="78" y="3" width="10" height="94" rx="5"/>
            <rect x="12" y="3" width="10" height="94" rx="5"/>
            <rect x="45" y="3" width="10" height="94" rx="5"/>
            <circle className={style.Thumb} id={style['filter-thumb-1']} cx="17" cy="25" r="15"/>
            <circle className={style.Thumb} id={style['filter-thumb-2']} cx="50" cy="74" r="15"/>
            <circle className={style.Thumb} id={style['filter-thumb-3']} cx="83" cy="25" r="15"/>
        </svg>
    )
}

export default Filter