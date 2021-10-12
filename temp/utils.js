const path = require('path')
    //!To find the Path relative path into absolute path Ex \user\desktop\  into E:\user\desktop
    //!The key word is resolve
console.log(path.resolve('../', "./temp/utils.js"))