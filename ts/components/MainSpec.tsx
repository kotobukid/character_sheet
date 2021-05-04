import * as React from 'react'
import {BaseStatusData} from "../types"
import StatusBox from "./parts/StatusBox";

const MainSpec: React.FC<BaseStatusData & { lv: number }> = (props) => {
    const colStyle: React.CSSProperties = {
        width: "120px"
    }
    return (
        <div id="main_spec">
            <table>
                <colgroup>
                    <col style={colStyle}/>
                    <col style={colStyle}/>
                    <col style={colStyle}/>
                    <col style={colStyle}/>
                </colgroup>
                <tbody>
                <tr>
                    <td>冒険者レベル+<br/>生命力ボーナス=</td>
                    <td>
                        <StatusBox value={props.lv + Math.floor((props.body + props.d + props.d_growth) / 6)}>生命抵抗力</StatusBox>
                    </td>
                    <td>冒険者レベル*3+<br/>+生命力=</td>
                    <td>
                        <StatusBox value={props.lv * 3 + (props.body + props.d + props.d_growth)}>HP</StatusBox>
                    </td>
                </tr>
                <tr>
                    <td>冒険者レベル+<br/>精神力ボーナス=</td>
                    <td>
                        <StatusBox value={props.lv + Math.floor((props.mental + props.f + props.f_growth) / 6)}>精神抵抗力</StatusBox>
                    </td>
                    <td>魔法使い系技能<br/>レベル合計*3+<br/>精神力=</td>
                    <td>
                        <StatusBox value={'?'}>MP</StatusBox>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    )
}

export default MainSpec