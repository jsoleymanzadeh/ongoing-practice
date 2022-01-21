function lonelyinteger(a) {
	// Write your code here
	a.sort(function(x, y) {
		return x - y;
	});
	while(a.length > 1) {
		if(a[0] === a[1]) {
			a.splice(0, 2);
		} else {
			return a[0];
		}
	}
	return a[0];
}