import * as React from 'react'
import {LevelsData} from "../types"

const Levels: React.FC<LevelsData> = (props) => {
    const [exp, setExp] = React.useState(props.exp)
    const [lv, setLv] = React.useState(props.lv)

    return (
        <div id="main_spec">
            <table>
                <tbody>
                <tr>
                    <td>経験点<br /><input type="number" value={exp} onChange={e => {setExp(Number(e.target.value))}} /></td>
                    <td>冒険者レベル<br /><input type="number" value={lv} onChange={e => {setLv(Number(e.target.value))}} /></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Levels