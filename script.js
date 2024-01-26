const allDivs = document.querySelectorAll('.plays')
const resetButton = document.getElementById('Reset')
const XscoreBoard = document.getElementById('xscoreBoard')
const OscoreBoard = document.getElementById('oscoreBoard')
const resultPlace = document.querySelector('footer')
let round = 0

let gameboard =
    ['', '', '',
        '', '', '',
        '', '', '']
let whoseMove = 0
let Xscore = 0
let Oscore = 0



allDivs.forEach((e) => {



    const whosWinner = function checkWinner() {


        if (
            ((gameboard[0] === "x") && (gameboard[1] === "x") && (gameboard[2] === "x")) ||
            ((gameboard[3] === "x") && (gameboard[4] === "x") && (gameboard[5] === "x")) ||
            ((gameboard[6] === "x") && (gameboard[7] === "x") && (gameboard[8] === "x")) ||

            ((gameboard[0] === "x") && (gameboard[3] === "x") && (gameboard[6] === "x")) ||
            ((gameboard[1] === "x") && (gameboard[4] === "x") && (gameboard[7] === "x")) ||
            ((gameboard[2] === "x") && (gameboard[5] === "x") && (gameboard[8] === "x")) ||

            ((gameboard[0] === "x") && (gameboard[4] === "x") && (gameboard[8] === "x")) ||
            ((gameboard[2] === "x") && (gameboard[4] === "x") && (gameboard[6] === "x"))
        ) {

            XscoreBoard.textContent = Xscore
            return `x wins`


        } else if (
            ((gameboard[0] === "0") && (gameboard[1] === "0") && (gameboard[2] === "0")) ||
            ((gameboard[3] === "0") && (gameboard[4] === "0") && (gameboard[5] === "0")) ||
            ((gameboard[6] === "0") && (gameboard[7] === "0") && (gameboard[8] === "0")) ||


            ((gameboard[0] === "0") && (gameboard[3] === "0") && (gameboard[6] === "0")) ||
            ((gameboard[1] === "0") && (gameboard[4] === "0") && (gameboard[7] === "0")) ||
            ((gameboard[2] === "0") && (gameboard[5] === "0") && (gameboard[8] === "0")) ||

            ((gameboard[0] === "0") && (gameboard[4] === "0") && (gameboard[8] === "0")) ||
            ((gameboard[2] === "0") && (gameboard[4] === "0") && (gameboard[6] === "0"))

        ) {

            OscoreBoard.textContent = Oscore
            return `0 wins`

        }


    }

    e.addEventListener("click", () => {


        let selection = e.id
        console.log(whoseMove)
        if (whoseMove < 9) {
            if (e.textContent === "") {


                if (whosWinner() === undefined) {

                    if (whoseMove % 2 === 0) {
                        gameboard[selection] = "x"
                        whoseMove++

                        e.textContent = "x"
                        if (whoseMove < 9) {
                            if (whosWinner() === undefined) {

                            } else {
                                console.log(whosWinner())
                                Xscore++

                                resultPlace.textContent = whosWinner()
                            }
                        } else {
                            resultPlace.textContent = "It's a tie"
                        }

                    }
                    else if ((whoseMove % 2) === 1) {
                        gameboard[selection] = "0"


                        whoseMove++
                        e.textContent = "0"
                        if (whoseMove < 9) {
                            if (whosWinner() === undefined) {

                            } else {
                                console.log(whosWinner())
                                Oscore++

                                resultPlace.textContent = whosWinner()
                            }
                        } else {
                            resultPlace.textContent = "It's a tie"
                        }

                    } else {
                        return "hello"



                    }

                } else {
                    console.log(whosWinner())
                }
            } else {

                console.log("liya hua h bklol")



            }

        } else {

            resultPlace.textContent = "It's a tie"
        }

    })
});



resetButton.addEventListener("click", () => {
    console.log(allDivs.forEach((e) => {
        e.textContent = ""
        gameboard =
            ['', '', '',
                '', '', '',
                '', '', '']
        whoseMove = 0

        resultPlace.textContent = ""

    }))
})



