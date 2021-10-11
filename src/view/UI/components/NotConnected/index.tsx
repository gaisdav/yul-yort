import { FC, useEffect, useState } from "react";
import { Block } from "./Block";

export const NotConnected: FC = () => {
  const [online, setOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const timerId = setInterval(() => {
      navigator.onLine !== online && setOnline(navigator.onLine);
    }, 10000);

    return () => {
      clearInterval(timerId);
    };
  }, [online]);

  if (online) {
    return null;
  }

  return <Block />;
};
