import * as React from 'react'

const Profile = () => {
    return (
        <div id="profile">
            <table>
                <tbody>
                <tr>
                    <th>キャラクター名</th>
                    <td><input type="text"/></td>
                    <th>プレイヤー名</th>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <th>種族</th>
                    <td><input type="text"/></td>
                    <th>年齢</th>
                    <td><input type="text"/></td>
                    <th>性別</th>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <th>種族特技</th>
                    <td><input type="text"/></td>
                    <th>生まれ</th>
                    <td><input type="text"/></td>
                </tr>
                </tbody>

            </table>

        </div>
    )
}

export default Profile