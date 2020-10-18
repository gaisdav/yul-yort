import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import {
  Card,
  CardHeader,
  Link,
  Typography,
  CardContent,
} from "@material-ui/core";
import useStyles from "./styles";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";

const Result: FC = () => {
  const styles = useStyles();

  return (
    <Card className={styles.resultCard}>
      <CardHeader
        avatar={<CheckCircleRoundedIcon color="primary" fontSize="large" />}
        title="Заявка отправлена."
      />
      <CardContent className={styles.resultCardContent}>
        <Typography variant="body2" color="textSecondary">
          Спасибо, что воспользовались нашим сервисом, в ближайшее время Вам{" "}
          <Link href="https://www.vk.com">ВКонтакте</Link> придет сообщение с
          данными по заявке и она появится в нашей{" "}
          <Link href="https://www.google.com">группе</Link>.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default observer(Result);
