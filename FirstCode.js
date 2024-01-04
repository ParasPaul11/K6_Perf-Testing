import http from 'k6/http';
import { sleep , check} from 'k6';

//init
// export const options = {
//     vus: 2,
//     duration: '1h30m',
//   };
  

export default function () {
  const res = http.get('https://reqres.in/api/users?page=2');
  sleep(1);

  console.log("The Response payload is :" + res.body);
  check(res, {
    'Response Code is 200':(r) => r.status ===200,
  });
}
