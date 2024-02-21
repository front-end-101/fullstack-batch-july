const url = "https://jsonplaceholder.typicode.com/users";

const fetchData = fetch(url)
// pending - intital
// success- then
// fail - catch

fetchData
.then((res) => res.json())
.then(data => console.log(data))
.catch((err) => console.log(err))


async function fetchDataFn (url){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

fetchDataFn(url)










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

