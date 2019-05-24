function showMore(event) {
  console.log(event);
	// body...
	var dots = document.getElementById("dots");
	var moreText = document.getElementById('readMore');
	var btn = document.getElementById('myBtn');

if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "More"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Less"; 
    moreText.style.display = "inline";
  }

}