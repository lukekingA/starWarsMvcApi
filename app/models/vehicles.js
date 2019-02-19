export default class Vehicles {
  constructor(data) {
    this.name = data.name
    this.model = data.model
    this.cost = data.cost_in_credits
    this.crew = data.crew
    this.cargo_capacity = data.cargo_capacity
    this.manufacturer = data.manufacturer
    this.url = data.url
  }

  get Template() {
    return `<li class="" onclick="window.app.controllers.vhController.getVehicle('${this.url}')">${this.name}</li>`
  }

  get DetailTemplate() {
    return `
    <ul>
  <li>${this.name}</li>
  <li>Model: ${this.model}</li>
  <li>Cost: ${this.cost} credits</li>
  <li>Holds: ${this.crew} crew</li>
  <li>Holds: ${this.cargo_capacity} cargo</li>
  <li>Manufactured by: ${this.manufacturer}</li>
</ul>`
  }
}