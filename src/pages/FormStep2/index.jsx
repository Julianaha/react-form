import styles from "./FormStep2.module.css";
export default function FormStep2() {
  return (
    <form className={styles.form2}>
      <fieldset className={styles.field2}>
        <legend>Cadastro</legend>
        <div class={styles.container2}>
          <div className={styles.formGroup2}>
            <label htmlFor="cep">CEP:</label>
            <input
              type="text"
              id="cep"
              className={styles.inputCep}
              placeholder="00000-0000"
            />
          </div>
          <div className={styles.adress}>
            <div className={styles.formGroup2}>
              <label htmlFor="adress1">Endereço 1:</label>
              <input
                type="text"
                id="adress1"
                className={styles.input1}
                placeholder="Digite seu endereço"
              />
            </div>
            <div className={styles.formGroup2}>
              <label htmlFor="adress2">Endereço 2:</label>
              <input
                type="text"
                id="adress2"
                className={styles.input2}
                placeholder="Digite um segundo endereço"
              />
            </div>
          </div>
        </div>

        <div className="">
          <button type="submit" className="">
            Voltar
          </button>
          <button type="submit" className="">
            Próximo
          </button>
        </div>
      </fieldset>
    </form>
  );
}
