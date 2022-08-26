import styles from "./FormStep3.module.css";

export default function FormStep3() {
  return (
    <form className={styles.form3}>
      <fieldset className={styles.field3}>
        <legend>Cadastro</legend>
        <div class={styles.container3}>
          <div className={styles.formGroup3}>
            <label htmlFor="date">Data de Nascimento:</label>
            <input
              type="date"
              id="date"
              className={styles.input}
              placeholder=""
            />
          </div>
          <div className={styles.formGroup3}>
            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              id="cpf"
              className={styles.input}
              placeholder="000-000-000-00"
            />
          </div>
          <div className={styles.formGroup3}>
            <label htmlFor="money">Renda Mensal:</label>
            <input
              type="text"
              id="money"
              className={styles.input}
              placeholder="00,00"
            />
          </div>
        </div>

        <div className="">
        <button type="submit" className="">
            Voltar
          </button>
          <button type="submit" className="">
            Enviar
          </button>
        </div>
      </fieldset>
    </form>
  );
}
