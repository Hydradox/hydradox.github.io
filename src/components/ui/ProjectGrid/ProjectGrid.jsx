import style from './ProjectGrid.module.scss'

import { CSSGrid, layout } from 'react-stonecutter'
import { useTranslation } from 'react-i18next'

import ProjectCard from '../ProjectCard/ProjectCard'
import projects from '../../../assets/data/projects.json'

function ProjectGrid({ search, filters }) {
    const ResponsiveGridLayout = WidthProvider(Responsive)
    const { t } = useTranslation('translations', { keyPrefix: 'projects' })
    const projectTexts = t('projects', { returnObjects: true })


    return (
        <div>
            <ResponsiveGridLayout ;
                /* className={style.ProjectGrid} */
                isDraggable={false}
                isResizable={false}
                breakpoints={{ lg: 1000, md: 700, sm: 768 }}
                cols={{ lg: 3, md: 2, sm: 1 }}
            >
                {projects.map((project, i) => {
                    const { id, categories, img, link } = project
                    const { name, description } = projectTexts.find(p => p.id === id)

                    return (
                        <div key={i} className={style.GridItem}>
                            <ProjectCard name={name} categories={categories} description={description} image={img} link={link} />
                        </div>
                    )
                })}
            </ResponsiveGridLayout>
        </div>
    )
}

export default ProjectGrid