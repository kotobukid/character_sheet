import * as React from "react"
import {basicLanguageSources, LanguageSource, ThreeStates} from "../types";

declare type LanguagesProps = {
    languages: LanguageSource[],
} & {
    setLanguages: (ls: LanguageSource[]) => void
}

const ThreeStateString: string[] = ['-', '○', '']

const Languages: React.FC<LanguagesProps> = (props => {
    const changeLanguageState = (ls: LanguageSource, key: 'speakable' | 'readable') => {
        props.setLanguages(props.languages.map(l => {
            if (ls.slug === l.slug) {
                if (l[key] > 1) {
                    l[key] = 0
                } else {
                    l[key] = (l[key] + 1) as ThreeStates
                }

                return l
            }
            return l;
        }))
    }

    return (
        <table>
            <colgroup>
                <col style={{width: '160px'}}/>
                <col style={{width: '50px'}}/>
                <col style={{width: '50px'}}/>
            </colgroup>
            <thead>
            <tr>
                <th>言語</th>
                <th>会話</th>
                <th>読文</th>
            </tr>
            </thead>
            <tbody>
            {
                basicLanguageSources.map(ls => (
                    <tr key={ls.slug}>
                        <td>{ls.name}</td>
                        <td className='center'
                            onClick={() => changeLanguageState(ls, 'speakable')}>{ThreeStateString[ls.speakable]}</td>
                        <td className='center'
                            onClick={() => changeLanguageState(ls, 'readable')}>{ThreeStateString[ls.readable]}</td>
                    </tr>
                ))
            }
            {
                props.languages.map(ls => (
                        <tr key={ls.slug}>
                            <td>{ls.name}</td>
                            <td className='center clickable'
                                onClick={() => changeLanguageState(ls, 'speakable')}>{ThreeStateString[ls.speakable]}</td>
                            <td className='center clickable'
                                onClick={() => changeLanguageState(ls, 'readable')}>{ThreeStateString[ls.readable]}</td>
                        </tr>
                    )
                )
            }
            </tbody>
        </table>
    )
})

export default Languages