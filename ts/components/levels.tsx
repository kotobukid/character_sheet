import * as React from 'react'
import {LevelsData} from "../types"
import SqInput from "./parts/sq_input";

const Levels: React.FC<LevelsData> = (props) => {
    const [exp, setExp] = React.useState(props.exp)
    const [lv, setLv] = React.useState(props.lv)

    return (
        <div id="main_spec">
            <table>
                <tbody>
                <tr>
                    <td><SqInput value={exp} digit={5} onchange={(value: string) => {setExp(Number(value))}}>経験点</SqInput></td>
                    <td><SqInput value={lv} digit={5} onchange={(value: string) => {setLv(Number(value))}}>冒険者レベル</SqInput></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Levels