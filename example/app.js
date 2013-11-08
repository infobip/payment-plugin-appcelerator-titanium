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
   height: 50
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
var mpayments_paymentapi_android_titanium = require('c.mpayments.android.titan');
Ti.API.info("module is => " + mpayments_paymentapi_android_titanium);

var onCancelled = function(data) {
	Ti.API.info("RESPONSE is => " + data.apiKey + ' ; ' + data.clientId + ' ; ' + data.itemAmount + ' of ' + data.itemName);
};

function test123() {
	mpayments_paymentapi_android_titanium.setDebugModeEnabled(true);
	mpayments_paymentapi_android_titanium.setPendingTransactionHandlingEnabled(true);
	var purchaseRequest = { 
		apiKey: '28550ec26491d4ed1b1de6fd3fe2b92a',
		clientId: 'mica' 
	};
	mpayments_paymentapi_android_titanium.startPurchase(purchaseRequest);
}

mpayments_paymentapi_android_titanium.addEventListener('onPurchaseCancelled', onCancelled);
//test123();



