// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
  'Science'
]

function showSubjects() {
  alert(subjects)
}

function addSubject() {
  let newSubject = 'Maths'
  

  // add a new item to the end of the subjects array
  subjects.push(newSubject)
  
}

function removeSubject() {
  let index = 1

  // remove 1 item at the index position of the subjects array
  subjects.splice(index, 1)
}
