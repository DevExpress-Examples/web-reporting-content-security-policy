(function () {
    window.eval = function (p) {
        if (p !== "this") {
            throw new Error("Invalid argument for eval. Only 'this' is allowed.");
        }
        return window; 
    };
})();