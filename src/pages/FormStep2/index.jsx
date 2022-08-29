import styles from "./FormStep2.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserActions, UserContext } from "../../contexts/FormContext";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function FormStep2() {
  const navigateTo = useNavigate();
  const [user, dispatch] = useContext(UserContext);
  console.log({ user });

  const handleNextStep = () => {
    navigateTo("/step3");
  };

  return (
    <>
      <div className={styles.section}>
        <h3> Cadastro</h3>
      </div>

      <Form className={styles.form2}>
        <Form.Group className="mb-3" as={Col} md="6" controlId="formGridEmail">
          <Form.Label>CEP</Form.Label>
          <Form.Control
            type="text"
            autoFocus
            value={user.cep}
            onChange={(e) => dispatch(UserActions.setCep(e.target.value))}
            placeholder="00000-000"
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          as={Col}
          md="6"
          controlId="formGridAddress1"
        >
          <Form.Label>Endereço 1</Form.Label>
          <Form.Control
            type="text"
            value={user.adress1}
            onChange={(e) => dispatch(UserActions.setAdress1(e.target.value))}
            placeholder="Digite aqui seu endereço"
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          as={Col}
          md="6"
          controlId="formGridAddress2"
        >
          <Form.Label>Endereço 2</Form.Label>
          <Form.Control
            type="text"
            value={user.adress2}
            onChange={(e) => dispatch(UserActions.setAdress2(e.target.value))}
            placeholder="Segunda opção de endereço"
          />
        </Form.Group>

        <div className={styles.button}>
          <Button className={styles.btn} type="submit">
            Voltar
          </Button>
          <Button className={styles.btn} type="submit" onClick={handleNextStep}>
            Próximo
          </Button>
        </div>
      </Form>
    </>
  );
}
