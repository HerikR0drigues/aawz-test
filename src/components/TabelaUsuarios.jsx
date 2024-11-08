import React, { useState } from 'react';

function TabelaUsuarios({ usuarios }) {
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Funcao para lidar com o click na div de cada usuario, usamos para expandir ou nao.
    const toggleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div className="md:w-3/5 w-full">
            <div className="space-y-6 p-6 bg-aawzBlack rounded-2xl shadow-lg border-2 border-aawzMain flex flex-col min-h-[640px] max-h-[640px]">
                <h2 className="text-2xl font-bold text-aawzMain mb-6 text-center">Tabela de Usuários</h2>
                <div className="space-y-2 overflow-y-auto scrollbar-thumb-aawzMain scrollbar-track-aawzBlack scrollbar-thin px-2">
                    {usuarios && usuarios.length > 0 ? (
                        usuarios.map((usuario, index) => (
                            <div
                                key={index}
                                onClick={() => toggleExpand(index)}
                                className={`bg-zinc-800 px-4 py-2 rounded-md shadow-md cursor-pointer transition-all duration-300 border-2 border-gray-300 hover:border-aawzMain hover:bg-zinc-700 ${expandedIndex === index ? 'max-h-full' : 'max-h-20'
                                    }`}
                            >
                                <p className="text-gray-300 font-bold text-sm"><strong>Nome:</strong> {usuario.nome}</p>
                                <p className="text-gray-300 text-sm"><strong>Email:</strong> {usuario.email}</p>
                                {expandedIndex === index && ( // Expande caso seja true
                                    <>
                                        <p className="text-gray-300 text-sm"><strong>CEP:</strong> {usuario.cep}</p>
                                        <p className="text-gray-300 text-sm"><strong>Endereço:</strong> {usuario.endereco}</p>
                                        <p className="text-gray-300 text-sm"><strong>Número:</strong> {usuario.numero}</p>
                                        <p className="text-gray-300 text-sm"><strong>Complemento:</strong> {usuario.complemento}</p>
                                        <p className="text-gray-300 text-sm"><strong>Cidade:</strong> {usuario.cidade}</p>
                                        <p className="text-gray-300 text-sm"><strong>Estado:</strong> {usuario.estado}</p>
                                        <p className="text-gray-300 text-sm"><strong>Origem:</strong> {usuario.origin}</p>
                                    </>
                                )}
                            </div>
                        ))
                    ) : (
                        <div>
                            <p className="text-gray-300 text-xl text-center">Nenhum usuário cadastrado.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TabelaUsuarios;
