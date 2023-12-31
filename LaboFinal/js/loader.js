import { Spinner } from "spin.js";
import "../node_modules/spin.js/spin.css";

export var opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 0.5, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: "spinner-line-fade-quick", // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: "#7989fb", // CSS color or array of colors
  fadeColor: "transparent", // CSS color or array of colors
  top: "150%", // Top position relative to parent
  left: "50%", // Left position relative to parent
  shadow: "0 0 1px transparent", // Box-shadow for the lines
  zIndex: 1, // The z-index (defaults to 2e9)
  className: "spinner", // The CSS class to assign to the spinner
  position: "absolute", // Element positioning
};
var spinner = new Spinner(opts);

export function showLoader(element) {
  spinner.spin(element);
}

export function stopLoader() {
  spinner.stop();
}
