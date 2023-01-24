class Person {
  constructor(name, age, x) {
    this.name = name;
    this.age = age;
  }
  static checkAge(p1, p2, p3) {
    if (p1.age > p2.age && p1.age > p3.age) {
      return (
        "Il più grande è" +
        " " +
        p1.name +
        " la sua età è di " +
        " " +
        p1.age +
        " Mentre " +
        p2.name +
        " e " +
        p3.name +
        " hanno rispettivamente " +
        p2.age +
        " e " +
        p3.age +
        " anni"
      );
    } else if (p2.age > p1.age && p2.age > p3.age) {
      return (
        "Il più grande è" +
        " " +
        p2.name +
        " " +
        "la sua età è di " +
        " " +
        p2.age +
        " Mentre " +
        p1.name +
        " e" +
        " " +
        p3.name +
        " hanno rispettivamente " +
        p1.age +
        " e " +
        p3.age +
        " anni"
      );
    } else {
      return (
        "Il più grande è" +
        " " +
        p3.name +
        " " +
        "la sua età è di " +
        " " +
        p3.age +
        " Mentre " +
        p1.name +
        " e" +
        " " +
        p2.name +
        " hanno rispettivamente " +
        p2.age +
        " e " +
        p1.age +
        " anni"
      );
    }
  }
}

let p1 = new Person("Luca", 21);
let p2 = new Person("Edoardo", 29);
let p3 = new Person("Daniele", 26);
console.log(Person.checkAge(p1, p2, p3));

class Contents {
  constructor(items, pageSize) {
    this.items = items;
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.totalPages = Math.floor(this.items.length / this.pageSize);
  }

  getCurrentPage() {
    let startIndex = (this.currentPage - 1) * this.pageSize;
    return this.items.slice(startIndex, startIndex + this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  firstPage() {
    this.currentPage = 1;
  }

  lastPage() {
    this.currentPage = this.totalPages;
  }
}
let items = [
  { name: "John Smith", birthPlace: "New York", birthDate: "01/01/1970" },
  { name: "Emily Johnson", birthPlace: "Los Angeles", birthDate: "02/15/1980" },
  { name: "Michael Brown", birthPlace: "Chicago", birthDate: "03/20/1990" },
  { name: "Jessica Davis", birthPlace: "Houston", birthDate: "04/10/2000" },
  { name: "Jacob Garcia", birthPlace: "Phoenix", birthDate: "05/05/1985" },
  {
    name: "Nicholas Rodriguez",
    birthPlace: "Philadelphia",
    birthDate: "06/12/1995",
  },
  { name: "Ashley Taylor", birthPlace: "San Antonio", birthDate: "07/18/1975" },
  { name: "David Anderson", birthPlace: "San Diego", birthDate: "08/24/1985" },
  { name: "Samantha Thomas", birthPlace: "Dallas", birthDate: "09/30/1995" },
  {
    name: "Matthew Hernandez",
    birthPlace: "San Jose",
    birthDate: "10/15/1985",
  },
  { name: "Joseph Moore", birthPlace: "Jacksonville", birthDate: "11/20/1980" },
  { name: "Mary Jackson", birthPlace: "Indianapolis", birthDate: "12/25/1990" },
  { name: "Amanda Martin", birthPlace: "Austin", birthDate: "01/01/2000" },
  {
    name: "Daniel Thompson",
    birthPlace: "Fort Worth",
    birthDate: "02/14/1980",
  },
  { name: "Paul Gonzalez", birthPlace: "Detroit", birthDate: "03/19/1990" },
  { name: "Elizabeth Baker", birthPlace: "El Paso", birthDate: "04/09/2000" },
];
let page = new Contents(items, 4);

function renderItems(items) {
  let itemList = document.querySelector("#items");
  itemList.innerHTML = "";
  items.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.birthPlace}</p>
        <span>${item.birthDate}</span>
    `;
    itemList.appendChild(li);
  });
}

window.onload = function () {
  renderItems(page.getCurrentPage());
};

function handleNextClick() {
  page.nextPage();
  renderItems(page.getCurrentPage());
}

function handlePrevClick() {
  page.prevPage();
  renderItems(page.getCurrentPage());
}

function handleFirstClick() {
  page.firstPage();
  renderItems(page.getCurrentPage());
}

function handleLastClick() {
  page.lastPage();
  renderItems(page.getCurrentPage());
}

document.querySelector("#next").addEventListener("click", handleNextClick);
document.querySelector("#prev").addEventListener("click", handlePrevClick);
document.querySelector("#first").addEventListener("click", handleFirstClick);
document.querySelector("#last").addEventListener("click", handleLastClick);
