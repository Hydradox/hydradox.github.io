
function Ribbon({ ribbonClass, pathClass }) {
    return (
        <svg className={ribbonClass} viewBox="0 0 100 50" fill="none"
            clipPath="polygon(
                0% 0%,
                100% 0%,
                90% 20%,
                10% 85%,
                0% 100%
            )"
        >
            <path
                className={pathClass}
                strokeWidth="6"
                strokeLinejoin="round"
                d="m 100 5 h -95 v 45"
            ></path>
        </svg>
    )
}

export default Ribbon