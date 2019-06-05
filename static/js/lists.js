/* Top 10  */
d3.json('/best', function (dataBest) {
    dl =  d3.select('#top-scores').append('div')
    for(var key in dataBest) {
        dl.append('div').html('<h5><strong>'+dataBest[key]['score']+'</strong>&nbsp;'+dataBest[key]['facility_name'] +'</h5><p style="font-size:12px;">'+dataBest[key]['facility_address']+','+dataBest[key]['facility_city']+', '+dataBest[key]['facility_state']+' '+dataBest[key]['facility_zip']);
        // console.log(dataBest[key]['facility_name']);
    }
});

/* Worst 10  */
d3.json('/worst', function (dataWorst) {
    dl =  d3.select('#worst-scores').append('div')
    for(var key in dataWorst) {
        dl.append('div').html('<h5><strong>'+dataWorst[key]['score']+'</strong>&nbsp;'+dataWorst[key]['facility_name'] +'</h5><p style="font-size:12px;">'+dataWorst[key]['facility_address']+', '+dataWorst[key]['facility_city']+', '+dataWorst[key]['facility_state']+' '+dataWorst[key]['facility_zip']);
        // console.log(dataBest[key]['facility_name']);
    }
});

/* Worst 10  */
d3.json('/frequent-violations', function (dataPop) {
    dl =  d3.select('#pop-violations').append('div')
    for(var key in dataPop) {
        dl.append('div').html('<h4><strong>'+dataPop[key]['count']+'</strong></h4><p>&nbsp;'+dataPop[key]['violation_description'] +'</p>');
        // console.log(dataBest[key]['facility_name']);
    }
});