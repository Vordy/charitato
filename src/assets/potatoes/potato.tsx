import * as React from 'react'

import { ColdishPotato } from 'assets/potatoes/COLDISH'
import { FreshPotato } from 'assets/potatoes/FRESH'
import { HotPotato } from 'assets/potatoes/HOT'
import { KindaMediumPotato } from 'assets/potatoes/KINDA_MEDIUM_IDK'
import { MediumPotato } from 'assets/potatoes/MEDIUM'
import { PureWhitePotato } from 'assets/potatoes/PURE_WHITE'
import { SortaColdishPotato } from 'assets/potatoes/SORTA_COLDISH'
import { SuperHotPotato } from 'assets/potatoes/SUPER_HOT'

export enum PotatoTypes {
    Coldish = 'Coldish',
    Fresh = 'Fresh',
    Hot = 'Hot',
    KindaMedium = 'KindaMedium',
    Medium = 'Medium',
    SortaColdish = 'SortaColdish',
    SuperHot = 'SuperHot',
    None = 'None',
    PureWhite = 'PureWhite',
}

export const Potato = ({ type, style }: Props) => {
    switch (type) {
        case PotatoTypes.Coldish:
            return <ColdishPotato style={style} />
        case PotatoTypes.Fresh:
            return <FreshPotato style={style} />
        case PotatoTypes.Hot:
            return <HotPotato style={style} />
        case PotatoTypes.KindaMedium:
            return <KindaMediumPotato style={style} />
        case PotatoTypes.Medium:
            return <MediumPotato style={style} />
        case PotatoTypes.SortaColdish:
            return <SortaColdishPotato style={style} />
        case PotatoTypes.SuperHot:
            return <SuperHotPotato style={style} />
        case PotatoTypes.None:
            return <div />
        case PotatoTypes.PureWhite:
            return <PureWhitePotato style={style} />
    }
}

interface Props {
    type: PotatoTypes
    style?: React.CSSProperties
}
