let data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  let first = document.querySelector(".b1");
  function printDeveloper() {
    first.innerText = "";
    first= data.filter(dev=>dev.profession == "developer");
    console.log(first);
    let element = JSON.stringify(first);
    document.getElementById("developer").innerHTML =element;
  }
  
  // 2. Add Data
  function addData() {
    let name = prompt("Enter name:");
    let age = prompt("Enter age:");
    let profession = prompt("Enter profession:");
    
    let newData = { name: name, age: parseInt(age), profession: profession };
    data.push(newData);
    let newObj = JSON.stringify(data);
    document.querySelector(".b2").innerHTML ="New Array after addition : " + newObj;
  
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let admins = data.filter(dev => dev.profession.toLowerCase() === 'admin');
    data = data.filter(dev => dev.profession.toLowerCase() !== 'admin');
    console.log("Removed Admins:", admins);
    let newData = JSON.stringify(data);
    document.querySelector(".b3").innerHTML ="New Array : " + newData;
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let dummyArray = [
      { name: "dummy1", age: 30, profession: "designer" },
      { name: "dummy2", age: 25, profession: "developer" },
  ];
  let resultArray = data.concat(dummyArray);
  console.log("Concatenated Array:", resultArray);
  let newArray = JSON.stringify(resultArray);
    document.querySelector(".b4").innerHTML ="New Array after concatination: " + newArray;
  }
  
  // 5. Average Age
  function averageAge() {
    let sum = data.reduce((acc, dev) => acc + dev.age, 0);
    let average = sum / data.length;
    console.log("Average Age:", average.toFixed(2));
    let Average = JSON.stringify(average);
    document.querySelector(".b5").innerHTML ="Average = " + Average;
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let above25 = data.some(dev => dev.age > 25);
    console.log("At least one person is above 25:", above25);
    let newData = JSON.stringify(above25);
    document.querySelector(".b6").innerHTML ="Is there any person whose age is above 25? : " + newData;
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let professions = new Set(data.map(dev => dev.profession));
    console.log("Unique Professions:", [...professions]);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log("Sort by Age:", data);
    let sortedArray = JSON.stringify(data);
    document.querySelector(".b8").innerHTML ="Sorted array by Age : " + sortedArray;
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    let john = data.find(dev => dev.name.toLowerCase() === 'john');
    if (john) {
        john.profession = 'manager';
        console.log("John's profession updated to 'manager'");
    }
    let newData = JSON.stringify(data);
    document.querySelector(".b9").innerHTML ="New array after updated professions : " + newData;
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let developers = data.filter(dev => dev.profession.toLowerCase() === 'developer');
    let admins = data.filter(dev => dev.profession.toLowerCase() === 'admin');
    console.log(`Total Developers: ${developers.length}, Total Admins: ${admins.length}`);
  }
  