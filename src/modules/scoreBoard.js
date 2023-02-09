class scoreBoard {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }

  createGame = async (gameName) => {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify( {
        name: gameName,
			}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
		  },
    });
		const game = await response.json();
		return game;
  }

  getScores = async (id) => {
    const response = await fetch(`${this.url}${id}/scores/`);
    const game = await response.json();
    return game;
	}

	postScore = async (id,name, score) => {
    if (name === '' || score === '') {
      alert('Please enter valid value');
    }
		const response = await fetch(`${this.url}${id}/scores/`, {
			method: 'POST',
			body: JSON.stringify({
				user: name,
				score: score,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
		const game = await response.json();
    return game;
	}
}

export default scoreBoard;