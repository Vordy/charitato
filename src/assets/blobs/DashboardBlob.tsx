import React, { CSSProperties } from 'react'

export const DashboardBlob = (props: Props) => {
    return (
        <svg
            width="697"
            height="1076"
            viewBox="0 0 697 1076"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={props.style}
        >
            <g filter="url(#filter0_i)">
                <path
                    d="M368.804 75.6891C581.966 48.3375 617.24 229.748 621.84 394.393C624.264 481.156 648.589 567.931 672.313 621.252C679.711 637.879 738.889 747.323 827.223 786.153C915.558 824.983 1557.65 914.164 1565.47 473.006C1573.29 31.8482 1206.45 -203.854 1118.4 -266.528C983.229 -362.741 773.046 -496.151 613.553 -487.781C343.988 -473.635 201.022 -244.686 173.8 -175.383C140.951 -91.752 155.643 103.041 368.804 75.6891Z"
                    fill="url(#paint0_linear)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_i"
                    x="0"
                    y="-742.923"
                    width="1792.9"
                    height="1818.65"
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
                    x1="284.634"
                    y1="38.7827"
                    x2="1425.94"
                    y2="158.587"
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
