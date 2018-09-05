const TEST_DATA = [
    {
      "index": 1,
      "name first": "George",
      "surname": "Ball",
      "isActive": true,
      "age": 37,
      "country": "Ukraine"
    },
    {
      "index": 2,
      "name": "Herman",
      "surname": "Ramos",
      "isActive": false,
      "age": 36,
      "country": "Eritrea"
    },
    {
      "index": 3,
      "name": "Freida",
      "surname": "Banks",
      "isActive": true,
      "age": 21,
      "country": "Germany"
    },
    {
      "index": 4,
      "name": "Roman",
      "surname": "Padilla",
      "isActive": false,
      "age": 34,
      "country": "China"
    },
    {
      "index": 5,
      "name": "Webb",
      "surname": "Hunter",
      "isActive": false,
      "age": 39,
      "country": "Hong Kong"
    },
    {
      "index": 6,
      "name": "Emma",
      "surname": "Hood",
      "isActive": false,
      "age": 38,
      "country": "Taiwan"
    },
    {
      "index": 7,
      "name": "Dodson",
      "surname": "Koch",
      "isActive": true,
      "age": 30,
      "country": "Comoros"
    },
    {
      "index": 8,
      "name": "Malinda",
      "surname": "Mckay",
      "isActive": false,
      "age": 28,
      "country": "Uruguay"
    },
    {
      "index": 9,
      "name": "Garza",
      "surname": "Moody",
      "isActive": false,
      "age": 20,
      "country": "Moldova"
    },
    {
      "index": 10,
      "name": "Leslie",
      "surname": "Donaldson",
      "isActive": false,
      "age": 33,
      "country": "Malaysia"
    },
    {
      "index": 11,
      "name": "Thomas",
      "surname": "Papapapa",
      "isActive": false,
      "age": 21,
      "country": "Malaysia"
    }
  ]
  // i=0;
  // while( i<TEST_DATA.length ){
  //   i++
  //   console.log(`${TEST_DATA[i].country}<br>`)
  // }

  for(i=0;i<TEST_DATA.length;i++){
    if (str.indexOf(TEST_DATA[i].country)===-1){
        console.log("We found it"); 
    }
  }
  