import EventEmitter from 'eventemitter3';

export class PageRPC extends EventEmitter {
  private version: string = import.meta.env.VITE_APP_VERSION;

  constructor(config: {
    host: string;
    id?: string;
    version?: string;
  }) {
    super();
  }
}
