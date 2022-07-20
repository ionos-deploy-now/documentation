export function loadScript({
  src,
  options,
  onLoaded,
}) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => onLoaded();
  script.async = options?.async || false;
  if (options?.body) {
    document.body.append(script);
  } else {
    document.head.append(script);
  }
}
