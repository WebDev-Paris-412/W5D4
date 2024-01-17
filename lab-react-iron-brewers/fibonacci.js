/**
 *
 * Fibo:
 * F(n) = F(n-2) + F(n-1)
 *
 */
const memo = {}

function fibo(n, memo) {
	if (n === 0) {
		return 0
	}
	if (n === 1) {
		return 1
	}
	if (memo[n]) {
		return memo[n]
	}

	memo[n] = fibo(n - 2, memo) + fibo(n - 1, memo)
}
console.time("fibo")
console.log(fibo(100, memo))
console.timeEnd("fibo")
