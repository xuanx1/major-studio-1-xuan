// Smithsonian API example code
// check API documentation for search here: http://edan.si.edu/openaccess/apidocs/#api-search-search

// put your API key here;
const apiKey = "";  

// search base URL
const searchBaseURL = "https://api.si.edu/openaccess/api/v1.0/search";

// Constructing the search query
const search =  `Fish AND unit_code:"NMNHFISHES" AND online_media_type:"Images"`;
//NMNHFISHES

// https://api.si.edu/openaccess/api/v1.0/search?q=online_visual_material:true+AND+type:edanmdm+AND+fish+&api_key=LghpWdrnggg1FDmHsNy6QbLDHVF1avviLG0vyYqF

// https://collections.si.edu/search/results.htm fq=online_media_type%3A%22Images%22&fq=data_source%3A%22NMNH+-+Vertebrate+Zoology+-+Fishes+Division%22&q=fish&media.CC0=true

// search: fetches an array of terms based on term category
function fetchSearchData(searchTerm) {
    let url = searchBaseURL + "?api_key=" + apiKey + "&q=" + searchTerm;
    console.log(url);
    window
    .fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    })
}

fetchSearchData(search);