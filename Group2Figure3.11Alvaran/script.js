new Chart(document.getElementById("pie-chart"), {
    type: 'doughnut',
    data: {
      labels: 
        ["Yes", "Maybe", "No", "I will volunteer", "but needs training", "Depends on the Condition", "others can do better", "not interested"],
      datasets: [
          {
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
        data: [10,16,4]
      },
        {
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f"],
        data: [, , , 5, 5, 16, 2, 2]
        }
      ]
    },
    options: {
        animation: {
            animateScale: true,
      },
        title: {
        display: false,
        text: 'Predicted world population (millions) in 2050'
      },
        legend: {
            display: true,
            position: "right",
      },
        plugins: {
            datalabels: {
			backgroundColor: function(context) {
            return context.dataset.backgroundColor;
            },
                borderColor: 'white',
				borderRadius: 10,
				borderWidth: 2,
				color: 'white',

				font: {
				    weight: 'bold',
                    size: 20,
				},
            }
        }    
        
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

