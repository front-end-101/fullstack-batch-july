// const url = "https://jsonplaceholder.typicode.com/users";

// const fetchData = fetch(url,{
//     method: "POST",
//     body: {},
//     headers: {
//         Authorization: `Bearer ${token}`
//     }
// });

// // console.log(fetchData)

// // fetchData
// //     .then((res) => res.json())
// //     .then(data => printData(data))
// //     .catch(err => console.log(err))
// //     .finally(() => console.log("FINALLY"))


// async function fetchDataFn() {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         console.log(data)
//         printData(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchDataFn()

// function printData(data) {
//     data.forEach((item) => {
//         const el = document.createElement("p");
//         // el.innerText = item.name
//         el.innerHTML = `
//         <div class="card">
//         <h1>${item.name}</h1>
//         <p>${item.email}<p>
//         </div>
//         `
//         document.body.appendChild(el);
//     })
// }

// object
// state - pending fulfill reject






// // promise
// const url = "https://jsonplaceholder.typicode.com/users";

// const fetchPromise = fetch(url);

// fetchPromise.then(res => res.json())
// .then(data => printData(data))
// .catch(err => console.log(err))
// .finally(() => {
//     console.log("Promise complete")
// })


// function printData (d) {
//     console.log("DATA RECEIVED",d);
//     d.forEach(item => {
//         const el = document.createElement("div");
//         el.innerHTML = `
//         <div class="user-card">
//         <h1>${item.name}</h1>
//         <p>${item.phone}</p>
//         <p>${item.email}</p>
//         </div>
//         `
//         document.body.appendChild(el);
//     })
// }


// function outer (){
//     let count =0;

//     return () => {
//         count++;
//         console.log(count)
//     }
// }

// const innerfn = outer()
// innerfn()



// console.log(this)

// function abc(){
//     console.log(this);
// }

// abc()


// const obj = {
//     name: "Jack",
//     print(){
//         console.log(this.name)
//     }
// }

// obj.print()




const John = {
    name: "John",
    city: "Pune"
}

const Jenny = {
    name: "Jenny",
    city: "Mumbai"
}

function printName(greeting){
    console.log(greeting, this.name);
}


printName()

printName.call(Jenny, "Hello")

printName.apply(John, ["Hey"])

const ObjJenny = printName.bind(Jenny, "Hello from bind");

ObjJenny()




localStorage.setItem("name", "Fusion");