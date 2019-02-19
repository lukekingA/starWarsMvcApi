import Vehicle from "../models/vehicles.js"

let _vehiclesApi = axios.create({
  baseURL: 'https://swapi.co/api/vehicles'
})

let _state = {
  vehicles: [],
  prevNextUrl: {
    nextUrl: '',
    previousUrl: ''
  },
  currentVehicle: {}

}

let _subscribers = {
  vehicles: [],
  prevNextUrl: [],
  currentVehicle: []
}

function setState(prop, val) {
  _state[prop] = val
  _subscribers[prop].forEach(fn => fn())
  console.log(_state)
}

export default class VehicleService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  getApiVehicles(url = '') {
    _vehiclesApi.get(url).then(response => {
      let vehicles = response.data.results.map(vehicle => new Vehicle(vehicle))
      setState('prevNextUrl', {
        nextUrl: response.data.next,
        previousUrl: response.data.previous
      })
      setState('vehicles', vehicles)
    }).catch(err => console.log(err))
  }

  getApiVehicle(url) {
    _vehiclesApi.get(url).then(response => {
      setState('currentVehicle', new Vehicle(response.data))
    }).catch(err => console.log(err))
  }

  get Vehicles() {
    return _state.vehicles.map(vehicle => new Vehicle(vehicle))
  }

  get CurrentVehicle() {
    return new Vehicle(_state.currentVehicle)
  }

  get Next() {
    return _state.prevNextUrl.nextUrl
  }

  get Previous() {
    return _state.prevNextUrl.previousUrl
  }
}