var test_data = [
	{'id':1, name:'tom', age:'35'},
	{'id':2, name:'emma', age:'35'},
	{'id':3, name:'katie', age:'4'},
	{'id':4, name:'james', age:'2'}
];

console.log('testing d3.table')
if(d3.table() !== false){
	console.warn('test one failed: ');
};

d3.table( test_data )

d3.table( test_data, { columns:['name','age'], parent:'#test2', id:'second-table' });

d3.table( test_data, { columns:['name','age'], parent:'#test2', id:'second-table' });