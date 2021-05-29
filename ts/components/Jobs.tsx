import * as React from 'react'
import {JOBS, JobCollection} from '../types'

declare type JobsProps = {
    jobCollection: JobCollection[]
}

const Jobs: React.FC<JobsProps> = (props => {
    const colStyleA: React.CSSProperties = {
        width: '160px'
    }
    const colStyleB: React.CSSProperties = {
        width: '80px'
    }

    return (
        <table id='jobs'>
            <colgroup>
                <col style={colStyleA}/>
                <col style={colStyleB}/>
            </colgroup>
            <thead>
            <tr>
                <th>技能</th>
                <th>レベル</th>
            </tr>
            </thead>
            <tbody>
            {
                props.jobCollection.map((jc: JobCollection) => (
                        <tr key={jc.jobType}>
                            <td>{JOBS[jc.jobType].label}</td>
                            <td className='center'>{jc.level}</td>
                        </tr>
                    )
                )
            }
            </tbody>
        </table>

    )
})

export default Jobs