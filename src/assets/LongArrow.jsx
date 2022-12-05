function LongArrow({ lineClass }) {
    return (
        <svg width="98" height="36" viewBox="0 0 98 36">
            <g fill="none">
                <path d="M67 3L93 18L67 33" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path className={lineClass} d="M90.5 18H3" strokeWidth="5" strokeLinecap="round" />
            </g>
        </svg>

    );
}

export default LongArrow