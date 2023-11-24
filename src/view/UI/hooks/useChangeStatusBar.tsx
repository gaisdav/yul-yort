import { useEffect, useRef } from "react";
import { TTheme } from "../../viewModels/App/types";

export interface IChangeStatusBar {
  mode: TTheme;
}

/**
 * Изменение цвета статус бара в зависимости от темы
 * @param mode - тема
 */
export const useChangeStatusBar = ({ mode }: IChangeStatusBar) => {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    headerRef.current = document.querySelector(".MuiAppBar-root");
  }, []);

  useEffect(() => {
    const themeColorMetaTag = document.querySelector(
      "meta[name='theme-color']"
    );
    const bodyTag = document.querySelector("body");

    if (!themeColorMetaTag || !headerRef.current || !bodyTag) {
      return;
    }

    const headerStyles = getComputedStyle(headerRef.current);
    const backgroundColor = headerStyles.backgroundColor;

    themeColorMetaTag.setAttribute("content", backgroundColor);
    bodyTag.style.backgroundColor = backgroundColor;
  }, [mode]);
};
