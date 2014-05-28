var sock = new SockJS('http://node-express-chat.herokuapp.com/chat');
function ChatCtrl($scope) {
  $scope.messages = [];
  $scope.sendMessage = function() {
    sock.send($scope.messageText);
    $scope.messageText = "";
  };

  sock.onmessage = function(e) {
    $scope.messages.push(e.data);
    $scope.$apply();
  };
}
