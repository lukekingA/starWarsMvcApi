export default class StarShips {
  constructor(data) {
    this.name = data.name
    this.cargo_capacity = data.cargo_capacity
    this.crew = data.crew
    this.hyperdrive_rating = data.hyperdrive_rating
    this.cost = data.cost
    this.starship_class = data.starship_class
    this.url = data.url
  }

  get Template() {
    return `<li onclick="window.app.controllers.ssController.getShip('${this.url}')">${this.name}</li>`
  }

  get DetailTemplate() {
    return ` 
    <li>Ship Name: ${this.name}</li>
    <li>Cargo Capacity: ${this.cargo_capacity}</li>
    <li>Crew Capicity: ${this.crew}</li>
    <li>Hyper-drive Rating: ${this.hyperdrive_rating}</li>
    <li>Build cost: ${this.cost} credits</li>
    <li>Starship class: ${this.starship_class}</li>`
  }
}