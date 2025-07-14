function getchannels() {
    let channeldb = [
        ["POOF", "POOF"],
        ["#", "nochan.gif"],
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-bobortek8.github.io/tvmystic/v1/ch2.gif"],
        ["http://fl4.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-bobortek8.github.io/tvmystic/v1/ch3.gif"],
        ["http://v1.weatherscan.net/", "https://backend-bobortek8.github.io/tvmystic/v1/ch4.gif"],
        ["https://fl3.moveonjoy.com/VH1/index.m3u8", "https://backend-bobortek8.github.io/tvmystic/v1/ch5.gif"],
        ["https://retroblast.tv/hls/stream.m3u8", "https://backend-bobortek8.github.io/tvmystic/v1/ch6.gif"],
        ["https://asp7.toonamiaftermath.com/livehttporigin/est/Ibd7c5-gf2dVw-playlist.m3u8", "https://backend-bobortek8.github.io/tvmystic/v1/ch7.gif"],
        ["https://a-cdn.herringnetwork.com/affiliate/awee/playlist.m3u8", "https://backend-bobortek8.github.io/tvmystic/v1/ch8.gif"],
        ["https://fl3.moveonjoy.com/MTV_CLASSIC/index.m3u8", "https://backend-bobortek8.github.io/tvmystic/v1/ch9.gif"],
        ["https://www.rtvs.sk/embed/live/1", "https://backend-bobortek8.github.io/tvmystic/v1/ch10.gif"],
        ["https://www.rtvs.sk/embed/live/2", "https://backend-bobortek8.github.io/tvmystic/v1/ch11.gif"],
        ["https://www.rtvs.sk/embed/live/3", "https://backend-bobortek8.github.io/tvmystic/v1/ch12.gif"],
        ["https://www.rtvs.sk/embed/live/15", "https://backend-bobortek8.github.io/tvmystic/v1/ch13.gif"],
        ["https://live.joj.sk/", "https://backend-bobortek8.github.io/tvmystic/v1/ch14.gif"],
        ["https://media.cms.markiza.sk/embed/markiza-live?autoplay=any", "https://backend-bobortek8.github.io/tvmystic/v1/ch15.gif"],
        ["https://media.cms.markiza.sk/embed/doma-live?autoplay=any", "https://backend-bobortek8.github.io/tvmystic/v1/ch16.gif"],
        ["https://media.cms.markiza.sk/embed/dajto-live?autoplay=any", "https://backend-bobortek8.github.io/tvmystic/v1/ch17.gif"],
        ["https://streaming-live.rtp.pt/liverepeater/smil:rtpi.smil/playlist.m3u8", "https://backend-bobortek8.github.io/tvmystic/v1/ch18.gif"],
        ["https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index.m3u8", "https://backend-bobortek8.github.io/tvmystic/v1/ch19.gif"],
        ["https://d277k9d1h9dro4.cloudfront.net/out/v1/293e7c3464824cbd8818ab8e49dc5fe9/index.m3u8", "https://backend-bobortek8.github.io/tvmystic/v1/ch20.gif"],
        ["https://raw.githubusercontent.com/ipstreet312/freeiptv/master/ressources/tvipt/sh/tvi.m3u8", "https://backend-bobortek8.github.io/tvmystic/v1/ch21.gif"],
    ];
    return channeldb;
}

function checkupdate() {
    needupdate = 0;
    return needupdate;
}

function geturl() {
    url = "";
    return url
}