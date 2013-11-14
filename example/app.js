// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

var label = Ti.UI.createLabel();
var button = Ti.UI.createButton({
   title: 'Pay!',
   top: 10,
   width: 100,
   height: 100
});
button.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
   test123();
});

win.add(label);
win.add(button);
win.open();

// TODO: write your module tests here
var appcelerator_mpayments = require('c.mpayments.appcelerator');
Ti.API.info("module is => " + appcelerator_mpayments);

var onCancelled = function(data) {
Ti.API.info("RESPONSE is => " + data.apiKey + ' ; ' + data.clientId + ' ; ' + data.itemAmount + ' of ' + data.itemName);
};

var onSuccess = function(data) {
Ti.API.info("RESPONSE is => Tranaction is canceled: " + data.apiKey + ' ; ' + data.clientId + ' ; ' + data.itemAmount + ' of ' + data.itemName);
};

var onFailed = function(data) {
Ti.API.info("RESPONSE is => Tranaction is failed:" + data.apiKey + ' ; ' + data.clientId + ' ; ' + data.itemAmount + ' of ' + data.itemName);
};

var onPending = function(data) {
Ti.API.info("RESPONSE is => Tranaction is pending :" + data.apiKey + ' ; ' + data.clientId + ' ; ' + data.itemAmount + ' of ' + data.itemName);
};
function test123() {
	appcelerator_mpayments.setDebugModeEnabled(true);
    appcelerator_mpayments.setPendingTransactionHandlingEnabled(false);
	var purchaseRequest = { 
		//apiKey: "1448cd2b6019584b45f0aa434ce4b98b",
		apiKey: '28550ec26491d4ed1b1de6fd3fe2b92a',
		clientId: 'Nena'
	//packageIndex: '0'
	//price: '30.0'
	};
	appcelerator_mpayments.startPurchase(purchaseRequest);
}
appcelerator_mpayments.addEventListener('onPurchaseSuccess', onSuccess);
appcelerator_mpayments.addEventListener('onPurchasePending', onPending);
appcelerator_mpayments.addEventListener('onPurchaseFailed', onFailed);
appcelerator_mpayments.addEventListener('onPurchaseCancelled', onCancelled);

//test123();