export default function FormStep2() {
  return (
    <form>
      <label>
        CEP
        <input type="number" name="cep" value="" />
      </label>
      <label>
        Endereço 1
        <input type="text" name="adress1" />
      </label>
      <label>
      Endereço 2
        <input type="text" name="adress2" />
      </label>
    </form>
  );
}
