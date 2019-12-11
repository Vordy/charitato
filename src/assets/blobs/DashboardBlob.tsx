import React, { CSSProperties } from 'react'

export const DashboardBlob = (props: Props) => {
    return (
        <svg
            width="911"
            height="900"
            viewBox="0 0 911 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={props.style}
        >
            <g filter="url(#filter0_i)">
                <path
                    d="M485.661 54.2416C747.746 -15.2622 821.902 205.799 854.915 410.968C872.313 519.087 917.105 623.595 955.607 686.357C967.613 705.929 1059.75 833.019 1176.67 866.961C1293.58 900.902 2111.44 906.134 2048.19 353.057C1984.93 -200.021 1487.07 -434.09 1366.56 -497.901C1181.57 -595.86 896.59 -727.924 698.488 -691.048C363.669 -628.722 222.761 -318.691 200.187 -227.502C172.947 -117.461 223.575 123.745 485.661 54.2416Z"
                    fill="url(#paint0_linear)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_i"
                    x="0.612793"
                    y="-1027.57"
                    width="2320.06"
                    height="2215.81"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                    x1="374.273"
                    y1="22.0168"
                    x2="1821.61"
                    y2="-17.1046"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#FF0099" />
                    <stop offset="1" stop-color="#FFE600" stop-opacity="0.7" />
                </linearGradient>
            </defs>
        </svg>
    )
}

interface Props {
    style: CSSProperties
}
