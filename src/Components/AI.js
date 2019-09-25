function AI(i, j) {
    var board = i;

    if (j === 1) {
        if (board[4] === 'X') {
            return 0;
        }
        else {
            return 4;
        }
    }

    if (j > 1) {

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (board[a] === 'O' && board[b] === 'O' && board[c] === null) {
                return c;
            }

            if (board[a] === 'O' && board[c] === 'O' && board[b] === null) {
                return b;
            }

            if (board[b] === 'O' && board[c] === 'O' && board[a] === null) {
                return a;
            }
        }

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (board[a] === 'X' && board[b] === 'X' && board[c] === null) {
                return c;
            }

            if (board[a] === 'X' && board[c] === 'X' && board[b] === null) {
                return b;
            }

            if (board[b] === 'X' && board[c] === 'X' && board[a] === null) {
                return a;
            }
        }

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (board[a] === 'O' && board[b] === null && board[c] === null) {
                return c;
            }

            if (board[b] === 'O' && board[c] === null && board[a] === null) {
                return a;
            }

            if (board[c] === 'O' && board[b] === null && board[a] === null) {
                return b;
            }
        }

        for (let i = 0; i < 8; i++) {
            if (board[i] === null) {
                return i;
            }
        }

    }

    return 'X';

}

export default AI