import React, { MouseEvent, forwardRef, useEffect, useState } from 'react';

import * as S from './styles';
import { ButtonProps } from './types';

const ButtonComponent = (
  {
    customLayoutColor,
    children,
    icon,
    size = 'small',
    fullWidth = false,
    square = false,
    disabled = false,
    loading = false,
    circle = false,
    variant = 'primary',
    colorVariation,
    iconPosition = 'right',
    timeout,
    onClick,
    ...props
  }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>
) => {
  const [waitingTime, setWaitingTime] = useState(timeout);
  const timer: NodeJS.Timer = setInterval(() => {
    setWaitingTime(waitingTime! - 1);
  }, 1000);

  const handleClick = (event?: MouseEvent<HTMLButtonElement>) => {
    typeof timeout !== 'undefined' && setWaitingTime(timeout);
    onClick && onClick(event);
  };

  useEffect(() => {
    if (waitingTime! < 1) {
      clearInterval(timer);
    }
  }, [waitingTime, timer]);

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <S.Wrapper
      customLayoutColor={customLayoutColor}
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      square={square}
      ref={ref}
      disabled={disabled || loading || !!waitingTime}
      variant={variant}
      colorVariation={colorVariation}
      circle={circle}
      onClick={handleClick}
      {...props}
    >
      {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
      {!loading && !waitingTime && !!children && <>{children}</>}
      {!!waitingTime && (
        <>
          {children}
          {waitingTime && ` (${waitingTime})`}
        </>
      )}
      {!!loading && <S.Loading aria-hidden={loading} aria-label="carregando" />}
    </S.Wrapper>
  );
};
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ButtonComponent
);
