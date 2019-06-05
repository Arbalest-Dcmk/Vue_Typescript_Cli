const chensy = {
    name: 'chensy',
    age: 80
}

const gzp={
    name:'gzp',
    age:18
}

function promiseFunc_name(people) {
    return new Promise((resolve, reject) => {
        people.name == 'chensy' ? resolve(people.age) : reject('people is not chensy')
    })
}

function promiseFunc_age(age) {
    return new Promise((resolve, reject) => {
        age >= 18 ? resolve('chensy is an old woman') : reject('chensy is a child')

    })
}

promiseFunc_name(chensy)
    .then(res => promiseFunc_age(res))
    .then(res => console.log(res))
    .catch(e => console.log(e))
