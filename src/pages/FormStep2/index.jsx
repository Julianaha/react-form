import styles from "./FormStep2.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserActions, UserContext } from "../../contexts/FormContext";


export default function FormStep2() {
  const navigateTo = useNavigate();
  const [user, dispatch] = useContext(UserContext)
  console.log({user})

  const handleNextStep = () => {
    navigateTo("/step3");
  };

  return (
    <form className={styles.form2}>
      <fieldset className={styles.field2}>
        <legend>Cadastro</legend>
        <div className={styles.container2}>
          <div className={styles.formGroup2}>
            <label htmlFor="cep">CEP:</label>
            <input
              type="text"
              id="cep"
              className={styles.inputCep}
              value={user.cep}
              onChange={(e) => dispatch(UserActions.setCep(e.target.value))}
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
                value={user.adress1}
              onChange={(e) => dispatch(UserActions.setAdress1(e.target.value))}
                placeholder="Digite seu endereço"
              />
            </div>
            <div className={styles.formGroup2}>
              <label htmlFor="adress2">Endereço 2:</label>
              <input
                type="text"
                id="adress2"
                className={styles.input2}
                value={user.adress2}
              onChange={(e) => dispatch(UserActions.setAdress2(e.target.value))}
                placeholder="Digite um segundo endereço"
              />
            </div>
          </div>
        </div>

        <div className="">
          <button type="submit" className="">
            Voltar
          </button>
          <button type="submit" className="" onClick={handleNextStep}>
            Próximo
          </button>
        </div>
      </fieldset>
    </form>
  );
}
