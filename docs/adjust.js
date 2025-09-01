// 初期化
document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".demo-container");
  const id = location.hash.slice(1);

  containers.forEach((element) => {
    element.hidden = id ? element.id !== id : false;
  });

  if (id) {
    const resize = () => {

      document.body.classList.add("single");
      const root = document.querySelector("#root");
      root.style.zoom = innerWidth / 720;
    }
    resize();
    window.addEventListener("resize", resize);
  }
});
