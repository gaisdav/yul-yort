import Sheet from "react-modal-sheet";
import { FC, useEffect, useRef } from "react";
import css from "./styles.module.scss";
import { TextField } from "@mui/material";

const Example: FC<any> = ({ localities = [], isOpen, closeInputLayer }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    // Вызывайте blur() для убирания фокуса
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  //FIXME: Touch вынести в глобал 
  useEffect(() => {
    const handleBodyTouchStart = (event: TouchEvent) => {
      // Проверка, было ли касание вне поля ввода
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        handleButtonClick();
      }
    };

    // Добавление обработчика события к body
    document.body.addEventListener("touchstart", handleBodyTouchStart);

    // Удаление обработчика события при размонтировании компонента
    return () => {
      document.body.removeEventListener("touchstart", handleBodyTouchStart);
    };
  }, []); // Пустой массив зависимостей для вызова useEffect только при монтировании

  return (
    <>
      <Sheet
        rootId="root"
        isOpen={isOpen}
        onClose={closeInputLayer}
        className={css.container}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className={css.container}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                inputRef={inputRef}
              />
              <ul className={css.test}>
                {localities?.map((item: any) => {
                  return <li>{item.name}</li>;
                })}
              </ul>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

export default Example;
