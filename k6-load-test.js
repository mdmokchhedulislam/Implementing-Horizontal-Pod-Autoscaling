import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 50,       
  duration: '60s',  
};

export default function () {
  http.get('http://3.87.46.213:30080');  
  sleep(1);
}
