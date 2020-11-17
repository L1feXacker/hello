function randomColor(e) {
  let eye = e.currentTarget;
  let color = Math.floor(Math.random() * 16777215);
  let css = `color: #${color.toString(16)}; background: #${(
    ~color & 0xffffff
  ).toString(16)}`;
  eye.style = css;
}
