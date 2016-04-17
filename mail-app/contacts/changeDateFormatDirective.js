"use strict";

const changeDateFormat = function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {

            //model -> view
            ngModel.$formatters.push(function (modelValue) {
                return new Date(modelValue);
            });

            //view -> model
            ngModel.$parsers.push(function (viewValue) {
                return viewValue ? viewValue.getTime() : viewValue;
            });
        }
    };
};

export default changeDateFormat;