$(document).ready(function(){

$("a").on('click', function(){
	e.preventDefault()
	if($(this).find("+ section").hasClass('open')){
		$("section ")
	}else {
	$("section").removeClass('open')
	$(this).find("+ section").addClass('open')
}
})
})



















//			var acc = document.getElementsByClassName("accordion");
//			var i;
//
//			for (i = 0; i < acc.length; i++) {
//			acc[i].onclick = function(){
//			this.classList.toggle("active");
//			var panel = this.nextElementSibling;
//			if (panel.style.display === "block") {
//			    panel.style.display = "none";
//			} else {
//			    panel.style.display = "block";
//			}
//			}
//			}
//			}	<div class="clickbox">
//		<button class="accordion">Section One</button>
//			<div class="panel">
//		  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//			</div>
//
//			<button class="accordion">Section Two</button>
//			<div class="panel">
//			  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//			</div>
//
//			<button class="accordion">Section Three</button>
//			<div class="panel">
//			  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//			</div>
//			</div>