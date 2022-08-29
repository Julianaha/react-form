import styles from "./FormStep3.module.css";
import { useContext } from "react";
import { UserActions, UserContext } from "../../contexts/FormContext";
import { ClientActions, ClientContext } from "../../contexts/ClientsContext";
import { useNavigate } from "react-router-dom";


export default function FormStep3() {
  const navigate = useNavigate();
  const [user, dispatch] = useContext(UserContext)
  const [_clients, clientDispatch] = useContext(ClientContext)
  console.log({user})

  const handleSubmit = (e) => {
    e.preventDefault()
    clientDispatch(ClientActions.setAddClient(user))
    navigate("/clientes")

  }

  return (
    <form className={styles.form3} onSubmit={handleSubmit}>
      <fieldset className={styles.field3}>
        <legend>Cadastro</legend>
        <div className={styles.container3}>
          <div className={styles.formGroup3}>
            <label htmlFor="date">Data de Nascimento:</label>
            <input
              type="date"
              id="date"
              className={styles.input}
              value={user.birthdate}
              onChange={(e) => dispatch(UserActions.setBirthDate(e.target.value))}
              placeholder=""
            />
          </div>
          <div className={styles.formGroup3}>
            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              id="cpf"
              className={styles.input}
              value={user.cpf}
              onChange={(e) => dispatch(UserActions.setCpf(e.target.value))}
              placeholder="000-000-000-00"
            />
          </div>
          <div className={styles.formGroup3}>
            <label htmlFor="money">Renda Mensal:</label>
            <input
              type="text"
              id="money"
              className={styles.input}
              value={user.money}
              onChange={(e) => dispatch(UserActions.setMoney(e.target.value))}
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
