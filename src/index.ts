function parse() {
	const el = document.querySelector(".study__comments");
	if (!el) return;
	document.removeEventListener("DOMNodeInserted", parse);
	el.addEventListener("DOMNodeInserted", () => {
		const text = el.querySelector(".text")?.innerHTML;
		if (!text?.length) return;
		window.speechSynthesis.cancel();
		const msg = new SpeechSynthesisUtterance(text);
		msg.lang = "en";
		msg.rate = 1.5;
		msg.voice = window.speechSynthesis
			.getVoices()
			.find(({ name }) => name.includes("Google US English"));
		window.speechSynthesis.speak(msg);
	});
}
document.addEventListener("DOMNodeInserted", parse);
