const helper = require('../helper/index.js');

module.exports = {
    logicOne: async (request, response) => {
        const { number } = request.body

        function isPrime(num) {
            for (var i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }

        function display(n) {
            var arr = [];
            for (var i = parseInt(number); i < n; i += 2) {
                if (isPrime(i)) {
                    arr.push(i);
                }
            }
            console.log(arr.slice(1, 21))
            return arr.slice(1, 21)
        }
        display(1000)
        try {
            return helper.response(response, 200, "Operation Success")
        } catch (error) {

        }
    }
}