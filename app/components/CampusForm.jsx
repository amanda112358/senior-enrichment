import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeCampusName, writeCampusDescription } from '../reducers';

class CampusForm extends Component {

  componentDidMount(){
    this.props.setInput(this.props.campus);
  }

  render() {
    const {
      campusName,
      campusDescription,
      label,
      handleChange,
      handleSubmit,
      buttonText } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>{label}</label>
            <input
              value={campusName}
              onChange={handleChange}
              type="text"
              name="campusName"
              placeholder="Enter campus name"
            />
            <input
              value={campusDescription}
              onChange={handleChange}
              type="text"
              name="campusDescription"
              placeholder="Enter campus description"
            />
          </div>
          <div>
            <button type="submit">{buttonText}</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    campus: ownProps.campus,
    campusName: state.campusName,
    campusDescription: state.campusDescription,
    label: ownProps.label,
    buttonText: ownProps.buttonText
  }
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    setInput() {
      if (ownProps.campus) {
        dispatch(writeCampusName(ownProps.campus.name));
        dispatch(writeCampusDescription(ownProps.campus.description));
      } else {
        dispatch(writeCampusName(''));
        dispatch(writeCampusDescription(''));
      }
    },
    handleChange (event) {
      const input = event.target.value;
      const field = event.target.name;
      if (field === 'campusName') dispatch(writeCampusName(input));
      if (field === 'campusDescription') dispatch(writeCampusDescription(input));
    },
    handleSubmit (event) {
      const { campus, postOrPut, history } = ownProps;
      event.preventDefault();
      const name = event.target.campusName.value;
      const description = event.target.campusDescription.value;
      const campusId = campus ? campus.id : null;
      console.log('OWNPROPS', ownProps);
      const createOrEdit = postOrPut(history, { name, description }, campusId);
      dispatch(createOrEdit);
      dispatch(writeCampusName(''));
      dispatch(writeCampusDescription(''));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusForm);
