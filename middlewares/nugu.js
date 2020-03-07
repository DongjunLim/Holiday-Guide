const nugu = require('nugu-kit');

const nuguParser = async (req, res, next) => {
    nugu.app(req, res);
    const { action, context } = req.body;
    const { parameters } = action;
    const { session } = context;

    req.parameters = parameters;
    req.session = session;
    req.nugu = nugu;

    next();



}

module.exports = nuguParser;