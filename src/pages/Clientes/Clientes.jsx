import { useContext } from "react";
import { ClientContext } from "../../contexts/ClientsContext";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Clientes() {
  const [clients, clientDispatch] = useContext(ClientContext);

  return (
    <>
      <p></p>
      <Table striped bordered hover responsive="lg">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>CEP</th>
            <th>Endereço1</th>
            <th>Endereço2</th>
            <th>Data Nascimento</th>
            <th>CPF</th>
            <th>Renda Mensal</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => {
            return (
              <tr key={index}>
                <td>{client.name}</td>
                <td>{client.lastname}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>{client.cep}</td>
                <td>{client.adress1}</td>
                <td>{client.adress2}</td>
                <td>{client.birthdate}</td>
                <td>{client.cpf}</td>
                <td>{client.money}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
