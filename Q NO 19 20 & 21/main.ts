// Q NO 19 //
let guestList = ["saif", "saeed", "danish", "nizam"];
//   guestList.forEach(guestInvitation => console.log(`salam ${guestInvitation} would you like to dinner with me `));
let guestNumber: number = guestList.length
console.log(`We are inviting total  ${guestNumber}  guest`);

// Q no 20 //
let famousCities: string[] = ["karachi", "lahore", "faislabad", "Islamabad"];
console.log("List of Famous Cities");
famousCities.forEach(likeList => console.log(likeList));


// Q NO 21 //
interface AIcourse {
        courseName: String;
        numberOfstudents: number;
        facultyTeacher: string;
}
let AIcourse = {
        courseName: "typescript",
        numberOfstudents: 5000,
        facultyTeacher: "SIR MUBASSHIR ALI"
}
console.log(`MY COURSE NAME IS ${AIcourse.courseName}`);
console.log(`total number of student is ${AIcourse.numberOfstudents}`);
console.log((`our teacher name is ${AIcourse.facultyTeacher}`));


