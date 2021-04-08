import * as React from 'react'
import {BaseStatusData} from "../types"
import SqInput from "./parts/sq_input";

const BaseStatus: React.FC<BaseStatusData> = (props) => {
    const [skill, setSkill] = React.useState(props.skill)
    const [body, setBody] = React.useState(props.body)
    const [mental, setMental] = React.useState(props.mental)
    const [a, setA] = React.useState(props.a)
    const [b, setB] = React.useState(props.b)
    const [c, setC] = React.useState(props.c)
    const [d, setD] = React.useState(props.d)
    const [e, setE] = React.useState(props.e)
    const [f, setF] = React.useState(props.f)

    const [a_growth, setAGrowth] = React.useState(props.a_growth)
    const [b_growth, setBGrowth] = React.useState(props.b_growth)
    const [c_growth, setCGrowth] = React.useState(props.c_growth)
    const [d_growth, setDGrowth] = React.useState(props.d_growth)
    const [e_growth, setEGrowth] = React.useState(props.e_growth)
    const [f_growth, setFGrowth] = React.useState(props.f_growth)

    return (
        <div id="base_status">
            <table>
                <tbody>
                <tr>
                    <td rowSpan={2}><br /><SqInput value={skill} digit={3} onchange={(value: string) => {setSkill(Number(value))}}>技</SqInput></td>
                    <td><SqInput value={a} digit={3} onchange={(value: string) => {setA(Number(value))}}>A</SqInput></td>
                    <td><SqInput value={a_growth} digit={3} onchange={(value: string) => {setAGrowth(Number(value))}}>成長</SqInput></td>
                    <td>器用度<br />{skill + a + a_growth}</td>
                    <td>{Math.floor((skill + a + a_growth) / 6)}</td>
                </tr>
                <tr>
                    <td><SqInput value={b} digit={3} onchange={(value: string) => {setB(Number(value))}}>B</SqInput></td>
                    <td><SqInput value={b_growth} digit={3} onchange={(value: string) => {setBGrowth(Number(value))}} /></td>
                    <td>敏捷度<br />{skill + b + b_growth}</td>
                    <td>{Math.floor((skill + b + b_growth) / 6)}</td>
                </tr>

                <tr>
                    <td rowSpan={2}><br /><SqInput value={body} digit={3} onchange={(value: string) => {setBody(Number(value))}}>体</SqInput></td>
                    <td><SqInput value={c} digit={3} onchange={(value: string) => {setC(Number(value))}}>C</SqInput></td>
                    <td><SqInput value={c_growth} digit={3} onchange={(value: string) => {setCGrowth(Number(value))}} /></td>
                    <td>筋力<br />{body + c + c_growth}</td>
                    <td>{Math.floor((body + c + c_growth) / 6)}</td>
                </tr>
                <tr>
                    <td><SqInput value={d} digit={3} onchange={(value: string) => {setD(Number(value))}}>D</SqInput></td>
                    <td><SqInput value={d_growth} digit={3} onchange={(value: string) => {setDGrowth(Number(value))}} /></td>
                    <td>生命力<br />{body + d + d_growth}</td>
                    <td>{Math.floor((body + d + d_growth) / 6)}</td>
                </tr>

                <tr>
                    <td rowSpan={2}><br /><SqInput value={mental} digit={3} onchange={(value: string) => {setMental(Number(value))}}>心</SqInput></td>
                    <td><SqInput value={e} digit={3} onchange={(value: string) => {setE(Number(value))}}>E</SqInput></td>
                    <td><SqInput value={e_growth} digit={3} onchange={(value: string) => {setEGrowth(Number(value))}} /></td>
                    <td>知力<br />{mental + e + e_growth}</td>
                    <td>{Math.floor((mental + e + e_growth) / 6)}</td>
                </tr>
                <tr>
                    <td><SqInput value={f} digit={3} onchange={(value: string) => {setF(Number(value))}}>F</SqInput></td>
                    <td><SqInput value={f_growth} digit={3} onchange={(value: string) => {setFGrowth(Number(value))}} /></td>
                    <td>精神力<br />{mental + f + f_growth}</td>
                    <td>{Math.floor((mental + f + f_growth) / 6)}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BaseStatus