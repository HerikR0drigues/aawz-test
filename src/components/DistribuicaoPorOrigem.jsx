import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function DistribuicaoPorOrigem({ usuarios }) {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        labels: {
          color: '#F1f1f1', // Cor das legendas
        },
      },
    },
  };

  useEffect(() => {
    const origemContagem = usuarios.reduce((acc, usuario) => {
      const origem = usuario.origin || 'Desconhecido';
      acc[origem] = (acc[origem] || 0) + 1;
      return acc;
    }, {});

    if (Object.keys(origemContagem).length > 0) {
      const chartData = {
        labels: Object.keys(origemContagem),
        datasets: [
          {
            data: Object.values(origemContagem),
            backgroundColor: ['#607367', '#52c227'],
          },
        ],
      };
      setData(chartData);
    }
  }, [usuarios]);

  return (
    <div className="md:w-1/2">
      <div className="flex flex-col justify-center items-center space-y-2 p-6 bg-aawzBlack rounded-2xl shadow-lg border-2 border-aawzMain">
        <h2 className="text-2xl font-bold text-aawzMain mb-6 text-center">Distribuição por Origem</h2>
        <div className="w-full max-h-[227px] justify-center flex">
          {usuarios.length > 0 ? (
            <Pie data={data} options={options} />
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

export default DistribuicaoPorOrigem;
