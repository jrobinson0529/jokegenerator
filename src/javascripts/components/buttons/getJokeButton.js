const getSetupJokeButton = (string) => {
  const domString = `<button type="button" class="btn btn-dark joke-btn" id="get-joke-btn">${string}</button>`;
  $('#joke-btn-container').html(domString);
};

export default getSetupJokeButton;
