/**
 * Redirection to megogo module.
 */
(function(){

    main_menu.add('MEGOGO', [], 'mm_ico_megogo.png', function(){

        var params = '';

        if (stb.user['web_proxy_host']){
            params = '?proxy=http://'+stb.user['web_proxy_host']+':' +stb.user['web_proxy_port'];
        }

        stb.setFrontPanel('.');

        if (!params){
            params += '?';
        }else{
            params += '&';
        }

        params += 'referrer='+encodeURIComponent(window.location);

        _debug('url', '/' + stb.portal_path + '/external/megogo/index.html'+params);
        window.location = '/' + stb.portal_path + '/external/megogo/index.html'+params;
    }, {layer_name : "megogo"});

    loader.next();
})();