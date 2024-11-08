import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'; // Usando gráfico de barras
import 'chart.js/auto';

function DistribuicaoPorEstado({ usuarios }) {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Usuários por Estado', // Nome do gráfico
                data: [],
                backgroundColor: '#36A2EB', // Cor das barras
            },
        ],
    });

    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#F1f1f1', // Cor das legendas (as que aparecem ao lado do gráfico)
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#F1f1f1', // Cor dos rótulos no eixo X (nomes dos estados)
                },
            },
            y: {
                ticks: {
                    color: '#F1f1f1', // Cor dos rótulos no eixo Y (valores)
                },
            },
        },
    };

    useEffect(() => {
        const estadoContagem = usuarios.reduce((acc, usuario) => {
            const estado = usuario.estado || 'Desconhecido'; // Verificando se existe o estado
            acc[estado] = (acc[estado] || 0) + 1;
            return acc;
        }, {});

        if (Object.keys(estadoContagem).length > 0) {

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
                    {usuarios.length > 0 ? (
                        <Bar data={data} options={options} />
                    ) : (
                        <div>
                            <p className="text-gray-300 text-xl text-center">Nenhum disponível para gerar o gráfico.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DistribuicaoPorEstado;
