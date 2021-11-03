let timer;
let currentPerson;

function addPerson() {
    const name = document.getElementById('nameTextField')
    if (name.value === '') {
        return
    }
    const list = document.getElementById('listArea')
    const newPerson = document.createElement('li')
    newPerson.textContent = name.value

    const time = document.createElement('span')
    time.textContent = ' 00:00:00'
    time.id = name.value + '-times'
    time.className = 'time'
    newPerson.appendChild(time)

    const btn = document.createElement('button')
    btn.textContent = 'Start!'
    btn.className = 'startStopBtn'
    btn.onclick = function () {
        startStopTime(name.value)
    }
    newPerson.appendChild(btn)
    list.appendChild(newPerson)

    name.value = ''

    addDeleteEventListeners()
    startStopTime(newPerson.textContent.slice(0, -6))
}

function startStopTime(person) {
    if(timer == null) {
        const personName = person.slice(0, -9)
        const allPersons = document.getElementsByTagName('li')
        let onePerson
        for (onePerson of allPersons) {
            if (personName === onePerson.textContent.slice(0, -15)) {
                const btn = onePerson.getElementsByClassName('startStopBtn')
                btn[0].textContent = 'Stopp!'
                currentPerson = personName

                timer = setInterval(function () {myTimer(onePerson, personName)}, 1000)
            }
        }
    } else {
        const allPersons = document.getElementsByTagName('li')
        let onePerson
        for (onePerson of allPersons) {
            const btn = onePerson.getElementsByClassName('startStopBtn')
            btn[0].textContent = 'Start!'
        }
        clearInterval(timer)
        timer = null

        if (currentPerson !== person.slice(0, -9)) {
            startStopTime(person)
        }
    }
}

function myTimer (onePerson, personName) {
    const time = document.getElementById(personName + '-times')
    const times = time.textContent.trim().split(':')
    ++times[0]
    --times[0]
    ++times[1]
    --times[1]
    if (++times[2] >= 60) {
        times[2] = '00'
        if (++times[1] >= 60) {
            times[1] = '00'
            times[0]++
        }
    }
    time.textContent = ' ' +
        (times[0] < 10 ? '0' + times[0] : times[0])  + ':' +
        (times[1] < 10 ? '0' + times[1] : times[1]) + ':' +
        (times[2] < 10 ? '0' + times[2] : times[2])
}

function addDeleteEventListeners() {
    const allBtn = document.getElementsByClassName('startStopBtn')
    const allPersons = document.getElementsByTagName('li')
    let deleteBtn
    let i = 0
    for (deleteBtn of allBtn) {
        const personName = allPersons[i++].textContent.slice(0, -6)
        deleteBtn.onclick = function () {
            startStopTime(personName)
        }
    }
}

const addBtn = document.getElementById('saveBtn')
addBtn.onclick = function () {
    addPerson()
}

const textField = document.getElementById('nameTextField')
textField.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addPerson()
    }
})