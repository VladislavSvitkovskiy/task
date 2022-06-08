import React, { HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string
  type?: 'button' | 'submit' | 'reset'
  mode?: string
  before?: ReactNode
  inline?: boolean
  disabled?: boolean
  children?: ReactNode
  className?: string
}

const Button = ({
                  text,
                  className,
                  type = 'button',
                  mode = 'primary',
                  before,
                  children,
                  onClick,
                  inline,
                  title,
                  disabled
                }: ButtonProps) => {
  const base = 'Button';
  return (
    <button
      className={classNames(base, className ? `${className}__button` : '', {
        [`${base}__${mode}`]: !!mode,
        [`${base}__inline`]: inline,
        [`${base}__disable`]: !!disabled
      })}
      onClick={onClick && onClick}
      type={type}
      title={title}
      disabled={disabled}>
      {before && <div className={`${base}__before`}>{before}</div>}
      {text}
      {children}
    </button>
  );
};

export default Button;
