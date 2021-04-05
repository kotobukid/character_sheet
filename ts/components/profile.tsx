import * as React from 'react'
import {ProfileData} from "../types"

const Profile = (props: ProfileData) => {
    const [name, setName] = React.useState(props.name)
    const [player_name, setPlayerName] = React.useState(props.player_name)
    const [lace, setLace] = React.useState(props.lace)
    const [age, setAge] = React.useState(props.age)
    const [sex, setSex] = React.useState(props.sex)
    const [lace_ability, setLaceAbility] = React.useState(props.lace_ability)
    const [lineage, setLineage] = React.useState(props.lineage)

    return (
        <div id="profile">
            <table>
                <tbody>
                <tr>
                    <th>キャラクター名</th>
                    <td><input type="text" value={name} onChange={e => {
                        setName(e.target.value)
                    }}/></td>
                    <th>プレイヤー名</th>
                    <td><input type="text" value={player_name} onChange={e => {
                        setPlayerName(e.target.value)
                    }}/></td>
                </tr>
                <tr>
                    <th>種族</th>
                    <td><input type="text" value={lace} onChange={e => {
                        setLace(e.target.value)
                    }}/></td>
                    <th>年齢</th>
                    <td><input type="text" value={age} onChange={e => {
                        setAge(e.target.value)
                    }}/></td>
                    <th>性別</th>
                    <td><input type="text" value={sex} onChange={e => {
                        setSex(e.target.value)
                    }}/></td>
                </tr>
                <tr>
                    <th>種族特技</th>
                    <td><input type="text" value={lace_ability} onChange={e => {
                        setLaceAbility(e.target.value)
                    }}/></td>
                    <th>生まれ</th>
                    <td><input type="text" value={lineage} onChange={e => {
                        setLineage(e.target.value)
                    }}/></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Profile