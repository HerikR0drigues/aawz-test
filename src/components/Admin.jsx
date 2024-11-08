function Admin({ adicionarUsuario }) {
    // Função para limpar todos os usuários do localStorage com confirmação, ele envia para o app.jsx onde contem a funcao que faz a excluzão.
    const limparUsuarios = () => {
        const confirmar = window.confirm('Você realmente deseja remover todos os usuários cadastrados?');
        if (confirmar) {
            adicionarUsuario("deleteAll");
        }
    };

    // Função para importar usuarios para o localStorage, ele envia para o app.jsx onde contem a funcao que faz a excluzão.
    const importarUsuarios = () => {
        const confirmar = window.confirm('Você realmente deseja importar a base de usuários?');
        if (confirmar) {
            adicionarUsuario("import");
        }
    };


    return (
        <div className="w-full">
            <div className='flex flex-col justify-center items-center space-y-2 p-6 bg-aawzBlack rounded-2xl shadow-lg border-2 border-aawzMain'>
                <h2 className="text-2xl font-bold text-aawzMain mb-6 text-center">Painel de administração</h2>
                <div className='flex flex-col md:flex-row w-full justify-center md:space-x-4'>
                    <button
                        type="button"
                        onClick={importarUsuarios}
                        className="text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-800 w-full md:w-1/2 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                        Importar base de dados
                    </button>
                    <button
                        type="button"
                        onClick={limparUsuarios}
                        className="text-red-700 hover:text-white border-2 border-red-700 hover:bg-red-800 w-full md:w-1/2 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                        Remover todos os usuários cadastrados
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Admin;
