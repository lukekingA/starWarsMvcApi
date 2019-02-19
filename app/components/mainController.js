import StarWarsService from './starWarsService.js'
import StarShipService from './starshipsService.js'
import VehicleService from "./vehiclesService.js"

let _vhService = new VehicleService()
let _swService = new StarWarsService()
let _ssService = new StarShipService()

function drawChoiceButtons() {
  let template = `
<div class="container-fluid">
  <main class="row">
    <div class="col">
      <div class="row bg-light star-bg py-4 shadow-lg">
        <div class="col text-center text-light">
          <h1>STAR WARS NERD DATA</h1>
          <p>All you ever wanted or needed to know about Star Wars</p>
        </div>
      </div>
      <div class="row py-5 bg-light">
        <div class="col">
          <div class="navbar">
            <button class="btn btn-dark text-light" onclick="window.app.controllers.mainControler.getPeople()">People</button>
            <button class="btn btn-dark text-light" onclick="window.app.controllers.mainControler.getShips()">Ships</button>
            <button class="btn btn-dark text-light" onclick="window.app.controllers.mainControler.getVehicles()">Vehicles</button>
          </div>
        </div>
      </div>
      <div class="row py-4 mb-3 bg-dark  shadow-lg">
        <div class="col">
          <div id="buttons">

          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="justify-content center">
            <ul id="people">

            </ul>
            <div id="person" class="mt-2 d-flex justify-content-center"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
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