var twitterAPI = require('twit');
var twitter = new twitterAPI({
    consumer_key: 'JLcyUcHBGYUVtTqGouwJoPoWG',
    consumer_secret: 'CCJHMTWlMqOLsQMyGI9MWwv3N0DGtPSYRibu4RWjO1xJh54kAG',
    access_token: '45609961-NEwKfiI0pAFbkQKmij3PCHdYnGVULtpCABFvFAxhF',
    access_token_secret: 'BFoUHxuJtJCI26sX7X9Y9MguPpiDE4AKFBXPGG8illnOI'
});


var params = {
    q: 'love',
    count: 100
}

twitter.get('search/tweets', params,searchedData);

function searchedData(err, data, response) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var data = data[i];
        $('body').append('<h3>' + data.screen_name + '</h3>' + '<p>'+ data.name + '</p>');
    }   
}
