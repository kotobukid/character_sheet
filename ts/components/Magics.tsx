import * as React from 'react'
import {Magic} from "../types";

declare type MagicsProps = {
    magics: Magic[],
    setMagics: (magics: Magic[]) => void,
    appendMagic: (m: Magic) => void
}

const Magics: React.FC<MagicsProps> = (props) => {

    const colStyle: React.CSSProperties = {
        width: "100px"
    }

    const changeMagic = (m: Magic, e: React.ChangeEvent<HTMLInputElement>, type: 'label' | 'description') => {
        props.setMagics(props.magics.map((magic: Magic) => {
            if (magic.key === m.key) {
                return {...magic, ...{[type]: e.target.value}}
            }
            return magic
        }))
    }

    const appendMagic = () => {
        props.appendMagic({label: '', description: '', key: -1})
    }

    return (
        <table className="magics">
            <colgroup>
                <col style={colStyle}/>
                <col style={colStyle}/>
            </colgroup>
            <thead>
            <tr>
                <th>よく使う魔法</th>
                <th>MP、効果概要</th>
            </tr>
            </thead>
            <tbody>
            {
                props.magics.map((m: Magic) => (
                    <tr key={m.key}>
                        <td><input type="text" value={m.label} onChange={e => {
                            changeMagic(m, e, 'label')
                        }}/></td>
                        <td><input type="text" value={m.description} onChange={e => {
                            changeMagic(m, e, 'description')
                        }}/></td>
                    </tr>
                ))
            }
            </tbody>
            <tbody>
            <tr>
                <td colSpan={2}>
                    <button onClick={appendMagic}> + </button>
                </td>
            </tr>
            </tbody>
        </table>
    )
}


export default Magics