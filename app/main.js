import MainController from "./components/mainController.js";

import StarWarsController from "./components/starWarsController.js";
import StarShipController from "./components/starshipsController.js";
import VehiclesController from "./components/vehiclesController.js";


class App {
  constructor() {
    this.controllers = {
      mainControler: new MainController(),
      swController: new StarWarsController(),
      ssController: new StarShipController(),
      vhController: new VehiclesController()
    }
  }
}

window.app = new App()