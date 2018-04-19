/**
 * @author Maria Dubyaga - @kraftaa
 * @desc Displays a geolocation of GROW Students
 * @version 1.0
 */

function initMap() {
    var locations = [
        ['<strong>Maria Dubyaga (aka Kraftaa)</strong><br>Arlington, MA<br><a href="https://www.linkedin.com/in/maria-dubyaga-4aa1a73/" target="_blank" title="Linkedin Profile">Linkedin</a>', 42.4148, -71.1745579, 1],
        ['<strong>Ashleighc207</strong><br>Baltimore, MD<br>', 39.290385, -76.612189, 2],
        ['<strong>safrrhmn</strong><br>Rockville, MD<br>', 39.083997, -77.152758, 3],
        ['<strong>madison.estabrook</strong><br>Tallahassee, FL<br>', 30.438256, -84.280733, 4],
        ['<strong>Janice M</strong><br>Wisconsin<br>', 42.5917, -88.4334, 5],
        ['<strong>lin.dennis18</strong><br>Portland, OR<br>', 45.523062, -122.676482, 6],
        ['<strong>Laurette.L</strong><br>Dallas, TX<br>', 32.776664, -97, 7],
        ['<strong>amichelelips</strong><br>Jackson, NJ<br>', 40.091890, -74.358747, 8],
        ['<strong>rebeccaelias176puop</strong><br>Lake tapps, WA<br>', 47.214793, -122.170177, 9],
        ['<strong>meaganheglermah1m</strong><br>Spokane, WA<br>', 47.658780, -117.426046, 10],
        ['<strong>Janki Gajera</strong><br>Denver, CO<br><a href="https://www.linkedin.com/in/jankigajera" target="_blank" title="Linkedin Profile">Linkedin</a>', 39.634001, -104.910638, 11],
        ['<strong>kairaygun</strong><br>New York, NY<br><a href="https://www.github.com/kairaygun" target="_blank" title="Github Profile">GitHub</a>', 40.712775, -74.005973, 12],
        ['<strong>xulindam</strong><br>Los Angeles, CA<br>', 34.052234, -118.243685, 13],
        ['<strong>laurophyll</strong><br>Rapid City, SD<br>', 44.080543, -103.231015, 14],
        ['<strong>mattdiamond80</strong><br> Chicago, IL<br>', 41.878114, -87.629798, 15],
        ['<strong>mattdiamond80</strong><br> Atlanta, GA<br>', 33.748995, -84.387982, 16],
        ['<strong>gowdy83sut4</strong><br> Charlotte, NC<br>', 35.227087, -80.843127, 17],
        ['<strong>mazur661oj</strong><br>Vestal, NY<br>', 42.085590, -76.053575, 18],
        ['<strong>divanoff</strong><br>Sandwich, MA<br>', 41.758961, -70.493932, 19],
        ['<strong>Amy-511</strong><br> Glen Alpine, NC<br>', 35.729017, -81.779266, 20],
        ['<strong>beckyschapin</strong><br> Beaverton, OR<br>', 45.487062, -122.803710, 21],
        ['<strong>comerford.jac2bs</strong><br>Detroit, MI<br>', 42.331427, -83.045754, 22],
        ['<strong>bertramwynxdsi</strong><br> Chandler, AZ<br>', 33.30439, -111.882168, 23],
        ['<strong>Jim</strong><br> Seattle, WA<br><a href="https://github.com/jimtryon" target="_blank" title="Github Profile">GitHub</a>', 47.606209, -122.332071, 24],
        ['<strong>jj_goose</strong><br>San Antonio<br>', 29.412236, -98.492432, 25],
        ['<strong>hcolleen</strong><br>Mesa, AZ<br>', 33.415184, -111.831472, 26],
        ['<strong>argyris.ileanajpqt</strong><br>Kona, Hawaii<br><a href="https://www.linkedin.com/in/ileanaargyris/" target="_blank" title="Linkedin Profile">Linkedin</a>', 19.639994, -155.996926, 27],
        ['<strong>lestec</strong><br>Las Vegas, NV<br>', 36.169941, -115.139830, 28],
        ['<strong>acalebheaf-r</strong><br>Delaware, Ohio<br>', 40.298672, -83.067965, 29],
        ['<strong>tcort001</strong><br>Address<br>', 36.852926, -75.977985, 30],
        ['<strong>Becky Boyce</strong><br>Durand, WI<br><a href="https://www.linkedin.com/in/becky-boyce-mism/" target="_blank" title="Linkedin Profile">Linkedin</a>', 44.622304, -91.966553, 31],
        ['<strong>litajupiter</strong><br>State College, PA<br>', 40.793395, -77.860001, 32],
        ['<strong>Sravanthi_cb</strong><br>Cranston, RI<br>', 41.779823, -71.437280, 33],
        ['<strong>RobGoelz</strong><br>Morgantown, WV<br><a href="https://www.linkedin.com/in/RobGoelz/" target="_blank" title="Linkedin Profile">Linkedin</a>', 39.6298712, -79.9678315, 34],
        ['<strong>sitkabikemike</strong><br>Carnation, WA<br>', 47.647879, -121.914007, 35],
        ['<strong>ebee511</strong><br>Tucson, AZ<br>', 32.222607, -110.974711, 36],
        ['<strong>anjali_174866</strong><br>Jersey City, NJ<br>', 40.728157, -74.077642, 37],
        ['<strong>abfnj1jcm</strong><br>Fair Lawn, NJ<br>', 40.940376, -74.131810, 38],
        ['<strong>Daniel Micher</strong><br>Brooklyn, NY<br><a href="https://www.linkedin.com/in/daniel-micher-99879030/" target="_blank" title="Linkedin Profile">Linkedin</a>', 40.678178, -73.944158, 39],
        ['<strong>James Perrin</strong><br>Spokane Valley, WA<ul><li><a href="https://www.linkedin.com/in/jkperrin/" target="_blank" title="Linkedin Profile">Linkedin</a></li><li><a href="https://www.github.com/jamesperrin" target="_blank" title="GitHub Profile">GitHub</a></li></ul>', 47.673228, -117.239375, 40],
        ['<strong>cyjennysun</strong><br>Austin, TX<br>', 30.267153, -97.743061, 41],
        ['<strong>heybeatrizepri7t</strong><br>San Francisco, CA<br>', 37.774929, -122.419416, 42],
        ['<strong>eduardopelaez98ahfq</strong><br>Anaheim, CA<br><a href="https://www.linkedin.com/in/eduardo-pelaez-alvarado/" target="_blank" title="Linkedin Profile">Linkedin</a>', 33.836593, -117.914301, 43],
        ['<strong>britishpandachick</strong><br>Canton, Ohio<br>', 40.798947, -81.378447, 44],
        ['<strong>amberrobertsvt</strong><br> <br><a href="https://www.linkedin.com/in/amberrobertsvt/" target="_blank" title="Linkedin Profile">Linkedin</a>', 43.074786, -73.153973, 45],
        ['<strong>lostmt.tom7h</strong><br>Sequim, Washington<br>', 48.079537, -123.101844, 46],
        ['<strong>JenAlaska</strong><br> Chugiak, AK<br><a href="https://www.linkedin.com/in/jenalaska/" target="_blank" title="Linkedin Profile">Linkedin</a>', 61.405123, -149.469166, 47],
        ['<strong>harlackerbvb0</strong><br><br>', 35.133861, -106.640920, 48],
        ['<strong>yaracastro24lk0n</strong><br>Houston, TX<br>', 29.760427, -95.369803, 49],
        ['<strong>jdmedlock</strong><br>St. Louis, MO<br><a href="https://www.linkedin.com/in/jdmedlock/" target="_blank" title="Linkedin Profile">Linkedin</a>', 38.6270, -90.1994, 50],
        ['<strong>Andranique</strong><br>Gainesville, FL<br>', 29.651634, -82.324826, 51],
        ['<strong>chasls</strong><br>Fayetteville AR<br>', 36.082156, -94.171854, 52],
        ['<strong>contact_sachin</strong><br>Orlando, FL<br>', 28.538335, -81.379236, 53],
        ['<strong>LauraT</strong><br>Tysons, VA<br>', 38.918722, -77.231092, 54],
        ['<strong>dakotadunn84kwta</strong><br>San Diego, CA<br>', 32.715738, -117.161084, 55],
        ['<strong>calvinlnx</strong><br>Irvine, CA<br>', 33.684567, -117.826505, 56],
        ['<strong>bobcat.2604sq3r</strong><br>Erlanger, KY<br>', 39.016728, -84.600777, 57],
        ['<strong>MarkEvans</strong><br>Westminster, CO<br><a href="https://www.linkedin.com/in/mjevans90/" target="_blank" title="Linkedin Profile">Linkedin</a>', 39.836653, -105.037205, 58],
        ['<strong>Chun.en</strong><br>Honolulu, HI<br><a href="https://www.linkedin.com/in/choy-chun-en-4051a92a/" target="_blank" title="Linkedin Profile">Linkedin</a>', 21.3069, -157.8583, 59],
        ['<strong>fxmejias</strong><br>Brooklyn, NY<br>', 40.678178, -73.944158, 60],
        ['<strong>amyf</strong><br>NY, NY<br>', 40.712775, -74.005973, 61],
        ['<strong>sgstokes006</strong><br>Dallas, TX<br>', 32.776664, -96.796988, 62],
        ['<strong>anthony.parente3</strong><br>Boston, MA<br>', 42.360082, -71.058880, 63],
        ['<strong>Julia Fuhrman</strong><br>Roswell, GA<br><a href="https://www.linkedin.com/in/julianfuhrman/" target="_blank" title="Linkedin Profile">Linkedin</a>', 34.023243, -84.361556, 64],
        ['<strong>Forums @pks_jw Slack @Paul K Sadler </strong><br>Atlanta, GA<br><a href="https://github.com/pksjw" >github</a>', 33.748995, -84.387982, 65],
        ['<strong>tiffanigadsden</strong><br>Tampa/St. Petersburg, Florida<br><a href="https://www.linkedin.com/in/tiffanigadsden/" target="_blank" title="Linkedin Profile">Linkedin</a>', 27.950575, -82.457178, 66],
        ['<strong>pftiller</strong><br>Saint Paul, MN<br>', 44.953703, -93.089958, 67],
        ['<strong>hkboi108</strong><br>Seattle, WA<br>', 47.606209, -122.4, 68],
        ['<strong>manudan711gzz</strong><br>Atlanta, GA<br>', 33.759321, -84.487654, 69],
        ['<strong>Carlota Pearl</strong><br>Grand Island, FL<br><ul><li><a href="https://www.twitter.com/carlotapearl" target="_blank" title="Twitter Profile" >Twitter</a></li><li>Slack @Carlota Pearl</li><li>Forums @Carlota_Pearl</li></ul>', 28.883351, -81.736394, 70],
        ['<strong>matt.dahlseid</strong><br>Portland, OR<br>', 45.523062, -122.776482, 71],
        ['<strong>Mo Hampton</strong><br>Fayetteville, NC<br><ul><li><a href="https://www.linkedin.com/in/mohampton/" target="_blank" title="Linkedin Profile">Linkedin</a></li><li><a href="https://www.github.com/MoHampton" target="_blank" title="GitHub Profile" >GitHub</a></li><li><a href="https://www.twitter.com/MoxieHampton" target="_blank" title="Twitter Profile" >Twitter</a></li></ul>', 35.052664, -78.878358, 72],
        ['<strong>Erica Lehotzky</strong><br>Houston, TX<br><ul><li><a href="https://www.linkedin.com/in/ericalehotzky/" target="_blank" title="Linkedin Profile">Linkedin</a></li><li><a href="https://www.github.com/elehotzky" target="_blank" title="GitHub Profile">GitHub</a></li><li><a href="https://www.twitter.com/ericalehotzky" target="_blank" title="Twitter Profile" >Twitter</a></li></ul>', 29.800923, -95.25, 73],
        ['<strong>Meridith</strong><br>Indianapolis, IN<br><a href="https://www.linkedin.com/in/meridithmoon/" target="_blank" title="Linkedin Profile">Linkedin</a>', 39.768403, -86.158068, 74],
        ['<strong>loreelund</strong><br>Westcliffe, CO<br>', 38.134722, -105.236676, 75],
        // ['<strong>User Name</strong><br>City, State<br>', Lat,-Long, 0],
        // ['<strong>User Name</strong><br>City, State<br>', Lat,-Long, 0],

        //next regular user
        /*
         ['<strong>User Name</strong><br>City, State<br>', Lat,-Long, 0],
         */

        //next social media user
        /*
         ['<strong>User Name</strong><br>City, State<br><ul><li><a href="https://www.linkedin.com/in/#" target="_blank" title="Linkedin Profile">Linkedin</a></li></ul>', Lat,-Long, 0],
         */

        /*
         * Next user on map
         *   -The last number within the brackets incrementally increases from the prior marker
         *   -Use http://itouchmap.com/latlong.html to get Latitude and Longitude of a specific address
         *   -The model to add user:
         *      ['<strong>USER NAME</strong><br>City, State <br><a href="Linkedin link" target="_blank">Linkedin</a>', Latitude, -Longitude, Increment Number from previous one]
         */
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        /* Zoom level of your map */
        center: new google.maps.LatLng(39.114053, -94.627464),
        /* coordinates for the center of your map Kansas City :)*/
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });
        //or to use 'click'?
        google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}