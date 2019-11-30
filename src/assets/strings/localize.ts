import { EnglishStrings } from 'assets/strings/englishStrings'

export enum SupportedLanguages {
    AmericanEnglish = 'American English',
}

type possibleIds = keyof typeof EnglishStrings

export const localize = (
    id: possibleIds,
    language: SupportedLanguages = SupportedLanguages.AmericanEnglish
): string => {
    const word = EnglishStrings[id]
    return word
}
