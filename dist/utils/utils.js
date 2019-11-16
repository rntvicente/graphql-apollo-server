"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePort = (value) => {
    let port = (typeof value === 'string') ? parseInt(value) : value;
    if (isNaN(port)) {
        return value;
    }
    else if (port >= 0) {
        return port;
    }
    else {
        return false;
    }
};
exports.onError = (server) => {
    return (error) => {
        const address = server.address();
        const port = (typeof address === 'string') ? address : address.port;
        if (error.syscall !== 'listen') {
            throw error;
        }
        let bind = (typeof port === 'string') ? `pipe ${port}` : `port ${port}`;
        switch (error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    };
};
exports.onListening = (server) => {
    return () => {
        let addr = server.address();
        let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
        console.log(`Listening at ${bind}...`);
    };
};
