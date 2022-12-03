import style from './Quotation.module.scss'
import { useState, useRef, useEffect } from 'react'

import Quote from '../../../assets/Quote'
import Ribbon from '../../../assets/Ribbon'
import RibbonMobile from '../../../assets/RibbonMobile'

function Quotation ({ textArr, isMobile }) {
    const [observing, setObserving] = useState(false)
    const quotationRef = useRef(null)


    // Manejar observación
    const observer = new IntersectionObserver((entries) => {
        if(!observing && entries[0].isIntersecting) setObserving(true)
    }, { threshold: 0.8 })

    // Crear observador
    useEffect(() => {
        if (quotationRef.current)
            observer.observe(quotationRef.current)
    }, [quotationRef])


    return (
        <div ref={quotationRef} className={style.QuotationWrapper}>
            {
                !isMobile && (
                    <div>
                        <Ribbon ribbonClass={style.Ribbon} pathClass={`${style.RibbonPath}${observing ? ' ' + style.Show : ''}`} />
                        <Ribbon ribbonClass={`${style.Ribbon} ${style.Opposite}`} pathClass={`${style.RibbonPath}${observing ? ' ' + style.Show : ''}`} />
                    </div>
                ) || (
                    <div>
                        <RibbonMobile ribbonClass={style.Ribbon} pathClass={`${style.RibbonPathMobile}${observing ? ' ' + style.Show : ''}`} />
                        <RibbonMobile ribbonClass={`${style.Ribbon} ${style.Opposite}`} pathClass={`${style.RibbonPathMobile}${observing ? ' ' + style.Show : ''}`} />
                    </div>
                )
            }

            <div className={`${style.Quotation}${observing ? ' ' + style.Show : ''}`}>
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