'use strict';

angular.module('teamChurroApp')
  .controller('MainCtrl', function ($scope, Categories) {

    $scope.categories = Categories.get();
    $scope.defaultSelections = Categories.default();
    $scope.newVendors = [];

    $scope.toggleVendor = function(category, vendor) {
      vendor.selected = !vendor.selected;
    };

    $scope.selectNone = function (category) {
      _.map(category.vendors, function (vendor) {
        vendor.selected = false;
        return vendor;
      })
    };

    $scope.submitNewVendor = function (category, vendor) {
      if(vendor) {
        category.vendors.push({id: 'new', name: vendor, selected: true});
      }
    };


    (function () {
      processSelections($scope.defaultSelections, $scope.categories);
    })();
  });


function processSelections(selections, categories) {
  _.each(selections, function (selection) {
    var category = _.find(categories, {id: selection.category});
    if(category) {
      var vendor = _.find(category.vendors, {id: selection.vendor});
      vendor.selected = true;
    }
  });
}

