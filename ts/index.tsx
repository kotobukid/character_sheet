import * as React from 'react'
import {render} from 'react-dom'
import Profile from './components/Profile'
import BaseStatus from './components/BaseStatus'
import MainSpec from './components/MainSpec'
import Levels from './components/Levels'
import "../less/index.less"
import {BaseStatusData, BattleSkill, JobCollection, Magic, ProfileData} from "./types"
import BattleSkills from "./components/BattleSkills"
import Magics from './components/Magics'
import JobsComponent from './components/Jobs'
import History from './components/history'

declare type Key = keyof BaseStatusData;

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

        const initialMagics = [{
            key: 1, label: 'キュアウーンズ', description: "hogehoge"
        }, {
            key: 2, label: 'エンチャント・ウェポン', description: "hogehoge"
        }] as Magic[]

        const incrementMagics = useIncrement(initialMagics)

        const [magics, setMagics] = React.useState(initialMagics)

        const [history, setHistory] = React.useState('')

        const appendMagic = () => {
            const m: Magic = {
                key: incrementMagics(), label: '', description: ''
            }
            setMagics([...magics, m])
        }

        const initialBattleSkills: BattleSkill[] = [
            {key: 1, label: 'ターゲッティング', description: '誤射しなくなる'},
            {key: 2, label: 'かばうI', description: '味方への攻撃を受ける'},
        ]

        const incrementBattleSkills = useIncrement(initialBattleSkills)

        const [battleSkills, setBattleSkills] = React.useState(initialBattleSkills)

        const appendBattleSkill = () => {
            const bs: BattleSkill = {
                key: incrementBattleSkills(), label: '', description: ''
            }
            setBattleSkills([...battleSkills, bs])
        }

        const [battleSkillsAuto, setBattleSkillsAuto] = React.useState({label: '自動習得など', description: ''})

        const [base_status, setBaseStatus] = React.useState({
            skill: 12,
            body: 5,
            mental: 12,
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
            exp: 0,
        })

        const update = (rec: Record<Key, any>) => {
            setBaseStatus({...base_status, ...rec})
        }

        const jobCollection: JobCollection[] = [
            {jobType: 'magitec', level: 2},
            {jobType: 'shooter', level: 10},
            {jobType: 'sage', level: 4}
        ]

        let characterLevel = 0;
        jobCollection.forEach((jc: JobCollection) => {
            characterLevel = Math.max(jc.level, characterLevel)
        })

        return (
            <div className="root">
                <div>
                    <Profile {...profile_data}/>
                    <BaseStatus {...base_status} update={update}/>
                    <MainSpec {...base_status} lv={characterLevel}/>
                    <Levels {...base_status} jobCollection={jobCollection} update={update}/>
                    <JobsComponent jobCollection={jobCollection}/>
                </div>
                <div>
                    <BattleSkills battleSkills={battleSkills} setBattleSkills={setBattleSkills}
                                  appendBattleSkill={appendBattleSkill}
                                  battleSkillsAuto={battleSkillsAuto}
                                  setBattleSkillsAuto={setBattleSkillsAuto}
                    />
                    <Magics magics={magics} setMagics={setMagics} appendMagic={appendMagic}/>
                </div>
                <div>
                    <History history={history} setHistory={setHistory} />
                </div>
            </div>
        )
    }

    render(<MainApp/>, $main)
}
