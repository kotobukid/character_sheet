import * as React from 'react'
import {render} from 'react-dom'
import Profile from './components/Profile'
import BaseStatus from './components/BaseStatus'
import MainSpec from './components/MainSpec'
import Levels from './components/Levels'
import "../less/index.less"
import {Magic, ProfileData} from "./types";
import Magics from './components/Magics'

function useIncrement<T>(items: T[]): Function {
    const [length, setLength] = React.useState(items.length)

    const increment = (): number => {
        setLength(length + 1)
        return length + 1
    }

    return increment
}

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
        const [exp, setExp] = React.useState(5000)
        const [lv, setLv] = React.useState(2)
        const [skill, setSkill] = React.useState(12)
        const [body, setBody] = React.useState(5)
        const [mental, setMental] = React.useState(12)
        const [a, setA] = React.useState(6)
        const [b, setB] = React.useState(7)
        const [c, setC] = React.useState(4)
        const [d, setD] = React.useState(6)
        const [e, setE] = React.useState(11)
        const [f, setF] = React.useState(6)
        const [a_growth, setAGrowth] = React.useState(6)
        const [b_growth, setBGrowth] = React.useState(7)
        const [c_growth, setCGrowth] = React.useState(4)
        const [d_growth, setDGrowth] = React.useState(6)
        const [e_growth, setEGrowth] = React.useState(11)
        const [f_growth, setFGrowth] = React.useState(6)

        const _magics = [{
            key: 1, label: 'キュアウーンズ', description: "hogehoge"
        }, {
            key: 2, label: 'エンチャント・ウェポン', description: "hogehoge"
        }] as Magic[]

        const incrementMagics = useIncrement(_magics)

        const [magics, setMagics] = React.useState(_magics)

        const appendMagic = (m: Magic) => {
            m.key = incrementMagics()
            setMagics([...magics, m])
        }

        const base_status = {
            skill,
            setSkill,
            body,
            setBody,
            mental,
            setMental,
            a,
            b,
            c,
            d,
            e,
            f,
            setA,
            setB,
            setC,
            setD,
            setE,
            setF,
            a_growth,
            b_growth,
            c_growth,
            d_growth,
            e_growth,
            f_growth,
            setAGrowth,
            setBGrowth,
            setCGrowth,
            setDGrowth,
            setEGrowth,
            setFGrowth
        }

        return (
            <div className="root">
                <div>
                    <Profile {...profile_data}/>
                    <BaseStatus {...base_status} />
                    <MainSpec {...base_status} lv={lv}/>
                    <Levels lv={lv} exp={exp} setLv={setLv} setExp={setExp}/>
                </div>
                <div>
                    <Magics magics={magics} setMagics={setMagics} appendMagic={appendMagic} />
                </div>
            </div>
        )
    }

    render(<MainApp/>, $main)
}
