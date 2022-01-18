import React from "react";
import { AmdxgConfig } from "./types";
export declare function Layout(props: {
    config: AmdxgConfig;
    children: React.ReactNode;
}): JSX.Element;
export declare function DefaultPlugins(props: {
    config: AmdxgConfig;
}): JSX.Element;
export declare function Main(props: {
    children: React.ReactNode;
}): JSX.Element;
export declare function Header(props: {
    config: AmdxgConfig;
}): JSX.Element;
export declare function Footer(): JSX.Element;
export declare function AmpInstallServiceWorker(props: any): JSX.Element;
