const button = document.querySelector('button')
const timer = document.querySelector('#timer')
let time = 0
const chosen = []
const finished = []
const arr = [
    {class: 'zero', name: '0'},
    {class: 'zero', name: 'zero'},
    {class: 'one', name: '1'},
    {class: 'one', name: 'one'},
    {class: 'two', name: '2'},
    {class: 'two', name: 'two'},
    {class: 'three', name: '3'},
    {class: 'three', name: 'three'},
    {class: 'four' , name: '4'},
    {class: 'four', name: 'four'},
    {class: 'five', name: '5'},
    {class: 'five', name: 'five'},
    {class: 'six', name: '6'},
    {class: 'six', name: 'six'},
    {class: 'seven', name: '7'},
    {class: 'seven', name: 'seven'},
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
            ele.style.border = '1px solid black';
            ele.style.width = '120px';
            ele.style.height = '120px';
            ele.style.margin = '10px 35px 35px 35px';
            ele.addEventListener('click', game.flipCards)
            screen.appendChild(ele)
            ele.innerText = arr[randNum].name
            arr.splice(randNum,1)
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
        if (chosen[0].getAttribute('class') === chosen[1].getAttribute('class')){
            chosen[0].style.backgroundColor = 'green'
            chosen[1].style.backgroundColor = 'green'
            finished.push(chosen[0],chosen[1])
            chosen.pop()
            chosen.pop()
        }
        if (chosen[0].getAttribute('class') !== chosen[1].getAttribute('class')){
            chosen[0].style.backgroundColor = 'red'
            chosen[1].style.backgroundColor = 'red'
            chosen.pop()
            chosen.pop()
        }
    }
}
button.addEventListener('click',game.makeCards)
button.addEventListener('click', game.clock)
