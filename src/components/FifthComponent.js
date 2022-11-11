import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { IMaskInput } from "react-imask";
import { useState } from "react";

//botão enviar dados alert

function App() {
  const [data, setdata] = useState("");
  const [text1, settext1] = useState("");
  const [text2, settext2] = useState("");
  const [text3, settext3] = useState("");


  function exibirAlerta() {
    
    alert("Dados:" + text1 + " | "+ data + " | " + text2 + " | " + text3);
  
  }

  return (
    <div>
     <label htmlFor="nome">Nome Completo:</label>
      <input
        type="text"
        className="inputNome"
        name="nome"
        placeholder="Nome Completo"
        onChange={(e) => settext3(e.target.value)}
      />

      <label htmlFor="data">Nascimento aqui:</label>
      <input
        type="date"
        classname="data"
        name="data"
        placeholder="Nascimento"
        onChange={(e) => settext1(e.target.value)}
      />

      <label htmlFor="end">Endereço aqui:</label>
      <input
        type="text"
        classname="inputEnd"
        name="end"
        placeholder="Endereço"
        onChange={(e) => settext2(e.target.value)}
      />

      <label htmlFor="tel">Telefone aqui:</label>
      <IMaskInput
        mask="(00) 00000-0000"
        placeholder="Telefone"
        name="tel"
        onChange={(e) =>setdata(e.target.value)}
      />

      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        style={{ margin: 10 }}
        onClick={apagarDados}
      >
        Delete
      </Button>
      
      <Button variant="contained" endIcon={<SendIcon />} onClick={exibirAlerta}>
        Send
      </Button>
    </div>
  );
}

export default App;

//Botão de deletar

function apagarDados() {
  Array.from(document.querySelectorAll("input")).forEach(
    (input) => (input.value = "")
  );
  this.setState({
    itemvalues: [{}],
  });
}
