import { div } from '@sonnetjs/core';

const Logo = () => {
  return div()
    .className('flex')
    .children(
      div()
        .className('flex pl-1 font-bold text-lg')
        .children(div().innerHtml('Sonnet.').get(), div().innerText('JS').get())
        .get(),
    )
    .get();
};

export default Logo;
