
/*
				To post a Status update in facebook using graph api.
Make sure you have generated user-id and access token from the facebook graph api.
Get the following user data permissions 
1) Publish_pages
2) Publish_actions
3) Email
Take care of your Access tokens.
*/

const request = require('request-promise'); 
//user-id or Page-id 
const id = 'Enter ID here';
//User-accesstoken  
const access_token='Enter Access Token here';
//Url of the image that has to be uploded
var imgurl='Image URL Here';
//Status Update
var message='Enter the status to be posted';
const postStatusUpdate = {  
  method: 'POST',
  uri: `https://graph.facebook.com/v2.8/${id}/feed`,				
  qs: {
    access_token: access_token,
    message: message
  }
};

request(postStatusUpdate) ;

