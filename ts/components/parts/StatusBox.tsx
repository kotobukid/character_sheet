import * as React from "react";


const StatusBox: React.FC<{value: string | number}> = (props) => {
   return (
        <div className="center">
            <span className="up bgWhite">{props.children}</span>
            <div className="bold large halfUp">{props.value}</div>
        </div>
    )
}
export default StatusBox