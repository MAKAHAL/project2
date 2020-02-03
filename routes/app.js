const TeleSignSDK = require('telesignsdk');
const client  = new TeleSignSDK("13627871-8397-47F8-9C50-4E710B3CC1DE", "GNM5wQGLCETZoz6qlhVnGj5HN4dme131t7fxaE2E2m+G28k/mIRAiBedaA6Ix8DPOr03R98mQl/2O0yYnpUvfQ==");

callback = function(err, resBody){
    if(err){
        console.log(err)
    }else{
        console.log("success!!");
        console.log(resBody);
    }
}

client.sms.message(callback,"+18329023510", "Someone logged in into your account", "MKT" );