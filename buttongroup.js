//needs zepto or jquery (or equiv)

function makeButtonGroup(selectors, callback, defaultActive, activeClass, inactiveClass){
	if(selectors && selectors.length > 0){
		defaultActive = defaultActive ? defaultActive : ids[0];
		activeClass = activeClass ? activeClass : 'active';
		inactiveClass = inactiveClass ? inactiveClass : 'inactive';
	}else{
		return;
	}

	for(var i=0; i<selectors.length; i++){
		$(selectors[i]).on('click', activate);
	}

	function activate(e){
		var activeID = e.target.id;
		for(var j=0; j<selectors.length; j++){
			if(selectors[j]==='#'+activeID){
				$(selectors[j]).addClass(activeClass).removeClass(inactiveClass);
			}else{
				$(selectors[j]).addClass(inactiveClass).removeClass(activeClass);
			}

		}
		//set all the tabs
		callback(activeID);
	}
}