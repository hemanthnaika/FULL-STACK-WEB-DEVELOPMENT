// Name In console
let Name = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hemanth");
    }, 3000);
});
Name.then(Name => { console.log(Name) });