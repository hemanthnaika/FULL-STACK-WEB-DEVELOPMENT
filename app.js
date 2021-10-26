const container = document.getElementById('app')
const content = React.createElement('div', {}, [
    React.createElement('h2', {}, `HI `),
    React.createElement('h1', {}, `im heading`),
    React.createElement('p', {}, `im a para`)
])
ReactDOM.render(content, container)