"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const rockerSwitch = new RockerSwitch("#temperature-scale");
});
class RockerSwitch {
    /**
     * @param buttonEl CSS selector of the button to use
     */
    constructor(buttonEl) {
        var _a;
        this._temperatureScale = "f";
        this.button = document.querySelector(buttonEl);
        (_a = this.button) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.temperatureScaleToggle.bind(this));
    }
    /** Selected temperature scale */
    get temperatureScale() {
        return this._temperatureScale;
    }
    set temperatureScale(value) {
        var _a;
        this._temperatureScale = value;
        (_a = this.button) === null || _a === void 0 ? void 0 : _a.setAttribute("aria-labelledby", this._temperatureScale);
    }
    /** Set the temperature scale to °C or °F. */
    temperatureScaleToggle() {
        this.temperatureScale = this.temperatureScale === "c" ? "f" : "c";
    }
}