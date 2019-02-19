import StarShipService from './starshipsService.js'

let _ssService = new StarShipService()

function drawShips() {
  let ships = _ssService.Ships
  let template = ''
  ships.forEach(ship => {
    template += ship.Template
  })
  document.getElementById('people').innerHTML = template
  document.getElementById('buttons').innerHTML = `
  <div class="d-flex justify-content-between"><div>
  <button class="btn btn-light text-dark" onclick="window.app.controllers.ssController.getShips('${_ssService.Previous}')" ${_ssService.Previous ? '' : 'disabled'}>Previous</button>
  <button class="btn btn-light text-dark" onclick="window.app.controllers.ssController.getShips('${_ssService.Next}')" ${_ssService.Next ? '' : 'disabled'}>Next</button>
  </div>
  <h4 class="text-light">Ships</h4>
  </div>
  `
}

function drawShip() {
  document.getElementById('person').innerHTML = _ssService.CurrentShip.DetailTemplate

}

export default class StarShipController {
  constructor() {
    _ssService.addSubscriber('ships', drawShips)
    _ssService.addSubscriber('activeShip', drawShip)
  }

  getShips(url) {
    _ssService.getAllApiShips(url)
  }

  getShip(url) {
    _ssService.getOneApiShip(url)
  }
}