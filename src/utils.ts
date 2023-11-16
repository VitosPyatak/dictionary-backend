import { Callback } from "aws-lambda";
import { delimiters, headers, regex } from "./configs";
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

export const successfullResponse = (callback: Callback, body: any) => {
    return callback(null, { statusCode: 200, body: JSON.stringify(body), headers });
}

export const errorResponse = (callback: Callback, error: any) => {
    return callback(null, { statusCode: 400, body: JSON.stringify(error), headers });
}