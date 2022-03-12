import React from "react";
import { AmdxgConfig } from "./types";
export declare function Article(props: {
    ssgConfig: AmdxgConfig;
    children: React.ReactNode;
    slug: string;
    title: string;
    lead?: string;
    toc?: Array<{
        id: string;
        depth: number;
        title: string;
    }>;
    createdAt?: number;
    writer: {
        name: string;
        avatar: string;
        twitter: string;
        text: string;
    };
    tags?: string[];
    related: {
        slug: string;
        title: string;
        created: string;
    }[];
}): JSX.Element;
