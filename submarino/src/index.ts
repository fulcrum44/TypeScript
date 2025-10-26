import { Submarino } from "./submarino/Submarino";
import { ConfigSubmarina } from "./config/ConfigSubmarina";

const submarino : Submarino = new Submarino();


// submarino.init({
//     size: 5,
//     trail: 3
// });

submarino.init({
        size: 10,
        trail: 0
    });

console.log("Submarino initialized.");