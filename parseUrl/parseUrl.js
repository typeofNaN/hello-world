function parseUrl(url) {
  const a = document.createElement('a')
  a.href = url

  return {
    source: url,
    protocol: a.protocol.replace(':', ''),
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: (() => {
      const ret = {}
      const queryList = []
      const searchQuery = a.search.replace(/^\?/, '').split('&')
      for (let i = 0; i < searchQuery.length; i++) {
        if (searchQuery[i]) {
          queryList = searchQuery[i].split('=')
          ret[queryList[0]] = queryList[1]
        }
      }

      return ret
    })(),
    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
    hash: a.hash.replace('#', ''),
    path: a.pathname.replace(/^([^\/])/, '/$1'),
    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
    segments: a.pathname.replace(/^\//, '').split('/')
  }
}