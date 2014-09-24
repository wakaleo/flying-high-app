angular.module('flyingHighApp')
  .factory("Airport", function ($resource, FLIGHTS_WEB_SERVICE_URL) {
    return $resource(FLIGHTS_WEB_SERVICE_URL + "/rest/api/airports");
  });
