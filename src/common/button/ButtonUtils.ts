import { Colors } from 'theme/Colors'

export enum ButtonTypes {
    Primary = 'primary',
    Secondary = 'secondary',
}

export enum ButtonSizes {
    Large = 'large',
    Medium = 'medium',
    Small = 'small',
}

export const buttonSizeValues = {
    [ButtonSizes.Large]: {
        height: 48,
        maxWidth: 212,
        minWidth: 112,
    },
    [ButtonSizes.Medium]: {
        height: 40,
        maxWidth: 196,
        minWidth: 96,
    },
    [ButtonSizes.Small]: {
        height: 32,
        maxWidth: 180,
        minWidth: 80,
    },
}

export const buttonColorValues = {
    [ButtonTypes.Primary]: {
        color: Colors.Rose,
    },
    [ButtonTypes.Secondary]: {
        color: Colors.SeaGlass,
    },
}
