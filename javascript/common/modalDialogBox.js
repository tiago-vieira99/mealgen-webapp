function modalBox(action) {

    if ($('#myModal.modal').length > 0) {
        $('#myModal.modal').replaceWith(setModalBoxInfo(action));
    }

    $('body').append(setModalBoxInfo(action));

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeModal")[0];

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

function closeModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function log() {
    console.log("helloooo");
    var file = document.getElementById("imginput").files[0];
    var reader = new FileReader();
    
    reader.onload = function() {
        console.log(reader.result);
    };
    
    reader.readAsDataURL(file);
}

function previewFile() {
    const preview = document.getElementById('imgpreview');
    const file = document.getElementById('imginput').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }

function setModalBoxInfo(action) {
    switch (action) {
        case NEW_MEAL_ACTION:
            console.log("new meal action switch!");
            var html = "<div id='myModal' class='modal'> <!-- Modal content --> <div class='modal-content'> <div class='modal-header'> <span class='closeModal'>&times;</span> <h2 style='font-size: 99%; margin: 15px 0px; width: 80%'><b>ADD NEW MEAL</b></h2> </div> <div class='modal-body'> <form onsubmit='return true' action='' method='post' class='u-clearfix u-form-spacing-10 u-form-vertical u-inner-form' source='email' name='myform' style='padding: 10px;'> <div class='u-form-group u-form-name'> <label for='name-8685' class='u-label' style='color: white;'><b>Title</b></label> <input type='text' placeholder='Enter meal title' id='name-8685' name='meal_title' class='u-border-1 u-border-grey-30 u-custom-font u-font-ubuntu u-input u-input-rectangle u-white' required='true'> </div> <div class='u-form-group'> <label for='name-8685' class='u-label' style='color: white;'><b>Ingredients</b></label> <input type='text' placeholder='Enter the list of ingredients (separated by ,)' id='name-8685' name='ingredients_list' class='u-border-1 u-border-grey-30 u-custom-font u-font-ubuntu u-input u-input-rectangle u-white' required='true'> </div> <div class='u-form-group'> <label for='name-8685' class='u-label' style='color: white;'><b>Upload Image</b></label> <input id='imginput' type='file' accept='image/*' name='Image' class='u-border-1 u-border-grey-30 u-custom-font u-font-ubuntu u-input u-input-rectangle u-white'></div> <div class='u-form-group'> <label for='name-8685' class='u-label' style='color: white;'><b>Description</b></label> <input type='text' placeholder='Add some description (optional)' id='name-8685' name='description_text' class='u-border-1 u-border-grey-30 u-custom-font u-font-ubuntu u-input u-input-rectangle u-white'> </div> <div class='u-align-center u-form-group u-form-submit'> <input type='submit' value='Submit' class='u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-font u-font-ubuntu u-palette-1-dark-1 u-radius-50 u-text-body-alt-color u-btn-1'> </div> </form> </div> </div> </div>";
            break;
        case DEL_MEAL_ACTION:
            console.log("del meal action switch!");
            var html = "<div id='myModal' class='modal'> <!-- Modal content --> <div class='modal-content'> <div class='modal-header'> <span class='closeModal'>&times;</span> <h2 style='font-size: 99%; margin: 15px 0px; width: 80%'><b>ARE YOU SURE?</b></h2> </div> <div class='modal-body'> <a onclick='log()' class='u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-font u-font-ubuntu u-palette-1-dark-1 u-radius-50 u-text-body-alt-color u-btn-1'>Yes</a> <a onclick='closeModal()' class='u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-font u-font-ubuntu u-palette-1-dark-1 u-radius-50 u-text-body-alt-color u-btn-1'>No</a> </div> </div> </div>";
            break;
        case UPDATE_MEAL_ACTION:
            console.log("del meal action switch!");
            var html = "<div id='myModal' class='modal'> <!-- Modal content --> <div class='modal-content'> <div class='modal-header'> <span class='closeModal'>&times;</span> <h2 style='font-size: 99%; margin: 15px 0px; width: 80%'><b>UPDATE MEAL</b></h2> </div> <div class='modal-body'> <form onsubmit='log()' action='' method='post' class='u-clearfix u-form-spacing-10 u-form-vertical u-inner-form' source='email' name='myform' style='padding: 10px;'> <div class='u-form-group u-form-name'> <label for='name-8685' class='u-label' style='color: white;'><b>Title</b></label> <input type='text' value='this meal title' id='name-8685' name='meal_title' class='u-border-1 u-border-grey-30 u-custom-font u-font-ubuntu u-input u-input-rectangle u-white' required='true'> </div> <div class='u-form-group'> <label for='name-8685' class='u-label' style='color: white;'><b>Ingredients</b></label> <input type='text' value='this list of ingredients (separated by ,)' id='name-8685' name='ingredients_list' class='u-border-1 u-border-grey-30 u-custom-font u-font-ubuntu u-input u-input-rectangle u-white' > </div> <div class='u-form-group'> <label for='name-8685' class='u-label' style='color: white;'><b>Upload Image</b></label> <input id='imginput' type='file' accept='image/*' name='Image' class='u-border-1 u-border-grey-30 u-custom-font u-font-ubuntu u-input u-input-rectangle u-white'></div> <div class='u-form-group'> <label for='name-8685' class='u-label' style='color: white;'><b>Description</b></label> <input type='text' value='description (optional)' id='name-8685' name='description_text' class='u-border-1 u-border-grey-30 u-custom-font u-font-ubuntu u-input u-input-rectangle u-white'> </div> <div class='u-align-center u-form-group u-form-submit'> <input type='submit' value='Submit' class='u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-font u-font-ubuntu u-palette-1-dark-1 u-radius-50 u-text-body-alt-color u-btn-1'> </div> </form> </div> </div> </div>";
            break;
        default:
        // code block
    }
    return $.parseHTML(html);
}
