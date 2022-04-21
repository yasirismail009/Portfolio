import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material"
import React from "react"
import rocket from "../assets/img/rocket.svg"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress"
import CardContent from "@mui/material/CardContent"
import { MenuItem } from "@material-ui/core"
let emptyObject = {}
const steps = ["Project", "Time/Budget", "Submit"]

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: theme =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={100}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: theme =>
            theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={100}
        thickness={4}
        {...props}
      />
    </Box>
  )
}
export default function Contactus() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [messageSuccess, setmessageSuccess] = React.useState()
  const [messageLoading, setmessageLoading] = React.useState(false)
  const [skipped, setSkipped] = React.useState(new Set())
  const formRef = React.useRef(null)
  const [isFormValid, setIsFormValid] = React.useState(false)
  const [displayData, setdisplayData] = React.useState([])
  function disableButton() {
    setIsFormValid(false)
  }

  const isStepOptional = step => {
    return step === 1
  }

  const isStepSkipped = step => {
    return skipped.has(step)
  }
  function sendEmail() {
    setmessageLoading(true)
    window.Email.send({
      SecureToken: "e89cca17-6ab7-4d47-bbf4-9c2d948046c3",
      To: "imuhammadyasir9@gmail.com",
      From: "yasirismail321@gmail.com",
      Subject: `${emptyObject.project}`,
      Body: `
      Hi My is ${emptyObject.name} and i  want serivces of ${emptyObject.project} for ${emptyObject.time} and my budget ${emptyObject.budget}$.
      
      My competitor are : ${emptyObject.competitor} .
      
      Kindly contact me on this ${emptyObject.email}
      
      Best wishes,`,
    }).then(message => {
      setmessageSuccess(message)
      setmessageLoading(false)
    })
  }
  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())

      newSkipped.delete(activeStep)
    }
    if (activeStep === 2) {
      sendEmail()
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const handleReset = () => {
    setActiveStep(0)
  }
  function enableButton() {
    setIsFormValid(true)
  }
  function handleSubmit(model) {
    console.info("submit", model)
  }
  return (
    <div className="flex flex-col justify-center items-center text-left bg-black  py-4 px-40">
      <div className="py-20">
        <p className="text-5xl font-semibold text-white">Contact Us</p>
      </div>
      <div className="w-full bg-grey rounded-xl shadow-lg p-16">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="flex justify-center items-center p-20 ">
              <img src={rocket} alt="rocket launch" style={{ width: "70%" }} />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="flex justify-center items-center p-20 ">
              <Box sx={{ width: "100%" }}>
                <Stepper activeStep={activeStep}>
                  {steps.map((label, index) => {
                    const stepProps = {}
                    const labelProps = {}

                    if (isStepSkipped(index)) {
                      stepProps.completed = false
                    }
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>
                          <Typography className="text-white text-xl">
                            {label}
                          </Typography>
                        </StepLabel>
                      </Step>
                    )
                  })}
                </Stepper>
                {activeStep === steps.length ? (
                  messageLoading ? (
                    <div className="flex justify-center items-center mt-20">
                      <FacebookCircularProgress />
                    </div>
                  ) : (
                    <React.Fragment>
                      {messageSuccess === "OK" ? (
                        <div className="mt-12 text-center bg-black p-8 rounded-xl">
                          <Typography className="text-green-600 text-6xl font-bold">
                            Thanks You
                          </Typography>
                          <Typography className="text-white">
                            Message is successully submitted
                          </Typography>
                          <Typography className="text-white">
                            We will get back to you Soon
                          </Typography>
                        </div>
                      ) : (
                        <div className="mt-12 text-center bg-black p-8 rounded-xl">
                          <Typography className="text-red-600 text-4xl font-semibold">
                            Please Try Again
                          </Typography>
                          <Typography className="text-white">
                            Message is successully submitted
                          </Typography>
                          <Typography className="text-white">
                            We will get back to you Soon
                          </Typography>
                        </div>
                      )}

                      <Box
                        sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                      >
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Reset</Button>
                      </Box>
                    </React.Fragment>
                  )
                ) : (
                  <React.Fragment>
                    {activeStep === 0 ? (
                      <div className="mt-20">
                        <Typography
                          className="text-white text-xl text-center font-medium "
                          sx={{ mt: 2, mb: 1 }}
                        >
                          STEP {activeStep + 1}
                        </Typography>

                        <div className="grid gap-12 grid-cols-2 mt-12">
                          <div>
                            <TextField
                              className="w-full text-white bg-dark"
                              type="text"
                              value={emptyObject?.name}
                              label="Enter Your Name"
                              inputProps={{ style: { color: "white" } }}
                              InputLabelProps={{
                                style: { color: "#a8a8a8" },
                              }}
                              validations={{
                                minLength: 4,
                                maxLength: 127,
                              }}
                              validationErrors={{
                                minLength: "Min character length is 4",
                                maxLength: "Max character length is 128",
                              }}
                              onChange={e => {
                                emptyObject["name"] = e.target.value
                              }}
                              required
                              variant="outlined"
                            />
                          </div>
                          <div>
                            <TextField
                              className="w-full"
                              label="Enter Your Email"
                              value={emptyObject?.email}
                              inputProps={{ style: { color: "white" } }}
                              InputLabelProps={{
                                style: { color: "#a8a8a8" },
                              }}
                              validations={{
                                minLength: 4,
                                maxLength: 127,
                              }}
                              validationErrors={{
                                minLength: "Min character length is 4",
                                maxLength: "Max character length is 128",
                              }}
                              onChange={e => {
                                emptyObject["email"] = e.target.value
                              }}
                              required
                              variant="outlined"
                            />
                          </div>
                          <div>
                            <Typography className="mb-4 font-medium text-white">
                              Project Type
                            </Typography>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              variant="outlined"
                              label="Select Category"
                              className="w-full"
                              onChange={e => {
                                emptyObject["project"] = e.target.value
                              }}
                              value={emptyObject?.project}
                              required
                            >
                              <MenuItem value={"Website"}>Web App</MenuItem>
                              <MenuItem value={"Ui/Ux"}>UI/UX</MenuItem>
                              <MenuItem value={"Animation"}>Animation</MenuItem>
                              <MenuItem value={"Graphics"}>Graphics</MenuItem>
                            </Select>
                          </div>
                          <div>
                            <Typography className="mb-4 font-medium text-white">
                              Competitor
                            </Typography>
                            <TextField
                              className="w-full"
                              label="If there is a Competitor"
                              inputProps={{ style: { color: "white" } }}
                              value={emptyObject?.competitor}
                              InputLabelProps={{
                                style: { color: "#a8a8a8" },
                              }}
                              validations={{
                                minLength: 4,
                                maxLength: 127,
                              }}
                              onChange={e => {
                                emptyObject["competitor"] = e.target.value
                              }}
                              validationErrors={{
                                minLength: "Min character length is 4",
                                maxLength: "Max character length is 128",
                              }}
                              variant="outlined"
                            />
                          </div>
                        </div>
                      </div>
                    ) : activeStep === 1 ? (
                      <div>
                        <Typography
                          className="text-white text-xl text-center font-medium "
                          sx={{ mt: 2, mb: 1 }}
                        >
                          Step {activeStep + 1}
                        </Typography>

                        <div className="grid gap-12 grid-cols-2 mt-4">
                          <div>
                            <FormControl fullWidth>
                              <InputLabel htmlFor="outlined-adornment-amount">
                                Amount
                              </InputLabel>
                              <OutlinedInput
                                id="outlined-adornment-amount"
                                onChange={e => {
                                  emptyObject["budget"] = e.target.value
                                }}
                                value={emptyObject?.budget}
                                startAdornment={
                                  <InputAdornment
                                    position="start"
                                    className="text-white"
                                  >
                                    $
                                  </InputAdornment>
                                }
                                label="Amount"
                              />
                            </FormControl>
                          </div>
                          <div>
                            <TextField
                              className="w-full text-white bg-dark"
                              label="Enter Time"
                              value={emptyObject?.time}
                              inputProps={{ style: { color: "white" } }}
                              InputLabelProps={{
                                style: { color: "#a8a8a8" },
                              }}
                              validations={{
                                minLength: 4,
                                maxLength: 127,
                              }}
                              validationErrors={{
                                minLength: "Min character length is 4",
                                maxLength: "Max character length is 128",
                              }}
                              onChange={e => {
                                emptyObject["time"] = e.target.value
                              }}
                              required
                              variant="outlined"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <Typography
                          className="text-white text-xl text-center font-medium "
                          sx={{ mt: 2, mb: 1 }}
                        >
                          Step {activeStep + 1}
                        </Typography>
                        <Card
                          sx={{ minWidth: 275 }}
                          className="bg-dark rounded-xl"
                        >
                          <CardContent className="bg-dark flex justify-center flex-col items-center  text-center p-8">
                            <Typography
                              className="text-white text-2xl font-semibold m-0"
                              gutterBottom
                            >
                              {emptyObject.name}
                            </Typography>
                            <Typography className="text-white text-base mb-4">
                              {emptyObject.email}
                            </Typography>
                            <div className=" bg-grey w-2/4 rounded-xl p-4">
                              <div className="flex flex-row justify-between items-center mb-4">
                                <Typography className="text-white ">
                                  Project :
                                </Typography>
                                <Typography className=" font-semibold bg-white text-base px-6 py-2 rounded-full">
                                  {emptyObject.project}
                                </Typography>
                              </div>
                              <div className="flex flex-row justify-between items-center mb-4">
                                <Typography className="text-white ">
                                  Compititor :
                                </Typography>
                                <Typography className=" text-white text-base rounded-full">
                                  {emptyObject.competitor}
                                </Typography>
                              </div>

                              <div className="flex flex-row justify-between items-center mb-4">
                                <Typography className="text-white ">
                                  Budget :
                                </Typography>
                                <Typography className=" font-semibold text-white text-xl rounded-full">
                                  {emptyObject.budget}$
                                </Typography>
                              </div>
                              <div className="flex flex-row justify-between items-center mb-4">
                                <Typography className="text-white ">
                                  Time :
                                </Typography>
                                <Typography className=" font-semibold text-white text-base rounded-full">
                                  {emptyObject.time}
                                </Typography>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 4 }}>
                      <Button
                        variant="contained"
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />
                      {isStepOptional(activeStep) && (
                        <Button
                          variant="contained"
                          color="inherit"
                          onClick={handleSkip}
                          sx={{ mr: 1 }}
                        >
                          Skip
                        </Button>
                      )}

                      <Button variant="contained" onClick={handleNext}>
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </Box>
                  </React.Fragment>
                )}
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
