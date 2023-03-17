class user {
    constructor(
        Id,
        name,
        email,
        gender,
        hobbies,
        age,
        country,
        state,
        city,
        time
    ) {
        this.Id = Id;
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.hobbies = hobbies;
        this.age = age;
        this.country = country;
        this.state = state;
        this.city = city;
        this.time = time;
    }
}
function getTime() {
    const d = new Date();
    let time = `${d.getHours()}:${d.getMinutes()}:${d.getMinutes()}--${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`;
    console.log(time);
    return time;
}
function getHobbies(arrOFHobbies) {
    let selectedHobbies = [];
    arrOFHobbies.forEach((element) => {
        if (element.checked) {
            selectedHobbies.push(element.value);
        }
    });
    return selectedHobbies;
}
function readDataFromForm(id) {
    let Id = id;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.querySelector("input[name='gender']:checked").value;
    let hobbies = getHobbies(document.querySelectorAll("input[type='checkbox']"));
    let age = document.getElementById("age").value;
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;
    let time = getTime();
    let person = new user(
        Id,
        name,
        email,
        gender,
        hobbies,
        age,
        country,
        state,
        city,
        time
    );
    return person;
}
function showDataOnTable(userArr) {
    console.log(document.querySelector("tbody"));
    document.querySelector("tbody").remove();
    let table = document.querySelector("table");
    let tbody = document.createElement("tbody");
    table.append(tbody);
    for (let user of userArr) {
        console.log(user.country)
        let objForShowCountry = contriesToLoad.find(element => element.id == user.country);
        console.log(objForShowCountry, "this is the country")
        let objForShowCities = cityObj.find((element) => element.id == user.city);
        let objForShowStates = state_array.find((element) => element.id == user.state);
        let tr = document.createElement("tr");
        tr.setAttribute("id", `${user.Id}`)
        let innerMal = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
            <td>${user.hobbies}</td>
            <td>${user.age}</td>
            <td>${objForShowCountry.contry_name}</td>
            <td>${objForShowStates.state_name}</td>
            <td>${objForShowCities.city_name}</td>
            <td>${user.time}</td>
            <td><button class="editBtn">Edit</button><button class="deleteBtn">Delete</button></td>`;
        tr.innerHTML = innerMal;
        tbody.append(tr);
    }
}
function fillTheStateArray(arr) {
    let state = document.getElementById("state");
    for (let st of arr) {
        console.log(st.state_name);
        let option = document.createElement("option");
        option.setAttribute("value", `${st.id}`);
        option.textContent = `${st.state_name}`;
        state.append(option);
    }
}
function clearPreviousLoadedListState() {
    let list = document.querySelectorAll("#state option");
    for (let i = 1; i < list.length; i++) {
        list[i].remove();
    }
}
var state_array = [
    { id: 1, countryId: 2, state_name: "Gujarat" },
    { id: 2, countryId: 2, state_name: "Maharastra" },
    { id: 3, countryId: 2, state_name: "Tamilnadu" },
    { id: 4, countryId: 2, state_name: "Rajasthan" },
    { id: 5, countryId: 2, state_name: "Kerala" },
    { id: 6, countryId: 3, state_name: "Bavaria" },
    { id: 7, countryId: 3, state_name: "Bremen" },
    { id: 8, countryId: 3, state_name: "Saxony" },
    { id: 9, countryId: 4, state_name: "Alaska" },
    { id: 10, countryId: 4, state_name: "Arizona" },
    { id: 11, countryId: 4, state_name: "California" },
    { id: 12, countryId: 4, state_name: "Florida" },
    { id: 13, countryId: 5, state_name: "Alberta" },
    { id: 14, countryId: 5, state_name: "Ontario" },
    { id: 15, countryId: 5, state_name: "British Columbia" },
    { id: 16, countryId: 6, state_name: "England" },
    { id: 17, countryId: 6, state_name: "Wales" },
    { id: 18, countryId: 6, state_name: "Scotland" },
];
function fillTheState(country_id) {
    clearPreviousLoadedListState();

    let filterState = state_array.filter((obj) => {
        if (obj.countryId == country_id) {
            return obj;
        }
    })
    fillTheStateArray(filterState);
}
function clearPreviousLoadedListCities() {
    let list = document.querySelectorAll("#city option");
    for (let i = 1; i < list.length; i++) {
        list[i].remove();
    }
}
function fillTheCitiesArray(arr) {
    let city = document.getElementById("city");
    for (let ct of arr) {
        console.log(city);
        let option = document.createElement("option");
        option.setAttribute("value", `${ct.id}`);
        option.textContent = ct.city_name;
        city.append(option);
    }
}
var cityObj = [
    { id: 1, stateId: 1, city_name: "Ahemdabad" },
    { id: 2, stateId: 1, city_name: "Amreli" },
    { id: 3, stateId: 1, city_name: "Anand" },
    { id: 4, stateId: 1, city_name: "Banaskatha" },
    { id: 5, stateId: 1, city_name: "Bharuch" },
    { id: 6, stateId: 1, city_name: "Bhavnagar" },
    { id: 7, stateId: 1, city_name: "Dahod" },
    { id: 8, stateId: 1, city_name: "Gandhinagar" },
    { id: 9, stateId: 1, city_name: "Surat" },
    { id: 10, stateId: 1, city_name: "Vadodara" },
    { id: 11, stateId: 2, city_name: "Pune" },
    { id: 12, stateId: 2, city_name: "Thane" },
    { id: 13, stateId: 2, city_name: "Mumbai" },
    { id: 14, stateId: 2, city_name: "Nagpur" },
    { id: 15, stateId: 3, city_name: "Chennai" },
    { id: 16, stateId: 3, city_name: "Madurai" },
    { id: 17, stateId: 3, city_name: "Coimbatore" },
    { id: 18, stateId: 4, city_name: "Ajmer" },
    { id: 19, stateId: 4, city_name: "Bikaner" },
    { id: 20, stateId: 4, city_name: "Jaipur" },
    { id: 21, stateId: 5, city_name: "Kannur" },
    { id: 22, stateId: 5, city_name: "Alappuzha" },
    { id: 23, stateId: 5, city_name: "Kollam" },
    { id: 24, stateId: 6, city_name: "Munich" },
    { id: 25, stateId: 6, city_name: "Regensburg" },
    { id: 26, stateId: 6, city_name: "Würzburg" },
    { id: 27, stateId: 7, city_name: "Altstadt" },
    { id: 28, stateId: 7, city_name: "Arsten" },
    { id: 29, stateId: 7, city_name: "Gröpeln" },
    { id: 30, stateId: 8, city_name: "Dresden" },
    { id: 31, stateId: 8, city_name: "Leipzig" },
    { id: 32, stateId: 8, city_name: "Chemnitz" },
    { id: 33, stateId: 9, city_name: "Anchorage" },
    { id: 34, stateId: 9, city_name: "Fairbanksa" },
    { id: 35, stateId: 9, city_name: "Juneau" },
    { id: 36, stateId: 10, city_name: "Phoenix" },
    { id: 37, stateId: 10, city_name: "Tucson" },
    { id: 38, stateId: 10, city_name: "Mesa" },
    { id: 39, stateId: 11, city_name: "Los Angeles" },
    { id: 40, stateId: 11, city_name: "San Diego" },
    { id: 41, stateId: 11, city_name: "San Jose" },
    { id: 42, stateId: 12, city_name: "Jacksonville" },
    { id: 43, stateId: 12, city_name: "Miami" },
    { id: 44, stateId: 12, city_name: "Tampa" },
    { id: 45, stateId: 13, city_name: "Calgary" },
    { id: 46, stateId: 13, city_name: "Edmonton" },
    { id: 47, stateId: 13, city_name: "Red Deer" },
    { id: 48, stateId: 14, city_name: "Toronto" },
    { id: 49, stateId: 14, city_name: "Ottawa" },
    { id: 50, stateId: 14, city_name: "Brampton" },
    { id: 51, stateId: 15, city_name: "Vancouver" },
    { id: 52, stateId: 15, city_name: "Victoria" },
    { id: 53, stateId: 15, city_name: "Nanaimo" },
    { id: 54, stateId: 16, city_name: "London" },
    { id: 55, stateId: 16, city_name: "Liverpool" },
    { id: 56, stateId: 16, city_name: "Manchester" },
    { id: 57, stateId: 17, city_name: "Cardiff" },
    { id: 58, stateId: 17, city_name: "Swansea" },
    { id: 59, stateId: 17, city_name: "Newport" },
    { id: 60, stateId: 18, city_name: "Edinburgh" },
    { id: 61, stateId: 18, city_name: "Glasgow" },
    { id: 62, stateId: 18, city_name: "Inverness" },
]
function fillTheCities(state_id) {
    clearPreviousLoadedListCities();

    let filterCity = cityObj.filter((obj) => {
        if (obj.stateId == state_id) {
            return obj;
        }
    })
    fillTheCitiesArray(filterCity);


}
function resetForm() {
    document.getElementById("myForm").reset();
}
function EditTheElement(id, userArr, newData) {
    console.log("this is the new data ", newData);
    console.log("id of new data", newData.Id);
    let updatedArr = userArr.map((user) => {
        console.log(user);
        console.log("this is user id ", user.Id);

        if (user.Id == newData.Id) {
            for (let key in user) {
                if (user[key] != newData[key]) {
                    user[key] = newData[key];
                }
            }
        }
        return user;
    });
    console.log(updatedArr);
    showDataOnTable(updatedArr);
}
function firstChangeButtons() {
    let submitButton = document.getElementById("submitBtn");
    let updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.setAttribute("class", "updateBtn");
    let cancelBtn = document.createElement("button");
    cancelBtn.textContent = "cancel";
    cancelBtn.setAttribute("class", "cancelBtn");
    submitButton.parentElement.append(updateBtn);
    submitButton.parentElement.append(cancelBtn);
    submitButton.style.display = "none";
}
function changeButtonsAfterUpdate() {
    document.querySelector(".updateBtn").remove();
    document.querySelector(".cancelBtn").remove();
    let submitButton = document.getElementById("submitBtn");
    submitButton.style.display = "block";
}
function clearCheckbox(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].checked = false;
    }
}
function fillDataToForm(obj) {
    document.getElementById("name").value = obj.name;
    document.getElementById("email").value = obj.email;
    document.getElementById("age").value = obj.age;
    let genderOption = document.querySelectorAll("input[name='gender']");
    console.log(genderOption);
    for (let option of genderOption) {
        if (option.value == obj.gender) {
            option.checked = "true";
        }
    }
    const checkboxOption = document.querySelectorAll("input[type='checkbox'");
    clearCheckbox(checkboxOption);
    for (let box of checkboxOption) {
        for (let value of obj.hobbies) {
            if (box.value == value) {
                box.checked = true;
            }
        }
    }
    let contryElement = document.querySelectorAll("#country option");
    for (let country of contryElement) {
        if (country.value == obj.country) {
            country.selected = true;
        }
    }
    fillTheState(obj.country);
    const stateOption = document.querySelectorAll("#state option");
    for (let state of stateOption) {
        if (state.value == obj.state) {
            state.selected = true;
        }
    }
    fillTheCities(obj.state);
    const cityOption = document.querySelectorAll("#city option");
    for (let ct of cityOption) {
        if (ct.value == obj.city) {
            ct.selected = true;
        }
    }
}
function fillTheUserDataBackForm(Index) {
    for (let i = 0; i < userArr.length; i++) {
        if (userArr[i].Id == Index) {
            fillDataToForm(userArr[i]);
        }
    }
}
function validateTheEmail(email) {
    var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex)) {
        document.getElementById("errorForEmail").textContent =
            "Please Enter the valid Email!!";
        document.getElementById("errorForEmail").style.color = "red";
        document.getElementById("email").onclick = () =>
            (document.getElementById("errorForEmail").textContent = "");
        document.getElementById("submitBtn").disabled = true;
        return false;
    } else {
        document.getElementById("submitBtn").disabled = false;
        return true;
    }
}
function validateTheName(name) {
    var regName = /^[a-zA-Z]+$/;
    if (!regName.test(name)) {
        document.getElementById("errorForName").innerText =
            "Pleaser Enter the name!!";
        document.getElementById("errorForName").style.color = "red";
        document.getElementById("submitBtn").disabled = true;
        document.getElementById("name").onclick = () =>
            (document.getElementById("errorForName").innerHTML = "");
        return false;
    } else {
        document.getElementById("submitBtn").disabled = false;
        return true;
    }
}
function validateAge(age) {
    if (age > 15 && age < 100) {
        document.getElementById("submitBtn").disabled = false;
        return true;
    } else {
        document.getElementById("errorForAge").textContent =
            "Please enter the valid age!!";
        document.getElementById("errorForAge").style.color = "red";
        document.getElementById("submitBtn").disabled = true;
        document.getElementById("age").onclick = () =>
            (document.getElementById("errorForAge").textContent = "");
        return false;
    }
}
function validateCountry(country) {
    if (country != "Select") {
        return true;
    } else {
        console.log("error is occured");
        let spanForError = document.getElementById("errorForCountry");
        spanForError.textContent = "Please Select the Country!!";
        spanForError.style.color = "red";
        document.getElementById("country").onclick = () => spanForError.textContent = "";
        return false;
    }
}
function validateTheData(dataObj) {
    // if (!validateTheName(dataObj.name)) {
    //     return false;
    // }
    // if (!validateTheEmail(dataObj.email)) {
    //     return false;
    // }
    if (dataObj.hobbies.length == 0) {
        document.getElementById("errorForHobbies").textContent =
            "Please check atleast one hobby!!";
        document.getElementById("errorForHobbies").style.color = "red";
        document.getElementById("errorForHobbies").parentElement.onclick = () =>
            {
                document.getElementById("errorForHobbies").textContent = "";
                return false;
            }
    }
    // if (!validateAge(dataObj.age)) {
    //     return false;
    // }
    console.log(dataObj)
    if (!validateCountry(dataObj.country)) {
        return false;
    }
    return true;
}
function AddeventListenerToItems(arr) {
    for (let item of arr) {
        console.log("this is the item in list item", item);
        item.addEventListener("click", (e) => {
            console.log(e);
            let btn = document.getElementsByTagName("button")[0];
            if (!document.getElementById("buttons").contains(btn)) {
                firstChangeButtons();
            }
            let Index = e.target.parentElement.parentElement.getAttribute("id");
            fillTheUserDataBackForm(Index);
            let updateButton = document.querySelector(".updateBtn");
            console.log(updateButton);
            updateButton.onclick = (e) => {
                if (e.target.innerHTML === "Update") {
                    let newData = readDataFromForm(Index);
                    if (!validateTheData(newData)) {
                        return false;
                    }
                    EditTheElement(Index, userArr, newData);
                    resetForm();
                    changeButtonsAfterUpdate();
                    let editButtons = document.querySelectorAll(".editBtn");
                    AddeventListenerToItems(editButtons);
                    let deleteButtons = document.querySelectorAll(".deleteBtn");
                    AddeventListenerToDeleteButtons(deleteButtons);
                }
            };
            let cancelButton = document.querySelector(".cancelBtn");
            cancelButton.onclick = () => {
                changeButtonsAfterUpdate();
                resetForm();
            };
        });
    }
}
function deleteFromArrayAndShow(id, userArr) {
    userArr.forEach((user, idx) => {
        if (user.Id == id) {
            userArr.splice(idx, 1);
        }
    });
    console.log(userArr);
    showDataOnTable(userArr);
}
function AddeventListenerToDeleteButtons(list) {
    for (let item of list) {
        console.log(item, "deleteBtn");
        item.addEventListener("click", (e) => {
            let id = e.target.parentElement.parentElement.getAttribute("id");
            deleteFromArrayAndShow(id, userArr);
            let editButtons = document.querySelectorAll(".editBtn");
            AddeventListenerToItems(editButtons);
            let deleteButtons = document.querySelectorAll(".deleteBtn");
            AddeventListenerToDeleteButtons(deleteButtons);
        });
    }
}
function searchForName(name, userArr) {
    const filterArr = userArr.filter((element) => {
        return element.name.toLowerCase().includes(name.toLowerCase());
    });
    return filterArr;
}
function sortArrInAscendingAndShow(userArr) {
    let newArr = [...userArr];
    newArr.sort((a, b) => (a.name < b.name ? -1 : 1));
    showDataOnTable(newArr);
    let editButtons = document.querySelectorAll(".editBtn");
    AddeventListenerToItems(editButtons);
    let deleteButtons = document.querySelectorAll(".deleteBtn");
    AddeventListenerToDeleteButtons(deleteButtons);
}
function sortArrInDescendingAndShow(userArr) {
    let newArr = [...userArr];
    newArr.sort((a, b) => (a.name < b.name ? 1 : -1));
    showDataOnTable(newArr);
    let editButtons = document.querySelectorAll(".editBtn");
    AddeventListenerToItems(editButtons);
    let deleteButtons = document.querySelectorAll(".deleteBtn");
    AddeventListenerToDeleteButtons(deleteButtons);
}
function validateNameForSearch(name) {
    if (name == "" || name == null) {
        document.getElementById("searchError").textContent =
            "Please Enter the search!!";
        document.getElementById("searchError").style.color = "red";
        document.getElementById("searchInput").onclick = () =>
            (document.getElementById("searchError").textContent = "");
        return false;
    } else {
        return true;
    }
}
function fillTheCountriesArray(arr) {
    let country = document.getElementById("country");
    for (let cr of arr) {
        console.log(cr);
        let option = document.createElement("option");
        option.setAttribute("value", `${cr.id}`);
        option.textContent = cr.contry_name;
        country.append(option);
    }
}
//========================================================================================================
const userArr = [
    {
        Id: 0,
        name: "Divyaraj",
        email: "divyaraj@gmail.com",
        gender: "Male",
        hobbies: ["Reading"],
        age: 22,
        country: "2",
        state: "1",
        city: "8",
        time: "12:45:10--14/06/2000",
    },
];
var contriesToLoad = [
    { id: 2, contry_name: "India" },
    { id: 3, contry_name: "Germany" },
    { id: 4, contry_name: "America" },
    { id: 5, contry_name: "Canada" },
    { id: 6, contry_name: "UK" },
]
fillTheCountriesArray(contriesToLoad);

if (userArr.length > 0) {
    showDataOnTable(userArr)
}

let editButtons = document.querySelectorAll(".editBtn");
console.log("this is the edit", editButtons);
AddeventListenerToItems(editButtons);
let deleteButtons = document.querySelectorAll(".deleteBtn");
console.log("this is the delete", deleteButtons);
AddeventListenerToDeleteButtons(deleteButtons);
let id = 1;
let inputName = document.getElementById("name");
inputName.onblur = function () {
    validateTheName(document.getElementById("name").value)
}
document.getElementById("email").onblur = () => validateTheEmail(document.getElementById("email").value);
document.getElementById("age").onblur = function(){
    validateAge(document.getElementById("age").value);
}

let form = document.querySelector("#myForm");
console.log(form)
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (e.submitter.value === "Submit") {
        let data = readDataFromForm(id);
        if (!validateTheData(data)) {
          return false;
        }
        userArr.push(data);
        console.log(userArr);
        showDataOnTable(userArr);
        let editButtons = document.querySelectorAll(".editBtn");
        AddeventListenerToItems(editButtons);
        let deleteButtons = document.querySelectorAll(".deleteBtn");
        AddeventListenerToDeleteButtons(deleteButtons);
        resetForm();
        id++;
    }
});
document.getElementById("country").onchange = () => {
    fillTheState(document.getElementById("country").value);
};
document.getElementById("state").onchange = () => {
    fillTheCities(document.getElementById("state").value);
};

let searchButton = document.getElementById("searchBtn");
searchButton.addEventListener("click", function () {
    let nameForSeach = document.getElementById("searchInput").value;
    if (!validateNameForSearch(nameForSeach)) {
        return false;
    }
    let filterarr = searchForName(nameForSeach, userArr);
    showDataOnTable(filterarr);
    let editButtons = document.querySelectorAll(".editBtn");
    AddeventListenerToItems(editButtons);
    let deleteButtons = document.querySelectorAll(".deleteBtn");
    AddeventListenerToDeleteButtons(deleteButtons);
});
let sortDropdown = document.getElementById("sorting");
sortDropdown.addEventListener("change", () => {
    if (sortDropdown.value == "Ascending") {
        sortArrInAscendingAndShow(userArr);
    } else if (sortDropdown.value == "Descending") {
        console.log("des");
        sortArrInDescendingAndShow(userArr);
    } else if (sortDropdown.value == "Select") {
        console.log("select");
        showDataOnTable(userArr);
        let editButtons = document.querySelectorAll(".editBtn");
        AddeventListenerToItems(editButtons);
        let deleteButtons = document.querySelectorAll(".deleteBtn");
        AddeventListenerToDeleteButtons(deleteButtons);
    }
});
