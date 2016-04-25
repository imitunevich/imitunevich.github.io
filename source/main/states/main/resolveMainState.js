"use strict";

const resolveMainState = {
    auth: function ($timeout, $state, AuthService) {
        if (!AuthService.hasLoggedInUser()) {
            $timeout(function () {
                $state.go('auth');
            });
        }
    }
};

export default resolveMainState;
