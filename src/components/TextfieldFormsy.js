import React from "react"
import TextField from "@material-ui/core/TextField"
import { withFormsy } from "formsy-react"
import PropTypes from "prop-types"

import { capitalizeFirstLetter } from "../utils"

class FormsyTextField extends React.Component {
  constructor(props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value)
  }

  render() {
    let { name, label, getErrorMessage, getValue, type } = this.props
    let text = capitalizeFirstLetter(label !== undefined ? label : name)

    // An error message is returned only if the component is invalid
    const errorMessage = getErrorMessage()

    return (
      <TextField
        label={text}
        value={getValue() || ""}
        onChange={this.changeValue}
        error={errorMessage != null}
        helperText={errorMessage}
        margin="normal"
        type={type}
        fullWidth
      />
    )
  }
}

FormsyTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  getErrorMessage: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired,
  type: PropTypes.string,
}

export default withFormsy(FormsyTextField)
