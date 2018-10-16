import http from 'http';
import httpProxy from 'http-proxy';
import sessionManager from "session-manager";

process.on('uncaughtException', function (err) {
    // handle the error safely
    console.log(err)
});
let port = process.env.PORT || parseInt(process.argv.pop()) || 3000;

let proxy = httpProxy.createProxy({
    changeOrigin: true
});

let oSessionManager = sessionManager.create({engine: 'memory'});

let aUrls = [
    "https://rhildred.github.io/",
    "https://rhildred.github.io/CP202Assignment5/"
];

// Create http server that leverages reverse proxy instance
// and proxy rules to proxy requests to different targets
http.createServer(function (req, res) {

    let oSession = oSessionManager.start(req, res);
    let nServer = oSession.get("nServer");
    if(!nServer || nServer < 0 || nServer > aUrls.length){
        nServer = Math.floor(Math.random() *aUrls.length);
        oSession.set("nServer", nServer);
    }
    return proxy.web(req, res, { target:  aUrls[nServer]});            

}).listen(port, ()=>{
    console.log("Proxy listening on port " + port);
});