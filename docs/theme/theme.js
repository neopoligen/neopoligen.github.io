function toggle_folder_menu_status(event) {
  console.log("asdf")
  let ds = event.target.dataset
  const child_menu_items = document.getElementById(`folder_menu_children_${ds.page_id}`)
  if (ds.status == "open") {
    event.target.classList.remove("folder_menu_opened")
    event.target.classList.add("folder_menu_closed")
    child_menu_items.classList.remove("folder_menu_children_open")
    child_menu_items.classList.add("folder_menu_children_closed")
    ds.status = "closed"
  } else if (ds.status == "closed") {
    event.target.classList.add("folder_menu_opened")
    event.target.classList.remove("folder_menu_closed")
    child_menu_items.classList.remove("folder_menu_children_closed")
    child_menu_items.classList.add("folder_menu_children_open")
    ds.status = "open"
  } 
}

function add_folder_menu_button_listeners() {
  console.log("---")
  const buttons = document.getElementsByClassName("folder_menu_button")
  for (let button of buttons) {
  console.log("a")
    button.addEventListener("click", toggle_folder_menu_status)
  }
}



document.addEventListener("DOMContentLoaded", () => {
  console.log("Content loaded")
  add_folder_menu_button_listeners() 
})
