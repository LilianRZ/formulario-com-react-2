import { IMaskInput } from "react-imask";

const ThirdComponent = () => {
  return (
    <div>
      <label htmlFor="tel">Seu telefone aqui:</label>
      <IMaskInput
        mask="(00) 00000-0000"
        placeholder="Telefone"
        name="tel"
      />
    </div>
  );
}

export default ThirdComponent;
