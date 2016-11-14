angular.module('friendsList').controller("friendController", function($scope) {

  $scope.friends = [{
        "name": "Preston McNeil",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01232014/images/albert-einstein-profile-picture-133x133.PNG",
        "current_location": {
            "city": "Houston",
            "state": "Texas",
            "country": "United States",
            "zip": "",
            "latitude": "29.7629",
            "longitude": "-95.3832",
            "id": "115963528414384",
            "name": "Houston, Texas"
        },
        "status": null,
        "friend_count": 628,
        "$$hashKey": "005"
    }, {
        "name": "Ryan Rasmussen",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01232014/images/bruce-lee-profile-picture-133x133.PNG",
        "current_location": {
            "city": "New York",
            "state": "New York",
            "country": "United States",
            "zip": "",
            "latitude": "40.7167",
            "longitude": "-74",
            "id": "108424279189115",
            "name": "New York, New York"
        },
        "status": null,
        "friend_count": 994,
        "$$hashKey": "008"
    }, {
        "name": "Terri Ruff",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01232014/images/chuck-norris-profile-picture-133x133.PNG",
        "current_location": {
            "city": "Sandy",
            "state": "Utah",
            "country": "United States",
            "zip": "",
            "latitude": "40.5724",
            "longitude": "-111.86",
            "id": "105496622817769",
            "name": "Sandy, Utah"
        },
        "status": {
            "message": "Cannot wait for Hawaii! Excited to b away from work! I'm getting tired of all the drama!! Big news coming soon!!!",
            "time": "1381115766",
            "status_id": "10101839870247153",
            "comment_count": "0"
        },
        "friend_count": 268,
        "$$hashKey": "009"
    }, {
        "name": "Lindsey Mayer",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01232014/images/alf-profile-picture-133x133.PNG",
        "current_location": null,
        "status": null,
        "friend_count": 870,
        "$$hashKey": "00A"
    }, {
        "name": "Peter John Renslow",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01242014/images/justin-bieber-profile-picture-133x133.PNG",
        "current_location": {
            "city": "West Lafayette",
            "state": "Indiana",
            "country": "United States",
            "zip": "",
            "latitude": "40.4419",
            "longitude": "-86.9124",
            "id": "112305682116972",
            "name": "West Lafayette, Indiana"
        },
        "status": {
            "message": "The movie Gravity: decent. The orbital mechanics in the movie Gravity: not so much.",
            "time": "1380945498",
            "status_id": "10102928220609321",
            "comment_count": "0"
        },
        "friend_count": 549,
        "$$hashKey": "00I"
    }, {
        "name": "Craig Carroll",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01242014/images/magnum-pi-profile-picture-133x133.PNG",
        "current_location": {
            "city": "Tempe",
            "state": "Arizona",
            "country": "United States",
            "zip": "",
            "latitude": "33.4294",
            "longitude": "-111.943",
            "id": "112887355389124",
            "name": "Tempe, Arizona"
        },
        "status": null,
        "friend_count": 249,
        "$$hashKey": "00K"
    }, {
        "name": "Jesse Morrison",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01252014/images/doc-profile-picture-133x133.PNG",
        "current_location": null,
        "status": {
            "message": "I'm pretty excited at the prospect of having the option for cold water out of the faucet. Not just turning it all the way to the right and getting \"less hot\" water",
            "time": "1380735264",
            "status_id": "10102919605598871",
            "comment_count": "0"
        },
        "friend_count": 393,
        "$$hashKey": "00N"
    }, {
        "name": "Michelle Key",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01242014/images/mr-acid-man-profile-picture-133x133.PNG",
        "current_location": null,
        "status": null,
        "friend_count": 928,
        "$$hashKey": "00O"
    }, {
        "name": "Abe Itty",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01252014/images/leo-dicaprio-profile-picture-133x133.PNG",
        "current_location": null,
        "status": null,
        "friend_count": 1427,
        "$$hashKey": "011"
    }, {
        "name": "Ken Peng",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01252014/images/fighter-jet-profile-picture-133x133.PNG",
        "current_location": {
            "city": "Tucson",
            "state": "Arizona",
            "country": "United States",
            "zip": "",
            "latitude": "32.2217",
            "longitude": "-110.926",
            "id": "109570449061083",
            "name": "Tucson, Arizona"
        },
        "status": null,
        "friend_count": 376,
        "$$hashKey": "013"
    }, {
        "name": "John Dohyung Kwon",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01262014/images/walking-dead-rick-profile-picture-133x133.PNG",
        "current_location": null,
        "status": null,
        "friend_count": 79,
        "$$hashKey": "01D"
    }, {
        "name": "Dan Sullivan",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01232014/images/eagle-profile-picture-133x133.PNG",
        "current_location": {
            "city": "Cambridge",
            "state": "Massachusetts",
            "country": "United States",
            "zip": "",
            "latitude": "42.3737",
            "longitude": "-71.1106",
            "id": "108056275889020",
            "name": "Cambridge, Massachusetts"
        },
        "status": null,
        "friend_count": 527,
        "$$hashKey": "01M"
    }, {
        "name": "Chad Bennett",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01262014/images/wolf-profile-picture-133x133.PNG",
        "current_location": null,
        "status": null,
        "friend_count": 1885,
        "$$hashKey": "01P"
    }, {
        "name": "Kirk Hill",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01232014/images/furby-profile-picture-133x133.PNG",
        "current_location": {
            "city": "Pearland",
            "state": "Texas",
            "country": "United States",
            "zip": "",
            "latitude": "29.5543",
            "longitude": "-95.296",
            "id": "109297442421359",
            "name": "Pearland, Texas"
        },
        "status": null,
        "friend_count": 185,
        "$$hashKey": "01Q"
    }, {
        "name": "Joseph 'Moses' Craven",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01232014/images/mr-bean-profile-picture-133x133.PNG",
        "current_location": {
            "city": "Ardmore",
            "state": "Oklahoma",
            "country": "United States",
            "zip": "",
            "latitude": "34.1812",
            "longitude": "-97.1294",
            "id": "107705532592043",
            "name": "Ardmore, Oklahoma"
        },
        "status": null,
        "friend_count": 708,
        "$$hashKey": "01R"
    }, {
        "name": "Jeremy James",
        "pic_square": "http://free-profile-pics.com/images/free-blackberry-bbm-profile-picture_246.png",
        "current_location": {
            "city": "Provo",
            "state": "Utah",
            "country": "United States",
            "zip": "",
            "latitude": "40.2444",
            "longitude": "-111.661",
            "id": "106066949424984",
            "name": "Provo, Utah"
        },
        "status": null,
        "friend_count": 555,
        "$$hashKey": "01U"
    }, {
        "name": "Heather Clouse",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01242014/images/painted-kitten-profile-picture-133x133.PNG",
        "current_location": {
            "city": "Orem",
            "state": "Utah",
            "country": "United States",
            "zip": "",
            "latitude": "40.2988",
            "longitude": "-111.696",
            "id": "103787786326610",
            "name": "Orem, Utah"
        },
        "status": {
            "message": "Last night I had a dream that my mother-in-law Angie Clouse unexpectedly stopped by my house and gave me a cleaning to do list.  Apparently it is time to clean my bathroom.",
            "time": "1380826754",
            "status_id": "10101094816311309",
            "comment_count": "0"
        },
        "friend_count": 366,
        "$$hashKey": "01W"
    }, {
        "name": "Joel Gardner",
        "pic_square": "http://free-profile-pics.com/profile-pictures/01242014/images/lamborghini-profile-picture-133x133.PNG",
        "current_location": {
            "city": "Provo",
            "state": "Utah",
            "country": "United States",
            "zip": "",
            "latitude": "40.2444",
            "longitude": "-111.661",
            "id": "106066949424984",
            "name": "Provo, Utah"
        },
        "status": null,
        "friend_count": 518,
        "$$hashKey": "027"
    }];


});
