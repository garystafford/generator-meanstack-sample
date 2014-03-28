'use strict';
/*
 Info: https://developers.google.com/web-search/docs/
 Note: The Google Web Search API has been officially deprecated as of November 1, 2010.
 It will continue to work as per Google deprecation policy
 */

angular.module('generatorMeanstackApp')
  .factory('googleFactory', function ($q, $http) {
    return {
      getSearchResults: function () {
        var deferred = $q.defer();

        var host = 'https://ajax.googleapis.com/ajax/services/search/web';

        // URL arguments: https://developers.google.com/web-search/docs/reference
        var arg = {};
        arg.version = '1.0';
        arg.searchTerm = 'mean%20stack';
        arg.results = '8';
        arg.callback = 'JSON_CALLBACK';

        var params = '?v=' + arg.version + '&q=' + arg.searchTerm + '&rsz=' +
          arg.results + '&callback=' + arg.callback;

        $http.jsonp(host + params).then(function (data) {
          deferred.resolve(data);
        });

        return deferred.promise;
      }
    };
  });
