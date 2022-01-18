export declare type AmdxgConfig = {
    siteName: string;
    authorLink: string;
    author: string;
    gtag?: string;
    repository?: string;
    socialShare?: {
        twitter?: boolean;
        facebook?: boolean;
        line?: boolean;
        hatena?: boolean;
    };
};
export declare type Page = {
    slug: string;
    title: string;
    created: number;
};
export declare type HistoryData = Array<{
    hash: string;
    author: string;
    message: string;
    date: string;
}>;
export declare type ToCData = Array<{
    id: string;
    depth: number;
    title: string;
}>;
