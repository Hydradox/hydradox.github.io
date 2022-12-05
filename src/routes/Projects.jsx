import style from './Projects.module.scss'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

import InputField from '../components/ui/InputField/InputField'
import NextPath from '../components/ui/NextPath/NextPath'
import ProjectCard from '../components/ui/ProjectCard/ProjectCard'

import Search from '../assets/Search'
import Filter from '../assets/Filter'
import projects from '../assets/data/projects.json'

function Projects() {
    const { t } = useTranslation('translations', { keyPrefix: 'projects' })
    const [search, setSearch] = useState('')
    const [filtersOpen, setFiltersOpen] = useState(false)

    const projectText = t('projects', { returnObjects: true })

    const handleSearch = (e) => { setSearch(e.target.value) }
    const toggleFilters = () => { setFiltersOpen(!filtersOpen) }


    return (
        <div className='PageWrapper'>
            <Helmet>
                <title>Projects | Portfolio</title>
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

                </div>
            </section>

            <section className={`Section ${style.ProjectGrid}`}>
                {
                    projects.map((project, index) => {
                        const { name, description } = projectText.find(projectText => projectText.id === project.id)

                        return (
                            name.toLowerCase().includes(search.toLowerCase()) ? <ProjectCard key={index} name={name} description={description} image={project.img} link={project.link} /> : null
                        )
                    })
                }
            </section>





            <NextPath text={t('nextPath')} path='/knowledge' />
        </div>
    )
}

export default Projects