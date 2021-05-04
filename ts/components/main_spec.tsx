import * as React from 'react'
import {BaseStatusData} from "../types"

const MainSpec: React.FC<BaseStatusData & {lv: number}> = (props) => {
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
                    <td>冒険者レベル+<br />生命力ボーナス=</td>
                    <td className="center bold large">生命抵抗力<br />{props.lv + Math.floor((props.body + props.d + props.d_growth) / 6)}</td>
                    <td>冒険者レベル*3+<br />+生命力=</td>
                    <td className="center bold large">HP<br />{props.lv * 3 + (props.body + props.d + props.d_growth)}</td>
                </tr>
                <tr>
                    <td>冒険者レベル+<br />精神力ボーナス=</td>
                    <td className="center bold large">精神抵抗力<br />{props.lv + Math.floor((props.mental + props.f + props.f_growth) / 6)}</td>
                    <td>魔法使い系技能<br />レベル合計*3+<br />精神力=</td>
                    <td className="center bold large">MP<br />?</td>
                </tr>

                </tbody>
            </table>
        </div>
    )
}

export default MainSpec