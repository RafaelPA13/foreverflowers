import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function registro() {
  return (
    <>
      <NavBar />
      <br />
      <form>
        <h1>Registro</h1>

        <label>Nome</label>
        <input type="text"/>

        <label>Email</label>
        <input type="text"/>

        <label>Senha</label>
        <input type="password"/>

        <button>Registrar</button>
      </form>
      <br />
      <Footer />
    </>
  );
}
export default registro;
