///////////////////////////Ejercicio 1
const algorithmics1 = long => {
    let result = "";
    for(let i = 0; i<long; i++) result += '+';
    return result;
  }

//   console.log(algorithmics1(10));

///////////////////////////Ejercicio 2
const algorithmics2 = (long, car1, car2) => {
    let result = "";
    for(let i = 0; i<long; i++){
      i%2 === 1 ? result += car1 : result += car2;
    }
    return result
    
  }
  
//   console.log(algorithmics2(11,'$','&'));

///////////////////////////Ejercicio 3
const algorithmics3 = (height, width) => {
    let result = "";
    for(let i = 0; i<height; i++){
      for(let j = 0; j<width; j++) {result += '*'} 
      if(i != height-1) result += '\n'
    }
    return result
  }
  
//   console.log(algorithmics3(8,7));

///////////////////////////Ejercicio 4
const algorithmics4 = height => {
    let result = "";
    for(let i = 0; i<height; i++){
      for(let j = 0; j<=i; j++) {result += '*'} 
      if(i != height-1) result += '\n'
    }
    return result
  }
  
//   console.log(algorithmics4(5));

///////////////////////////Ejercicio 5
const algorithmics5 = size => {
    const hex = size + (size-1)
    let secondHalf = size-1
    let until = 0
    let result = "";
  
    for(let i = 0; i < hex; i++) { 
      let blank = size - 1;
  
      if(i < size){
        blank -= i
        until = hex + i
      }else{
        blank -= secondHalf
        until-- 
      }
      
      for(let j = 0; j<until; j++){
        if(blank>0) {  result += " "  }
        else {  result += "+"  }
        if(blank != 0) blank--
      }
  
      if(i>=size-1) secondHalf--
      if(i != hex - 1) result += '\n'
    }
    return result
  }

//   console.log(algorithmics5(20));

///////////////////////////Ejercicio 6
const createLocalStorage = () => {
    if(!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify({
            user1: {
                username: 'gustavotremont',
                password: 'tremontgustavo'
            },
            user2: {
                username: 'alvaroarias',
                password: 'ariasalvaro'
            },
            user3: {
                username: 'aliciarodriguez',
                password: 'rodriguezalicia'
            },
            user4: {
                username: 'borjarivera',
                password: 'riveraborja'
            },
            user5: {
                username: 'christianciudad',
                password: 'ciudadchristian'
            },
            user6: {
                username: 'daviniahernandez',
                password: 'hernandezdavinia'
            },
            user7: {
                username: 'fernandoalfaro',
                password: 'alfarofernando'
            },
            user8: {
                username: 'guillermorodriguez',
                password: 'rodriguezguillermo'
            },
            user9: {
                username: 'isaguapo',
                password: 'guapoisa'
            },
            user10: {
                username: 'jalidacdhi',
                password: 'acdhijalid'
            }
        }))
    }
}

createLocalStorage()

const algorithmics6 = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users'))
    let flag = false;
    let template = ''
    for (const user of Object.keys(users)) {
        if (username === users[user].username && password === users[user].password) {
            flag = true
        }
    }
    flag ? template = 'logeado!' : template = 'datos incorrectos :('
    document.getElementById('gallery6').innerHTML = template
}

document.getElementById('ejercicio6').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    algorithmics6(username, password)
})

///////////////////////////Ejercicio 7
const numeritos = [85, 164, 2, 75, 315, 45, 96, 99, 61, 32]

const algorithmics7 = number => {
    let flag = false;
    let template = ''
    let posicision = 0
    for(const numerito of numeritos) {
        if(parseInt(number) === numerito) {
            flag = true
            posicision = numeritos.indexOf(numerito)+1
        }
    }
    flag ? template = `tu numero aparece! esta en la posicion ${posicision}` : template = 'tu numero no esta'
    document.getElementById('gallery7').innerHTML = template
}

document.getElementById('ejercicio7').addEventListener('click', () => {
    const number = document.getElementById('numeros').value;
    algorithmics7(number)
})

///////////////////////////Ejercicio 8
const numerito

const algorithmics8 = n => {
    for(let i = n.length; i > 0; i--){
        for(let j = 0; j < i; j++){
            if((n[j]-n[j+1]) > 0) {
                let temp = n[j]
                n[j] = n[j+1]
                n[j+1] = temp
            }
        }
    }
    console.log(n)
}

// algorithmics8([85, 164, 2, 75, 315, 45, 96, 99, 61, 32, 165, 84, 651, 948, 13, 151, 25, 916, 74, 358])

///////////////////////////Ejercicio 10 incompleto

const cr = {
    totalAmount: 234.27,
    bills: {
        '500€': 0,
        '200€': 0,
        '100€': 0,
        '50€': 1,
        '20€': 4,
        '10€': 8,
        '5€': 2
    },
    coins: {
        '2€': 5,
        '1€': 4,
        '0.50€': 0,
        '0.20€': 0,
        '0.10€': 1,
        '0.05€': 2,
        '0.02€': 3,
        '0.01€': 1
    }
  }
  
  const caja = (article, amount) => {
      if(amount <= cr.totalAmount){
        const totalAmout = amount.reduce((acc, cur) => acc + cur)
        let cambio = (totalAmout - article).toFixed(2)
        const cambioFijo = cambio
        if(cambio != 0){
            if (cambio > 0) {
                while(cambio > 0){
                    if(cambio >= 5){
                        for(let bill of Object.keys(cr.bills)) {
                            if (cr.bills[bill] != 0) {
                                const money = parseFloat(bill.replace('$',''))
                                if(money <= cambio) { 
                                    cambio = (cambio - money).toFixed(2);
                                    cr.bills[bill]--;
                                }
                            }
                        }
                    }else{
                        for (let coin of Object.keys(cr.coins)) {
                            if (cr.coins[coin] != 0) {
                              const money = parseFloat(coin.replace('$','')
                              )
                              if(money <= cambio) {
                                  cambio = (cambio - money).toFixed(2);
                                  cr.coins[coin]--;
                              }
                            }
                        }
                    }
                } return `tu cambio es de ${cambioFijo}`
            } else return 'cantidad insuficiente, cancelado el pago'
        } else return 'pago exacto, sin cambio'
      }else return 'no tenemos suficiente cambio, lo sentimos :('
  }
  
//   caja(39.99, [200])