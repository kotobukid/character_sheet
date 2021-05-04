import * as React from 'react'

const SqInput: React.FC<{value: string | number, digit: number, onchange: Function}> = (props) => {
    const labelText: string = (props.children || '').toString()
    const _type: 'number' | 'text' = typeof props.value === 'number' ? 'number' : 'text'

    const labelStyle: React.CSSProperties = {
        fontSize: '10px',
        textAlign: 'center',
        position: 'relative',
        top: '8px',
        color: 'grey',
        backgroundColor: 'white',
        pointerEvents: 'None'
    }

    const InputStyle: React.CSSProperties = {
        width: props.digit * 20 + 'px',
        height: '32px',
        textAlign: 'center',
        fontSize: '24px',
        outline: 'none'
    }

    const OuterStyle: React.CSSProperties = {
        textAlign: 'center',
        marginTop: '-12px'
    }

    return (
        <div className="sq_input" style={OuterStyle}>
            <span style={labelStyle}>{labelText}</span>
            <br/>
            <input style={InputStyle} type={_type} value={props.value} onChange={e => props.onchange(e.target.value)}/>
        </div>
    )
}

export default SqInput