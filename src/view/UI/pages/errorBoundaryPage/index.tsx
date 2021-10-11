import React from "react";
import { Collapse, IconButton, Typography } from "@mui/material";
import css from "./styles.module.scss";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import { IProps, IState } from "./types";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
      expanded: false,
    };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  handleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    if (this.state.errorInfo) {
      return (
        <div className={css.errorBoundary}>
          <Typography align="center" className={css.icon} color="error.main">
            <SentimentVeryDissatisfiedOutlinedIcon fontSize="inherit" />
          </Typography>

          <Typography variant="h6" align="center" color="error.main">
            Произошла ошибка при работе с приложением
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            color="error.main"
            onClick={this.handleExpand}
            className={css.collapseTitle}
          >
            {this.state.error && this.state.error.toString()}

            <IconButton onClick={this.handleExpand}>
              {this.state.expanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Typography>

          <Collapse
            in={this.state.expanded}
            timeout="auto"
            unmountOnExit
            className={css.collapse}
          >
            <Typography>
              {this.state.error && this.state.error.toString()}
            </Typography>

            <br />
            <Typography>{this.state.errorInfo.componentStack}</Typography>
          </Collapse>
        </div>
      );
    }

    return this.props.children;
  }
}
