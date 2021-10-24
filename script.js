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

///////////////////////////Ejercicio 10
const createCaja = () => {
    if(!localStorage.getItem('caja')) {
        localStorage.setItem('caja', JSON.stringify({
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
        }))
    }
}

createCaja()

const caja = (article, amount) => {
    const cr = JSON.parse(localStorage.getItem('caja'))
    const totalAmout = amount.reduce((acc, cur) => acc + cur)
    let cambio = (totalAmout - article).toFixed(2)
    const cambioFijo = cambio
    
    for (let coin of Object.keys(cr.coins]) {
        console.log(coin)
        console.log(cr.coins[coin]);
    }

//     if(cambio != 0){
//         if (cambio > 0) {
//             while(cambio > 0){
//                 if(cambio >= 5){
//                     for (let bill of Object.keys(cr.bills)) {
//                         if (cr.bills[bill] != 0) {
//                             const money = parseInt(bill.replace('$',''))
//                             if(money <= cambio) { 
//                                 cambio -= money;
//                                 cr.bills[bill]--;
//                             }
//                         }
//                     }
//                 }else{
//                     for (let coin of Object.keys(cr.coins)) {
//                         if (cr.coins[coin] != 0) {
//                             const money = parseInt(coin.replace('$',''))
//                             if(money <= cambio) { 
//                                 cambio -= money;
//                                 cr.coins[coin]--;
//                             }
//                         }
//                     }
//                 }
//             }
//             return `tu cambio es de ${cambioFijo}`
//         }
//         else return 'cantidad insuficiente, cancelado el pago'
        
//     }
//     else return 'pago exacto, sin cambio'
}

caja(39.99, [20, 10, 10])