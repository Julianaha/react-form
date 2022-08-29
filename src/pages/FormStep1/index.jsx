import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserActions, UserContext } from "../../contexts/FormContext";
import styles from "./FormStep1.module.css";

export default function FormStep1() {
  const navigateTo = useNavigate();
  const [user, dispatch] = useContext(UserContext)
  console.log({user})


  const handleNextStep = () => {
    navigateTo("/step2");
  };

  return (
    <form className={styles.form1}>
      <fieldset className={styles.field1}>
        <legend>Cadastro</legend>
        <div className={styles.container}>
          <div className={styles.formGroup}>
            <label htmlFor="aligned-name">Nome:</label>
            <input
              type="text"
              id="aligned-name"
              className={styles.input}
              value={user.name}
              onChange={(e) => dispatch(UserActions.setName(e.target.value))}
              placeholder="Digite seu nome"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="aligned-lastname">Sobrenome:</label>
            <input
              type="text"
              id="aligned-lastname"
              className={styles.input}
              value={user.lastname}
              onChange={(e) => dispatch(UserActions.setLastName(e.target.value))}
              placeholder="Digite seu sobrenome"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="aligned-email">E-mail:</label>
            <input
              type="email"
              id="aligned-email"
              className={styles.input}
              value={user.email}
              onChange={(e) => dispatch(UserActions.setEmail(e.target.value))}
              placeholder="exemplo@email.com"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="aligned-phone">Telefone:</label>
            <input
              type="tel"
              id="aligned-phone"
              className={styles.input}
              value={user.phone}
              onChange={(e) => dispatch(UserActions.setPhone(e.target.value))}
              placeholder="00 12343-2345"
            />
          </div>
        </div>

        <div className="">
          <button type="submit" className="" onClick={handleNextStep} >
            Próximo
          </button>
        </div>
      </fieldset>
    </form>
  );
}
