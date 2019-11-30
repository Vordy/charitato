import React, { CSSProperties } from 'react'

export const Homeblob = (props: Props) => {
    return (
        <svg
            width="668"
            height="1301"
            viewBox="0 0 668 1301"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={props.style}
        >
            <style />
            <g filter="url(#filter0_i_HomeBlob)">
                <path
                    d="M151 235C303.001 345 216.999 481.5 121.499 589C71.1739 645.649 38.2777 714.897 21.5 763C-1.34508 828.5 -4.00008 821.712 4.5 958.5C13.0001 1095.29 406.293 1479 675 1203C943.707 927 744.9 948.312 752.5 928.712C760.1 909.112 804.333 336.879 737.5 -41.2874C593.167 -57.6207 239.799 -58.0872 176.999 -41.2872C114.199 -24.4872 -1.00047 125 151 235Z"
                    fill="url(#paint0_linear_HomeBlob)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_i_HomeBlob"
                    x="0.0527344"
                    y="-53.7129"
                    width="850.144"
                    height="1358.2"
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
                    <feOffset dx="37" dy="4" />
                    <feGaussianBlur stdDeviation="17" />
                    <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                    />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_HomeBlob"
                    x1="119.5"
                    y1="161.212"
                    x2="774.001"
                    y2="919.712"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF0099" />
                    <stop offset="1" stopColor="#FFE600" />
                </linearGradient>
            </defs>
        </svg>
    )
}

interface Props {
    style: CSSProperties
}
