export default function UserController($http) {
    "ngInject";

    const $ctrl = this;

    function loadUser(user) {
        $ctrl.user = undefined;
        $ctrl.error = undefined;
        return $http.get(`https://api.github.com/users/${user}`).then(onUserLoaded).catch(onUserError);
    }

    function onUserLoaded(response) {
        const { data } = response;
        const user = {
            name: data.name,
            username: data.login,
            avatar: data.avatar_url,
        };
        $ctrl.user = user;
    }

    function onUserError(response) {
        const { data } = response;
        const error = {
            message: data.message,
        };
        $ctrl.error = error;
    }

    loadUser("tiagodws");

}
