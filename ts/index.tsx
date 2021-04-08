import * as React from 'react'
import {render} from 'react-dom'
import Profile from './components/profile'
import BaseStatus from './components/base_status'
import MainSpec from './components/main_spec'
import Levels from './components/levels'
import "../less/index.less"
import {ProfileData, BaseStatusData, LevelsData} from "./types";

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

    const base_status: BaseStatusData = {
        skill: 12,
        body: 5,
        mental: 9,

        a: 6,
        b: 7,
        c: 4,
        d: 6,
        e: 11,
        f: 6,

        a_growth: 0,
        b_growth: 0,
        c_growth: 0,
        d_growth: 0,
        e_growth: 0,
        f_growth: 0,
    }

    const levels_data: LevelsData = {
        exp: 0,
        lv: 2
    }

    const MainApp = () => {
        return (
            <div>
                <Profile {...profile_data}/>
                <BaseStatus {...base_status}/>
                <MainSpec {...base_status} {...levels_data}/>
                <Levels {...levels_data}/>
            </div>
        )
    }

    render(<MainApp/>, $main)
}
