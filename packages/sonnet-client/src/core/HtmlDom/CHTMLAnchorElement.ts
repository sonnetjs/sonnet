import CHTMLElement from './CHTMLElement';

class CHTMLAnchorElement extends CHTMLElement<HTMLAnchorElement> {
  public el: HTMLAnchorElement;

  constructor() {
    super();
    const html = document.createElement('a');
    this.el = html;
  }
  
  public download(value: string) {
    if (this.el) {
      this.el.download = value;
    }
    return this;
  }

  public hash(value: string) {
    if (this.el) {
      this.el.hash = value;
    }
    return this;
  }

  public host(value: string) {
    if (this.el) {
      this.el.host = value;
    }
    return this;
  }

  public hostname(value: string) {
    if (this.el) {
      this.el.hostname = value;
    }
    return this;
  }

  public href(value: string) {
    if (this.el) {
      this.el.href = value;
    }
    return this;
  }

  public hreflang(value: string) {
    if (this.el) {
      this.el.hreflang = value;
    }
    return this;
  }

  public password(value: string) {
    if (this.el) {
      this.el.password = value;
    }
    return this;
  }

  public pathname(value: string) {
    if (this.el) {
      this.el.pathname = value;
    }
    return this;
  }

  public ping(value: string) {
    if (this.el) {
      this.el.ping = value;
    }
    return this;
  }

  public port(value: string) {
    if (this.el) {
      this.el.port = value;
    }
    return this;
  }

  public protocol(value: string) {
    if (this.el) {
      this.el.protocol = value;
    }
    return this;
  }

  public referrerPolicy(value: string) {
    if (this.el) {
      this.el.referrerPolicy = value;
    }
    return this;
  }

  public rel(value: string) {
    if (this.el) {
      this.el.rel = value;
    }
    return this;
  }

  public search(value: string) {
    if (this.el) {
      this.el.search = value;
    }
    return this;
  }

  public target(value: string) {
    if (this.el) {
      this.el.target = value;
    }
    return this;
  } 

  public text(value: string) {
    if (this.el) {
      this.el.text = value;
    }
    return this;
  }

  public type(value: string) {
    if (this.el) {
      this.el.type = value;
    }
    return this;
  }

  public username(value: string) {
    if (this.el) {
      this.el.username = value;
    }
    return this;
  }

}

export function a() {
  return new CHTMLAnchorElement();
}
