const axios = require('axios');
const fs = require('fs');

const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/inflation?period=y&date=202201&json';


async function fetchJsonFromUrl() {
  try {
    const response = await axios.get(url);
    const jsonData = response.data;


    const jsonString = JSON.stringify(jsonData, null, 2);


    const filePath = 'C:\\ЛНУ\\Web\\bc2023-3\\data.json';


    fs.writeFile(filePath, jsonString, (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
      } else {
        console.log('JSON data has been written to', filePath);
      }
    });
  } catch (error) {
    console.error('Error fetching JSON data:', error.message);
  }
}
const userData = require('./data.json');
var res=""
for( x of userData){
   
    if(x.ku==13 ){
        if(x.value>5){
       // console.log(x.ku," ",x.value)
        res+= x.value.toString()
        res+="\n"

        fs.writeFile('output.txt', res, (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
              } 
        })
        }
    }
}

