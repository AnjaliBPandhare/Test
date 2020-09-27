app.controller("ModelHandlerController", function ($scope, $uibModalInstance) {

    $scope.cancelModal = function () {
        console.log("cancelmodal");
        $uibModalInstance.dismiss('close');
    }
    $scope.ok = function () {
        $uibModalInstance.close('save');

    }

});