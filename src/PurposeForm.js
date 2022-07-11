import { useEffect } from "react";
import Element from "./components/Element";
import { Button, Card, CardContent, Grid, TextField } from "@material-ui/core";
import { usePurpose } from "./context/PurposeContext";
import CreateIcon from "@material-ui/icons/Create";

function PurposeForm({ purposeTransfer }) {
  const {
    purposeState,
    actions: { setPurposeData },
    getFieldValues,
  } = usePurpose();

  useEffect(() => {
    setPurposeData("fields", purposeTransfer.object.fields);
  }, [purposeTransfer]);

  const { fields } = purposeState;

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(purposeState);
    console.log(getFieldValues(fields));
  };

  const getSubPurposes = (field, i) => {
    let subPurposeList = [];
    if (field.subPurposeList && field.subPurposeList[field.value - 1]) {
      subPurposeList = field.subPurposeList;
    } else {
      subPurposeList =
        field.subPurposes[field.options[field.value - 1].subPurposeCode];
    }

    return subPurposeList.map((subfield, subi) => {
      return (
        <Grid key={subi} item xs={12} sm={4} style={{ padding: "25px" }}>
          <Element key={subi} field={subfield} parentID={field.id} />
        </Grid>
      );
    });
  };

  return (
    <div className="App container">
      <Card style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Grid container spacing={1} style={{ padding: "10px" }}>
            <Grid item xs={12} sm={4} style={{ padding: "25px" }}>
              <TextField
                label="Purpose of Transfer"
                defaultValue={purposeTransfer.title}
                disabled={true}
                InputProps={{
                  endAdornment: <CreateIcon />,
                }}
              />
            </Grid>

            {fields
              ? fields.map((field, i) => {
                  return (
                    <>
                      <Grid
                        key={i}
                        item
                        xs={12}
                        sm={4}
                        style={{ padding: "25px" }}
                      >
                        <Element key={i} field={field} />
                      </Grid>
                      {field.subPurposes && field.subPurposes.length > 0
                        ? getSubPurposes(field, i)
                        : null}
                    </>
                  );
                })
              : null}
          </Grid>

          <Grid item style={{ padding: "30px" }}>
            <Button variant="contained" onClick={(e) => handleSubmit(e)}>
              Submit
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default PurposeForm;
