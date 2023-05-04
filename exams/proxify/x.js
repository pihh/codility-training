
/*
  cityWeather() calls api and returns data from the AP

*/
require("./callMock");
const axios = require("axios");

const { BASE_URL } = require("./baseUrl");

async function cityWeather(city) {
    // Use console.log within the cityWeather function for debugging.
    // Use the &q= prefix with the city parameter at the end of the URL in order to mock the data correctly.



    let baseUrl = BASE_URL.split('?')[0]

    try {

        console.log('typeof ', typeof city)
        let request = axios.create({
            validateStatus: function (status) {
                return status != 200;
            }
        })
        let success = false
        const response = await request.get(`https://example.com/data/2.5/weather?units=metric&q={city:${city}}`)
            .
            console.log('success', response)
        return {
            type: "FETCH_SUCCESS",
            payload: response
        }


    } catch (ex) {
        if (typeof city !== "string") {

            throw new Error("not a string")

        }
        if (city.trim().length == 0) {

            throw new Error("string is empty")
        }
    }

    /*
      axios.get(`https://example.com/data/2.5/weather?units=metric&q={city:${city}}`)
          .then(data => {
              console.log('success', { data, baseUrl, city, BASE_URL })
              res(data)
          }).catch(error => {
              success = false;
              errorMessage = error
 
              console.log('error', { error, baseUrl, city, BASE_URL })
              if (typeof city !== "string") {
                  success = false;
                  throw new Error("not a string")
                 // rej(errorMessage)
              }
              if (city.trim().length == 0) {
                  success = false;
                  throw new Error("string is empty")
                  errorMessage =  "string is empty"
                  throw new Error(errorMessage)
                  rej(errorMessage)
              }
              rej(error)
          }).finally(() => {
              // if (!success) {
              //     throw new Error(error)
              // }
          })
  })
  */
    // axios.get(BASE_URL, {
    //       params: {
    //         q: 'city',
    //         city
    //       }
    //     }).then(function (response) {
    //           console.log(response);
    //           resolve(response)
    //       }).catch(function (error) {
    //           console.log(error);
    //           reject(error)
    //       }).finally(function () {
    //           // always executed
    //       });

    // if(typeof city !== "string"){
    //   reject({status: 404, data: {
    //     message: "not a string"
    //   }})
    // }
    // if(city.trim().length == 0){
    //   reject({status: 404, data: {
    //     message: "string is empty"
    //   }})
    // }

}

module.exports = {
    cityWeather,
};
