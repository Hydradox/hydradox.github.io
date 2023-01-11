import style from './ProjectGrid.module.scss'

import { useTranslation } from 'react-i18next'

import ProjectCard from '../ProjectCard/ProjectCard'
import projects from '../../../assets/data/projects.json'

function ProjectGrid({ search, filters, tagClassName }) {
    const { t } = useTranslation('translations', { keyPrefix: 'projects' })
    const projectTexts = t('projects', { returnObjects: true })

    const simplifyTxt =  (txt) => txt.trim().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();

    const hasActiveFilters = (project) => {
        if(filters.length === 0) return true

        // Check if project has all active filters
        for(const filter of filters) {
            if(!project.tags.tech.includes(filter) && !project.tags.lang.includes(filter)) {
                return false
            }
        }

        return true
    }


    return (
        <div className={style.ProjectGrid}>
            {projects.map((project, i) => {
                const { id, categories, img, link, linkTxt, tags } = project
                const { name, description } = projectTexts.find(p => p.id === id)

                return (
                    simplifyTxt(name)
                        .includes(simplifyTxt(search))
                        && hasActiveFilters(project)
                        ? <ProjectCard key={id} name={name} categories={categories} description={description} image={img} link={link} linkTxt={linkTxt} tags={tags} tagClassName={tagClassName} />
                        : null
                )
            })}
        </div>
    )
}

export default ProjectGrid