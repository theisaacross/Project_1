const button = document.querySelector('button')
const timer = document.querySelector('#timer')
let time = 0
const chosen = []
const finished = []
const arr = [
    {class: 'zero', src: 'AnnoyedEmoji.png'},
    {class: 'zero', src: 'AnnoyedEmoji.png'},
    {class: 'one', src: 'CryingEmoji.jpeg'},
    {class: 'one', src: 'CryingEmoji.jpeg'},
    {class: 'two', src: 'DroolingEmoji.png'},
    {class: 'two', src: 'DroolingEmoji.png'},
    {class: 'three', src: 'DrunkEmoji.png'},
    {class: 'three', src: 'DrunkEmoji.png'},
    {class: 'four' , src: 'ScaredEmoji.png'},
    {class: 'four', src: 'ScaredEmoji.png'},
    {class: 'five', src: 'SmileEmoji.jpeg'},
    {class: 'five', src: 'SmileEmoji.jpeg'},
    {class: 'six', src: 'StarEyes.png'},
    {class: 'six', src: 'StarEyes.png'},
    {class: 'seven', src: 'WinkEmoji.jpeg'},
    {class: 'seven', src: 'WinkEmoji.jpeg'},
]
const game = {
    clock(){
        let timerStart = setInterval(()=>{
            time++
            timer.innerText = `Timer: ${time}s`
            if (finished.length === 16){
                clearInterval(timerStart)
                alert(`It took you ${time} seconds to complete it!`)
                location.reload()
            }
        },1000)
    },
    makeCards(){
        button.style.display = 'none'
        for (let i = 16; i > 0; i--){
            const screen = document.querySelector('#game')
            const ele = document.createElement('div')
            let randNum = Math.floor(Math.random() * i )
            ele.setAttribute('class', arr[randNum].class)
            let randEmoji = arr[randNum].src
            ele.style.backgroundImage = 'url('+ randEmoji+ ')';
            ele.style.display = 'none'
            ele.style.backgroundSize = 'cover';
            ele.style.backgroundPosition = 'center';
            ele.style.border = '1px solid black';
            ele.style.width = '120px';
            ele.style.height = '120px';
            ele.style.margin = '10px 35px 35px 35px';
            ele.addEventListener('click', game.flipCards)
            screen.appendChild(ele)
            arr.splice(randNum,1)
            console.log(randEmoji)
        }
    },
    flipCards(event){
        let cardID = event.target
        chosen.push(cardID) 
        if (chosen.length === 2){
            setTimeout(game.checkForMatch,200)
        }
    },
    checkForMatch(){
        let firstChosen = chosen[0].getAttribute('class')
        let secondChosen = chosen[1].getAttribute('class')
        if (firstChosen === secondChosen){
            // chosen[0].style.backgroundColor = 'green'
            // chosen[1].style.backgroundColor = 'green'
            finished.push(chosen[0],chosen[1])
            console.log(chosen[0])
            console.log(chosen[1])
            chosen.pop()
            chosen.pop()
            console.log('correct')
        }
        if (firstChosen !== secondChosen){
            // chosen[0].style.backgroundColor = 'red'
            // chosen[1].style.backgroundColor = 'red'
            chosen.pop()
            chosen.pop()
            console.log('wrong')
            console.log(chosen[0])
            console.log(chosen[1])
        }
    }
}
button.addEventListener('click',game.makeCards)
button.addEventListener('click', game.clock)
