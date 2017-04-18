store = [];

function walkingStairs(num) {
	if (store[num] === -1) {
		return walkingStairs(num - 1) + walkingStairs(num - 2);
	}
	return store[num];
}

function walkingStairsWithDP(num) {
	if (store[num] === -1) {
		store[num] = walkingStairs(num - 1) + walkingStairs(num - 2);
	}
	return store[num];
}

function initStairs(num) {
	store = [];
	for (var i = 0; i <= num; i++) {
		store.push(-1);
	}
	store[0] = 1;
	store[1] = 1;
	store[2] = 2; // Number of choice to walk to 2 floor
}

var stairs = 35;
initStairs(stairs);
var t0 = new Date().getTime();
console.log("Required steps: ", walkingStairs(stairs));
var t1 = new Date().getTime();
console.log("Call to walkingStairs without DP took " + (t1 - t0) + " milliseconds.");


initStairs(stairs);
var t0 = new Date().getTime();
console.log("Required steps: ", walkingStairsWithDP(stairs));
var t1 = new Date().getTime();
console.log("Call to walkingStairs with DP took " + (t1 - t0) + " milliseconds.");