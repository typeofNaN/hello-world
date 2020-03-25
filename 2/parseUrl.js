function parseUrl(url) {
  var a =  document.createElement('a');
  a.href = url;

  return {
    source: url,
    protocol: a.protocol.replace(':',''),
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: (() => {
      var ret = {}, querys = [];
      var searchQuery = a.search.replace(/^\?/,'').split('&');
      for (var i = 0;i < searchQuery.length; i++) {
        if (searchQuery[i]) {
          querys = searchQuery[i].split('=');
          ret[querys[0]] = querys[1];
        }
      }
      return ret;
    })(),
    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
    hash: a.hash.replace('#',''),
    path: a.pathname.replace(/^([^\/])/,'/$1'),
    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
    segments: a.pathname.replace(/^\//,'').split('/')
  };
}