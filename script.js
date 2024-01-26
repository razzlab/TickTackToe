const allDivs = document.querySelectorAll('.plays')
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
            Xscore++
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
            Oscore++
            return `0 wins`

        }


    }

    e.addEventListener("click", () => {


        let selection = e.id
        if (whoseMove < 9) {
            if (e.textContent === "") {


                if (whosWinner() === undefined) {

                    if (whoseMove % 2 === 0) {
                        gameboard[selection] = "x"
                        whoseMove++

                        e.textContent = "x"
                        if (whosWinner() === undefined) {

                        } else {
                            console.log(whosWinner())
                            const resultPlace = document.querySelector('footer')
                            resultPlace.textContent = whosWinner()
                        }

                    }
                    else if ((whoseMove % 2) === 1) {
                        gameboard[selection] = "0"


                        whoseMove++
                        e.textContent = "0"
                        if (whosWinner() === undefined) {

                        } else {
                            console.log(whosWinner())
                            const resultPlace = document.querySelector('footer')
                            resultPlace.textContent = whosWinner()
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
            console.log("its a tie")
        }

    })
});


