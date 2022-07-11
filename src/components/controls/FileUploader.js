import React from "react";
import { FileDrop } from 'react-file-drop';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(_theme => ({
    upload: {
        padding: '20px 209px',
        borderRadius: '6px',
        border: 'solid 2px #d1cfbb',
        backgroundColor: '#fbfbfb',
        borderStyle: 'dashed',
        textAlign: 'center',
      },
  }));

const FileUploader = (props) => {
    const {
        name,
        label,
        value,
        onChange,
        error = null,
        flag,
        filePicker,
        fileHandler,
        InputProps,
        ...other
      } = props;

      const classes = useStyles();

  return (
      <div className={classes.upload} >
    <FileDrop  onTargetClick={filePicker} onDrop={(f) => fileHandler(f)}>
      <p>
        <br />
      </p>
      <input
        accept=".pdf,.tiff,.jpeg,.doc"
        value=""
        className="input-field1"
        multiple="multiple"
        type="file"
        onChange={(e) => fileHandler(e.target.files)}
        style={ {	display: 'none'        }}
      />
    </FileDrop>
    </div>
  );
};


export default FileUploader;