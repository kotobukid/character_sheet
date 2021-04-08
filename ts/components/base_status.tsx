import * as React from 'react'
import {BaseStatusData} from "../types"

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
                    <td rowSpan={2}>技<br /><input type="number" value={skill} onChange={e => {setSkill(Number(e.target.value))}} /></td>
                    <td>A<br /><input type="number" value={a} onChange={e => {setA(Number(e.target.value))}} /></td>
                    <td>成長<br /><input type="number" value={a_growth} onChange={e => {setAGrowth(Number(e.target.value))}} /></td>
                    <td>器用度<br />{skill + a + a_growth}</td>
                    <td>{Math.floor((skill + a + a_growth) / 6)}</td>
                </tr>
                <tr>
                    <td>B<br /><input type="number" value={b} onChange={e => {setB(Number(e.target.value))}} /></td>
                    <td><br /><input type="number" value={b_growth} onChange={e => {setBGrowth(Number(e.target.value))}} /></td>
                    <td>敏捷度<br />{skill + b + b_growth}</td>
                    <td>{Math.floor((skill + b + b_growth) / 6)}</td>
                </tr>

                <tr>
                    <td rowSpan={2}>体<br /><input type="number" value={body} onChange={e => {setBody(Number(e.target.value))}} /></td>
                    <td>C<br /><input type="number" value={c} onChange={e => {setC(Number(e.target.value))}} /></td>
                    <td><br /><input type="number" value={c_growth} onChange={e => {setCGrowth(Number(e.target.value))}} /></td>
                    <td>筋力<br />{body + c + c_growth}</td>
                    <td>{Math.floor((body + c + c_growth) / 6)}</td>
                </tr>
                <tr>
                    <td>D<br /><input type="number" value={d} onChange={e => {setD(Number(e.target.value))}} /></td>
                    <td><br /><input type="number" value={d_growth} onChange={e => {setDGrowth(Number(e.target.value))}} /></td>
                    <td>生命力<br />{body + d + d_growth}</td>
                    <td>{Math.floor((body + d + d_growth) / 6)}</td>
                </tr>

                <tr>
                    <td rowSpan={2}>心<br /><input type="number" value={mental} onChange={e => {setMental(Number(e.target.value))}} /></td>
                    <td>E<br /><input type="number" value={e} onChange={e => {setE(Number(e.target.value))}} /></td>
                    <td><br /><input type="number" value={e_growth} onChange={e => {setEGrowth(Number(e.target.value))}} /></td>
                    <td>知力<br />{mental + e + e_growth}</td>
                    <td>{Math.floor((mental + e + e_growth) / 6)}</td>
                </tr>
                <tr>
                    <td>F<br /><input type="number" value={f} onChange={e => {setF(Number(e.target.value))}} /></td>
                    <td><br /><input type="number" value={f_growth} onChange={e => {setFGrowth(Number(e.target.value))}} /></td>
                    <td>精神力<br />{mental + f + f_growth}</td>
                    <td>{Math.floor((mental + f + f_growth) / 6)}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BaseStatus