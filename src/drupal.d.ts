type ClientAuthenticatedListener = (sessionId: string, authData: { uid: number }) => void;
type ClientDisconnectListener = (sessionId: string) => void;

interface DrupalProcess extends NodeJS.Process {
  addListener(event: 'beforeExit', listener: NodeJS.BeforeExitListener): this;
  addListener(event: 'disconnect', listener: NodeJS.DisconnectListener): this;
  addListener(event: 'exit', listener: NodeJS.ExitListener): this;
  addListener(event: 'rejectionHandled', listener: NodeJS.RejectionHandledListener): this;
  addListener(event: 'uncaughtException', listener: NodeJS.UncaughtExceptionListener): this;
  addListener(event: 'unhandledRejection', listener: NodeJS.UnhandledRejectionListener): this;
  addListener(event: 'warning', listener: NodeJS.WarningListener): this;
  addListener(event: 'message', listener: NodeJS.MessageListener): this;
  addListener(event: NodeJS.Signals, listener: NodeJS.SignalsListener): this;
  addListener(event: 'newListener', listener: NodeJS.NewListenerListener): this;
  addListener(event: 'removeListener', listener: NodeJS.RemoveListenerListener): this;
  addListener(event: 'multipleResolves', listener: NodeJS.MultipleResolveListener): this;

  emit(event: 'beforeExit', code: number): boolean;
  emit(event: 'disconnect'): boolean;
  emit(event: 'exit', code: number): boolean;
  emit(event: 'rejectionHandled', promise: Promise<any>): boolean;
  emit(event: 'uncaughtException', error: Error): boolean;
  emit(event: 'unhandledRejection', reason: any, promise: Promise<any>): boolean;
  emit(event: 'warning', warning: Error): boolean;
  emit(event: 'message', message: any, sendHandle: any): this;
  emit(event: NodeJS.Signals, signal: NodeJS.Signals): boolean;
  emit(event: 'newListener', eventName: string | symbol, listener: (...args: any[]) => void): this;
  emit(event: 'removeListener', eventName: string, listener: (...args: any[]) => void): this;
  emit(event: 'multipleResolves', listener: NodeJS.MultipleResolveListener): this;

  on(event: 'beforeExit', listener: NodeJS.BeforeExitListener): this;
  on(event: 'disconnect', listener: NodeJS.DisconnectListener): this;
  on(event: 'exit', listener: NodeJS.ExitListener): this;
  on(event: 'rejectionHandled', listener: NodeJS.RejectionHandledListener): this;
  on(event: 'uncaughtException', listener: NodeJS.UncaughtExceptionListener): this;
  on(event: 'unhandledRejection', listener: NodeJS.UnhandledRejectionListener): this;
  on(event: 'warning', listener: NodeJS.WarningListener): this;
  on(event: 'message', listener: NodeJS.MessageListener): this;
  on(event: NodeJS.Signals, listener: NodeJS.SignalsListener): this;
  on(event: 'newListener', listener: NodeJS.NewListenerListener): this;
  on(event: 'removeListener', listener: NodeJS.RemoveListenerListener): this;
  on(event: 'multipleResolves', listener: NodeJS.MultipleResolveListener): this;

  once(event: 'beforeExit', listener: NodeJS.BeforeExitListener): this;
  once(event: 'disconnect', listener: NodeJS.DisconnectListener): this;
  once(event: 'exit', listener: NodeJS.ExitListener): this;
  once(event: 'rejectionHandled', listener: NodeJS.RejectionHandledListener): this;
  once(event: 'uncaughtException', listener: NodeJS.UncaughtExceptionListener): this;
  once(event: 'unhandledRejection', listener: NodeJS.UnhandledRejectionListener): this;
  once(event: 'warning', listener: NodeJS.WarningListener): this;
  once(event: 'message', listener: NodeJS.MessageListener): this;
  once(event: NodeJS.Signals, listener: NodeJS.SignalsListener): this;
  once(event: 'newListener', listener: NodeJS.NewListenerListener): this;
  once(event: 'removeListener', listener: NodeJS.RemoveListenerListener): this;
  once(event: 'multipleResolves', listener: NodeJS.MultipleResolveListener): this;

