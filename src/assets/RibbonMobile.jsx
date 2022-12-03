
function RibbonMobile({ ribbonClass, pathClass }) {
    return (
        <svg className={ribbonClass} viewBox="0 0 100 10" stroke="var(--link-clr)" fill="none"
            clipPath="polygon(
                1rem 0%,
                100% 0%,
                calc(100% - 1rem) 100%,
                0% 100%
            )"
        >
            <path
                className={pathClass}
                strokeWidth="4"
                strokeLinejoin="round"
                d="m 100 5 h -100"
            ></path>
        </svg>
    )
}

export default RibbonMobile