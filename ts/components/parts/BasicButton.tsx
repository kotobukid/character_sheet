import * as React from 'react'
import {PropsWithChildren} from "react";

declare type BasicButtonProps = {
    type?: string,
    clicked: (e: React.MouseEvent) => void
}

const BasicButton: React.FC<BasicButtonProps> = (props: PropsWithChildren<BasicButtonProps>) => {
    return (
        <button className={props.type} onClick={props.clicked}>{props.children}</button>
    )
}

export default BasicButton