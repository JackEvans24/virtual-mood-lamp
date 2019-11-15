const remote = require("electron").remote;

$(document)
  .ready(function() {
    $banner = $("#banner-message");
    changeColor($banner, randomColor());
  })
  .on("click", "#close", function() {
    remote.BrowserWindow.getFocusedWindow().close();
  })
  .on("click", "#maximise", function() {
    var window = remote.BrowserWindow.getFocusedWindow();
    if (window.isMaximized()) window.unmaximize();
    else window.maximize();
  })
  .on("click", "#minimise", function() {
    remote.BrowserWindow.getFocusedWindow().minimize();
  })
  .on("click", "#toggle-text", function() {
    $("#title-text").toggle();
    $(".menu").toggleClass("invisible");
  })
  .on("click", "#toggle-border", function() {
    $("#banner-message").toggleClass("border");
  });

function changeColor($this, color) {
  $this.css("background", color);
  setTimeout(function() {
    changeColor($this, randomColor());
  }, 5000);
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
