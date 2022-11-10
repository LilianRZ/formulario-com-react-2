import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';



function apagarDados() {
  Array.from(document.querySelectorAll("input")).forEach(
    input => (input.value = "")
  );
  this.setState({
    itemvalues: [{}]
  });
};


function FifthComponent() {
  return (
    <div>
      <Button variant="outlined" startIcon={<DeleteIcon />} style={{ margin: 10 }} onClick={apagarDados}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />} >
        Send
      </Button>
    </div>
  );
}

export default FifthComponent;

