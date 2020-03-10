const Nugu = require('nugu-kit');

const nuguParser = async (req, res, next) => {
    
    const nugu = new Nugu(req);
    const { parameters } = nugu;
    
    console.log("연결");
    req.parameters = parameters;
    //req.session = session;
    req.nugu = nugu;
    next();



}

module.exports = nuguParser;
