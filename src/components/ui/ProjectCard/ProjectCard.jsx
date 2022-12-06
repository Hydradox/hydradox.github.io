import style from './ProjectCard.module.scss'
import Link from '../../../assets/Link'

function ProjectCard({ name, categories, description, image, link, linkTxt }) {
    const baseImgUrl = '/projects/'

    return (
        <div className={style.ProjectCard} title={name} style={{
            backgroundImage: `url(${baseImgUrl}${image})`
        }}>
            <div className={style.OpaqueBG}></div>
            <div className={style.Title}>{name}</div>

            {/* Modal with description */}
            <div className={style.Modal} title=''>
                {/* TODO: Categories system and tags */}

                <p className={style.Description}>{description}</p>
                <a className={style.Link} href={link} target="_blank">
                    <Link />
                    <span>{linkTxt}</span>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard