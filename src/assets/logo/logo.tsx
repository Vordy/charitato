import * as React from 'react'
import { switchTheme } from 'theme/themes'

export const Logo = ({ style }: Props) => {
    return (
        <svg
            width="65"
            height="71"
            viewBox="0 0 65 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={switchTheme}
            style={style}
        >
            <g clipPath="url(#clip0_Logo)">
                <g filter="url(#filter0_d_Logo)">
                    <path
                        d="M25.6443 64.1898L39.7873 58.4099L51.2608 42.8688L54.7299 21.2723L46.8316 9.67926L33.1265 7.8067L17.6426 21.9141L9.43541 45.6102L13.2637 58.2691L25.6443 64.1898Z"
                        fill="url(#paint0_linear_logo)"
                    />
                    <path
                        d="M25.6443 64.1898L39.7873 58.4099L51.2608 42.8688L54.7299 21.2723L46.8316 9.67926L33.1265 7.8067L17.6426 21.9141L9.43541 45.6102L13.2637 58.2691L25.6443 64.1898Z"
                        stroke="black"
                        strokeWidth="3"
                    />
                </g>
                <g clipPath="url(#clip1_logo)">
                    <path
                        d="M28.1933 26.8245C28.8893 27.2576 29.8067 27.0459 30.2424 26.3518C30.6781 25.6577 30.4672 24.744 29.7712 24.311C29.0753 23.8779 28.1579 24.0895 27.7221 24.7836C27.2864 25.4777 27.4973 26.3915 28.1933 26.8245Z"
                        fill="black"
                    />
                    <path
                        d="M37.5981 40.3132C38.2941 40.7462 39.2115 40.5346 39.6472 39.8405C40.083 39.1464 39.872 38.2327 39.1761 37.7996C38.4801 37.3666 37.5627 37.5782 37.127 38.2723C36.6913 38.9664 36.9022 39.8801 37.5981 40.3132Z"
                        fill="black"
                    />
                    <path
                        d="M20.1952 44.396C20.8911 44.8291 21.8086 44.6174 22.2443 43.9234C22.68 43.2293 22.4691 42.3155 21.7731 41.8825C21.0772 41.4494 20.1598 41.6611 19.724 42.3552C19.2883 43.0492 19.4992 43.963 20.1952 44.396Z"
                        fill="black"
                    />
                    <path
                        d="M28.3873 55.6183C29.0362 56.0221 29.8916 55.8248 30.2979 55.1776C30.7042 54.5304 30.5075 53.6784 29.8586 53.2746C29.2097 52.8708 28.3542 53.0681 27.9479 53.7153C27.5416 54.3625 27.7383 55.2145 28.3873 55.6183Z"
                        fill="black"
                    />
                    <path
                        d="M43.419 22.797C44.0679 23.2008 44.9233 23.0035 45.3296 22.3563C45.7359 21.7091 45.5392 20.8571 44.8903 20.4533C44.2414 20.0495 43.386 20.2468 42.9797 20.894C42.5734 21.5412 42.7701 22.3932 43.419 22.797Z"
                        fill="black"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_d_Logo"
                    x="3.85742"
                    y="6.22693"
                    width="56.4495"
                    height="67.6015"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_logo"
                    x1="32.5001"
                    y1="8.08424"
                    x2="5.29144"
                    y2="34.0156"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF0099" />
                    <stop offset="1" stopColor="#FFE600" stopOpacity="0.7" />
                </linearGradient>
                <clipPath id="clip0_Logo">
                    <rect width="65" height="71" fill="white" />
                </clipPath>
                <clipPath id="clip1_logo">
                    <rect
                        width="27.1304"
                        height="36.627"
                        fill="white"
                        transform="translate(18.9347 19.7222)"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}

interface Props {
    style?: React.CSSProperties
}
