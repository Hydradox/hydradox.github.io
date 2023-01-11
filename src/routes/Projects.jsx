import style from './Projects.module.scss'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

import InputField from '../components/ui/InputField/InputField'
import ProjectGrid from '../components/ui/ProjectGrid/ProjectGrid'
import NextPath from '../components/ui/NextPath/NextPath'

import Search from '../assets/Search'
import Filter from '../assets/Filter'
import allTags from '../assets/data/tags.json'

function Projects() {
    const { t } = useTranslation('translations', { keyPrefix: 'projects' })
    const [search, setSearch] = useState('')
    const [filtersOpen, setFiltersOpen] = useState(false)
    const [activeFilters, setActiveFilters] = useState([])
    const [isResettingFilters, setIsResettingFilters] = useState(false)

    const handleSearch = (e) => { setSearch(e.target.value) }
    const toggleFilters = () => { setFiltersOpen(!filtersOpen) }

    const resetFilters = () => {
        setIsResettingFilters(true);
        setActiveFilters([]);
    }

    const parseTags = (type) => {
        let tags = []

        for(const key of Object.keys(allTags)) {
            if(allTags[key].type === type) {
                tags.push(key)
            }
        }

        return tags.map(tag => {
            const isFilterActive = activeFilters.includes(tag)

            return (
                <button key={tag} className={`${style.Tag}${isFilterActive ? ' ' + style.Active : ''}`} style={{ background: allTags[tag].bgClr, color: allTags[tag].txtClr }} onClick={() => {
                    if(isFilterActive) {
                        setActiveFilters(activeFilters.filter(f => f !== tag))
                    } else {
                        setActiveFilters([...activeFilters, tag])
                    }
                }}>
                    {allTags[tag].name}
                </button>
            )
        })
    }


    return (
        <div className='PageWrapper'>
            <Helmet>
                <title>{t('title')} | Portfolio</title>
            </Helmet>

            <section className='Section'>
                {/* Search projects by name and filter btn */}
                <div className={style.SearchAndFilter}>
                    <InputField className={style.Search} type='text' label={t('searchProjectLabel')} name='searchProject' handleInput={handleSearch} icon={<Search />} />
                    <button className={style.FilterBtn} onClick={toggleFilters}>
                        <Filter isActive={filtersOpen} />
                    </button>
                </div>

                {/* Filters */}
                <div className={`${style.Filters}${filtersOpen ? ' ' + style.Open : ''}`}>
                    <button className={style.ResetFilters + `${isResettingFilters ? ' ' + style.FullRotation : ''}`} onClick={resetFilters} onAnimationEnd={() => setIsResettingFilters(false)}>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z"/>
                        </svg>
                        {t('resetFilters')}
                    </button>

                    <div className={style.Filter}>{t('filterByTech')}:</div>
                    <div className={style.TagsWrapper}>{parseTags('tech')}</div>

                    <div className={style.Filter}>{t('filterByLang')}:</div>
                    <div className={style.TagsWrapper}>{parseTags('lang')}</div>
                </div>
            </section>

            <section className='Section'>
                <ProjectGrid search={search} filters={activeFilters} tagClassName={style.Tag} />
            </section>





            <NextPath text={t('nextPath')} path='/knowledge' />
        </div>
    )
}

export default Projects