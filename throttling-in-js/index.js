// throttling - when we want to run function after some delay.
const throttleFunction = (func, delay) => {
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // If difference is greater than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;

      // "..." is the spread operator here
      // returning the function with the
      // array of arguments
      return func(...args);
    }
  };
};

document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    let div = document.createElement("div");
    div.classList.add("imageDiv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";
    document.body.appendChild(div);

    let img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    );
    div.appendChild(img);

    gsap.to(img, {
      y: 0,
      ease: Power4,
      duration: 0.8,
    });

    gsap.to(img, {
      y: 100,
      ease: Power4,
      delay: 0.6,
      duration: 0.6,
    });
    setTimeout(function () {
      div.remove(div);
    }, 1500);
  }, 400)
);
