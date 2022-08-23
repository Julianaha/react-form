export default function FormStep1() {
  return (
    <form>
      <label>
        Nome:
        <input type="text" name="name" placeholder="Name" />
      </label>
      <label>
        Sobrenome
        <input type="text" name="surname" placeholder="Surname" />
      </label>
      <label>
        Email
        <input type="text" name="email" placeholder="Email" />
      </label>
      <label>
        Telefone:
        <input type="text" name="phone" placeholder="Phone" />
      </label>
    </form>
  );
}
