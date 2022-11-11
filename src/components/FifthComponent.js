import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Firstcomponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import { useState } from "react";

//botão enviar dados alert

export default function Form() {
  const [form, setForm] = useState({
    nameInput: "",
    endInput: "",
    telInput: "",
    dataInput: "",
  });

  function mandarDados(){
    alert(
      'dados enviados:' 
    )
  }

  return (
    <div>
      <Firstcomponent
        value={form.nameInput}
        onChange={(e) => {
          setForm({ ...form, nameInput: e.target.value });
        }}
      />
      <SecondComponent
        value={form.endInput}
        onChange={(e) => {
          setForm({ ...form, endInput: e.target.value });
        }}
      />
      <ThirdComponent
        value={form.telInput}
        onChange={(e) => {
          setForm({ ...form, telInput: e.target.value });
        }}
      />
      <FourthComponent
        value={form.dataInput}
        onChange={(e) => {
          setForm({ ...form, dataInput: e.target.value });
        }}
      />

      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        style={{ margin: 10 }}
        onClick={apagarDados}
      >
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />} onClick={mandarDados}>
        Send
      </Button>
    </div>


  );
}

//Botão de deletar

function apagarDados() {
  Array.from(document.querySelectorAll("input")).forEach(
    (input) => (input.value = "")
  );
  this.setState({
    itemvalues: [{}],
  });
}
