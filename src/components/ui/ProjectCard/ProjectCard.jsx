import style from './ProjectCard.module.scss'
import Link from '../../../assets/Link'

import allTags from '../../../assets/data/tags.json'

function ProjectCard({ name, description, image, link, linkTxt, tags, tagClassName }) {
    const baseImgUrl = '/projects/'

    const parseTags = (category) => {
        return tags[category].map(tag => {
            //const { name, color } = allTags[tag]
            return (
                allTags[tag]?.name !== undefined ? <div key={tag} className={tagClassName} style={{ background: allTags[tag]?.bgClr }}>{allTags[tag]?.name}</div> : null
            )
        })
    }

    return (
        <div className={style.ProjectCard} title={name} style={{
            backgroundImage: `url(${baseImgUrl}${image})`
        }}>
            <div className={style.OpaqueBG}></div>
            <div className={style.Title}>{name}</div>

            {/* Modal with description */}
            <div className={style.Modal} title=''>
                {/* TODO: Categories system and tags */}
                <div>
                    <div className={style.TagsWrapper}>{parseTags('tech')}</div>
                    <div className={style.TagsWrapper}>{parseTags('lang')}</div>
                </div>

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