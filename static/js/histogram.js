var restScore = [];
d3.json("/scoring", function(score) {
        for(var i = 0; i < score.length; i++){
            var item = score[i];
            restScore.push(item['score']);
        }
  });
setTimeout(function(){
    var scoreMax = Math.max.apply(Math,restScore);
    var scoreMin = Math.min.apply(Math,restScore);
    var yHist = [];
    var barColor = [];
    for(var j = scoreMin; j <= scoreMax; j++){
        yHist.push(j);
        if(j > 89){
            barColor.push('#0f1ddd')
        }
        else if( j > 79){
            barColor.push('#46a346')
        }
        else if( j > 69){
            barColor.push('#dd0f18')            
        }
        else{
            barColor.push('#333333')     
        }
    }
    var trace = {
        y: restScore,
        type: "histogram",
        marker: {
            color: barColor,
            }
    };
    var layout = {
        bargap: 0.05, 
        bargroupgap: 0.2, 
        barmode: "overlay", 
        title: "Frequency of Inspection Scores", 
        xaxis: {title: "Count"}, 
        yaxis: {title: "Score"}
      };
    var data = [trace];
    Plotly.newPlot('bar', data,layout);
}, 1000);

