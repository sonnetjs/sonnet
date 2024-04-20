import { div, footer } from '@sonnetjs/html';

const Footer = () => {
  return footer()
    .className('border-t py-4')
    .children(
      div()
        .innerText(`© ${new Date().getFullYear()} SonnetJS`)
        .className('text-center container text-sm')
        .get(),
    )
    .get();
};

export default Footer;
