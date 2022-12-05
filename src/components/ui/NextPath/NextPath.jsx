import style from './NextPath.module.scss'

import { Link } from 'react-router-dom'
import LongArrow from '../../../assets/LongArrow'

function NextPath({ text, path }) {
    return (
        <Link to={path} className={style.NextPath}>
            <span>{text}</span>

            <div className={style.ArrowWrapper}>
                <LongArrow lineClass={style.ArrowLine} />
            </div>
        </Link>
    )
}

export default NextPath