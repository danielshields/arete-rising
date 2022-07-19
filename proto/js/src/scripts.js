const hovItems = document.querySelectorAll(".hov");
if (hovItems.length > 0) {
	hovItems.forEach((el) => {
		el.addEventListener("mouseenter", (el) => {
			el.target.classList.add("hovered");
		});
		el.addEventListener("mouseleave", (el) => {
			el.target.classList.remove("hovered");
		});
	});
}

gsap.registerPlugin(SplitText);
var tl = gsap.timeline(),
	mySplitText = new SplitText(".intro-block", { type: "words" }),
	chars = mySplitText.chars;

// console.log(mySplitText);
// gsap.set($quote, { perspective: 400 });

//kill any animations and set text back to its pre-split state
function kill() {
	tl.clear().time(0);
	mySplitText.revert();
}

kill();
mySplitText.split({ type: "words" });
tl.from(mySplitText.words, {
	duration: 1,
	autoAlpha: 0,
	ease: "back",
	stagger: 0.15,
	delay: 0.5,
	// onUpdate: () => {
	// 	console.log(tl.progress());
	// },
	// onComplete: () => {
	// 	console.log("done");
	// },
});

//revert the text back to its pre-split state
// $("#revert").click(function () {
// 	mySplitText.revert();
// });
