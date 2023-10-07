const indianCities = [
  "Ahmedabad",
  "Agra",
  "Aligarh",
  "Allahabad",
  "Alwar",
  "Amritsar",
  "Anantapur",
  "Aurangabad",
  "Ayodhya",
  "Bareilly",
  "Belagavi",
  "Bengaluru",
  "Bhopal",
  "Bhubaneswar",
  "Bikaner",
  "Bilaspur",
  "Bokaro Steel City",
  "Chandigarh",
  "Chennai",
  "Chhatrapati Shivaji Maharaj Terminus",
  "Coimbatore",
  "Cuttack",
  "Dehradun",
  "Delhi",
  "Dhanbad",
  "Dharamsala",
  "Durgapur",
  "Ernakulam",
  "Faridabad",
  "Firozabad",
  "Ghaziabad",
  "Gorakhpur",
  "Gwalior",
  "Gurugram",
  "Guwahati",
  "Gwalior",
  "Haldwani",
  "Haridwar",
  "Hubli",
  "Hyderabad",
  "Indore",
  "Jabalpur",
  "Jaipur",
  "Jalandhar",
  "Jammu",
  "Jamshedpur",
  "Jhansi",
  "Jodhpur",
  "Kanpur",
  "Kannur",
  "Kanpur Nagar",
  "Karnal",
  "Kasaragod",
  "Kathmandu",
  "Katihar",
  "Kochi",
  "Kolar",
  "Kolhapur",
  "Kolkata",
  "Kottayam",
  "Kozhikode",
  "Krishnagiri",
  "Kurnool",
  "Kurukshetra",
  "Lucknow",
  "Ludhiana",
  "Madurai",
  "Malappuram",
  "Mangaluru",
  "Meerut",
  "Mira-Bhayandar",
  "Mirzapur-Vindhyachal",
  "Moradabad",
  "Mumbai",
  "Muzaffarpur",
  "Mysore",
  "Nagpur",
  "Nashik",
  "Nellore",
  "Noida",
  "Patna",
  "Prayagraj",
  "Pune",
  "Puri",
  "Raipur",
  "Rajkot",
  "Rajahmundry",
  "Rajkot",
  "Rajahmundry",
  "Rajamahendravaram",
  "Ramagundam",
  "Ranchi",
  "Ratlam",
  "Rourkela",
  "Saharanpur",
  "Salem",
  "Sambalpur",
  "Sangli-Miraj & Kupwad",
  "Satara",
  "Secunderabad",
  "Shahjahanpur",
  "Shillong",
  "Shimla",
  "Siliguri",
  "Solapur",
  "Srinagar",
  "Surat",
  "Thanjavur",
  "Thiruvananthapuram",
  "Tiruchirappalli",
  "Tirupati",
  "Tiruppur",
  "Trivandrum",
  "Udaipur",
  "Udupi",
  "Vadodara",
  "Varanasi",
  "Vijayawada",
  "Visakhapatnam",
  "Warangal",
  "Yamunanagar"
];

/*
let cities = indianCities.sort();
let input = document.getElementById("input");
input.addEventListener("keyup", (e) => {
    for(let i of cities){
        if(i.toLowercase().startsWith(input.value.toLowerCase()) && input.value!=""){
            let litem = document.createElement("li");
            litem.classList.add("list-items");
            litem.style.cursor="pointer";
            litem.setAttribute("onclick","displayNames('" + i + "')");
            
            
            
            let word = "<b>" + i.substr(0, input.value.length) + "</b>";
            word+=i.substr(input.value.length);
            litem.innerHTML=word;
            document.querySelector(".list").appendChild(litem);
          
        }
    }
});

function displayNames(value){
    input.value=value;
}*/

let sortedNames = indianCities.sort();

//reference
let input = document.getElementById("input");

//Execute function on keyup
input.addEventListener("keyup", (e) => {
  //loop through above array
  //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  removeElements();
  for (let i of sortedNames) {
    //convert input to lowercase and compare with each string

    if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      //create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      //Display matched part in bold
      let word = "<b>" + i.substr(0, input.value.length) + "</b>";
      word += i.substr(input.value.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});
function displayNames(value) {
  input.value = value;
  removeElements();
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}
