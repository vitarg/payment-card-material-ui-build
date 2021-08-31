import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  paper: {
    boxShadow: "0 8px 32px lightgray",
    padding: 40,
  },
  cardBox: {
    padding: 40,
  },
  card: {
    width: "86mm",
    height: "54mm",
    background:
      "linear-gradient(90deg, rgba(9,149,200,1) 0%, rgba(9,120,180,1) 100%)",
    borderRadius: "2.5mm",
  },
  visaBox: {
    padding: "20px 20px 0 0",
    textAlign: "right",
  },
  visa: {
    width: 80,
    maxWidth: "100%",
  },
  chipBox: {
    paddingLeft: 20,
    marginTop: 20,
  },
  chip: {
    width: 50,
    maxWidth: "100%",
  },
  textBox: {
    padding: 40,
  },
  textInputsWrapper: {
    width: "calc(100% + 32px)",
    marginLeft: -16,
  },
  textInputBlock: {
    padding: 15,
  },
  submitBtn: {
    marginTop: 20,
  },
  cardTextBlock: {
    paddingLeft: 20,
  },
  MMAndYYBox: {
    display: "flex",
    justifyContent: "center",
  },
});

function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [MM, setMM] = useState("");
  const [YY, setYY] = useState("");


  const handleName = (value) => {
    setName(value);
  };

  const handleCardNumber = (value) => {
    setCardNumber(value);
  };

  const handleMM = (value) => {
    setMM(value);
  };

  const handleYY = (value) => {
    setYY(value);
  };

  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth={"md"}>
        <Paper className={classes.paper} elevation={1}>
          <Grid container>
            <Grid item md={6}>
              <Box className={classes.cardBox}>
                <Box className={classes.card}>
                  <Box className={classes.visaBox}>
                    <img
                      className={classes.visa}
                      src="https://intocode.github.io/payment-card-material-ui-build/static/media/visa.aca7fbdd.png"
                      alt="pic"
                    />
                  </Box>
                  <Box className={classes.chipBox}>
                    <img
                      className={classes.chip}
                      src="https://intocode.github.io/payment-card-material-ui-build/static/media/chip.4b08b077.png"
                      alt="pic"
                    />
                  </Box>
                  <Box className={classes.cardTextBlock}>
                    <Box>
                      <Typography variant={"h5"} style={{ color: "#fff", textShadow: "1px 1px #444" }}>
                        {cardNumber ? cardNumber : "0000 0000 0000 0000"}
                      </Typography>
                    </Box>
                    <Box className={""}>
                      <Typography style={{ color: "#fff", textShadow: "1px 1px #444" }}>
                        {name ? name : "ФАМИЛИЯ ИМЯ"}
                      </Typography>
                    </Box>

                    <Box className={classes.MMAndYYBox}>
                      <Typography style={{ color: "#fff", textShadow: "1px 1px #444" }}>
                        {MM ? MM : "MM"}
                      </Typography>
                      <Typography style={{ color: "#fff", textShadow: "1px 1px #444" }}>/</Typography>
                      <Typography style={{ color: "#fff", textShadow: "1px 1px #444" }}>
                        {YY ? YY : "ГГ"}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box className={classes.textBox}>
                <Typography variant={"h5"}>Payment Details</Typography>
                <Box>
                  <TextField
                    onChange={(e) => handleName(e.target.value)}
                    fullWidth
                    label={"Имя на карте"}
                  />
                </Box>
                <Box>
                  <TextField
                    onChange={(e) => handleCardNumber(e.target.value)}
                    fullWidth
                    label={"Номер карты"}
                  />
                </Box>
                <Grid className={classes.textInputsWrapper} container>
                  <Grid item xs={4}>
                    <Box className={classes.textInputBlock}>
                      <TextField
                        onChange={(e) => handleMM(e.target.value)}
                        fullWidth label={"ММ"} />
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className={classes.textInputBlock}>
                      <TextField
                        onChange={(e) => handleYY(e.target.value)}
                        fullWidth label={"ГГ"} />
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className={classes.textInputBlock}>
                      <TextField type={'password'} fullWidth label={"CVV"} />
                    </Box>
                  </Grid>
                </Grid>
                <Box className={classes.submitBtn}>
                  <Button variant={"contained"} color={"primary"}>
                    Оплатить 400$
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
