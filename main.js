

let noteListRootElement = document.querySelector('.noteList');
let notes = [];

document.querySelector('#deleteAllNotes').addEventListener('click', ()=> {
  document.querySelectorAll('.note').forEach(note=> {
    note.remove();
  })
})

document.querySelector('#createNoteButton').addEventListener('click', ()=> {
  let createNoteTitle = document.querySelector('#createNoteTitle');
  let createNoteContent = document.querySelector('#createNoteContent');
  let note = {
    title: createNoteTitle.value,
    content: createNoteContent.value
  }

  if(createNoteTitle.value == "" ||  createNoteContent.value == ""){
    alert("The Note field is empty")
  } else {
    renderNoteToList(note);
  }
 
})

function renderNoteToList(note){

  let uniqueID = 'note' + Math.floor(Math.random() * 1000);

  let noteDiv = document.createElement('div');
  noteDiv.classList.add('note', uniqueID);

  let noteTitle = document.createElement('h4');
  let noteContent = document.createElement('p');
  let noteDeleteButton = document.createElement('button');

  noteTitle.innerText = note.title;
  noteContent.innerText = note.content;
  noteDeleteButton.innerText = 'Delete Note';

  noteDeleteButton.addEventListener('click', ()=> {
    removeElementFromNotesList(uniqueID);
  })

  noteDiv.appendChild(noteTitle);
  noteDiv.appendChild(noteContent);
  noteDiv.appendChild(noteDeleteButton);

  noteListRootElement.appendChild(noteDiv)

  document.querySelector('#createNoteTitle').value = "";
  document.querySelector('#createNoteContent').value = "";

  addNoteToLocalStorage(note, uniqueID);
 
}

function addNoteToLocalStorage(note, uniqueID){
  note = {...note, uniqueID}

  notes.push(note)

  localStorage.setItem('notes', JSON.stringify(notes))
}

function removeElementFromNotesList(id) {
  document.querySelector('.' + id).remove();
}