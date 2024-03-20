export type HTMLElementEvent<T extends HTMLElement> = React.MouseEvent & {
    target: T;
  }