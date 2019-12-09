import React, { CSSProperties } from 'react'

export const Footerblob = (props: Props) => {
    return (
        <svg
            width="1926"
            height="376"
            viewBox="0 0 1926 376"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_footer)">
                <path
                    d="M119.041 1158.68C315.249 911.323 558.726 1051.28 750.474 1206.69C851.52 1288.59 975.929 1347.82 1061.73 1375.12C1088.49 1383.64 1275.78 1428.83 1414.01 1375.12C1552.25 1321.42 2337.97 743.23 1845.67 305.945C1353.37 -131.34 694.799 19.259 529.806 49.4713C276.52 95.8513 -98.9504 183.729 -259.484 357.044C-530.809 649.97 -423.402 1020.76 -373.774 1116.37C-313.887 1231.75 -77.1665 1406.05 119.041 1158.68Z"
                    fill="url(#paint0_linear_footer)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_footer"
                    x="-437"
                    y="0"
                    width="2443"
                    height="1401"
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
                    id="paint0_linear_footer"
                    x1="-12.5739"
                    y1="1209.95"
                    x2="1233.29"
                    y2="31.6241"
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
