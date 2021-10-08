/**
 * Компонент поиска маршрутов.
 */
export interface ISearchForm {
  /** Минифицированный вариант. */
  minified?: boolean;
  /** Пункт отбытия. */
  origin?: string;
  /** Пункт назначения. */
  destination?: string;
  /** Стили. */
  className?: string;
  /** Метод поиска. */
  onSearch?: () => void;
}

/**
 * Компонент формы поиска маршрута.
 */
export interface IForm extends ISearchForm {
  /** Обработчик клика по кнопке изменения маршрута в минифицированном виде. */
  onExpand: () => void;
}
