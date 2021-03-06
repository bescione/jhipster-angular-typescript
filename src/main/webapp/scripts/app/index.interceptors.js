/// <reference path="commons/subscriptions.service.ts" />
/// <reference path="../../typings/tsd.d.ts" />
var Onesnap;
(function (Onesnap) {
    var RXInterceptor = (function () {
        function RXInterceptor(StreamsService) {
            this.StreamsService = StreamsService;
            this.response = function (response) {
                if (response.config.url.indexOf('api') !== -1) {
                    var _service = StreamsService;
                    var _stream = _service.getStream(response.config.url);
                    _stream.onNext({ type: response.config.method, data: response.data });
                }
                return response;
            };
            return;
        }
        RXInterceptor.$inject = ['StreamsService'];
        return RXInterceptor;
    })();
    Onesnap.RXInterceptor = RXInterceptor;
    function getInstance(StreamsService) {
        return new RXInterceptor(StreamsService);
    }
    Onesnap.getInstance = getInstance;
    angular.module('springTestApp').factory('rxInterceptorFactory', getInstance);
})(Onesnap || (Onesnap = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmludGVyY2VwdG9ycy50cyJdLCJuYW1lcyI6WyJPbmVzbmFwIiwiT25lc25hcC5SWEludGVyY2VwdG9yIiwiT25lc25hcC5SWEludGVyY2VwdG9yLmNvbnN0cnVjdG9yIiwiT25lc25hcC5nZXRJbnN0YW5jZSJdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pELCtDQUErQztBQUUvQyxJQUFPLE9BQU8sQ0E0QmI7QUE1QkQsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUVmQSxJQUFhQSxhQUFhQTtRQUV6QkMsU0FGWUEsYUFBYUEsQ0FFTEEsY0FBc0NBO1lBQXRDQyxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBd0JBO1lBQ3pEQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxVQUFDQSxRQUFRQTtnQkFDekJBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUMvQ0EsSUFBSUEsUUFBUUEsR0FBR0EsY0FBY0EsQ0FBQ0E7b0JBQzlCQSxJQUFJQSxPQUFPQSxHQUFHQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDdERBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLEVBQUNBLElBQUlBLEVBQUVBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLENBQUNBLElBQUlBLEVBQUNBLENBQUNBLENBQUFBO2dCQUNwRUEsQ0FBQ0E7Z0JBQ0RBLE1BQU1BLENBQUNBLFFBQVFBLENBQUFBO1lBQ2hCQSxDQUFDQSxDQUFBQTtZQUVBQSxNQUFNQSxDQUFDQTtRQUNSQSxDQUFDQTtRQVpNRCxxQkFBT0EsR0FBa0JBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7UUFjcERBLG9CQUFDQTtJQUFEQSxDQWZBRCxBQWVDQyxJQUFBRDtJQWZZQSxxQkFBYUEsR0FBYkEsYUFlWkEsQ0FBQUE7SUFHREEsU0FBZ0JBLFdBQVdBLENBQUNBLGNBQXNDQTtRQUNqRUcsTUFBTUEsQ0FBQ0EsSUFBSUEsYUFBYUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQUE7SUFDekNBLENBQUNBO0lBRmVILG1CQUFXQSxHQUFYQSxXQUVmQSxDQUFBQTtJQUdEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUM3QkEsT0FBT0EsQ0FBQ0Esc0JBQXNCQSxFQUFFQSxXQUFXQSxDQUFDQSxDQUFDQTtBQUVoREEsQ0FBQ0EsRUE1Qk0sT0FBTyxLQUFQLE9BQU8sUUE0QmIiLCJmaWxlIjoiaW5kZXguaW50ZXJjZXB0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvbW1vbnMvc3Vic2NyaXB0aW9ucy5zZXJ2aWNlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIE9uZXNuYXAge1xyXG5cclxuXHRleHBvcnQgY2xhc3MgUlhJbnRlcmNlcHRvciB7XHJcblx0XHRzdGF0aWMgJGluamVjdDogQXJyYXk8c3RyaW5nPiA9IFsnU3RyZWFtc1NlcnZpY2UnXTtcclxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgU3RyZWFtc1NlcnZpY2U6IE9uZXNuYXAuU3RyZWFtc1NlcnZpY2UpIHtcclxuXHRcdFx0dGhpcy5yZXNwb25zZSA9IChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRpZiAocmVzcG9uc2UuY29uZmlnLnVybC5pbmRleE9mKCdhcGknKSAhPT0gLTEpIHtcclxuXHRcdFx0XHR2YXIgX3NlcnZpY2UgPSBTdHJlYW1zU2VydmljZTtcclxuXHRcdFx0XHR2YXIgX3N0cmVhbSA9IF9zZXJ2aWNlLmdldFN0cmVhbShyZXNwb25zZS5jb25maWcudXJsKTtcclxuXHRcdFx0XHRfc3RyZWFtLm9uTmV4dCh7dHlwZTogcmVzcG9uc2UuY29uZmlnLm1ldGhvZCwgZGF0YTogcmVzcG9uc2UuZGF0YX0pXHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlXHJcblx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRyZXNwb25zZSA6IChyZXNwb25zZSkgPT4gdm9pZDtcdFxyXG5cdH1cclxuXHJcblxyXG5cdGV4cG9ydCBmdW5jdGlvbiBnZXRJbnN0YW5jZShTdHJlYW1zU2VydmljZTogT25lc25hcC5TdHJlYW1zU2VydmljZSkge1xyXG5cdFx0cmV0dXJuIG5ldyBSWEludGVyY2VwdG9yKFN0cmVhbXNTZXJ2aWNlKVxyXG5cdH1cclxuXHJcblxyXG5cdGFuZ3VsYXIubW9kdWxlKCdzcHJpbmdUZXN0QXBwJylcclxuXHRcdC5mYWN0b3J5KCdyeEludGVyY2VwdG9yRmFjdG9yeScsIGdldEluc3RhbmNlKTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=