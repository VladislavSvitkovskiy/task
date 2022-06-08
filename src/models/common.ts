export interface Match {
    params: Params
    isExact: boolean;
    path: string;
    url: string;
}

export interface Params {
    userName: string
}
