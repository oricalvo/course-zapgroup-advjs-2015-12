var Network = (function () {
    "use strict";

    var baseUrl = "http://myws.com/";

    function httpGet(url) {
        console.log("httpGet: " + baseUrl + url);
    }

    function httpPost() {
    }

    return {
        httpGet: httpGet,
        httpPost: httpPost,
    };
})();
