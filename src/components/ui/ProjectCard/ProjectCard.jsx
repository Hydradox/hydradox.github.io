import style from './ProjectCard.module.scss'

function ProjectCard({ name, categories, description, image, link }) {
    const baseImgUrl = '/projects/'

    return (
        <div className={style.ProjectCard} title={name} style={{
            backgroundImage: `url(${baseImgUrl}${image})`
        }}>
            <div className={style.OpaqueBG}></div>
            <div className={style.Title}>{name}</div>

            {/* Modal with description */}
            <div className={style.Modal} title=''>
                <p className={style.Description}>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard