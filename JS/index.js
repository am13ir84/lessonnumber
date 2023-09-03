let grades = [
    { subject: "ریاضی", grade: 18 },
    { subject: "فیزیک", grade: 17 },
    { subject: "شیمی", grade: 15 },
    { subject: "زبان انگلیسی", grade: 19 },
];

function findGrade(subject) {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].subject === subject) {
            return grades[i].grade;
        }
    }
    return "موردی یافت نشد";
}

alert(findGrade("ریاضی")); //باید 18 بنویسد
alert(findGrade("فارسی")); // باید موردی یافت نشد بنویسد
alert(findGrade("شیمی")); //باید 15 بنویسه
alert(findGrade("رایانه")); //باید موردی یافت نشد بنویسه