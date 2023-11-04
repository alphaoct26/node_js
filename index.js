const cc=require("./app.js")
cc.from("INR").to("EUR").amount(100).convert().then((response) => {
    console.log(response) //or do something else
})