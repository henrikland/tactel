export default function request(url, method, callback) {
  let req = new XMLHttpRequest();

  req.open(method, url, true);

  req.onreadystatechange = function() {
    switch (req.readyState) {
      case XMLHttpRequest.DONE:
        switch (parseInt(req.status)) {
          case 200:
            callback(JSON.parse(req.response));

            break;
        }

        break;
    }
  }

  req.send();
}
