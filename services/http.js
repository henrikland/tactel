import {parseString} from 'xml2js';

export default function request(url, method, callback) {
  let req = new XMLHttpRequest();

  req.open(method, url, true);

  req.onreadystatechange = function() {
    switch (req.readyState) {
      case XMLHttpRequest.DONE:
        switch (parseInt(req.status)) {
          case 200:
            parseString(req.response, function (err, result) {
              callback(result);
            });

            break;
        }

        break;
    }
  }

  req.send();
}
