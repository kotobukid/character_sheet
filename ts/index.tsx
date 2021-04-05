import * as React from 'react'
import {render} from 'react-dom'
import Profile from './components/profile'
import "../less/index.less"

window.onload = () => {
    const $main = document.querySelector('#main')

    const MainApp = () => {
        return (
            <div>
                <Profile />
            </div>
        )
    }

    render(<MainApp />, $main)
}
