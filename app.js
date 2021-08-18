const chosen = []
const game = {
    makeCards(){
        for (let i = 0; i < 16; i++){
            const screen = document.querySelector('#game')
            const ele = document.createElement('div')
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
                {class: 'seven', name: 'seven'}
            ]
            ele.setAttribute('class', arr[i].class)
            ele.style.border = '1px solid black';
            ele.style.width = '120px';
            ele.style.height = '120px';
            ele.style.margin = '10px 35px 35px 35px';
            ele.addEventListener('click', game.flipCards)
            ele.innerText = arr[i].name
            screen.appendChild(ele)
        }
    },
    flipCards(event){
        let cardID = event.target.getAttribute('class')
        chosen.push(cardID) 
        if (chosen.length === 2){
            setTimeout(game.checkForMatch,500)
        }
    },
    checkForMatch(){
        if (chosen[0] === chosen[1]){
            console.log(true)
            chosen.pop()
            chosen.pop()
        }else{
            console.log(false)
            chosen.pop()
            chosen.pop()
        }
    }
}