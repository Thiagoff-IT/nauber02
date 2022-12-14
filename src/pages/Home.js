import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/produtocompraone">ProdutoCompraOne</Link>
        </li>
        <li>
          <Link to="/catlogos">Catlogos</Link>
        </li>
        <li>
          <Link to="/produtocompra">ProdutoCompra</Link>
        </li>
        <li>
          <Link to="/categoriastwo">CategoriasTwo</Link>
        </li>
        <li>
          <Link to="/categoriasdeprodutos">CategoriasdeProdutos</Link>
        </li>
        <li>
          <Link to="/produtos">Produtos</Link>
        </li>
        <li>
          <Link to="/produtodetalhesone">ProdutoDetalhesOne</Link>
        </li>
        <li>
          <Link to="/produtologistasone">ProdutologistasOne</Link>
        </li>
        <li>
          <Link to="/sobreanauber">SobreaNauber</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/assistncia">Assistncia</Link>
        </li>
        <li>
          <Link to="/produtodetalhes">ProdutoDetalhes</Link>
        </li>
        <li>
          <Link to="/produtologistas">Produtologistas</Link>
        </li>
        <li>
          <Link to="/categoria">Categoria</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
