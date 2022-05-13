// this point to it object ==> in traditional function
let userDetails = {
    name: "gourav",
    age: 221,
    designation: "i5",
    logo: "rail",
    printDetails: function () { console.log(this.logo) }

}
userDetails.printDetails()