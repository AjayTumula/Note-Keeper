

let noteListRootElement = document.querySelector('.noteList');

document.querySelector('#deleteAllNotes').addEventListener('click', ()=> {
  document.querySelectorAll('.note').forEach(note=> {
    note.remove();
  })
})

document.querySelector('#createNoteButton').addEventListener('click', ()=> {
  let note = {
    title: document.querySelector('#createNoteTitle').value,
    content: document.querySelector('#createNoteContent').value
  }

  
     renderNoteToList(note);

  
  
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
 
}