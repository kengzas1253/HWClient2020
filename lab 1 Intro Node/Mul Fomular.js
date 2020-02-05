console.log("Enter Text")
let stdin = process.openStdin()
stdin.addListener("data", function (d) {
    for(var i=1;i<12;i++){
        console.log(d.toString().trim()+"*"+i+"="+i*d)
    }
stdin.destroy()
});