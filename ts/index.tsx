import * as React from 'react'
import {render} from 'react-dom'
import Profile from './components/profile'
import "../less/index.less"
import {ProfileData} from "./types";

window.onload = () => {
    const $main = document.querySelector('#main')

    const profile_data: ProfileData = {
        name: 'からあげクン',
        player_name: 'Lawson',
        lace: '鶏',
        lace_ability: '運命転変',
        sex: 'Male',
        age: '4',
        lineage: '商人'
    }


    const MainApp = () => {
        return (
            <div>
                <Profile {...profile_data}/>
            </div>
        )
    }

    render(<MainApp />, $main)
}
