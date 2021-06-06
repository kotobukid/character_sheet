import * as React from 'react'
import {JobCollection, BaseStatusData} from "../types"
import SqInput from "./parts/SqInput";
import StatusBox from "./parts/StatusBox";

const Levels: React.FC<BaseStatusData & {jobCollection: JobCollection[]} & {update: Function}> = (props) => {

    let characterLevel = 0;
    props.jobCollection.forEach((jc: JobCollection) => {
        characterLevel = Math.max(jc.level, characterLevel)
    })

    return (
        <div id="main_spec">
            <table>
                <tbody>
                <tr>
                    <td><SqInput value={props.exp} digit={5} onchange={(value: string) => {
                        props.update({exp: Number(value)})
                    }}>経験点</SqInput></td>
                    <td>
                        <StatusBox value={characterLevel}>冒険者レベル</StatusBox>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Levels