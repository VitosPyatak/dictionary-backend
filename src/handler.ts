'use strict';

import { Handler, Context, Callback } from 'aws-lambda';
import {countWordsByDictionary} from './service';
import { errorMessages } from './configs';
import { parseRequestBody } from './utils';


const successfullResponse = (callback: Callback, body: any) => {
    return callback(undefined, JSON.stringify({ body, statusCode: 200 }));
}

const errorResponse = (callback: Callback, error: any) => {
    return callback(undefined, JSON.stringify({ error, statusCode: 500 }));
}


const countWords: Handler = (event, context: Context, callback: Callback) => {
    const requestBody = parseRequestBody(event);
    
    if (!requestBody) return errorResponse(callback, errorMessages.invalidBody);
    
    if (!requestBody.text) return errorResponse(callback, errorMessages.textRequired);
    
    const body = countWordsByDictionary(requestBody.text);
    return successfullResponse(callback, body);
}

export { countWords }