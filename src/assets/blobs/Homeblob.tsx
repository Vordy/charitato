import React, { CSSProperties } from 'react'

export const Homeblob = (props: Props) => {
    return (
        <svg
            width="690"
            height="1492"
            viewBox="0 0 690 1492"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={props.style}
        >
            <g filter="url(#filter0_i)">
                <path
                    d="M170.538 280.114C344.626 406.127 246.126 562.498 136.75 685.647C79.1113 750.543 37.4267 830.444 18.2109 885.55C12.2187 902.733 -19.5851 1023.02 18.2107 1111.8C56.0065 1200.58 462.927 1705.21 770.681 1389.03C1078.44 1072.85 972.446 649.89 951.183 543.925C918.542 381.253 856.695 140.11 734.719 37.0084C528.562 -137.248 267.606 -68.2665 200.315 -36.3935C119.113 2.06845 -3.55072 154.101 170.538 280.114Z"
                    fill="url(#paint0_linear)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_i"
                    x="0"
                    y="-77"
                    width="986"
                    height="1569"
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
                    x1="134.46"
                    y1="195.585"
                    x2="884.263"
                    y2="1064.33"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#FF0099" />
                    <stop offset="1" stopColor="#FFE600" stopOpacity="0.7" />
                </linearGradient>
            </defs>
        </svg>
    )
}

interface Props {
    style: CSSProperties
}
