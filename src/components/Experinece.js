import React from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import { Badge } from "@mui/material"

export default function Experinece() {
  return (
    <div className="flex flex-col justify-center items-center text-left bg-black   px-40  rounded-2xl">
      <div className="p-8">
        <p className="text-5xl font-semibold text-white">Experinece</p>
      </div>
      <div className="w-full  rounded-xl shadow-lg p-8">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }} className="bg-grey">
              <CardContent className="text-center">
                <h1 className="text-2xl font-semibold text-white">UI UX</h1>
                <Badge className="text-white">1/Years</Badge>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <Card sx={{ minWidth: 275 }} className="bg-grey">
              <CardContent className="text-center">
                <h1 className="text-2xl font-semibold text-white">
                  WEB DESIGN
                </h1>
                <Badge className="text-white">2/Years</Badge>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <Card sx={{ minWidth: 275 }} className="bg-grey">
              <CardContent className="text-center">
                <h1 className="text-2xl font-semibold text-white">GRAPHICS</h1>
                <Badge className="text-white">2/Years</Badge>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <Card sx={{ minWidth: 275 }} className="bg-grey">
              <CardContent className="text-center">
                <h1 className="text-2xl font-semibold text-white">
                  VIDEO EDITING
                </h1>
                <Badge className="text-white">1/Years</Badge>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }} className="bg-grey">
              <CardContent className="text-center">
                <h1 className="text-2xl font-semibold text-white">ANIMATION</h1>
                <Badge className="text-white">1/Years</Badge>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }} className="bg-grey">
              <CardContent className="text-center">
                <h1 className="text-2xl font-semibold text-white">BACKEND</h1>
                <Badge className="text-white">1/Years</Badge>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
