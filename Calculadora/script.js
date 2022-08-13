const calculator = document.querySelector('.container')
const keys = document.querySelector('.containerValue')


const display = document.querySelector('input[type="text"]')


  
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.value
    
    if (!action) {
      if (displayedNum == '0') {
        display.value = keyContent 
      } else {
        display.value = displayedNum + keyContent
      }
    }

      if (action === 'add') {
        display.value = displayedNum + '+'
      
        if (displayedNum.substr(-1) === '+') {
          display.value = displayedNum
        }
        
      }
      if (action === 'subtract') {
        display.value = displayedNum + '-'

        if (displayedNum.substr(-1) === '-') {
          display.value = displayedNum
        }
        
      }
      if (action === 'multiply') {
        display.value = displayedNum + '*'
        if (displayedNum.substr(-1) === '*') {
          display.value = displayedNum
        }
        
      }
      if (action === 'divide') {
        display.value = displayedNum + '/'
        if (displayedNum.substr(-1) === '/') {
          display.value = displayedNum
        }
        
      }
      

      if (action === 'decimal') {
        display.value = displayedNum + '.'
        if (displayedNum.includes('.')) {
          display.value = displayedNum
        }
      }
      
      if (action === 'clear') {
        display.value = '0'
      }
      

  
  }
})


const equal = document.querySelector('.equal')

equal.onclick = ()=> {
  display.value = eval(display.value)
}






const del = document.querySelector('.del')

del.onclick = ()=> {
    const displayNum = display.value

    display.value = displayNum.substring(0, displayNum.length -1)

    if (display.value === '' ) {
      display.value = ' 0'
      
     }
    

}
















