import Profile from './components/profile'

window.onload = () => {
    const $main = document.querySelector('#main')

    const MainApp = () => {
        return (
            <div>
                <Profile />
            </div>
        )
    }

    ReactDOM.render(<MainApp />, $main)
}
