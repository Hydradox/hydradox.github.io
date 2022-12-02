import style from './Quotation.module.scss'
import Quote from '../../../assets/Quote'

function Quotation ({ textArr }) {
    return (
        <div className={style.QuotationWrapper}>

            <div className={style.Quotation}>
                <Quote className={style.QuoteMark} />
                { textArr.map((text, index) => (
                    <p key={index}>{text}</p>
                )) }
                <Quote className={`${style.QuoteMark} ${style.Reverse}`} />
            </div>

        </div>
    )
}

export default Quotation