import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Firstcomponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";

//botão enviar dados alert

class CreationGroups extends React.Component{
  constructor(promps){
    super(promps);
    this.state = {
      value: ""
    }

    this.meusInputs = this.meusInputs.bind(this);
    this.mandarDados = this.mandarDados.bind(this);


  }
  meusInputs() {
    this.setState({ value: this.target.value });
  }

  mandarDados() {
    alert(`Dados enviados: ${this.state.value}`);
  }

   FifthComponent () {

    const { valor } = this.state;
  
    return (
      <div>
        <Firstcomponent value={valor} onChange={this.meusInputs} required />
        <SecondComponent value={valor} onChange={this.meusInputs} required />
        <ThirdComponent value={valor} onChange={this.meusInputs} required />
        <FourthComponent value={valor} onChange={this.meusInputs} required />
  
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          style={{ margin: 10 }}
          onClick={apagarDados}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={this.mandarDados}
        >
          Send
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<CreationGroups />, document.querySelector("#root"));

//Botão de deletar

function apagarDados() {
  Array.from(document.querySelectorAll("input")).forEach(
    (input) => (input.value = "")
  );
  this.setState({
    itemvalues: [{}],
  });
}

export default FifthComponent;