import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormularioCadastro from "./components/FormularioCadastro";
import TabelaUsuarios from "./components/TabelaUsuarios";
import Admin from "./components/Admin";
import DistribuicaoPorOrigem from "./components/DistribuicaoPorOrigem";
import DistribuicaoPorEstado from "./components/DistribuicaoPorEstado";

function App() {
  const [usuarios, setUsuarios] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : [];
  });

  // Funcao que lida com os usuários cadastrado, ele adiciona, exclui e importa
  const adicionarUsuario = (novoUsuario) => {
    let updatedUsuarios;

    //No componente ADMIN temos 2 (dois) botoes, de excluir todos e importar usuarios, esses botoes acionam essa funcao
    // Funcao de deletar
    if (novoUsuario === "deleteAll") {
      updatedUsuarios = [];
      setUsuarios(updatedUsuarios);
      localStorage.setItem("formData", JSON.stringify(updatedUsuarios));
      // Funcao de importar
    } else if (novoUsuario === "import") {
      fetch('https://estudoherikr0drigues.s3.eu-north-1.amazonaws.com/usuarios.json') // Arquivo JSON com usuarios previamente gerados
        .then(response => response.json())
        .then(data => {
          setUsuarios(data);
          localStorage.setItem("formData", JSON.stringify(data));
        })
        .catch(error => {
          console.error('Erro ao carregar o arquivo JSON:', error);
        });
    } else {
      // Acaba caindo aqui o botao do formulario de cadastro
      updatedUsuarios = [...usuarios, novoUsuario];
      setUsuarios(updatedUsuarios);
      localStorage.setItem("formData", JSON.stringify(updatedUsuarios));
    }
  };

  // Funcao para excluir um único usuário
  const handleDelete = (index) => {
    const updatedUsuarios = usuarios.filter((_, i) => i !== index);
    setUsuarios(updatedUsuarios);
    localStorage.setItem("formData", JSON.stringify(updatedUsuarios));
};


  return (
    <div className="min-h-screen bg-aawzBlack flex flex-col">
      <Header />

      <main className="flex flex-col items-center px-4 py-8 space-y-4 flex-grow">
      <div className="md:h-[630px] font-sofia justify-between w-full max-w-5xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <FormularioCadastro adicionarUsuario={adicionarUsuario} />
        <TabelaUsuarios usuarios={usuarios} onDelete={handleDelete}  />
      </div>

        <div className="font-sofia justify-between w-full max-w-5xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <DistribuicaoPorEstado usuarios={usuarios} />
          <DistribuicaoPorOrigem usuarios={usuarios} />
        </div>

        <div className="font-sofia w-full max-w-5xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Admin adicionarUsuario={adicionarUsuario}/>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
