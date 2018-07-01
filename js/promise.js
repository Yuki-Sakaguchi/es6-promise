/**
 * promiseでメソッドチェーンを実行するためのクラス
 */
var Pro = function() {
  this.promise = Promise.resolve();
};

/**
 * thenで繋ぐ関数
 * 引数に実行したい処理を追加し、良きタイミングでrejectを実行する
 * @param {*} callback 
 */
Pro.prototype.doSomething = function(callback) {
  return new Promise(function(resolve, reject) {
    if (callback && typeof callback === 'function') {
      callback(resolve, reject);
    } else {
      reject();
    }
  });
};

/**
 * エラー時に実行される関数
 * @param {*} callback 
 */
Pro.prototype.doError = function(callback) {
  if (callback && typeof callback === 'function') {
    callback();
  }
};