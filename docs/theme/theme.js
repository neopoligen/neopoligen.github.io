function toggle_collection_menu_item(event) {
  console.log("got click")
  let el = event.target
  let ds = el.dataset
  let li = document.getElementById(`${ds.menu}_${ds.id}`)
   if (ds.status == "closed") {
    li.classList.remove("title_folder_closed")
    li.classList.add("title_folder_opened")
    ds.status = "open"
  } else {
    li.classList.remove("title_folder_active")
    li.classList.remove("title_folder_opened")
    li.classList.add("title_folder_closed")
    ds.status = "closed"
  }
}

function add_collection_menu_button_listeners() {
  const buttons = document.getElementsByClassName("collection_menu_button")
  for (let button of buttons) {
    button.addEventListener("click", toggle_collection_menu_item)
  }
}


document.addEventListener("DOMContentLoaded", () => {
  console.log("Content loaded")
  add_collection_menu_button_listeners() 
})
