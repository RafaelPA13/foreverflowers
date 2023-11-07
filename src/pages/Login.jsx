import NavBar from "../components/Navbar";
import Footer from "../components/Footer";


function Login() {
  return (
    <>
      <NavBar />
      <br />
      <form>
        <h1>Entrar</h1>

        <label>Email</label>
        <input type="text"/>

        <label>Senha</label>
        <input type="password"/>

        <button>Entrar</button>
      </form>
      <br />
      <Footer />
    </>
  );
}
export default Login;
