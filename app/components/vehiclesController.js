import VehicleService from "./vehiclesService.js"

let _vhService = new VehicleService()

function drawVehicles() {
  let vehicles = _vhService.Vehicles
  let template = ''
  vehicles.forEach(vehicle => {
    template += vehicle.Template
  })
  document.getElementById('people').innerHTML = template
  document.getElementById('buttons').innerHTML = `
  <div class="d-flex justify-content-between"><div>
  <button class="btn btn-light text-dark" onclick="window.app.controllers.vhController.getVehicles('${_vhService.Previous}')" ${_vhService.Previous ? '' : 'disabled'}>Previous</button>
  <button class="btn btn-light text-dark" onclick="window.app.controllers.vhController.getVehicles('${_vhService.Next}')" ${_vhService.Next ? '' : 'disabled'}>Next</button>
  </div>
  <h4 class="text-light">Vehicles</h4>
  </div>
  `
}

function drawVehicle() {
  document.getElementById('person').innerHTML = _vhService.CurrentVehicle.DetailTemplate
}

export default class VehiclesController {
  constructor() {
    _vhService.addSubscriber('vehicles', drawVehicles)
    _vhService.addSubscriber('currentVehicle', drawVehicle)
  }

  getVehicles(url) {
    _vhService.getApiVehicles(url)
  }

  getVehicle(url) {
    _vhService.getApiVehicle(url)
  }

}