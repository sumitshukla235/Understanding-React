// JSX: javasscript XML:look like html
//const element=React.createElement('h1',{id:'first'},"hello")
//const element = <h1 id="title">Hello Coder Army</h1>
// babel converts into React.createElement()

const element = <h1>hello coder army</h1>



const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(element)