import * as React from "react"

const History: React.FC<{ history: string, setHistory: (h: string) => void }> = (props) => {
    const labelStyle: React.CSSProperties = {
        fontSize: '10px',
        textAlign: 'center',
        position: 'relative',
        top: '8px',
        color: 'grey',
        backgroundColor: 'white',
        pointerEvents: 'None'
    }

    const wrapperStyle: React.CSSProperties = {
        // border: '1px solid black',
        width: '300px',
        padding: '5px'
    }

    const innerStyle: React.CSSProperties = {
        width: '100%',
        height: '80px'
    }

    return (
        <div className="history" style={wrapperStyle}>
            <span className="up bgWhite" style={labelStyle}>履歴、その他メモなど</span>
            <br/>
            <textarea style={innerStyle} value={props.history} onChange={e => {
                props.setHistory(e.target.value)
            }}/>
        </div>
    )
}

export default History