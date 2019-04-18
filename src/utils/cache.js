const jsonCache = {};
const textCache = {};

export const fetchWithCache = url => {
  if (jsonCache[url] && jsonCache[url].data) {
    // data already fetched
    return jsonCache[url].data;
  } else if (jsonCache[url]) {
    // still waiting for the data
    throw jsonCache[url].promise;
  } else {
    //new url, start fetching
    jsonCache[url] = {
      promise: fetch(url)
        .then(res => res.json())
        .then(data => (jsonCache[url].data = data)),
    };
    throw jsonCache[url].promise;
  }
};

export const fetchWithCacheText = url => {
  if (textCache[url] && textCache[url].data) {
    // data already fetched
    return textCache[url].data;
  } else if (textCache[url]) {
    // still waiting for the data
    throw textCache[url].promise;
  } else {
    //new url, start fetching
    textCache[url] = {
      promise: fetch(url)
        .then(res => res.text())
        .then(data => (textCache[url].data = data)),
    };
    throw textCache[url].promise;
  }
};
