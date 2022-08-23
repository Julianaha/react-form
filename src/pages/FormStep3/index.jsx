export default function FormStep3() {
  return (
    <form>
      <label>
        Data de Nascimento
        <input type="date" placeholder="00/00/00" />
      </label>
      <label>
        CPF
        <input type="text" name="cpf" placeholder="000.000.000-00" />
      </label>
      <label>
        Renda Mensal
        <input type="text" />
      </label>
    </form>
  );
}
