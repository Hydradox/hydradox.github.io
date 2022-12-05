import style from './Home.module.scss'

import { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Typewriter } from 'react-simple-typewriter'

import { Mobile } from '../App'
import DownArrow from '../assets/DownArrow'
import Quotation from '../components/ui/Quotation/Quotation'
import NextPath from '../components/ui/NextPath/NextPath'

function Home() {
    const isMobile = useContext(Mobile)
    const [scrollPosition, setScrollPosition] = useState(0)
    const { t } = useTranslation('translations', { keyPrefix: 'home' });

    // Manejar scroll
    const handleScroll = (e) => setScrollPosition(e.target.scrollTop);


    return (
        <div className='PageWrapper'
            onScroll={handleScroll}>
            <Helmet>
                <title>Home | Portfolio</title>
            </Helmet>

            <div className={'HeroBanner ' + style.HomeBanner}>
                <div style={{
                    backgroundPositionY: `${scrollPosition / 1.7}px`
                }}
                    className={style.BGImage}></div>
                <div className={style.HomeBanner__DataWrapper}>
                    <div className={style.BannerColumn}>
                        <div className={style.BannerSubColumn}>
                            <span className={style.HelloTxt}>{t('hello')}</span>
                            <h1 className={style.MyNameTxt}>Jaime Cantos,</h1>

                            {t('typewriterReverse') && (
                                <div className={style.CodeTxt}>
                                    <Typewriter words={t('typewriter', { returnObjects: true })} loop={true} cursor={true} cursorStyle='_' typeSpeed={150} deleteSpeed={75} delaySpeed={1000} />
                                    <span className={style.Dev}>{t('dev')}</span>
                                </div>
                            ) || (
                                    <div className={style.CodeTxt}>
                                        <span className={style.Dev}>{t('dev')}</span>
                                        <Typewriter words={t('typewriter', { returnObjects: true })} loop={true} cursor={true} cursorStyle='_' typeSpeed={150} deleteSpeed={75} delaySpeed={1000} />
                                    </div>
                                )}
                        </div>
                    </div>

                    <div className={style.BannerColumn}>
                        <img src="/jcm-programmer.jpg" alt="Jaime programming" />
                    </div>
                </div>

                <div className={style.LearnMore} style={{
                    filter: `opacity(${1 - (scrollPosition / 500)})`
                }}>
                    <span>{t('learnMore')}</span>
                    <DownArrow />
                </div>
            </div>

            <section className='Section'>
                <Quotation textArr={t('aboutMe', { returnObjects: true })} isMobile={isMobile} />
            </section>


            <NextPath text={t('nextPath')} path='/projects' />
        </div>
    );
}

export default Home;