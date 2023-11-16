import { delimiters, regex } from "./configs";
import { RequestBody, WordCountResultRecord, WordType } from "./types";

export const parseRequestBody = (event): RequestBody | null => {
    try {
        return JSON.parse(event.body);
    } catch {
        return null;
    }
}

export const replaceWhiteSpaces = (text: string): string => {
    return text.replace(regex.emptySpaces, delimiters.whiteSpace);
}

export const getInitialWordCountResultRecord = (): WordCountResultRecord => {
    return Object.values(WordType).reduce((record, wordType) => {
        record[wordType] = 0;
        return record;
    }, {} as WordCountResultRecord);
}