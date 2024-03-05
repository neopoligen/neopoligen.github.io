function toggle_nav_menu_item(event) {
  console.log("got click")
  let el = event.target
  let ds = el.dataset
  let li = document.getElementById(`nav_menu_item_${ds.page_id}`)
   if (ds.status == "closed") {
    li.classList.remove("nav_menu_closed_title_folder")
    li.classList.add("nav_menu_opened_title_folder")
    ds.status = "open"
  } else {
    li.classList.remove("nav_menu_active_title_folder")
    li.classList.remove("nav_menu_opened_title_folder")
    li.classList.add("nav_menu_closed_title_folder")
    ds.status = "closed"
  }
}

function add_folder_menu_button_listeners() {
  const buttons = document.getElementsByClassName("nav_menu_button")
  for (let button of buttons) {
    button.addEventListener("click", toggle_nav_menu_item)
  }
}


document.addEventListener("DOMContentLoaded", () => {
  console.log("Content loaded")
  add_folder_menu_button_listeners() 
})
