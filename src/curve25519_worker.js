var CurveWrapper = require('./curve25519_wrapper.js');

module.exports = function () {
  self.onmessage = function(e) {
    CurveWrapper.curve25519_async[e.data.methodName].apply(null, e.data.args).then(function(result) {
      self.postMessage({ id: e.data.id, result: result });
    }).catch(function(error) {
      self.postMessage({ id: e.data.id, error: error.message });
    });
  };
};

// TODO how can we modify this to be compatible with what's given?
// module.exports = function (self) {
//   self.onmessage = function(e) {
//     CurveWrapper.curve25519_async[e.data.methodName].apply(null, e.data.args).then(function(result) {
//       self.postMessage({ id: e.data.id, result: result });
//     }).catch(function(error) {
//       self.postMessage({ id: e.data.id, error: error.message });
//     });
//   };
// };
