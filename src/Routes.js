import React from "react";
import Categoria from "pages/Categoria";
import Produtologistas from "pages/Produtologistas";
import ProdutoDetalhes from "pages/ProdutoDetalhes";
import Assistncia from "pages/Assistncia";
import Contato from "pages/Contato";
import SobreaNauber from "pages/SobreaNauber";
import ProdutologistasOne from "pages/ProdutologistasOne";
import ProdutoDetalhesOne from "pages/ProdutoDetalhesOne";
import Produtos from "pages/Produtos";
import CategoriasdeProdutos from "pages/CategoriasdeProdutos";
import CategoriasTwo from "pages/CategoriasTwo";
import ProdutoCompra from "pages/ProdutoCompra";
import Catlogos from "pages/Catlogos";
import ProdutoCompraOne from "pages/ProdutoCompraOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/produtocompraone" element={<ProdutoCompraOne />} />
        <Route path="/catlogos" element={<Catlogos />} />
        <Route path="/produtocompra" element={<ProdutoCompra />} />
        <Route path="/categoriastwo" element={<CategoriasTwo />} />
        <Route
          path="/categoriasdeprodutos"
          element={<CategoriasdeProdutos />}
        />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtodetalhesone" element={<ProdutoDetalhesOne />} />
        <Route path="/produtologistasone" element={<ProdutologistasOne />} />
        <Route path="/sobreanauber" element={<SobreaNauber />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/assistncia" element={<Assistncia />} />
        <Route path="/produtodetalhes" element={<ProdutoDetalhes />} />
        <Route path="/produtologistas" element={<Produtologistas />} />
        <Route path="/categoria" element={<Categoria />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
