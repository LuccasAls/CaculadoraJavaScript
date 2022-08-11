const calculator = document.querySelector('.container')
const keys = document.querySelector('.containerValue')


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target // elemento html
        const action = key.dataset.action // pegando os elementos que tem data action, se não tiver retorna undefined
       
    if (!action) { // se não tiver retorna "!" (falso)
       // console.log('number key!')
    }

    if (action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
       // console.log('operator key!')
      }

    if( action === 'decimal'){
       // console.log('Decimal key')
    }
    if( action === 'clear'){
       // console.log('Clear key')
    }
    if (action === 'equal'){
        //console.log('Equal key')
    }
 }
})

const numberPainel = document.querySelector('#filedNumber')

keys.addEventListener('click', e => {
    if( e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent // retorna o text buttom
        const painelNum = numberPainel.value // retorna o text do input


        if (!action) {
            if (painelNum === '0') {
                numberPainel.value = keyContent
            } else {
                numberPainel.value = painelNum + keyContent
            }
        }

        if (action === 'decimal') {
            numberPainel.value = painelNum + '.' ;
            
        }
        
    }
})















