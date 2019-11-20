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
		minWidth: 112,
		maxWidth: 212,
		height: 48,
	},
	[ButtonSizes.Medium]: {
		minWidth: 96,
		maxWidth: 196,
		height: 40,
	},
	[ButtonSizes.Small]: {
		minWidth: 80,
		maxWidth: 180,
		height: 32,
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
