export type RequestBody = {
    text: string;
}

export enum WordType {
    noun = 'noun',
    verb = 'verb',
    adjective = 'adjective',
    adverb = 'adverb',
    conjunction = 'conjunction',
    preposition = 'preposition',
    pronoun = 'pronoun',
    interjection = 'interjection',
    determiner = 'determiner',
    numeral = 'numeral',
}

export type WordCountResultRecord = Record<WordType, number>;