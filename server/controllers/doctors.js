const router = require('express').Router();
const data = require('./../doctorsData.js');


let arrayHelper = (type, array) => {
  
  if (!type) {
    return array;
  }

  let routes = {
    "Alma Mater": 'almaMater',
    "Rating": "rating",
    "Specialty": "specialty",
    "Insurance Coverage": "insurance",
    "Search": 'search'
  }
  type = routes[type] || type;
  let result = array.slice();
  if (type === 'search') {

  } else if (type === "rating"){
    result.sort((a, b) => {
      return a.rating - b.rating;
    });
  } else if (type === "specialty" || type === "insurance" || type === "almaMater") {
    result.sort((a, b) => {
      return a[type] > b[type];
    });
  } else {
    return result.filter((item) => {
      return item.specialty === type;
    }).sort((a,b) => {
      return a.rating - b.rating;
    })
  }

  return result;
}

router.get('/', (req, res) => {
  let { queryString } = req.query;
  let sorted;
  if (!queryString) {
    sorted = data;
  } else {
    sorted = {doctors: arrayHelper(queryString, data.doctors)};
  }
  res.status(200).json(sorted);
});

module.exports = router;