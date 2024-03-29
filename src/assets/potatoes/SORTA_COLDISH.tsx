import React, { CSSProperties } from 'react'

export const SortaColdishPotato = ({ style }: Props) => {
    return (
        <svg
            width="219"
            height="239"
            viewBox="0 0 219 239"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={style}
        >
            <path
                d="M86.401 216.075L134.052 196.619L172.709 144.305L184.397 71.6069L157.786 32.5824L111.61 26.2789L59.4414 73.7674L31.7895 153.533L44.6878 196.145L86.401 216.075Z"
                fill="url(#paint0_linear_SortaColdish)"
                stroke="black"
                stroke-width="3"
            />
            <g clip-path="url(#clip0_SortaColdish)">
                <path
                    d="M94.9898 90.2974C97.3342 91.7548 100.425 91.0419 101.893 88.7051C103.362 86.3682 102.652 83.2923 100.307 81.8348C97.9628 80.3773 94.8719 81.0902 93.4036 83.4271C91.9352 85.764 92.6454 88.8399 94.9898 90.2974Z"
                    fill="black"
                />
                <path
                    d="M126.677 135.702C129.021 137.16 132.112 136.447 133.58 134.11C135.049 131.773 134.339 128.697 131.994 127.24C129.65 125.782 126.559 126.495 125.091 128.832C123.622 131.169 124.332 134.245 126.677 135.702Z"
                    fill="black"
                />
                <path
                    d="M68.0413 149.446C70.3857 150.904 73.4766 150.191 74.945 147.854C76.4133 145.517 75.7031 142.441 73.3587 140.984C71.0143 139.526 67.9235 140.239 66.4551 142.576C64.9867 144.913 65.6969 147.989 68.0413 149.446Z"
                    fill="black"
                />
                <path
                    d="M95.643 187.223C97.829 188.582 100.711 187.917 102.08 185.738C103.449 183.559 102.787 180.691 100.601 179.332C98.4151 177.973 95.5331 178.638 94.1639 180.816C92.7948 182.995 93.457 185.864 95.643 187.223Z"
                    fill="black"
                />
                <path
                    d="M146.288 76.7396C148.474 78.0986 151.356 77.4339 152.726 75.2549C154.095 73.0759 153.432 70.2078 151.246 68.8488C149.06 67.4899 146.178 68.1546 144.809 70.3336C143.44 72.5125 144.102 75.3806 146.288 76.7396Z"
                    fill="black"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_SortaColdish"
                    x1="66.5001"
                    y1="205"
                    x2="158.5"
                    y2="32.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.0153453" stop-color="#FFDE67" />
                    <stop offset="1" stop-color="#FFF6D7" />
                </linearGradient>
                <clipPath id="clip0_SortaColdish">
                    <rect
                        width="91.4087"
                        height="123.294"
                        fill="white"
                        transform="translate(63.7951 66.3887)"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}

interface Props {
    style: CSSProperties | undefined
}
