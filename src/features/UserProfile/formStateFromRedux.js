import React from 'react'
import { connect } from 'react-redux'
import { getFormState } from '../../store/modules/user/actions'

const FormStateFromRedux = ({ state }) => (
  <pre>{JSON.stringify(state, 0, 2)}</pre>
)

export default connect((state, ownProps) => ({
  state: getFormState(state, ownProps.form)
}))(FormStateFromRedux)
