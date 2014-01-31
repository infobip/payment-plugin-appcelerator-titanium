# Centili Mobile Payments Module for Appcelerator Titanium

## Description

This project is Titanium Module which can be merged with your Titanium project and enable you to use Centili Mobile Payments system. This is module for Android only.

## Accessing the module

To access this module from JavaScript, you would do the following:

	var appcelerator_mpayments = require("c.mpayments.appcelerator");

The appcelerator_mpayments variable is a reference to the Module object.	

## Step by step integration

  1.  Access the appcelerator_mpayments Module by `require("c.mpayments.appcelerator")`.

  2.  Make `PurchaseRequest` object with `ApiKey` as only mandatory field (you can also use other optional fields like `packageIndex`).

  3.  Start purchase by calling `startPurchase(PurchaseRequest)` method on your `c.mpayments.appcelerator` instance.

  4.  Your callback method will be invoked upon completing payment request. All you have to do is handle payment result in your application.

	    appcelerator_mpayments.addEventListener('onPurchaseSuccess', onSuccess);
	    appcelerator_mpayments.addEventListener('onPurchasePending', onPending);
	    appcelerator_mpayments.addEventListener('onPurchaseFailed', onFailed);
	    appcelerator_mpayments.addEventListener('onPurchaseCancelled', onCancelled);  

### Additional methods

You can get and set `DebugMode` to true or false to get our logger output debug data. Defaults to false.
You can also set `PendingTransactionHandlingEnabled` true or false, which will influence whether will we continue pending payment when new payment request is sent, or will we start a new payment request.
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
	
	var appcelerator_mpayments = require("c.mpayments.appcelerator");
	Titanium.API.info("module is => " + appcelerator_mpayments);
	
	var onCancelled = function(data) {
	Ti.API.info("Transaction status is CANCELLED:" + data.apiKey + ' ; ' + data.clientId + ' ; ' + data.itemAmount);
	};
	
	var onSuccess = function(data) {
	Ti.API.info("Transaction status is SUCCESS: " + data.apiKey + ' ; ' + data.clientId + ' ; ' + data.itemAmount + ' test = ' + data.test);
	};
	
	var onFailed = function(data) {
	Ti.API.info("Transaction status is FAILED:" + data.apiKey + ' ; ' + data.clientId + ' ; ' + data.itemAmount);
	};
	
	var onPending = function(data) {
	Ti.API.info("Transaction status is PENDING :" + data.apiKey + ' ; ' + data.clientId + ' ; ' + data.itemAmount);
	};
	
	function testExample(){
		appcelerator_mpayments.setDebugModeEnabled(true);
	    appcelerator_mpayments.setPendingTransactionHandlingEnabled(false);
		var PurchaseRequest = {
			apiKey: '28550ec26491d4ed1b1de6fd3fe2b92a',
			clientId: 'test-client-id'
		};
		appcelerator_mpayments.startPurchase(PurchaseRequest);
	}
	appcelerator_mpayments.addEventListener('onPurchaseSuccess', onSuccess);
	appcelerator_mpayments.addEventListener('onPurchasePending', onPending);
	appcelerator_mpayments.addEventListener('onPurchaseFailed', onFailed);
	appcelerator_mpayments.addEventListener('onPurchaseCancelled', onCancelled);
	

## Authors

Framework Integration Team @ Infobip Ltd.