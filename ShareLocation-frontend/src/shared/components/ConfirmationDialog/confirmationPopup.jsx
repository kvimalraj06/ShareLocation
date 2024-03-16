import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import Button from "../FormElements/Button";

import "./confirmationPopup.css";

const DeleteConfirmationPopup = (props) => {
  const { title, text, onDelete, isOpen, onClose } = props;

  return (
    <div>
      <Dialog open={isOpen} onClose={() => onClose()}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText className="confirmation-text">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose()}>Cancel</Button>
          <Button danger onClick={() => onDelete()}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteConfirmationPopup;
