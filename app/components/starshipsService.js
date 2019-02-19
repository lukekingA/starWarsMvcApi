import Starship from "../models/starships.js"

let _shipsApi = axios.create({
  baseURL: 'https://swapi.co/api/starships'
})


let _state = {
  ships: [],
  nextPrevShip: {
    nextUrl: '',
    previousUrl: ''
  },
  activeShip: {}
}

let _subscribers = {
  ships: [],
  nextPrevShip: [],
  activeShip: []
}

function setState(prop, val) {
  _state[prop] = val
  _subscribers[prop].forEach(fn => fn())
}

export default class StarShips {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Ships() {
    return _state.ships.map(ship => new Starship(ship))
  }

  get CurrentShip() {
    return new Starship(_state.activeShip)
  }

  getAllApiShips(url = '') {
    _shipsApi.get(url).then(response => {
      let ships = response.data.results.map(ship => {
        return new Starship(ship)
      })
      setState('nextPrevShip', {
        nextUrl: response.data.next,
        previousUrl: response.data.previous
      })
      setState('ships', ships)
    }).catch(err => console.log(err))
  }

  getOneApiShip(url) {
    _shipsApi.get(url).then(response => {
      setState('activeShip', new Starship(response.data))
    }).catch(err => console.log(err))
  }

  get Previous() {
    return _state.nextPrevShip.previousUrl
  }

  get Next() {
    return _state.nextPrevShip.nextUrl
  }
}