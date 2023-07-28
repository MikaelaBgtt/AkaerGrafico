import ApexChart from 'react-apexcharts'
import { useState } from 'react';
import './chart.css'

export default function Chart() {
    const [selectedRange, setSelectedRange] = useState(''); 
    const [selectedZone, setSelectedZone] = useState('');
  
    const data = {
      '1991-1998': {
        'Zona Norte': [40, 56, 29, 49, 10, 22, 98],
        'Zona Sul': [60, 70, 45, 55, 80, 40, 90],
      },
      '2005-2011': {
        'Zona Norte': [88, 73, 99, 100, 110, 23, 14],
        'Zona Sul': [70, 90, 55, 65, 70, 20, 80],
      },
    };
  
    const handleChangeRange = (event) => {
      setSelectedRange(event.target.value);
    };
  
    const handleChangeZone = (event) => {
      setSelectedZone(event.target.value);
    };
  
    const xAxis = selectedRange === '1991-1998' ? [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998] : [2005, 2006, 2007, 2008, 2009, 2010, 2011];
    const yAxis = selectedZone ? data[selectedRange][selectedZone] : [];
  
    return (
      <div className='container'>
        <h1>Competição de comilança dos extremos de São José dos Campos!</h1>
        <h2>Quanto cada zona comeu em cada ano até que essa belíssima tradição se perdeu? Descubra!</h2>
        <h3>Comece selecionando a zona e o intervalo</h3>
        
        <ApexChart
          options={{
            chart: { id: "basic-bar" },
            xaxis: { categories: xAxis },
            grid: {
                row: {
                  colors: ['#F44336', '#E91E63', '#9C27B0']
                },
                column: {
                  colors: ['#F44336', '#E91E63', '#9C27B0']
                },
            },
            markers: {
                colors: ['#FFFFFF', '#E91E63', '#9C27B0']
             },
             
          }}
          series={[
            {
              name: `Data for ${selectedZone}`,
              data: yAxis,
            },
          ]}
          
          type="line"
          width={640}
          height={480}
          
        />
      <h3>Selecione um intervalo:</h3>
        <select name="intervalo" value={selectedRange} onChange={handleChangeRange}>
        <option value="">Select a range</option>
          <option value="1991-1998">1991-1998</option>
          <option value="2005-2011">2005-2011</option>
        </select> 
      <h3>Selecione uma zona:</h3>
        <select name="zona" value={selectedZone} onChange={handleChangeZone}>
          <option value="">Select a zone</option>
          <option value="Zona Norte">Zona Norte</option>
          <option value="Zona Sul">Zona Sul</option>
        </select>
      
    </div>
  );
}