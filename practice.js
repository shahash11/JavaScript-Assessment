let thingsTodo={
    morning: "exercise",
    afternoon: "work",
    evening:"code",
    night: ["sleep", "dream"]

}

let {morning, afternoon}=thingsTodo;
console.log(morning)
morning="day"
console.log(morning)

//destructuring in functions that takes arguments
let day=({shahash,night})=>{
        console.log(`my name is ${shahash} and last name ${night}`)
}
day(
    {
        shahash:"hero",
        night:"kandel"
    }
)


let[a, ,]=["everest","kanchanjanga","himal"]
console.log(a)