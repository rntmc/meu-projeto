/*------------------------- Address Verification API -------------------- */

const axios = require('axios').default;
const xmlbuilder2 = require("xmlbuilder2"); //xmlbuilder2 creates a new xml object

let root = xmlbuilder2.create({ version: '1.0'})
  .ele('AddressValidateRequest', {USERID: '37OWN0038O081'})
    .ele('Address')
      .ele('Address1').txt('185 Berry St').up() //.up() wraps value in matching xml element
      .ele('Address2').txt('Suite 6100').up()
      .ele('City').txt('San Francisco').up()
      .ele('State').txt('CA').up()
      .ele('Zip5').txt('94556').up()
      .ele('Zip4').up()
    .up()
  .up();

let xml = root.end({ prettyPrint: true});
console.log(xml);
  
let url = "https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&XML=" + encodeURIComponent(xml);

axios.get(url)
  .then(function (response){
   const obj = xmlbuilder2.convert(response.data, {format: "object"});
   console.log(obj);
  })
  .catch(function(error){
    console.log(error);
  })

  document.addEventListener(DOMContentLoaded, () => {
    const addressForm = document.getElementById("my-form")
    const verificationResult = document.getElementById("verification-result");

    addressForm.addEventListener("submit", async(event) => {
      event.preventDefault();

      //data collection from form
      const address1 = document.getElementById("user-address1").value
      const address2 = document.getElementById("user-address2").value
      const city = document.getElementById("user-city").value
      const state = document.getElementById("user-state").value
      const zip5 = document.getElementById("user-zip5").value
      const zip4 = document.getElementById("user-zip4").value

      //send a request for API verification
      try {
        const response = await fetch("http://127.0.0.1:5500/user.html?", {
          method: 'POST',
          headers: {
            'Content-Type': application/json,
          },
          body: JSON.stringify({address1,address2,city,state,zip5,zip4})
        });

        if(response.ok) {
          const data = await response.json();
          //Show verification results
          verificationResult.innerHTML = `<p>Verification result:</p> <pre>${JSON.stringify(data,null, 2)}</pre>`
        }else {
          verificationResult.innerHTML = `<p>Verification error. Please try again.</p>`
        }
      } catch(error){
          console.error("Verification error:", error);
          verificationResult.innerHTML = `<p>Verification error. Please try again.</p>`
      }
    });
  });