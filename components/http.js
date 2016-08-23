let req = new XMLHttpRequest();

req.onreadystatechange = function() {
  switch (req.readyState) {
    case XMLHttpRequest.OPENED:
      console.log("OPENED");
      req.send();

      break;
    case XMLHttpRequest.DONE:

      switch (parseInt(req.status)) {
        case 200:
          console.log("done", req);
          break;
      }

      break;
  }
}

export default function request(url, method, callback) {
  // req.open(method, url, true);
  callback({
    result: [
      {
        name: 'beer',
        price: 10,
        description: 'tasty beer'
        },
      {
        name: 'wine',
        price: 80,
        description: 'tasty wine'
      },
      {
        name: 'booze',
        price: 200,
        description: 'tasty booze'
      }
    ]
  });
}
