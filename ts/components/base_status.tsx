import * as React from 'react'
import {BaseStatusData} from "../types"
import SqInput from "./parts/sq_input";

const BaseStatus: React.FC<BaseStatusData> = (props) => {
    const ColStyle: React.CSSProperties = {width: "60px"}
    return (
        <div id="base_status">
            <table>
                <colgroup>
                    <col style={ColStyle}/>
                    <col style={ColStyle}/>
                    <col style={ColStyle}/>
                    <col style={ColStyle}/>
                    <col style={ColStyle}/>
                </colgroup>

                <tbody>
                <tr>
                    <td rowSpan={2}><br /><SqInput value={props.skill} digit={3} onchange={(value: string) => {props.setSkill(Number(value))}}>技</SqInput></td>
                    <td><SqInput value={props.a} digit={3} onchange={(value: string) => {props.setA(Number(value))}}>A</SqInput></td>
                    <td><SqInput value={props.a_growth} digit={3} onchange={(value: string) => {props.setAGrowth(Number(value))}}>成長</SqInput></td>
                    <td>器用度<br />{props.skill + props.a + props.a_growth}</td>
                    <td className="bold center large">{Math.floor((props.skill + props.a + props.a_growth) / 6)}</td>
                </tr>
                <tr>
                    <td><SqInput value={props.b} digit={3} onchange={(value: string) => {props.setB(Number(value))}}>B</SqInput></td>
                    <td><SqInput value={props.b_growth} digit={3} onchange={(value: string) => {props.setBGrowth(Number(value))}} /></td>
                    <td>敏捷度<br />{props.skill + props.b + props.b_growth}</td>
                    <td className="bold center large">{Math.floor((props.skill + props.b + props.b_growth) / 6)}</td>
                </tr>

                <tr>
                    <td rowSpan={2}><br /><SqInput value={props.body} digit={3} onchange={(value: string) => {props.setBody(Number(value))}}>体</SqInput></td>
                    <td><SqInput value={props.c} digit={3} onchange={(value: string) => {props.setC(Number(value))}}>C</SqInput></td>
                    <td><SqInput value={props.c_growth} digit={3} onchange={(value: string) => {props.setCGrowth(Number(value))}} /></td>
                    <td>筋力<br />{props.body + props.c + props.c_growth}</td>
                    <td className="bold center large">{Math.floor((props.body + props.c + props.c_growth) / 6)}</td>
                </tr>
                <tr>
                    <td><SqInput value={props.d} digit={3} onchange={(value: string) => {props.setD(Number(value))}}>D</SqInput></td>
                    <td><SqInput value={props.d_growth} digit={3} onchange={(value: string) => {props.setDGrowth(Number(value))}} /></td>
                    <td>生命力<br />{props.body + props.d + props.d_growth}</td>
                    <td className="bold center large">{Math.floor((props.body + props.d + props.d_growth) / 6)}</td>
                </tr>

                <tr>
                    <td rowSpan={2}><br /><SqInput value={props.mental} digit={3} onchange={(value: string) => {props.setMental(Number(value))}}>心</SqInput></td>
                    <td><SqInput value={props.e} digit={3} onchange={(value: string) => {props.setE(Number(value))}}>E</SqInput></td>
                    <td><SqInput value={props.e_growth} digit={3} onchange={(value: string) => {props.setEGrowth(Number(value))}} /></td>
                    <td>知力<br />{props.mental + props.e + props.e_growth}</td>
                    <td className="bold center large">{Math.floor((props.mental + props.e + props.e_growth) / 6)}</td>
                </tr>
                <tr>
                    <td><SqInput value={props.f} digit={3} onchange={(value: string) => {props.setF(Number(value))}}>F</SqInput></td>
                    <td><SqInput value={props.f_growth} digit={3} onchange={(value: string) => {props.setFGrowth(Number(value))}} /></td>
                    <td>精神力<br />{props.mental + props.f + props.f_growth}</td>
                    <td className="bold center large">{Math.floor((props.mental + props.f + props.f_growth) / 6)}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BaseStatus