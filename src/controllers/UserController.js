export default function UserController($scope, $http) {
    "ngInject";

    function loadUser(user) {
        $scope.user = undefined;
        $scope.error = undefined;
        return $http.get(`https://api.github.com/users/${user}`).then(onUserLoaded).catch(onUserError);
    }

    function onUserLoaded(response) {
        const { data } = response;
        const user = {
            name: data.name,
            username: data.login,
            avatar: data.avatar_url,
        };
        $scope.user = user;
    }

    function onUserError(response) {
        const { data } = response;
        const error = {
            message: data.message,
        };
        $scope.error = error;
    }

    loadUser("tiagodws");

}
