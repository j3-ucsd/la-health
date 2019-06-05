

var restgrade = [];
d3.json("/scoring", function(grade) {
        for(var i = 0; i < grade.length; i++){
            var item = grade[i];
            // console.log(item['grade']);
            restgrade.push(item['grade']);
        }
  });
  // console.log(restgrade.length);
setTimeout(function(){
    var grades = [];
    grades.push(0);
    grades.push(0);
    grades.push(0);
    var pieColor = ['#0f1ddd', '#46a346', '#dd0f18'];
    var labels = ["A Rating", "B Rating", "C Rating"];
    for(var j = 0; j < restgrade.length; j++){
        // grades.push(j);
        // console.log(restgrade[j]);
        // console.log(restgrade.length);
        if(restgrade[j] === "A"){ 
          // console.log("test")
            grades[0] = grades[0]+1;
            console.log(grades);
        }
        else if(restgrade[j] == "B"){
            grades[1] = grades[1]+1;
        }
        else{
            grades[2] = grades[2]+1;   
        }
    }
    console.log(grades);
    var trace = {
        labels: labels,
        values: grades,
        type: "pie",
        marker: {
            'colors': pieColor
          },
    };

    

    var layout = {
        title: "Percentage of Grades During July 2018 Inspections",
      };
    var data = [trace];
    Plotly.newPlot('pie', data,layout);
}, 1000);


