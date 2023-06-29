
const endpoints = [];

function get(urlMatch, cb) {
  endpoints.push({
    urlMatch,
    cb,
    method: 'get',
    use: false,
  });
}

function post(urlMatch, cb, data) {
    endpoints.push({
        urlMatch,
        cb,
        method: 'post',
        use: false
    });
}



function error() {

}

function use(cb) {
    endpoints.push({
        cb,
        use: true
    });
}

function request(url, method, data) {
   next(0, url, method, data);
}

function next(index, url, method, data) {
    console.log(index, endpoints);
    console.log(endpoints[index])
   if (( endpoints[index].use === true || endpoints[index].urlMatch.includes(url) && endpoints[index].method === method)) {
         endpoints[index].cb(data);
   } else {
       if (endpoints[index + 1]) {
              next(index + 1, url, method, data);
       } else {
              console.log('endpoint not found')
       }
       
   }
}




// use((index, url, method, data) => {
//     console.log('use');
//     next(index + 1, url, method, data);
// })

get('/users', (req, res, next) => {
    console.log('you got users', [1, 2, 3]);
});
post('/create-users', (req, res, next) => {
    console.log('you added a user', req);
})


console.log(endpoints)


request('/create-users', 'post', {name: 'joe'});
request('/users', 'get');