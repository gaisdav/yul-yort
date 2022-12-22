import React, { FC } from "react";
import css from "./styles.module.scss";
import { observer } from "mobx-react-lite";
import { Link, Typography } from "@mui/material";

const AddAgency: FC = observer(() => {
  return (
    <div className={css.page}>
      <Typography align="center" className={css.text}>
        Чтобы предложить новое агенство, напишите нам на почту:{" "}
        <Link href="mailto:yul.yort.support@gmail.com" underline="none">
          yul.yort.support@gmail.com
        </Link>
      </Typography>
      <Typography align="center" className={css.text}>
        или на Whats App по номеру: + 7 (000) 000-00-00
      </Typography>
      <Typography align="center" className={css.text}>
        Пожалуйста, укажите <b>название</b> и <b>номера телефонов</b> агентства.
      </Typography>
      <Typography align="center" className={css.text}>
        А так же <b>маршруты</b> и <b>стоимость</b> проезда по маршрутам.
      </Typography>
      <br />
      <Typography align="center" className={css.text}>
        Пример письма:
      </Typography>
      <Typography align="center" className={css.text}>
        <b>Название:</b> Акбузат (Аҡбуҙат)
      </Typography>
      <Typography align="center" className={css.text}>
        <b>Телефоны:</b> +79445556677, +79778361123
      </Typography>
      <Typography align="center" className={css.text}>
        <b>Маршруты:</b> Уфа - Темясово (Баймакский р-н) (1000 руб в обе
        стороны),
        <br />
        Сибай - Уфа (1100 руб),
        <br />
        Уфа - Сибай (1200 руб),
        <br />
        Хамитово (Азелиловский р-н) - Уфа (800 руб в обе стороны) и т.д.
      </Typography>
    </div>
  );
});

export default AddAgency;
