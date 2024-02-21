var backgroundImage = "";
function addPost() {
  var title = document.getElementById("title");
  var discrubtion = document.getElementById("discrubtion");
  var posts = document.getElementById("posts");

  if (title.value.trim() && discrubtion.value.trim()) {
    posts.innerHTML += `<div class="card mb-2">
        <div class="card-header">
          @post
        </div>
        <div style="background-image: url(${backgroundImage})" class="card-body">
       
        <blockquote class="blockquote mb-2">
          <p>${title.value}</p>
          <footer class="blockquote-footer">${discrubtion.value}</footer>
        </blockquote>
      </div>
      </div>`;
    title.value = "";
    discrubtion.value = "";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter Title and Discrubtion!",
    });
  }
}

function selectImage(src) {
  backgroundImage = src;
  var bgImage = document.getElementsByClassName("bg-image");
  for (i = 0; i < bgImage.length; i++) {
    bgImage[i].className = "bg-image";
  }
  event.target.className += " images-list-selected";
}
