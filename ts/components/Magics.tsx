import * as React from 'react'
import {Magic} from "../types";
import BasicButton from "./parts/BasicButton";

declare type MagicsProps = {
    magics: Magic[],
    setMagics: (magics: Magic[]) => void,
    appendMagic: () => void
}

const Magics: React.FC<MagicsProps> = (props) => {

    const colStyle: React.CSSProperties = {
        width: "160px"
    }

    const colStyleShort: React.CSSProperties = {
        width: "30px"
    }

    const changeMagic = (m: Magic, e: React.ChangeEvent<HTMLInputElement>, type: 'label' | 'description') => {
        props.setMagics(props.magics.map((magic: Magic) => {
            if (magic.key === m.key) {
                return {...magic, ...{[type]: e.target.value}}
            }
            return magic
        }))
    }

    const deleteMagic = (id: number) => {
        props.setMagics(props.magics.filter((m: Magic) => {
            return m.key !== id;
        }));
    }

    return (
        <table id="magics" className="magics">
            <colgroup>
                <col style={colStyle}/>
                <col style={colStyle}/>
                <col style={colStyleShort}/>
            </colgroup>
            <thead>
            <tr>
                <th>よく使う魔法</th>
                <th>MP、効果概要</th>
                <th>
                    <BasicButton type='primary' clicked={props.appendMagic}>+</BasicButton>
                </th>
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
                        <td className="center">
                            <BasicButton type='danger' clicked={() => {
                                deleteMagic(m.key)
                            }}>X
                            </BasicButton>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}


export default Magics