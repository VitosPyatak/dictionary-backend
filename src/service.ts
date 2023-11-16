import { delimiters, dictionaryMapping } from "./configs";
import { WordCountResultRecord } from "./types";
import { getInitialWordCountResultRecord, replaceWhiteSpaces } from "./utils";


const reduceWordCountResultRecord = (record: WordCountResultRecord, word: string): WordCountResultRecord => {
    const wordType = dictionaryMapping[word];
    if (wordType) record[wordType]++;
    return record;
}

export const countWordsByDictionary = (text: string): WordCountResultRecord => {
    const formattedText = replaceWhiteSpaces(text).trim().toLowerCase().split(delimiters.whiteSpace);
    console.log(formattedText);
    return formattedText.reduce(reduceWordCountResultRecord, getInitialWordCountResultRecord());
}

