(function() {
  'use strict';

  angular
    .module('pkwiatek')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
