import React, { CSSProperties } from 'react'

export const Homeblob = (props: Props) => {
    return (
        <svg
            width="569"
            height="1304"
            viewBox="0 0 569 1304"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={props.style}
        >
            <g filter="url(#filter0_i_Home)">
                <path
                    d="M149.61 237.324C302.334 348.238 215.922 485.872 119.968 594.266C69.403 651.386 32.8338 721.712 15.9761 770.216C10.7192 785.34 -17.1817 891.213 15.9759 969.357C49.1335 1047.5 406.118 1491.66 676.105 1213.37C946.092 935.074 853.109 562.793 834.456 469.525C805.82 326.345 751.563 114.096 644.555 23.3477C463.698 -130.029 234.766 -69.3129 175.733 -41.2591C104.495 -7.40565 -3.11498 126.41 149.61 237.324Z"
                    fill="url(#paint0_linear_Home)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_i_Home"
                    x="0"
                    y="-77"
                    width="865"
                    height="1381"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="40" />
                    <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                    />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_Home"
                    x1="117.959"
                    y1="162.923"
                    x2="778.234"
                    y2="925.424"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF0099" />
                    <stop offset="1" stopColor="#FFE600" stopOpacity="0.7" />
                </linearGradient>
            </defs>
        </svg>
    )
}

interface Props {
    style: CSSProperties
}
