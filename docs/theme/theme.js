function toggle_menu_folder_visibility(event) {
  console.log(event);
}

function add_menu_folder_button_listeners() {
  const buttons = document.getElementsByClassName("menu_folder_button")
  for (let button of buttons) {
    button.addEventListener("click", toggle_menu_folder_visibility)
  }
}


document.addEventListener("DOMContentLoaded", () => {
  console.log("Content loaded")
  add_menu_folder_button_listeners() 
})
