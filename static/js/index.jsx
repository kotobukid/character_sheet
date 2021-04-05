window.onload = () => {
    const $main = document.querySelector('#main')

    const MainApp = () => {
        return (
            <div>hello world</div>
        )
    }

    ReactDOM.render(<MainApp />, $main)
}
