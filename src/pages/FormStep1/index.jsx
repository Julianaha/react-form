import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../contexts/FormContext";
import styles from "./FormStep1.module.css";

export default function FormStep1() {
  const navigateTo = useNavigate();
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    navigateTo("/step2");
  };

  // const handleNameChange = (e) => {
  //   dispatch({
  //     type: FormActions.setName,
  //     payload: e.target.value,
  //   });
  // };

  return (
    <form className={styles.form1}>
      <fieldset className={styles.field1}>
        <legend>Cadastro</legend>
        <div class={styles.container}>
          <div className={styles.formGroup}>
            <label htmlFor="aligned-name">Nome:</label>
            <input
              type="text"
              id="aligned-name"
              className={styles.input}
              onChange={handleNameChange}
            value={state.name}
              placeholder="Digite seu nome"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="aligned-lastname">Sobrenome:</label>
            <input
              type="text"
              id="aligned-lastname"
              className={styles.input}
              placeholder="Digite seu sobrenome"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="aligned-email">E-mail:</label>
            <input
              type="email"
              id="aligned-email"
              className={styles.input}
              placeholder="exemplo@email.com"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="aligned-phone">Telefone:</label>
            <input
              type="tel"
              id="aligned-phone"
              className={styles.input}
              placeholder="00 12343-2345"
            />
          </div>
        </div>

        <div className="">
          <button type="submit" className="" >
            Próximo
          </button>
        </div>
      </fieldset>
    </form>
  );
}
