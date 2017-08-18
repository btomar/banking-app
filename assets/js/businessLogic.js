let app = angular.module("transactionApp",[]);    

app.controller("transactionController",["$scope", "$http",function transactionController($scope,$http) {
    // Initializing scope variables for bootstrapping
    $scope.transactions={};
    $scope.btnValue = "SUBMIT";
    $scope.transTitle = "Make a Transfer";
    var url = './transactions.json';
    $scope.submitFlag = false;
    $scope.balance = 5824.76;
    $scope.fromAccount = "Free Checking(4692) - Available $5824.76";
    

    /* Fetch the transaction history from transactions.json\
     Note: Due to cross-domain restriction in Google Chrome, using JSONP to fetch local json file.
     The json file had to be wrapped in callback to support JSONP.

    */
    $http.jsonp(url).then(function(response){
        var data = response;
        $scope.transactions = data.data.data;        
    });


    // Preview Screen for transaction after clicking Submit
    $scope.previewTransaction = function() {
        $scope.btnValue = "TRANSFER";
        $scope.transTitle = "Preview";
         $scope.submitFlag = true;
        
    };

    // Confirm the transaction after clicking Transfer
    $scope.submitTransfer = function() {
        $scope.newBalance =  $scope.balance - $scope.trans.amount; 
        $scope.fromAccount = "Free Checking(4692) - Available $"+ $scope.newBalance;
        $scope.transactions.unshift({            
            "merchant":$scope.trans.destAccount,
            "amount": $scope.trans.amount,
            "categoryCode": "",
            "merchantLogo": "",
            "transactionDate": Date.now(),
            "transactionType": "Online Transfer"
        });
        $scope.btnValue = "SUBMIT";
        $scope.transTitle = "Make a Transfer";
        $scope.trans.destAccount = $scope.trans.amount = "";
    };
    
}]);