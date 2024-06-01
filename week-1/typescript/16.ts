/**
 * Write a function that computes the average marks of the following students: Then this average is used to determine the corresponding grade.
 * - John: 90
 * - Jane: 85
 * - Joe: 95
 * - Tom: 65
 * - Nancy: 75
 *
 * Grade computed as follows:
 * < 60 : F
 * 60-70 : D
 * 70-80 : C
 * 80-90 : B
 * > 90 : A
 * @return {number} The average marks of the students.
 */

const students = [
  { name: "John", mark: 90 },
  { name: "Jane", mark: 85 },
  { name: "Joe", mark: 95 },
  { name: "Tom", mark: 65 },
  { name: "Nancy", mark: 75 },
];

const average_mark = (grade:number) => {
  switch(true)
  {
    case (grade >= 90):
      return 'A';
    case (grade >= 80):
      return 'B';
    case (grade >= 70):
      return 'C'
    case (grade >= 60):
      return 'D' 
    default:
      return 'F'
  }
}

const display_marks = ():void => {
   for(let i = 0; i <= students.length - 1; i++){
    console.log(`The Grade for ${students[i].name} is ${average_mark(students[i].mark)} with mark of ${students[i].mark}`);
  }
}

display_marks();
