import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "textArea", "warning"]
  static values = {
    charLimit: Number,
  }

  connect() {
    this.textAreaTarget.setAttribute("maxlength", this.charLimitValue)
  }

  checkLimit() {
    let currentTextLength = this.textAreaTarget.value.length
    let maxTextThreshold = (this.charLimitValue * 0.9)

    if (currentTextLength == this.charLimitValue) {
      this.warningTarget.innerHTML = `Char limit hit (maximum: ${this.charLimitValue})`
    } else if (currentTextLength >= maxTextThreshold) {
      this.warningTarget.innerHTML = `Warning! Getting close to ${this.charLimitValue} char limit`
    } else {
      this.warningTarget.innerHTML = ''
    }
  }
}