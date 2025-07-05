import "../styles/Cards.css";


import {useEffect, useState } from "react";

function Cards(nome) {
  const [msg, setMsg] = useState(null)
  nome = nome.nome
  useEffect(() => {
    async function getMsg() {
      try {
        const response = await fetch(`https://cartas-nao-enviadas.onrender.com/nome/${nome}`);
        const data = await response.json()

        setMsg(data)
        console.log(data)
      } catch (error) {console.error(error)}
    }

    getMsg()
  }, [nome]);

  return (
    <div className="msg-row">
      {msg && msg.map((item, index) => (
        <div className="msg-col" key={index}>
          {item.nome && (
            <div className="mensagem-div card">
              <div className="nomes">
                <h1 className="card-title">{item.nome}</h1>
                <h5 className="card-author">Autor: {item.autor}</h5>
              </div>

              <p className="card-text">{item.mensagem}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Cards;
