var arr = [1, 2, 3, 4, 5, 6, 7, 8]
    //!Shift And UnShift
    // arr.shift(6)
    // console.log(arr)
    //!Slice
    // var new_arr = arr.slice(2, 4)
    // console.log(new_arr)

var new_arr = arr.filter((Element, index) => {
    if (Element > 100) return true
})
console.log(new_arr)