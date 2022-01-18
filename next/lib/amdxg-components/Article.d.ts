import React from "react";
import { AmdxgConfig } from "./types";
export declare function Article(props: {
    ssgConfig: AmdxgConfig;
    children: React.ReactNode;
    title: string;
    toc?: Array<{
        id: string;
        depth: number;
        title: string;
    }>;
    createdAt?: number;
    history?: Array<{
        hash: string;
        author: string;
        message: string;
        date: string;
    }>;
    tags?: string[];
}): JSX.Element;
