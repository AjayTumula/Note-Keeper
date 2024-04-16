

let noteListRootElement = document.querySelector('.noteList');

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
  let noteDiv = document.createElement('div');
  noteDiv.className = 'note'
  let noteTitle = document.createElement('h4');
  let noteContent = document.createElement('p');
  let noteDeleteButton = document.createElement('button');

  noteTitle.innerText = note.title;
  noteContent.innerText = note.content;
  noteDeleteButton.innerText = 'Delete Note';

  noteDiv.appendChild(noteTitle);
  noteDiv.appendChild(noteContent);
  noteDiv.appendChild(noteDeleteButton);

  noteListRootElement.appendChild(noteDiv)

  document.querySelector('#createNoteTitle').value = "";
  document.querySelector('#createNoteContent').value = "";
 
}