import * as React from 'react'
import {BattleSkill} from "../types";
import BasicButton from "./parts/BasicButton";

declare type BSProps = {
    battleSkills: BattleSkill[],
    setBattleSkills: (battleSkills: BattleSkill[]) => void,
    appendBattleSkill: () => void,
    battleSkillsAuto: { label: string, description: string },
    setBattleSkillsAuto: (a: { label: string, description: string }) => void
}

const BattleSkills: React.FC<BSProps> = (props => {

    const colStyle: React.CSSProperties = {
        width: '160px'
    }

    const colStyleShort: React.CSSProperties = {
        width: '30px'
    }

    const skillNameStyle: React.CSSProperties = {
        width: '130px',
        marginLeft: '0.2rem'
    }

    const deleteBattleSkill = (id: number) => {
        props.setBattleSkills(props.battleSkills.filter((bs: BattleSkill) => {
            return bs.key !== id
        }))
    }

    const changeBSProperty = (value: string, key: number, type: 'label' | 'description') => {
        props.setBattleSkills(props.battleSkills.map((bs: BattleSkill) => {
            if (bs.key === key) {
                bs[type] = value
            }
            return bs
        }));
    }

    const updateBattleSkillsAuto = (value: string, type: 'label' | 'description') => {
        const update: { label?: string, description?: string } = {}
        update[type] = value
        props.setBattleSkillsAuto({...props.battleSkillsAuto, ...update})
    }

    return (<table id="battle_skills">
        <colgroup>
            <col style={colStyle}/>
            <col style={colStyle}/>
            <col style={colStyleShort}/>
        </colgroup>
        <thead>
        <tr>
            <th>戦闘特技</th>
            <th>効果概要</th>
            <th>
                <BasicButton type='primary' clicked={props.appendBattleSkill}>+</BasicButton>
            </th>
        </tr>
        </thead>
        <tbody>
        {
            props.battleSkills.map((b: BattleSkill, index: number) => (
                <tr key={b.key}>
                    <td>
                        <span className="battleSkillName">
                            <span className="level">{index * 2 + 1}</span>
                            <input type="text" style={skillNameStyle} value={b.label} onChange={e => {
                                changeBSProperty(e.target.value, b.key, 'label')
                            }}/>
                        </span>
                    </td>
                    <td>
                        <input type="text" value={b.description} onChange={e => {
                            changeBSProperty(e.target.value, b.key, 'description')
                        }}/>
                    </td>
                    <td className="center">
                        <BasicButton type='danger' clicked={() => {
                            deleteBattleSkill(b.key)
                        }}>X
                        </BasicButton>
                    </td>
                </tr>
            ))
        }
        <tr>
            <td><textarea onChange={(e) => {
                updateBattleSkillsAuto(e.target.value, 'label')
            }} value={props.battleSkillsAuto.label} /></td>
            <td colSpan={2}><textarea onChange={(e) => {
                updateBattleSkillsAuto(e.target.value, 'description')
            }} value={props.battleSkillsAuto.description}/></td>
        </tr>
        </tbody>
    </table>)
})

export default BattleSkills