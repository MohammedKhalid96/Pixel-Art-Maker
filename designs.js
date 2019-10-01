const inputColor = document.getElementById('colorPicker');
const sizePicker = document.getElementById('sizePicker');
const pixelCanvas = document.getElementById('pixelCanvas');

//makeGrid function to create <tr> and <td>
function makeGrid(inputHeight, inputWidth) {
  var grid = '';

  for (let i = 0; i < inputHeight; i++) {
    grid += '<tr>';
    for (let w = 0; w < inputWidth; w++) {
      grid += '<td class="cell"></td>';
    };
    grid += '</tr>';
  };

  //append grid to the table
  pixelCanvas.innerHTML = grid;
}

//call makeGrid and addClickEventToCells functions on submit
sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();

  //get entered height and width values 
  const inputHeight = document.getElementById('inputHeight').value;
  const inputWidth = document.getElementById('inputWidth').value;

  makeGrid(inputHeight, inputWidth);
  addClickEventToCells();
});

//addClickEventToCells function to target clicked cell and give it selected color
function addClickEventToCells() {
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', function (event) {
          let clickedCell = event.target;
          clickedCell.style.backgroundColor = inputColor.value;
      });
  };
}
