import React from "react"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { Dialogs } from "./Dialogs"

export default compose<React.ComponentType>(
    withAuthRedirect,
)(Dialogs)