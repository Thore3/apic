import { KeyVal } from "./KeyVal.model";

export interface SecurityDef {
    type: string,
    name: string,
    description?: string,
    apiKey?: {
        in?: string,
        name: string
    },
    oauth2?: {
        authorizationUrl?: string,
        flow?: string,
        tokenUrl?: string,
        scopes?: KeyVal[]
    }
    xProperty?: KeyVal[]
}

export interface ApiFolder {
    _id: string,
    name: string,
    desc?: string
}

export interface ApiModel {
    _id: string,
    nameSpace: string,
    name: string,
    folder: string | undefined,
    data?: any
}

export interface ApiEndp {
    _id: string,
    summary?: string,
    path: string,
    method: string,
    folder: string | undefined,
    traits?: any[],
    tags?: string[],
    security?: any[],
    operationId?: string,
    schemes?: KeyVal[],
    consumes?: string[],
    produces?: string[],
    description?: string,
    deprecated?: boolean,
    pathParams?: any,
    queryParams?: any,
    headers?: any,
    body?: {
        type: 'raw' | 'form-data' | 'x-www-form-urlencoded' | 'graphql',
        data: any
    },
    responses?: any[],
    postrun?: string,
    prerun?: string,
}

export interface ApiTrait {
    _id: string,
    name: string,
    summary?: string,
    folder: string | undefined,
    headers?: any,
    pathParams?: any,
    queryParams?: any,
    responses?: any[]
}

export interface ApiTag {
    name: string,
    description?: string,
    externalDocs?: {
        url: string,
        description?: string
    },
    xProperty?: KeyVal[]
}

export interface ApiProject {
    _id?: string,
    title: string,
    version?: string,
    _created?: number,
    _modified?: number,
    owner?: string,
    team?: string,
    description?: string,
    contact?: any,
    folders?: { [key: string]: ApiFolder },
    models?: { [key: string]: ApiModel },
    traits?: { [key: string]: ApiTrait },
    setting?: any,
    endpoints?: { [key: string]: ApiEndp },
    termsOfService?: string,
    license?: {
        name?: string,
        url?: string
    },
    securityDefinitions?: SecurityDef[],
    simKey?: string,
    publishedId?: string,
    tags?: ApiTag[]
}

export const NewApiFolder: ApiFolder = {
    _id: 'NEW',
    name: '',
    desc: ''
}
export const NewApiModel: ApiModel = {
    _id: 'NEW',
    name: '',
    nameSpace: '',
    folder: '',
    data: { type: "object" }
}

export const NewApiTrait: ApiTrait = {
    _id: 'NEW',
    name: '',
    summary: '',
    folder: '',
    headers: { type: "object" },
    pathParams: { type: "object" },
    queryParams: { type: "object" },
    responses: []
}

export const NewApiEndp: ApiEndp = {
    _id: 'NEW',
    summary: '',
    path: '',
    method: 'get',
    folder: '',
    traits: [],
    tags: [],
    security: [],
    operationId: '',
    schemes: [],
    consumes: [],
    produces: [],
    description: '',
    pathParams: { type: 'object' },
    queryParams: { type: 'object' },
    headers: { type: 'object' },
    body: {
        type: 'raw',
        data: { type: 'object' }
    },
    responses: [{ code: '200', data: { type: 'object' } }],
    postrun: '',
    prerun: '',
}