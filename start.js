// ===================================================
// FOR DEVELOPMENT
// Total.js - framework for Node.js platform
// https://www.totaljs.com
// ===================================================

require('total.js').http('debug', {
    config: {
        'directory-public': './'
    }
});

// disable javascript compilations
F.onCompileScript = function(filename, content) {
    return content;
};