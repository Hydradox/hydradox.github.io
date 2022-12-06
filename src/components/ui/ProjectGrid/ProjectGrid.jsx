import style from './ProjectGrid.module.scss'

import { useTranslation } from 'react-i18next'

import ProjectCard from '../ProjectCard/ProjectCard'
import projects from '../../../assets/data/projects.json'

function ProjectGrid({ search, filters }) {
    const { t } = useTranslation('translations', { keyPrefix: 'projects' })
    const projectTexts = t('projects', { returnObjects: true })


    return (
        <div className={style.ProjectGrid}>
            {projects.map((project, i) => {
                const { id, categories, img, link, linkTxt } = project
                const { name, description } = projectTexts.find(p => p.id === id)

                return (
                    name.includes(search) ? <ProjectCard key={id} name={name} categories={categories} description={description} image={img} link={link} linkTxt={linkTxt} /> : null
                )
            })}
        </div>
    )
}

export default ProjectGrid