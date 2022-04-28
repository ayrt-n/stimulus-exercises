import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "toggleElement" ]
  static classes = [ "change" ]

  toggleClass() {
    this.toggleElementTargets.forEach (element => element.classList.toggle(this.changeClass))
  }
}
