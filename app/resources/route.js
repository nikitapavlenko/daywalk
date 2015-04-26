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
					latitude: "49.992293",
					longitude: "36.231365",
					angle: 280.65,
					routeId: 12,
					sequenceNumber: 2,
					title: "Летящая Украина",
					info: "памятник, установленный в Харькове на площади Конституции в честь провозглашения Независимости Украины 24 августа 1991 года. Был торжественно открыт 22 августа 2012 года накануне 21-й годовщины Независимости государства и Дня города (в Харькове отмечается 23 августа).",
					musicUrl: "music/shopping-square-1.mp3",
					videoUrl: "https://www.youtube.com/watch?v=48bIZoOQS2I"
				},{
					id: 1,
					latitude: "49.998811",
					longitude: "36.233934",
					angle: 290.32,
					routeId: 12,
					sequenceNumber: 3,
					title: "ХНАТОБ",
					info: "Харьковский национальный академический театр оперы и балета имени Н.В. Лысенко (ХНАТОБ) — первый украинский стационарный оперный театр. Ставит спектакли на украинском, русском, французском и итальянском языках.",
					musicUrl: "music/shopping-square-1.mp3",
					videoUrl: "https://www.youtube.com/embed/BqjaNVrv7H4"
				},{
					id: 2,
					latitude: "50.000943",
					longitude: "36.234657",
					angle: 278.3,
					routeId: 12,
					sequenceNumber: 1,
					title: "Памятник Тарасу Григорьевичу Шевченко",
					info: "Памятник украинскому поэту, писателю, художнику и мыслителю Тарасу Григорьевичу Шевченко. Монумент был торжественно открыт 24 марта 1935 года, то есть через 9 месяцев после того, как Харьков перестал быть столицей УССР.",
					musicUrl: "music/street-traffic-2.mp3",
					videoUrl: ""
				},{
					id: 3,
					latitude: "50.004295",
					longitude: "36.235793",
					angle: 282.73,
					routeId: 12,
					sequenceNumber: 1,
					title: "Площадь Свободы",
					info: "Пло?щадь Свободы (укр. Площа Свободи) — центральная площадь Харькова,  шестая по величине площадь в Европе и двенадцатая в мире. ",
					musicUrl: "music/street-traffic-1.mp3",
					videoUrl: "https://www.youtube.com/embed/fazoIhhCcGw"
				}
			]
  		};
  	}
  }
})

.factory('routesService', ['$resource', function($resource) {
return $resource('http://daywalk-backend.herokuapp.com/rest/routes/');
}]);
