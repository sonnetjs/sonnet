import { a, div, section } from '@sonnetjs/core';
import { TickIcon, CopyIcon } from '../assets';
import { ExampleSection } from '.';

const HeroSection = () => {
  return section()
    .className('relative ')
    .children(
      div()
        .className(
          'container relative z-10 min-h-[calc(100vh-115px)] flex gap-y-6 justify-center items-center flex-col',
        )
        .children(
          div()
            .className(
              'flex gap-2 justify-center bg-white items-center rounded-full border py-1 pl-1 pr-2 hover:border-black cursor-pointer select-none text-sm',
            )
            .children(
              div()
                .className('bg-black text-white rounded-full py-1 px-2')
                .innerText('Sonnet')
                .get(),
              div().innerText('Compose Web with native APIs').get(),
            )
            .get(),
          div()
            .className(
              'text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center max-w-5xl mx-auto font-extrabold',
            )
            .innerText('Connect Your Ideas With Chain')
            .get(),
          div()
            .className(
              'text-neutral-600 text-sm py-8 sm:text-base md:text-lg lg:text-xl text-center',
            )
            .innerText(
              'A framework for building web applications with a focus on simplicity and performance with native feel.',
            )
            .get(),
          div()
            .className('flex gap-4')
            .children(
              a()
                .href(
                  'https://github.com/sonnetjs/sonnet/tree/main/packages/sonnet-core',
                )
                .target('blank')
                .className(
                  'bg-black rounded-md text-sm font-medium text-white hover:bg-black/80 px-5 py-2',
                )
                .innerText('Learn More')
                .get(),
              a()
                .href(
                  'https://github.com/sonnetjs/sonnet/tree/main/examples/basic',
                )
                .target('blank')
                .className(
                  'bg-white rounded-md text-sm font-medium text-black hover:bg-neutral-50 border px-5 py-2',
                )
                .innerText('Examples')
                .get(),
            )
            .get(),
          div()
            .className(
              'flex items-center gap-2 font-mono text-gray-700 rounded',
            )
            .children(
              div().className('').innerText('~ npm i @sonnetjs/core').get(),
              div()
                .className('w-4 h-4 cursor-pointer')
                .innerHtml(CopyIcon())
                .js((el) => {
                  el.onclick = () => {
                    navigator.clipboard.writeText('npm i @sonnetjs/core');
                    el.innerHTML = TickIcon();
                    setTimeout(() => {
                      el.innerHTML = CopyIcon();
                    }, 3000);
                  };
                })
                .get(),
            )
            .get(),
        )
        .get(),
      ExampleSection(),
    )
    .get();
};

export default HeroSection;