const getPunchlineButton = (string) => {
  const domString = `<button type="button" class="btn btn-dark joke-btn" id="get-setup-joke-btn">${string}</button>`;
  $('#joke-btn-container').html(domString);
};

export default getPunchlineButton;
