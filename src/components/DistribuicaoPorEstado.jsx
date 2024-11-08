import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function DistribuicaoPorEstado({ usuarios }) {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Usuários por Estado',
                data: [],
                backgroundColor: '#36A2EB', 
            },
        ],
    });

    // Opcao para mudar a cor das legendas do grafico
    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#F1f1f1',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#F1f1f1',
                },
            },
            y: {
                ticks: {
                    color: '#F1f1f1', 
                },
            },
        },
    };

    useEffect(() => {
        // Usamos .reduce para contar os estados
        const estadoContagem = usuarios.reduce((acc, usuario) => {
            const estado = usuario.estado || 'Desconhecido';
            acc[estado] = (acc[estado] || 0) + 1;
            return acc;
        }, {});

        if (Object.keys(estadoContagem).length > 0) {

            // Faz ordenação do maior para o menor de quantidade de estados.
            const estadosOrdenados = Object.entries(estadoContagem).sort((a, b) => b[1] - a[1]);
            const sortedLabels = estadosOrdenados.map(([estado]) => estado);
            const sortedData = estadosOrdenados.map(([_, count]) => count);
            
            const chartData = {
                labels: sortedLabels,
                datasets: [
                    {
                        label: 'Usuários por Estado',
                        data: sortedData,
                        backgroundColor: '#52c227',
                    },
                ],
            };
            setData(chartData);
        }
    }, [usuarios]);

    return (
        <div className="md:w-1/2">
            <div className="flex flex-col justify-center items-center space-y-2 p-6 bg-aawzBlack rounded-2xl shadow-lg border-2 border-aawzMain">
                <h2 className="text-2xl font-bold text-aawzMain mb-6 text-center">Distribuição por Estado</h2>
                <div className="w-full">
                    {usuarios.length > 0 ? ( // só gera o grafico se tiver pelo menos 1 (um) usuario cadastrado
                        <Bar data={data} options={options} />
                    ) : (
                        <div>
                            <p className="text-gray-300 text-xl text-center">Nenhum dado disponível para gerar o gráfico.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DistribuicaoPorEstado;
