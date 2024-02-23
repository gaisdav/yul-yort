import { useEffect, useRef } from "react";
import { useViewModel } from "./useViewModel.tsx";
import { IAppVM, TTheme } from "../../viewModels/App/types.ts";

export interface IChangeTheme {
  theme: TTheme;
  setTheme: IAppVM["setTheme"];
}

/**
 * Изменение темы приложения и цвета статус бара в зависимости от темы
 */
export const useChangeTheme = (): IChangeTheme => {
  const { theme, setTheme } = useViewModel("app");
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // #app-bar это id элемента <AppBar />
    headerRef.current = document.querySelector("#app-bar");
  }, []);

  // Изменение цвета статус бара в зависимости от темы
  useEffect(() => {
    const themeColorMetaTag = document.querySelector(
      "meta[name='theme-color']",
    );
    const bodyTag = document.querySelector("body");

    if (!themeColorMetaTag || !headerRef.current || !bodyTag) {
      return;
    }

    const headerStyles = getComputedStyle(headerRef.current);
    const backgroundColor = headerStyles.backgroundColor;

    themeColorMetaTag.setAttribute("content", backgroundColor);
    bodyTag.style.backgroundColor = backgroundColor;
  }, [theme]);

  // Изменение темы приложения через тег <html>
  useEffect(() => {
    const htmlTag = document.querySelector("html");

    if (!htmlTag) {
      return;
    }

    htmlTag.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
