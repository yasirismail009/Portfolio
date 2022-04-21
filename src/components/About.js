import creative from "../assets/img/creative.svg"
import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Experince from "../components/Experinece"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export default function Skills() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div className="flex flex-col justify-center items-center text-left bg-black  py-4 px-40">
      <div className="py-20">
        <p className="text-5xl font-semibold text-white">About</p>
      </div>
      <div className="w-full bg-grey rounded-xl shadow-lg p-16">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="justify-center items-center p-8">
              <img src={creative} alt="creative" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="justify-center items-center p-20">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    className="text-white"
                    onChange={handleChange}
                    aria-label="primary tabs example"
                  >
                    <Tab label="Intro" {...a11yProps(0)} />
                    <Tab label="Education" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <p className="text-white pb-6">
                    I am a designer. I have started doing whiteboard animation
                    in my early days of university. I start doing UI UX after my
                    University Completion. React js is my plus have more
                    experience in react than ui ux design. Motion Graphics
                    includes 2D animation, branding and Ui animation.
                  </p>
                  <button className="text-white bg-black  hover:bg-gray-900  font-semibold rounded-full px-4 py-2">
                    Download Cv
                  </button>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <h1 className="text-white text-2xl font-semibold">
                    Bachelor in IT - 2020
                  </h1>
                  <h4 className="text-gray-300 text-lg font-semibold">
                    Quaid-e-Azam University
                  </h4>
                  <h5 className="text-gray-300 text-base font-semibold">
                    Islamabad Pakistan
                  </h5>
                </TabPanel>
              </Box>
            </div>
          </Grid>
        </Grid>
        <div className="pt-12">
          <Experince />
        </div>
      </div>
    </div>
  )
}
