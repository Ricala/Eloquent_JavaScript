function chessBoard(width, height) {
  let finalTable = '';

  for (let j = 0; j < height; j++) {
    let row = '';

    if (j % 2 == 0) {
      row += ' ';
    }

    for (let i = 0; i < width; i++) {
      if (i % 2 == 0) {
        row += '#';
      } else {
        row += ' ';
      }
    }

    finalTable += row + '\n';
  }
  console.log(finalTable);
}

chessBoard(20, 20);
