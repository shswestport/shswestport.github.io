jQuery(function($) {
  $("#rss-feeds-home").rss("https://shswestportblog.blogspot.com/feeds/posts/default/-/main/?alt=rss", {
    limit: 3,
    entryTemplate: '<li><h1 class="blog-titles"><a href="{url}">{title}</h1><br/><div class="blog-image">{teaserImage}</div></a><br><span class="blog-text">{shortBody}</span>...</li>'
  })
})


jQuery(function() {
  $("#rss-feeds-parentsassoc").rss("https://shswestportblog.blogspot.com/feeds/posts/default/-/parentsassociation/?alt=rss", {
    limit: 2,
    entryTemplate: '<li><h1 class="blog-titles"><a href="{url}">{title}</h1><br/><div class="blog-image">{teaserImage}</div></a><br><span class="blog-text">{body}</span></li>'
  })
})

jQuery(function($) {
  $("#rss-feeds-main").rss("https://shswestportblog.blogspot.com/feeds/posts/default/-/main/?alt=rss", {
    limit: 10,
    entryTemplate: '<li style="background-color: #cce6ff;padding:20px; margin-bottom:30px; margin-left:-30px; border-radius:30px;"><h1 class="full-blog-titles"><a href="{url}">{title}</h1><br/><div class="blog-image">{teaserImage}</div></a><br><span class="blog-text">{body}</span>...</li>'
  })
})



// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4000);
}

// Used to toggle the menu on small screens when clicking on the menu button
function collapseNav() {
  var x = document.getElementById("minimizedNavbar");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
