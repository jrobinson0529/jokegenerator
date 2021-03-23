import printLogo from './jokeGenLogo';

const domBuilder = () => {
  const domString = `<div class="joke-container mx-auto" id="joke-container">
                        <div class="logo-container" id="logo-container">${printLogo()}</div>
                        <div class="joke-setup-container joke-text" id="joke-setup-container"></div>
                        <div class="joke-punchline-container joke-text" id="joke-punchline-container"></div>
                        <div class="btn-container joke-btn-container" id="joke-btn-container"></div>
                     </div>
                    `;
  $('#app').html(domString);
};

export default domBuilder;
