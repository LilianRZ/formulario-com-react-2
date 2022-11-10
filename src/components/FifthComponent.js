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
class CreationGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
}

this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);


handleChange();
{
  this.setState({ value: target.value });
}

handleSubmit();
{
  alert(`Dados enviados: ${this.state.value}`);
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

//(Component)

function FifthComponent() {
  const { valor } = this.state;

  return (
    <div>
      <Firstcomponent value={valor} onChange={this.handleChange}  required />
      <SecondComponent value={valor} onChange={this.handleChange}  required />
      <ThirdComponent value={valor} onChange={this.handleChange}  required />
      <FourthComponent value={valor} onChange={this.handleChange}  required />
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
        onClick={this.handleSubmit}
      >
        Send
      </Button>
    </div>
  );
}

export default FifthComponent;
