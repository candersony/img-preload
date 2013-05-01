'use strict';

angular.module('ImageLoaderApp')
  .directive('imageLoader', function ()
  {
    return {
      restrict: 'EA',
      scope: {
        src: '@'
      },
      template: '<div></div>',
      replace: true,
      controller: function imageLoaderController($scope, $element)
      {
        var queue = new createjs.LoadQueue(true);

        queue.addEventListener("fileload", function fileLoad(event)
        {
          $element.css('background-image', 'url(' + $scope.src + ')')
            .addClass('fade-in');
        });

        $scope.$watch('src', function srcWatch(src)
        {
          if (angular.isString(src) && src.length > 0)
          {
            queue.loadFile(src);
          }
        });
      }
    };
  });
