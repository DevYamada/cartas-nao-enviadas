import "../styles/Home.css"
import Cards from '../components/Cards.jsx'
import {useState, useEffect} from 'react'

function Home(){

    const [quantidade, setQuantidade] = useState(0)

    useEffect(() => {
        async function quantidade(){
            const res = await fetch("https://cartas-nao-enviadas.onrender.com")
            
            setQuantidade(res.length)
            console.log(res)
        }
        quantidade()
    }, [])
    const [nome, setNome] = useState('*')

    return(
        <div className="main-home">
            <div>
                <h1>Mensagens não enviadas {quantidade}</h1>
            </div>
            <div>
                <input onChange={(e) => {e.target.value == '' ? setNome('*') : setNome(e.target.value)}} type="text" name="proc" id="proc" className="proc-nome-input" placeholder="Procure seu nome" />
            </div>
            <div>
                <Cards nome={nome} />
            </div>
        </div>
    )
}

export default Home;