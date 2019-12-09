import * as React from 'react'
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { Colors } from 'theme/Colors'

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

const BouncyDiv = styled.div<BouncyDivProps>`
    width: 20px;
    height: 20px;
    border-radius: 999px;
    background-color: ${BouncyDivProps => BouncyDivProps.color};
    animation: ${bounce} 2s ease infinite;
    margin-right: 32px;
    animation-delay: ${BouncyDivProps => BouncyDivProps.delay}s;
`

interface BouncyDivProps {
    delay: number
    color: string
}

export const LoadingAnimation = ({ loading }: Props) => {
    if (loading) {
        return (
            <>
                <BouncyDiv delay={0} color={Colors.SeaGlass} />
                <BouncyDiv delay={0.1} color={Colors.Rose} />
                <BouncyDiv delay={0.2} color={Colors.Sky} />
                <BouncyDiv delay={0.3} color={Colors.HotPink} />
            </>
        )
    } else {
        return null
    }
}

interface Props {
    loading: boolean
}
