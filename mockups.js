let pendingStep = null;
const animationFrame = document.querySelector('iframe.animation');
function showPendingStep() {
  const select = animationFrame?.contentDocument?.getElementById('step');
  if (!select?.options.length || pendingStep === null) return;
  select.value = pendingStep;
  select.dispatchEvent(new animationFrame.contentWindow.Event('change'));
  pendingStep = null;
}
animationFrame?.addEventListener('load', showPendingStep);
document.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click', () => {
  pendingStep = button.dataset.step;
  showPendingStep();
  document.getElementById('funcionamiento').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
}));