  prependListener(event: 'beforeExit', listener: NodeJS.BeforeExitListener): this;
  prependListener(event: 'disconnect', listener: NodeJS.DisconnectListener): this;
  prependListener(event: 'exit', listener: NodeJS.ExitListener): this;
  prependListener(event: 'rejectionHandled', listener: NodeJS.RejectionHandledListener): this;
  prependListener(event: 'uncaughtException', listener: NodeJS.UncaughtExceptionListener): this;
  prependListener(event: 'unhandledRejection', listener: NodeJS.UnhandledRejectionListener): this;
  prependListener(event: 'warning', listener: NodeJS.WarningListener): this;
  prependListener(event: 'message', listener: NodeJS.MessageListener): this;
  prependListener(event: NodeJS.Signals, listener: NodeJS.SignalsListener): this;
  prependListener(event: 'newListener', listener: NodeJS.NewListenerListener): this;
  prependListener(event: 'removeListener', listener: NodeJS.RemoveListenerListener): this;
  prependListener(event: 'multipleResolves', listener: NodeJS.MultipleResolveListener): this;

  prependOnceListener(event: 'beforeExit', listener: NodeJS.BeforeExitListener): this;
  prependOnceListener(event: 'disconnect', listener: NodeJS.DisconnectListener): this;
  prependOnceListener(event: 'exit', listener: NodeJS.ExitListener): this;
  prependOnceListener(event: 'rejectionHandled', listener: NodeJS.RejectionHandledListener): this;
  prependOnceListener(event: 'uncaughtException', listener: NodeJS.UncaughtExceptionListener): this;
  prependOnceListener(event: 'unhandledRejection', listener: NodeJS.UnhandledRejectionListener): this;
  prependOnceListener(event: 'warning', listener: NodeJS.WarningListener): this;
  prependOnceListener(event: 'message', listener: NodeJS.MessageListener): this;
  prependOnceListener(event: NodeJS.Signals, listener: NodeJS.SignalsListener): this;
  prependOnceListener(event: 'newListener', listener: NodeJS.NewListenerListener): this;
  prependOnceListener(event: 'removeListener', listener: NodeJS.RemoveListenerListener): this;
  prependOnceListener(event: 'multipleResolves', listener: NodeJS.MultipleResolveListener): this;

  listeners(event: 'beforeExit'): NodeJS.BeforeExitListener[];
  listeners(event: 'disconnect'): NodeJS.DisconnectListener[];
  listeners(event: 'exit'): NodeJS.ExitListener[];
  listeners(event: 'rejectionHandled'): NodeJS.RejectionHandledListener[];
  listeners(event: 'uncaughtException'): NodeJS.UncaughtExceptionListener[];
  listeners(event: 'unhandledRejection'): NodeJS.UnhandledRejectionListener[];
  listeners(event: 'warning'): NodeJS.WarningListener[];
  listeners(event: 'message'): NodeJS.MessageListener[];
  listeners(event: NodeJS.Signals): NodeJS.SignalsListener[];
  listeners(event: 'newListener'): NodeJS.NewListenerListener[];
  listeners(event: 'removeListener'): NodeJS.RemoveListenerListener[];
  listeners(event: 'multipleResolves'): NodeJS.MultipleResolveListener[];

  addListener(event: 'client-authenticated', listener: ClientAuthenticatedListener): this;
  emit(event: 'client-authenticated', listener: ClientAuthenticatedListener): this;
  on(event: 'client-authenticated', listener: ClientAuthenticatedListener): this;
  once(event: 'client-authenticated', listener: ClientAuthenticatedListener): this;
  prependListener(event: 'client-authenticated', listener: ClientAuthenticatedListener): this;
  prependOnceListener(event: 'client-authenticated', listener: ClientAuthenticatedListener): this;
  listeners(event: 'client-authenticated'): ClientAuthenticatedListener[];

  addListener(event: 'client-disconnect', listener: ClientDisconnectListener): this;
  emit(event: 'client-disconnect', listener: ClientDisconnectListener): this;
  on(event: 'client-disconnect', listener: ClientDisconnectListener): this;
  once(event: 'client-disconnect', listener: ClientDisconnectListener): this;
  prependListener(event: 'client-disconnect', listener: ClientDisconnectListener): this;
  prependOnceListener(event: 'client-disconnect', listener: ClientDisconnectListener): this;
  listeners(event: 'client-disconnect'): ClientDisconnectListener[];
}

declare type Drupal = {
  Nodejs: any;
};

declare var process: DrupalProcess;

declare var Drupal: Drupal;
