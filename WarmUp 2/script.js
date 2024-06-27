const rect = document.querySelector("#box");

const btn = document.querySelector("#throttle");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
rect.addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    let div = document.createElement("div");
    div.classList.add("mydiv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    let img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1718134292837-ce1963ed20ab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
      y: "0",
      ease: Power3,
      duration: 0.4,
    });

    gsap.to(img, {
      y: "100%",
      delay: 0.4,
      ease: Power2,
    });
    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 400)
);
