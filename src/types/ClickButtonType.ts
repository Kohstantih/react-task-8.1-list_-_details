type HTMLElementEvent<T extends HTMLElement> = React.MouseEvent & {
    target: T;
  }
export type ClickButtonType = (e: HTMLElementEvent<HTMLButtonElement>) => void;