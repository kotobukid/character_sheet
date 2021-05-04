import * as React from 'react'
import {LevelsData} from "../types"
import SqInput from "./parts/sq_input";

const Levels: React.FC<LevelsData> = (props) => {

    return (
        <div id="main_spec">
            <table>
                <tbody>
                <tr>
                    <td><SqInput value={props.exp} digit={5} onchange={(value: string) => {props.setExp(Number(value))}}>経験点</SqInput></td>
                    <td><SqInput value={props.lv} digit={5} onchange={(value: string) => {props.setLv(Number(value))}}>冒険者レベル</SqInput></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Levels