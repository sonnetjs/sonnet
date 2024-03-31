import CHTMLElement from './CHTMLElement';

export default class CHTMLMediaElement<T> extends CHTMLElement<T> {
  declare public el: HTMLMediaElement;

  constructor() {
    super();
  }

  public autoplay(value: boolean) {
    this.el.autoplay = value;
    return this;
  }

  public controls(value: boolean) {
    this.el.controls = value;
    return this;
  }

  public crossOrigin(value: string) {
    this.el.crossOrigin = value;
    return this;
  }

  public currentTime(value: number) {
    this.el.currentTime = value;
    return this;
  }

  public defaultMuted(value: boolean) {
    this.el.defaultMuted = value;
    return this;
  }

  public defaultPlaybackRate(value: number) {
    this.el.defaultPlaybackRate = value;
    return this;
  }

  public disableRemotePlayback(value: boolean) {
    this.el.disableRemotePlayback = value;
    return this;
  }

  public loop(value: boolean) {
    this.el.loop = value;
    return this;
  }

  public muted(value: boolean) {
    this.el.muted = value;
    return this;
  }

  public playbackRate(value: number) {
    this.el.playbackRate = value;
    return this;
  }

  public preservesPitch(value: boolean) {
    this.el.preservesPitch = value;
    return this;
  }

  public src(value: string) {
    this.el.src = value;
    return this;
  }

  public srcObject(value: MediaStream) {
    this.el.srcObject = value;
    return this;
  }

  public volume(value: number) {
    this.el.volume = value;
    return this;
  }
}
