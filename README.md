# appcelerator_mpayments Module

## Description

This project is Titanium Module  which can be merged with your Titanium project and enable you to use Centili Mobile Payments system.


## Accessing the appcelerator_mpayments Module

To access this module from JavaScript, you would do the following:

	var appcelerator_mpayments = require("c.mpayments.appcelerator");

The appcelerator_mpayments variable is a reference to the Module object.	

## Step by step integration

  1.  Access the apcelerator_mpayments Modul by require("c.mpayments.appcelerator").

  2.  Make PurchaseRequest object with ApiKey as only mandatory field (you can also use other optional field like clientId).

  3.  Start purchase by calling  appcelerator_mpayments.startPurchase(PurchaseRequest);


  4.  Your callback method will be invoked upon completing payment request. All you have to do is handle payment result in your application. 

  appcelerator_mpayments.addEventListener('onPurchaseSuccess', onSuccess);
  appcelerator_mpayments.addEventListener('onPurchasePending', onPending);
  appcelerator_mpayments.addEventListener('onPurchaseFailed', onFailed);
  appcelerator_mpayments.addEventListener('onPurchaseCancelled', onCancelled);  

### Additional methods

You can get and set appcelerator_payments.DebugMode to true or false to get our logger output debug data. Defaults to false.
You can also set or appcelerator_payments.PendingTransactionHandlingEnabled, which will influence whether will we continue pending payment when new payment request is sent, or will we start a new payment request.
Default is true, which means that we will try to resume unresolved transaction.

## Usage example

	var win= Ti.UI.createWindow({
		backgroundColor: "white"
	});
	
	// Create a Label.
	var label= Ti.UI.createLabel();
	
	// Create a Button.
	var button = Ti.UI.createButton({
		title : 'Purchase',
		height : 100,
		width : 200,
		top : 10,
		
	});
	
	// Listen for click events.
	button.addEventListener('click', function() {
		Titanium.API.info('You clicked the button');
		testExample();
	});
	
	// Add to the parent view.
	win.add(button);
	win.add(label);
	win.open();
	
	var appcelerator_mpayments=require("c.mpayments.appcelerator");
	Titanium.API.info("module is => " + appcelerator_mpayments);
	
	var onCancelled = function(data) {
	Ti.API.info("Tranaction is CANCELLED:" + data.apiKey + ' ; ' + data.clientId + ' ; ' + data.itemAmount + ' of ' + data.itemName);
	};
	
	var onSuccess = function(data) {
	Ti.API.info("Tranaction is SUCCESS: " + data.apiKey + ' ; ' + data.clientId + ' ; ' + data.itemAmount + ' of ' + data.itemName + ' test = ' + data.test);
	};
	
	var onFailed = function(data) {
	Ti.API.info(" Tranaction is FAILD:" + data.apiKey + ' ; ' + data.clientId + ' ; ' + data.itemAmount + ' of ' + data.itemName);
	};
	
	var onPending = function(data) {
	Ti.API.info("Tranaction is PENDING :" + data.apiKey + ' ; ' + data.clientId + ' ; ' + data.itemAmount + ' of ' + data.itemName);
	};
	
	function testExample(){
		appcelerator_mpayments.setDebugModeEnabled(true);
	    appcelerator_mpayments.setPendingTransactionHandlingEnabled(false);
		var PurchaseRequest={
			apiKey: '28550ec26491d4ed1b1de6fd3fe2b92a',
			clientId: 'Nena'
		};
		appcelerator_mpayments.startPurchase(PurchaseRequest);
	}
	appcelerator_mpayments.addEventListener('onPurchaseSuccess', onSuccess);
	appcelerator_mpayments.addEventListener('onPurchasePending', onPending);
	appcelerator_mpayments.addEventListener('onPurchaseFailed', onFailed);
	appcelerator_mpayments.addEventListener('onPurchaseCancelled', onCancelled);
	

## Author

Framework Integration Team @ Infobip Belgrade, Serbia