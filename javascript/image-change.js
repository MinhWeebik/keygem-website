var slideIndex = 1;
showImage(slideIndex);

function currentSlide(n)
{
  showImage(slideIndex=n);
}

function showImage(n)
{
  var i;
  var slides = document.getElementsByClassName("display");
  var change = document.getElementsByClassName("change-image");
  for(i=0;i<slides.length;i++)
  {
    slides[i].style.display="none";
  }
  for(i=0;i<change.length;i++)
  {
    change[i].className=change[i].className.replace(" change-image-active","");
  }
  slides[slideIndex-1].style.display = "block"
  change[slideIndex-1].className += " change-image-active";

}

document.getElementById('display1').onclick = () =>
{
  document.getElementById('popup-1').style.display = 'block';
};
document.getElementById('display2').onclick = () =>
{
  document.getElementById('popup-2').style.display = 'block';
};
document.getElementById('display3').onclick = () =>
{
  document.getElementById('popup-3').style.display = 'block';
};
document.getElementById('display4').onclick = () =>
{
  document.getElementById('popup-4').style.display = 'block';
};

document.querySelectorAll('.pop-up-image span').forEach(span =>
  {
    span.onclick = () => {
      document.getElementById('popup-1').style.display = 'none';
      document.getElementById('popup-2').style.display = 'none';
      document.getElementById('popup-3').style.display = 'none';
      document.getElementById('popup-4').style.display = 'none';
    }
  })
