

function Header({name}){
    return (
        <h1>{name} Welcome to Indian Election Commission</h1>
    )
}
function Main({user}){
    return (
        <>
        <h1>This is information about us</h1>
        <h2>Hi {user.name}</h2>
        <h2>Hi {user.age}</h2>
        <h2>Hi {user.place}</h2>
        

        </>
    )
}
function Footer(){
    return (
        <h1>Thanks for visiting our Website</h1>
    )
}
function App(){
    return (
        <>
        <Header name="Sumit"></Header>
        <Main user={{name:'Sumit',age:23,place:'lucknow'}}></Main>
        <Footer></Footer>
        </>
    )
}


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(App())