import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {q: 'desp', hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': '207ef9303fmshf688255ae6b1af9p1158f8jsnbc94417a71ab',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


