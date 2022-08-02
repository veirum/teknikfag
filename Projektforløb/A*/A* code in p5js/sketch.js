let cols = 10;
let rows = 10;

let grid = new Array(cols);

let openSet = [];
let closedSet = [];

let start;
let end;

function setup() {
  createCanvas(800, 800);
  background(0);

  //Making a grid
  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }

  //Populating the grid
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      grid[i][j] = new Node(i, j);
    }
  }
  console.log(grid);

  let start = grid[0][0];
  let end = grid[cols - 1][rows - 1];

  openSet.push(start);
  print(openSet);
}

function draw() {
  //Drawing the grid
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      grid[i][j].show(color(255));
    }
  }

  if (openSet > 0) {
    let best = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[best].f) {
        best = i;
      }
    }
  } else {
    //stop
  }

  for (let i = 0; i < openSet.length; i++) {
    openSet[i].show(color(0, 255, 0));
  }

  for (let i = 0; i < closedSet.length; i++) {
    closedSet[i].show(color(255, 0, 0));
  }
}
