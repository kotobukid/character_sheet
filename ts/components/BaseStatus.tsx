import * as React from 'react'
import {BaseStatusData} from "../types"
import SqInput from "./parts/SqInput";
import StatusBox from "./parts/StatusBox";

const BaseStatus: React.FC<BaseStatusData & {update: (part_data: any) => void}> = (props) => {
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
                    <td rowSpan={2}><br/><SqInput value={props.skill} digit={3} onchange={(value: string) => {
                        props.update({skill: Number(value)})
                    }}>技</SqInput></td>
                    <td><SqInput value={props.a} digit={3} onchange={(value: string) => {
                        props.update({a: Number(value)})
                    }}>A</SqInput></td>
                    <td><SqInput value={props.a_growth} digit={3} onchange={(value: string) => {
                        props.update({a_growth: Number(value)})
                    }}>成長</SqInput></td>
                    <td>
                        <StatusBox value={props.skill + props.a + props.a_growth}>器用度</StatusBox>
                    </td>
                    <td>
                        <StatusBox value={Math.floor((props.skill + props.a + props.a_growth) / 6)}>ボーナス</StatusBox>
                    </td>
                </tr>
                <tr>
                    <td><SqInput value={props.b} digit={3} onchange={(value: string) => {
                        props.update({b: Number(value)})
                    }}>B</SqInput></td>
                    <td><SqInput value={props.b_growth} digit={3} onchange={(value: string) => {
                        props.update({b_growth: Number(value)})
                    }}/></td>
                    <td>
                        <StatusBox value={props.skill + props.b + props.b_growth}>敏捷度</StatusBox>
                    </td>
                    <td className="bold center large">{Math.floor((props.skill + props.b + props.b_growth) / 6)}</td>
                </tr>

                <tr>
                    <td rowSpan={2}><br/><SqInput value={props.body} digit={3} onchange={(value: string) => {
                        props.update({body: Number(value)})
                    }}>体</SqInput></td>
                    <td><SqInput value={props.c} digit={3} onchange={(value: string) => {
                        props.update({c: Number(value)})
                    }}>C</SqInput></td>
                    <td><SqInput value={props.c_growth} digit={3} onchange={(value: string) => {
                        props.update({c_growth: Number(value)})
                    }}/></td>
                    <td>
                        <StatusBox value={props.body + props.c + props.c_growth}>筋力</StatusBox>
                    </td>
                    <td className="bold center large">{Math.floor((props.body + props.c + props.c_growth) / 6)}</td>
                </tr>
                <tr>
                    <td><SqInput value={props.d} digit={3} onchange={(value: string) => {
                        props.update({d: Number(value)})
                    }}>D</SqInput></td>
                    <td><SqInput value={props.d_growth} digit={3} onchange={(value: string) => {
                        props.update({d_growth: Number(value)})
                    }}/></td>
                    <td>
                        <StatusBox value={props.body + props.d + props.d_growth}>生命力</StatusBox>
                    </td>
                    <td className="bold center large">{Math.floor((props.body + props.d + props.d_growth) / 6)}</td>
                </tr>

                <tr>
                    <td rowSpan={2}><br/><SqInput value={props.mental} digit={3} onchange={(value: string) => {
                        props.update({mental: Number(value)})
                    }}>心</SqInput></td>
                    <td><SqInput value={props.e} digit={3} onchange={(value: string) => {
                        props.update({e: Number(value)})
                    }}>E</SqInput></td>
                    <td><SqInput value={props.e_growth} digit={3} onchange={(value: string) => {
                        props.update({e_growth: Number(value)})
                    }}/></td>
                    <td>
                        <StatusBox value={props.mental + props.e + props.e_growth}>知力</StatusBox>
                    </td>
                    <td className="bold center large">{Math.floor((props.mental + props.e + props.e_growth) / 6)}</td>
                </tr>
                <tr>
                    <td><SqInput value={props.f} digit={3} onchange={(value: string) => {
                        props.update({f: Number(value)})
                    }}>F</SqInput></td>
                    <td><SqInput value={props.f_growth} digit={3} onchange={(value: string) => {
                        props.update({g_growth: Number(value)})
                    }}/></td>
                    <td>
                        <StatusBox value={props.mental + props.f + props.f_growth}>精神力</StatusBox>
                    </td>
                    <td className="bold center large">{Math.floor((props.mental + props.f + props.f_growth) / 6)}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BaseStatus