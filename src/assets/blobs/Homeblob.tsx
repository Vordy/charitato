import React, { CSSProperties } from 'react'

export const Homeblob = (props: Props) => {
    return (
        <svg
            width="389"
            height="1175"
            viewBox="0 0 389 1175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={props.style}
        >
            <g filter="url(#filter0_i)">
                <path
                    d="M149.61 108.324C302.334 219.238 215.922 356.872 119.968 465.266C69.403 522.386 32.8338 592.712 15.9761 641.216C10.7192 656.34 -17.1817 762.213 15.9759 840.357C49.1335 918.501 406.118 1362.66 676.105 1084.37C946.092 806.074 853.109 433.793 834.456 340.525C805.82 197.345 751.563 -14.9044 644.555 -105.652C463.698 -259.029 234.766 -198.313 175.733 -170.259C104.495 -136.406 -3.11498 -2.59024 149.61 108.324Z"
                    fill="url(#paint0_linear)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_i"
                    x="0"
                    y="-206"
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
                    id="paint0_linear"
                    x1="117.959"
                    y1="33.9232"
                    x2="778.234"
                    y2="796.424"
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
