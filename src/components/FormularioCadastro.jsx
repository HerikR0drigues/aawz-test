import React, { useState } from 'react';
import axios from 'axios';

function FormularioCadastro({ adicionarUsuario }) {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cep: '',
        endereco: '',
        numero: '',
        complemento: '',
        cidade: '',
        estado: '',
        origin: "digital",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCepBlur = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${formData.cep}/json/`);
            const { logradouro, localidade, uf } = response.data;
            setFormData({
                ...formData,
                endereco: logradouro,
                cidade: localidade,
                estado: uf
            });
        } catch (error) {
            alert("CEP não encontrado. Verifique o número e tente novamente.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingFormData = JSON.parse(localStorage.getItem("formData")) || [];

        const updatedFormData = Array.isArray(existingFormData) ? [...existingFormData, formData] : [formData];

        localStorage.setItem("formData", JSON.stringify(updatedFormData));

        const savedData = localStorage.getItem('formData');

        setFormData({
            nome: '',
            email: '',
            cep: '',
            endereco: '',
            numero: '',
            complemento: '',
            cidade: '',
            estado: '',
            origin: "digital",
        });

        adicionarUsuario(formData);

    };


    return (
        <div className='md:w-2/5'>
            <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-aawzBlack rounded-2xl shadow-lg border-2 border-aawzMain">
                <h2 className="text-2xl font-bold text-aawzMain mb-6 text-center">Formulário de Cadastro</h2>

                <div className="relative z-0 w-full group">
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        className="font-bold block py-2.5 px-0 w-full text-sm text-gray-300 focus:text-aawzMain bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-aawzMain peer"
                        placeholder=" "
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="nome" className="peer-focus:font-medium absolute text-sm text-gray-300  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-aawzMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Nome
                    </label>
                </div>

                <div className="relative z-0 w-full group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="font-bold block py-2.5 px-0 w-full text-sm text-gray-300 focus:text-aawzMain bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-aawzMain peer"
                        placeholder=" "
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-aawzMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email
                    </label>
                </div>

                <div className="relative z-0 w-full group">
                    <input
                        type="text"
                        name="cep"
                        id="cep"
                        className="font-bold block py-2.5 px-0 w-full text-sm text-gray-300 focus:text-aawzMain bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-aawzMain peer"
                        placeholder=" "
                        value={formData.cep}
                        onChange={handleChange}
                        onBlur={handleCepBlur}
                        required
                    />
                    <label htmlFor="cep" className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-aawzMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        CEP
                    </label>
                </div>

                <div className="flex gap-6">
                    <div className="relative z-0 w-9/12 group">
                        <input
                            type="text"
                            name="endereco"
                            id="endereco"
                            className="font-bold block py-2.5 px-0 w-full text-sm text-gray-300 focus:text-aawzMain bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-aawzMain peer"
                            placeholder=" "
                            value={formData.endereco}
                            onChange={handleChange}
                            disabled
                            required
                        />
                        <label htmlFor="endereco" className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-aawzMain  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Endereço
                        </label>
                    </div>

                    <div className="relative z-0 w-3/12 group">
                        <input
                            type="text"
                            name="numero"
                            id="numero"
                            className="font-bold block py-2.5 px-0 w-full text-sm text-gray-300 focus:text-aawzMain bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-aawzMain peer"
                            placeholder=" "
                            value={formData.numero}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="numero" className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-aawzMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Número
                        </label>
                    </div>
                </div>

                <div className="relative z-0 w-full group">
                    <input
                        type="text"
                        name="complemento"
                        id="complemento"
                        className="font-bold block py-2.5 px-0 w-full text-sm text-gray-300 focus:text-aawzMain bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-aawzMain peer"
                        placeholder=" "
                        value={formData.complemento}
                        onChange={handleChange}
                    />
                    <label htmlFor="complemento" className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-aawzMain  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Complemento
                    </label>
                </div>

                <div className="flex gap-6">
                    <div className="relative z-0 w-9/12 group">
                        <input
                            type="text"
                            name="cidade"
                            id="cidade"
                            className="font-bold block py-2.5 px-0 w-full text-sm text-gray-300 focus:text-aawzMain bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-aawzMain peer"
                            placeholder=" "
                            value={formData.cidade}
                            onChange={handleChange}
                            disabled
                            required
                        />
                        <label htmlFor="cidade" className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-aawzMain  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Cidade
                        </label>
                    </div>

                    <div className="relative z-0 w-3/12 group">
                        <input
                            type="text"
                            name="estado"
                            id="estado"
                            className="font-bold block py-2.5 px-0 w-full text-sm text-gray-300 focus:text-aawzMain bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-aawzMain peer"
                            placeholder=" "
                            value={formData.estado}
                            onChange={handleChange}
                            disabled
                            required
                        />
                        <label htmlFor="estado" className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-aawzMain peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Estado
                        </label>
                    </div>
                </div>

                <div className="relative z-0 w-full group">
                    <label className="block mb-2 text-sm text-gray-300">Origem</label>
                    <div className="relative">
                        <select
                            name="origin"
                            value={formData.origin}
                            onChange={handleChange}
                            className="rounded-md bg-transparent border-2 border-gray-300 text-gray-300 text-sm focus:border-aawzMain block w-full p-2 focus:ring-0 focus:outline-none appearance-none cursor-pointer hover:border-aawzMain"
                        >
                            <option className='bg-aawzBlack' value="digital">Digital</option>
                            <option className='bg-aawzBlack hover:bg-sky-500' value="fisico">Físico</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                        </svg>
                    </div>
                </div>


                <button type="submit" className="w-full py-2.5 bg-aawzMain hover:bg-aawzSecondary text-black font-bold rounded-lg focus:outline-none">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default FormularioCadastro;
