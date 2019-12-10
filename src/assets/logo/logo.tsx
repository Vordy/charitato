import * as React from 'react'
import { switchTheme } from 'theme/themes'

export const Logo = ({ style, width, height }: Props) => {
    return (
        <svg
            width={width || 64}
            height={height || 70}
            style={style}
            onClick={switchTheme}
            viewBox="0 0 64 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M25.6153 64.1569L39.7582 58.377L51.2317 42.8359L54.7009 21.2395L46.8025 9.64643L33.0975 7.77386L17.6136 21.8813L9.40636 45.5773L13.2346 58.2362L25.6153 64.1569Z"
                fill="url(#paint0_linear)"
                stroke="black"
                stroke-width="3"
            />
            <path
                d="M28.1643 26.7917C28.8602 27.2248 29.7776 27.0132 30.2134 26.3191C30.6491 25.625 30.4381 24.7113 29.7422 24.2782C29.0462 23.8452 28.1288 24.0568 27.6931 24.7509C27.2574 25.445 27.4683 26.3587 28.1643 26.7917Z"
                fill="black"
            />
            <path
                d="M28.1748 26.7745C28.8614 27.2017 29.7664 26.9929 30.1962 26.3082C30.6261 25.6235 30.418 24.7221 29.7315 24.2949C29.0449 23.8677 28.1399 24.0765 27.71 24.7612C27.2802 25.4459 27.4883 26.3473 28.1748 26.7745Z"
                fill="black"
            />
            <path
                d="M37.5691 40.2804C38.265 40.7134 39.1824 40.5018 39.6182 39.8077C40.0539 39.1136 39.843 38.1999 39.147 37.7668C38.4511 37.3338 37.5337 37.5454 37.0979 38.2395C36.6622 38.9336 36.8731 39.8473 37.5691 40.2804Z"
                fill="black"
            />
            <path
                d="M37.5797 40.2631C38.2662 40.6903 39.1712 40.4815 39.6011 39.7968C40.0309 39.1121 39.8228 38.2107 39.1363 37.7835C38.4497 37.3563 37.5447 37.5651 37.1149 38.2498C36.685 38.9345 36.8931 39.8359 37.5797 40.2631Z"
                fill="black"
            />
            <path
                d="M20.1661 44.3633C20.8621 44.7964 21.7795 44.5847 22.2152 43.8906C22.651 43.1966 22.44 42.2828 21.7441 41.8498C21.0481 41.4167 20.1307 41.6284 19.695 42.3224C19.2592 43.0165 19.4702 43.9303 20.1661 44.3633Z"
                fill="black"
            />
            <path
                d="M20.1767 44.3459C20.8632 44.7731 21.7683 44.5644 22.1981 43.8796C22.628 43.1949 22.4199 42.2935 21.7333 41.8663C21.0468 41.4391 20.1418 41.6479 19.7119 42.3326C19.2821 43.0173 19.4901 43.9187 20.1767 44.3459Z"
                fill="black"
            />
            <path
                d="M28.3582 55.5855C29.0071 55.9893 29.8626 55.792 30.2689 55.1448C30.6752 54.4976 30.4785 53.6456 29.8295 53.2418C29.1806 52.838 28.3252 53.0353 27.9189 53.6825C27.5126 54.3297 27.7093 55.1817 28.3582 55.5855Z"
                fill="black"
            />
            <path
                d="M28.3688 55.5682C29.0083 55.9662 29.8513 55.7717 30.2517 55.1339C30.6521 54.4961 30.4583 53.6564 29.8188 53.2585C29.1793 52.8605 28.3362 53.055 27.9358 53.6928C27.5354 54.3306 27.7293 55.1703 28.3688 55.5682Z"
                fill="black"
            />
            <path
                d="M43.3899 22.7642C44.0388 23.168 44.8943 22.9707 45.3006 22.3235C45.7069 21.6763 45.5102 20.8243 44.8612 20.4205C44.2123 20.0167 43.3569 20.214 42.9506 20.8612C42.5443 21.5084 42.741 22.3604 43.3899 22.7642Z"
                fill="black"
            />
            <path
                d="M43.4005 22.747C44.04 23.1449 44.8831 22.9504 45.2835 22.3126C45.6839 21.6748 45.49 20.8351 44.8505 20.4372C44.211 20.0393 43.3679 20.2337 42.9675 20.8716C42.5671 21.5094 42.761 22.349 43.4005 22.747Z"
                fill="black"
            />
            <defs>
                <linearGradient
                    id="paint0_linear"
                    x1="32.471"
                    y1="8.0514"
                    x2="5.26239"
                    y2="33.9827"
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
    style?: React.CSSProperties
    width?: number
    height?: number
}
