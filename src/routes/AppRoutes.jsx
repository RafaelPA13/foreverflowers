import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import RegistroPage from '../pages/Registro'
import CadastrarProduto from "../pages/CadastrarProduto";

function AppRoutes() {
    return(
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/entrar" element={<LoginPage/>}/>
            <Route path="/registro" element={<RegistroPage/>}/>
            <Route path="/produto" element={<CadastrarProduto/>}/>
          </Routes>
        </BrowserRouter>
      </>
    )
}
export default AppRoutes;
