var input = document.getElementById('input');
var textarea = document.getElementById('textarea');
var button = document.getElementById('button');
var list = document.getElementById('list');

function getPost() {
  console.log('Hi');
}

button.addEventListener('click', function(){
  console.log(input.value);
  console.log(textarea.value);

  var username = document.createElement('h1');
  var comment = document.createElement('p');
  var newComment = document.createElement('li');
  var removeButton = document.createElement('button');
  var buttonDiv = document.createElement('div');
  var showHide = document.createElement('button');

  showHide.className = 'btn btn-success';
  showHide.textContent = 'Hide';

  removeButton.className = 'btn btn-danger';
  removeButton.textContent = 'Delete';


  username.textContent = input.value;
  comment.textContent = textarea.value;

  newComment.appendChild(username);
  newComment.appendChild(comment);
  list.appendChild(newComment);
  buttonDiv.appendChild(removeButton);
  list.appendChild(buttonDiv);
  buttonDiv.appendChild(showHide);

  removeButton.addEventListener('click', function(){
    newComment.remove();
    buttonDiv.remove();
  })


  showHide.addEventListener('click', function(){
    if(newComment.style.display == 'none') {
      newComment.style.display = 'block';
      showHide.textContent = 'Hide'
    } else {
      showHide.textContent = 'Show';
      newComment.style.display = 'none';

    }
  })
});
