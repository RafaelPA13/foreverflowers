import NavBar from "../components/Navbar";
import Footer from "../components/Footer";


function CadastrarProduto() {
  return (
    <>
      <NavBar />
      <br />
      <form>
        <h1>Cadastrar Produto</h1>

        <label>id</label>
        <input type="text"/>

        <label>Fornecedor</label>
        <input type="text"/>

        <label>Unidades</label>
        <input type="text"/>

        <label>Descrição</label>
        <textarea></textarea>

        <button>Cadastrar Produto</button>
      </form>
      <br />
      <Footer />
    </>
  );
}
export default CadastrarProduto;
