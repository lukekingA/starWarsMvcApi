import Person from "../models/poeple.js"


let _peopleApi = axios.create({
  baseURL: 'https://swapi.co/api/people'
})



//Private
let _state = {
  people: [],
  nextPrevPeople: {
    nextUrl: '',
    previousUrl: ''
  },
  activePerson: {}
}

let _subcribers = {
  people: [],
  nextPrevPeople: [],
  activePerson: []
}


function setState(prop, val) {
  _state[prop] = val
  _subcribers[prop].forEach(fn => fn())
}
//Private
export default class StarWarsService {
  addSubscriber(prop, fn) {
    _subcribers[prop].push(fn)
  }

  get People() {
    return _state.people.map(p => new Person(p))
  }
  get ActivePerson() {
    return new Person(_state.activePerson)
  }

  getAllApiPeople(url = '') {
    _peopleApi.get(url).then(response => {
        let people = response.data.results.map(d => new Person(d))
        setState('nextPrevPeople', {
          nextUrl: response.data.next,
          previousUrl: response.data.previous
        })
        setState('people', people)

      })
      .catch(err => console.log(err))
  }

  getOneApiPerson(url) {
    _peopleApi.get(url).then(res => {
      setState('activePerson', new Person(res.data))
    }).catch(err => console.log(err))
  }

  get Previous() {
    return _state.nextPrevPeople.previousUrl
  }

  get Next() {
    return _state.nextPrevPeople.nextUrl
  }
}