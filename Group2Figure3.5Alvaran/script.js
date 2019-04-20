new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: 
        ["Sewer Widening", "Sewer Filters", "Sewer Maintenance", "Littering Penalty"],
      datasets: [
        {
          label: "Respondent (percent)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [16,18,60,6],
          datalabels: {
                anchor: 'end'
            }
        }
      ]
    },
    options: {
        plugins: {
            datalabels: {
			backgroundColor: function(context) {
            return context.dataset.backgroundColor;
            },
				borderColor: 'white',
				borderRadius: 25,
				borderWidth: 2,
                color: 'white',
				display: function(context) {
				    var dataset = context.dataset;
				    var count = dataset.data.length;
				    var value = dataset.data[context.dataIndex];
				    return value > count * 1.5;
				},
				font: {
				    weight: 'bold',
                    size: 20,
				},
            }
        },
        scales: {
            yAxes: [{
            ticks: {
                   min: 0,
                   max: 100,
                   callback: function(value){return value+ "%"}
                },  
				scaleLabel: {
                   display: true,
                   labelString: "Percentage",
                },
                
            }]
        },
      legend: { 
          display: false 
      },
      animation: {
        animateScale: true,
      },
    }
});

// Wrap every letter in a span
$('.ml10').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});
ml.timelines["ml10"] = anime.timeline({loop: false})
  .add({
    targets: '.ml10 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 500 + 30 * i;
    }
  });

$('.ml11').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});
ml.timelines["ml11"] = anime.timeline({loop: false})
  .add({
    targets: '.ml11 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 500 + 30 * i;
    }
  });

$('.ml12').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});
ml.timelines["ml12"] = anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 500 + 30 * i;
    }
  });

