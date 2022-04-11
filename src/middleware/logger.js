// Uygulama içerisindeki her state değişimi için log mekanizması kuruldu. Bu sayede development sırasında state'in hangi action ile değiştiği ve yeni state'in ne olduğu bilgisi rahatça console'dan takip edilebiliyor.

const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('The action: ', action)
        const returnValue = next(action)
      console.log('The new state: ', store.getState())
    console.groupEnd()
    return returnValue
  }
  
  export default logger;