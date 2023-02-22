export default function AnimateMes() {
  const mes = document.querySelectorAll(".me");
  for (let i = 0; i < mes.length; i++) {
    const delay = Math.floor(Math.random() * 2000);
    mes[i].style.animationDelay = delay + "ms";
  }
}
