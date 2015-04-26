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
					title: "������� �������",
					info: "��������, ������������� � �������� �� ������� ����������� � ����� �������������� ������������� ������� 24 ������� 1991 ����. ��� ������������ ������ 22 ������� 2012 ���� �������� 21-� ��������� ������������� ����������� � ��� ������ (� �������� ���������� 23 �������).",
					musicUrl: "musicUrl1",
					videoUrl: "https://www.youtube.com/watch?v=48bIZoOQS2I",
				},{
					id: 1,
					latitude: "49.998811",
					longitude: "36.233934",
					angle: 290.32,
					routeId: 12,
					sequenceNumber: 3,
					title: "������",
					info: "����������� ������������ ������������� ����� ����� � ������ ����� �.�. ������� (������) � ������ ���������� ������������ ������� �����. ������ ��������� �� ����������, �������, ����������� � ����������� ������.",
					musicUrl: "musicUrl3",
					videoUrl: "https://www.youtube.com/embed/BqjaNVrv7H4",
				},{
					id: 2,
					latitude: "50.000943",
					longitude: "36.234657",
					angle: 278.3,
					routeId: 12,
					sequenceNumber: 1,
					title: "�������� ������ ������������ ��������",
					info: "�������� ����������� �����, ��������, ��������� � ��������� ������ ������������ ��������. �������� ��� ������������ ������ 24 ����� 1935 ����, �� ���� ����� 9 ������� ����� ����, ��� ������� �������� ���� �������� ����.",
					musicUrl: "http://nn.radio-t.com/rtfiles/rt_podcast441.mp3",
					videoUrl: "",
				},{
					id: 3,
					latitude: "50.004295",
					longitude: "36.235793",
					angle: 282.73,
					routeId: 12,
					sequenceNumber: 1,
					title: "������� �������",
					info: "���?���� �����?�� (���. ����� �������) � ����������� ������� ��������,  ������ �� �������� ������� � ������ � ����������� � ����. ",
					musicUrl: "http://nn.radio-t.com/rtfiles/rt_podcast441.mp3",
					videoUrl: "https://www.youtube.com/embed/fazoIhhCcGw",
				}
			]
  		};
  	}
  }
})

.factory('routesService', ['$resource', function($resource) {
return $resource('http://daywalk-backend.herokuapp.com/rest/routes/');
}]);
