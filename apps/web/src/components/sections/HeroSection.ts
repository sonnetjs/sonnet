import { a, div, section } from '@sonnetjs/core';
import { TickIcon, CopyIcon, SquarePatterns } from '../assets';

const NPX_COMMAND = 'npx create-sonnet-app';

class HeroSection {
  public script() {
    const copyEl = document.getElementById('copy') as HTMLDivElement;
    copyEl.onclick = () => {
      navigator.clipboard.writeText(`${NPX_COMMAND}@latest`);
      copyEl.innerHTML = TickIcon();
      setTimeout(() => {
        copyEl.innerHTML = CopyIcon();
      }, 3000);
    };
  }

  public get() {
    return section()
      .className('relative overflow-hidden')
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
                'text-neutral-600 text-sm sm:py-4 md:py-8 sm:text-base md:text-lg lg:text-xl text-center',
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
                div().className('').innerText(`~ ${NPX_COMMAND}`).get(),
                div()
                  .id('copy')
                  .className('w-4 h-4 cursor-pointer')
                  .innerHtml(CopyIcon())
                  .get(),
              )
              .get(),
          )
          .get(),
        div().innerHtml(SquarePatterns()).get(),
      )
      .get();
  }
}

export default HeroSection;
