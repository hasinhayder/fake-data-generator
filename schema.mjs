export default {
  output:'./output.json',
  total:20,
  structure:{
    firstName:'firstName',
    lastName:'lastName',
    grade:'randomItem,7,11',
    section:'Chery',
    marks:{
      return:'single',
      structure:{
        physics:'randomItem,A+,A,A-,B+,B,B-,C',
        math:'randomItem,A+,A,A-,B+,B,B-,C',
        chemistry:'randomItem,A+,A,A-,B+,B,B-,C',
        geography:'randomItem,A+,A,A-,B+,B,B-,C',
      }
    },
    major:'randomItemN,2,physics,chemistry,math,geography'
  }
}