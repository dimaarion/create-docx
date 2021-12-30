import axios from 'axios'

let inital_base_url = 'http://adminpanel';
if (window.location.hostname === "localhost") {
    inital_base_url = 'http://localhost:3000/';
} else {
    inital_base_url = window.location.protocol + "//" + window.location.hostname;
}

export function get(f, namef, params = {}) {
    axios.get(inital_base_url + "/plan/" + namef, params)
        .then((rezult) => { f(rezult.data); })

}

export function arrayPlanName(a,n) {
   let arr = a;
   let name = n;
   return arr.filter((f)=>f.name === name).map((x)=>x);
}