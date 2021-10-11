let Name = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("HELLO")
        }, 3000)
    })
    //!Data Not a Key Word
Name.then(data => { console.log(data) })