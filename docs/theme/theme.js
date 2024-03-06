function add_collection_menu_button_listeners() {
  const buttons = document.getElementsByClassName("collection_menu_button")
  for (let button of buttons) {
    button.addEventListener("click", toggle_collection_menu_item)
  }
}

function add_original_content_toggle_listeners() {
  const buttons = document.getElementsByClassName("original_content_toggle")
  for (let button of buttons) {
    button.addEventListener("click", toggle_original_content)
  }
}

function toggle_collection_menu_item(event) {
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

function toggle_original_content(event) {
  let inner_el = document.getElementById(`inner_original_content_toggle`)
  let inner_ds = inner_el.dataset
  let outer_el = document.getElementById(`outer_original_content_toggle`)
  let outer_ds = outer_el.dataset
  let display = document.getElementById(`original_content_display`)
  if (event.target.dataset.status == "hidden") {
    display.classList.remove("hidden")
    inner_ds.status = "visible"
    outer_ds.status = "visible"
    inner_el.innerHTML = "Hide original content file"
    outer_el.innerHTML = "Hide original content file"
  } else {
    display.classList.add("hidden")
    inner_ds.status = "hidden"
    outer_ds.status = "hidden"
    inner_el.innerHTML = "Show original content file"
    outer_el.innerHTML = "Show original content file"
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Content loaded")
  add_collection_menu_button_listeners()
  add_original_content_toggle_listeners()
})
