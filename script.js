// const containerElement = document.querySelector(".container");

// const carees = ["Web Developer.", "Freelancer.", "Instructor."];
// let careerIndex = 0;
// let characterIndex = 0;
// updateText();

// function updateText() {
//     containerElement.innerHTML = `<h1>I am a ${carees[careerIndex].slice(0,characterIndex)}</h1>`;
//     characterIndex++;
//     if(characterIndex === carees[careerIndex].length){
//         careerIndex++;
//         characterIndex = 0;
//     }
    
//     setTimeout(updateText, 200);
// }

 // typing js 
 var typed = new Typed('#element', {
    strings: ['Frontend Developer.', 'Backend Developer.'],
    typeSpeed: 90,
    backSpeed: 60,
    loop: true,
});