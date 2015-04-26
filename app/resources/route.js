var resources = angular.module('daywalk.resources', ['ngResource']);

resources.factory('Route', function($resource) {
  return {
  	get: function(){
  		return {
  			id: 12,
  			country: "Ukraine",
  			city: "Kharkiv",
  			title: "title data",
			preview: "preview data",
			points: [
				{
					id: 0,
					latitude: "50.000943",
					longitude: "36.234657",
					angle: 278.3,
					routeId: 12,
					sequenceNumber: 1,
					title: "Title pont 1",
					info: "info point one",
					musicUrl: "http://nn.radio-t.com/rtfiles/rt_podcast441.mp3",
					videoUrl: "https://www.youtube.com/watch?v=48bIZoOQSUI",
				},{
					id: 1,
					latitude: "49.989786",
					longitude: "36.23319",
					angle: 60.4,
					routeId: 12,
					sequenceNumber: 2,
					title: "Title pont 2",
					info: "info point two",
					musicUrl: "musicUrl1",
					videoUrl: "https://www.youtube.com/watch?v=48bIZoOQS2I",
				},{
					id: 2,
					latitude: "49.993149",
					longitude: "36.233553",
					angle: 180.4,
					routeId: 12,
					sequenceNumber: 3,
					title: "Title pont 3",
					info: "info point three",
					musicUrl: "musicUrl3",
					videoUrl: "https://www.youtube.com/watch?v=48bIZoOQSSI",
				}
			]
  		};
  	}
  }
})
