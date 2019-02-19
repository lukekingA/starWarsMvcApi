import StarWarsService from './starWarsService.js'
import StarShipService from './starshipsService.js'
import VehicleService from "./vehiclesService.js"

let _vhService = new VehicleService()
let _swService = new StarWarsService()
let _ssService = new StarShipService()

function drawChoiceButtons() {
  let template = `
<button onclick="window.app.controllers.mainControler.getPeople()">People</button>
<button onclick="window.app.controllers.mainControler.getShips()">Ships</button>
<button onclick="window.app.controllers.mainControler.getVehicles()">Vehicles</button>
 <div id="buttons"></div>
  <div>
    <ul id="people">

    </ul>
    <div id="person"></div>
  </div>`
  document.querySelector('body').innerHTML = template
}

export default class MainController {
  constructor() {
    drawChoiceButtons()
  }
  getPeople() {
    _swService.getAllApiPeople()
  }

  getShips() {
    _ssService.getAllApiShips()
  }

  getVehicles() {
    _vhService.getApiVehicles()
  }
}