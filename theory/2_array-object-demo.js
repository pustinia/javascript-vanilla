/* [array] */

const addValue = "blablabla";

// camel case variable.
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, 32, addValue];

// want to get all values.
console.log(daysOfWeek);

// want to get "Wed"
console.log(daysOfWeek[2]);

// want to get not exist => undefined
console.log(daysOfWeek[235]);

/* [object] */
const nicoInfo = {
    name : "Nico",
    age : 33,
    gender : "male",
    isHansom : true,
    favMovies : ["Along the gods" , "old boys", "LOTR"], // put array into the object.
    favFoods : [
        {
            name : "kimchi",
            fatty : false
        },
        {
            name : "pizza",
            fatty : true
        }
    ]
};
console.log(nicoInfo);
console.log(nicoInfo.gender);
nicoInfo.isHansom = false;
console.log(nicoInfo.isHansom);
console.log(nicoInfo.favFoods[1]);