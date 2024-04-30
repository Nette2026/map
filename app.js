/**
 * 
 * Map Object
 * 
 * Holds key-value pairs and remembers the original insertion order of the keys
 * 
 * Four primary properties
 * 
 * .set(key, value)
 * .get(key)
 * .size
 * .delete(key)
 * 
 * 
 */

const users = new Map()

// .set(key, value) => sets the value for the passed key in the object

users.set('user1', 
    {id: 1,
    username: 'bluesatch',
    email: 'satchwerk@gmail.com',
    password: '12345',
    following: 124,
    followers: 5000
})

users.set('user2', 
    {id: 2,
    username: 'pureDiamond',
    email: 'purediamond26@gmail.com',
    password: 'Di@mondP',
    following: 90,
    followers: 50000
})

users.set('user3', 
    {id: 3,
    username: 'R@r3Di@mond37',
    email: 'rarediamondNette@gmail.com',
    password: 'R@r3diamond1',
    following: 75,
    followers: 50000
})

users.set('user4', 
    {id: 4,
    username: 'N0Lov3',
    email: 'sh0wn0L0v3@gmail.com',
    password: 'N0Love23',
    following: 66,
    followers: 9000
})

//console.log(users)

//.get(key) => returns the value associated to the passed key or undefined

//console.log(users.get('user2'))

//.size => returns the number of key/value pairs
// console.log(users.size)

//.delete(key) => returns true if an elemment in the Map object existed and has been remove, or false if the element does not exist

users.set('user5', 
    {id: 5,
    username: 'everyDi@mond',
    email: 'diamond58@gmail.com',
    password: 'diamond1',
    following: 35,
    followers: 30
})

console.log(users)

console.log(users.delete(user5))

// console.log(users.delete(user6))

const user = document.getElementById('following')
user.innerText = user.get('user3').username 

const user = document.getElementById('follower')
user.innerText = user.get('user3').following

const user = document.getElementById('user')
user.innerText = user.get('user3').followers

// loop through map

// for (const [key, value] of users) {
//     for (const prop in value) {
//         console.log('key: ${key}, value: { ${prop}: ${value[prop]}}')
//     }
// }

for (const [key, value] of users) {
    for (const prop in value) {
        if (prop == 'email') {
            console.log(' ${key}, email: ${value[prop]}')
        }
    }
}

// forEach(callback function)

// user.forEach((key, value)=> {
    // console.log(`${key.username}, email: ${key.email}`)
// })

// .keys() => returns a new iterator object that contains the keys

let keys = users,keys()
console.log(keys)

// .value()=> returns a new iterator object that contains the values

let values = users.values()
console.log(value)

// .has() returns a boolean indicating whether a value has been associated withthe passed in key

console.log (users.has('user1'))
console.log(users.has('user5'))

// .clear() => remove all key-value pairs from map object user.clear()

// take a 2D array and turn it into a map

const playerScores = {
    ['basicallyAI', 3458],
    ['Semi', 2290],
    ['AndrestheGiant01', 4322]
}

const playerMap = new Map(playerScores)

console.log(playerMap)

//use Array.from()
const playerMap2 = Array.from(playerScores)
console.log(playMap2)
