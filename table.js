d3.table = {};

//render a table using the magic of d3 selections etc.
d3.table = function( data, opts ){
  if( data ){
    //config
    opts = opts ? opts : {};
    d3.table.data = data;
    d3.table.parent = opts.parent ? opts.parent : 'body';
    d3.table.columns = opts.columns ? opts.columns : Object.keys( data[0] );
    d3.table.classes = opts.classes ? opts.classes : {};
    d3.table.id = opts.id ? opts.id : 'my-table';

    var table = d3.select(d3.table.parent)
      .append('table')
        .attr('class', 'd3-table')
        .attr('id', d3.table.id);

    //headers
    table
      .append('tr')
      .selectAll('th')
      .data(d3.table.columns)
      .enter()
      .append('th')
        .text(function(d,i){ return d })
        .attr('class','d3-table-header-cell');

    //content
    table
      .selectAll('.d3-table-row')
      .data( d3.table.data )
      .enter()
        .append('tr')
        .attr('class',function(d, i){
          if(i%2===0){
            return 'd3-table-row odd';
          }
          return 'd3-table-row even';
        })
        .each(function(record, i){
          d3.select(this).selectAll('td')
            .data(d3.table.columns)
            .enter()
            .append('td').text(function(d){
              return record[d];
            });
          });
  }else{
    return false;
  }
};