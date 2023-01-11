import style from './Knowledge.module.scss'

import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

import NextPath from '../components/ui/NextPath/NextPath'

function Projects() {
    const { t } = useTranslation('translations', { keyPrefix: 'knowledge' })

    return (
        <div className='PageWrapper'>
            <Helmet>
                <title>{t('title')} | Portfolio</title>
            </Helmet>

            <section className='Section'>
                <p>*Este apartado está bajo construcción.<br/>**Por el momento recomiendo consultar mi currículum o visitar mi página de <a href="https://www.linkedin.com/in/jaimecantosmartinez/" target="_blank">LinkedIn</a>.</p>
            </section>


            <NextPath text={t('nextPath')} path='/contact' />
        </div>
    )
}

export default Projects