import "../styles/MkCard.css";

import { useState } from "react";

function MkCard() {
  const [isAnon, setAnon] = useState(true);
  const [nome, setNome] = useState("");
  const [autor, setAutor] = useState("");
  const [mensagem, setMensagem] = useState("");

  const notAnon = (e) => {
    if (e.target.checked) {
      setAnon(true);
    } else {
      setAnon(false);
    }
  };

  const post_msg = async (nome, autor, mensagem) => {
    if (isAnon){
      autor = 'Anônimo'
    }
    if (nome == '' || mensagem == ''){
      window.alert('Preencha os campos corretamente!')
      return
    }

    const res = await fetch("https://cartas-nao-enviadas.onrender.com/mandarcarta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        autor,
        mensagem,
      }),
    });
    console.log(res.status);
    window.location.href = "/";
  };

  return (
    <div className="main-mkcard">
      <div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Seu nome
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Seu nome aqui"
            disabled={isAnon}
            onChange={(e) => {
              setAutor(e.target.value);
            }}
          />
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="checkChecked"
              checked={isAnon}
              onChange={(e) => {
                notAnon(e);
              }}
            />
            <label className="form-check-label" htmlFor="checkChecked">
              Anônimo
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Seu Destinatário
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Nome do destinatário aqui"
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Sua mensagem
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => {
              setMensagem(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="submit">
          <button
            onClick={() => {
              post_msg(nome, autor, mensagem);
            }}
            className="btn btn-primary"
            type="submit"
          >
            Enviar carta
          </button>
        </div>
      </div>
    </div>
  );
}

export default MkCard;
