import { a, div, header, img, nav } from '@sonnetjs/html';
import { Logo } from '../assets';

const Header = () => {
  return header()
    .className('border-b py-4')
    .children(
      div()
        .className(
          'container flex items-center gap-x-3 sm:gap-x-6 w-full justify-between',
        )
        .children(
          div().children(a().href('/').children(Logo()).get()).get(),
          nav()
            .className('flex-1 flex items-center text-sm font-medium')
            .children(
              a()
                .innerText('Docs')
                .target('blank')
                .href(
                  'https://github.com/sonnetjs/sonnet/tree/main/packages/sonnet-core',
                )
                .get(),
            )
            .get(),
          div()
            .children(
              a()
                .href('https://github.com/sonnetjs/sonnet')
                .target('blank')
                .children(
                  img()
                    .src('https://img.shields.io/github/stars/sonnetjs/sonnet')
                    .get(),
                )
                .get(),
            )
            .get(),
        )
        .get(),
    )
    .get();
};

export default Header;
