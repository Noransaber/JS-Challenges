let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [{title: t, age:a, available:av, skills:[H, C]}
, {title:ti, age:ag, available:ava, skills:[p,d]},
{title: tit, age: agg, available:avai, skills: [PH, La]}] = myFriends

switch(chosen){
    case 1:
        console.log(`My Namme is ${t}`)
        console.log(`My Age Is ${a}`)
        if(av === true) { console.log(`Avilable`)}
        console.log(`My Skills ${C}, ${H}`)
        break

    case 2:
        console.log(`My Namme is ${ti}`)
        console.log(`My Age Is ${ag}`)
        if(ava === true) { console.log(`Avilable`)}else {console.log(`Not Avilable`)}
        console.log(`My Skills ${p}, ${d}`)
        break

    case 3:
        console.log(`My Namme is ${tit}`)
        console.log(`My Age Is ${agg}`)
        if(avai === true) { console.log(`Avilable`)}else {console.log(`Not Avilable`)}
        console.log(`My Skills ${PH}, ${La}`)
        break
    default: console.log(`Err`)


}

