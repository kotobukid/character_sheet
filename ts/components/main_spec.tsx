import * as React from 'react'
import {BaseStatusData} from "../types"

const MainSpec: React.FC<BaseStatusData & {lv: number}> = (props) => {

    return (
        <div id="main_spec">
            <table>
                <tbody>
                <tr>
                    <td>冒険者レベル+<br />生命力ボーナス=</td>
                    <td>生命抵抗力<br />{props.lv + Math.floor((props.body + props.d + props.d_growth) / 6)}</td>
                    <td>冒険者レベル*3+<br />+生命力=</td>
                    <td>HP<br />{props.lv * 3 + (props.body + props.d + props.d_growth)}</td>
                </tr>
                <tr>
                    <td>冒険者レベル+<br />精神力ボーナス=</td>
                    <td>精神抵抗力<br />{props.lv + Math.floor((props.mental + props.f + props.f_growth) / 6)}</td>
                    <td>魔法使い系技能<br />レベル合計*3+<br />精神力=</td>
                    <td>MP<br />?</td>
                </tr>

                </tbody>
            </table>
        </div>
    )
}

export default MainSpec