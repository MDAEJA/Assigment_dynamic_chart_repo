const getchart = document.querySelector("#mychart");

// const labels = [-0.3,-0.2,-0.1,0.0,1,2,3];
const data = {
    labels: [],
    datasets: [{
      label: 'Value',
      data: [],
      fill: false,
      borderColor: 'rgba(255, 99, 132, 1)',
    
    //   innerWidth:'200px',
      tension: 0.1,
    }]
  };
  

// Chart configuration
const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Time',
                    color:'red',
                    
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value',
                    color: 'red'
                },
            },
        },
        // animation: ,
    },
};

  
 let chart = new Chart(getchart,config); 
//  chart.defaults.backgroundColor = '#9BD0F5';
setInterval(()=>{
    const getData = Math.random() * 100; 
    console.log(getData);
    console.log(chart.data.labels.length);
    chart.data.labels.push(chart.data.labels.length);
    console.log(chart.data.labels);
    console.log(chart.data.labels.length);
    chart.data.datasets[0].data.push(getData);
    chart.update(); 
},1000);

 
  

  



