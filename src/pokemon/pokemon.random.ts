export function getRandomMoves(movesList) {
  const moves = [];

  while (moves.length != 4) {
    let randomNumber = Math.floor(Math.random() * movesList.length);

    if (!moves.includes(moves[randomNumber])) {
      moves.push(movesList[randomNumber]);
    }
  }

  return moves;
}
