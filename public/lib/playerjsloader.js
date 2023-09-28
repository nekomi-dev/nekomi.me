/// lib/playerjsloader.js

export default new Promise((res) => {
  const script = document.createElement("script");
  script.onload = () => res();
  script.setAttribute("src", "@/lib/player.js");
  document.head.appendChild(script);
});
