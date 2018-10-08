import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAllowRegistrationAction, setDisableBalanceOnAddAction, setDisableBalanceOnEditAction, setRunningEnvironmentAction} from '../../../event/action/SettingsAction';
import requireAuth from '../../higherOrder/requireAuth';

class Setting extends Component {

  constructor(props){
    super(props);
  };

  disableBalanceOnAddChange = () => {
    this.props.setDisableBalanceOnAddAction();
  };

  disableBalanceOnEditChange = () => {
    this.props.setDisableBalanceOnEditAction();
  };

  allowRegistrationChange = () => {
    this.props.setAllowRegistrationAction();
  };

  changeEnvironmentSetting = () => {
    this.props.setRunningEnvironmentAction();
  };

  render() {
    const { disableBalanceOnAdd, disableBalanceOnEdit, allowRegistration, runningOnProdEnvironment } = this.props.settings;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back To Home
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Edit Settings</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Allow Registration</label>{' '}
                <input
                  type="checkbox"
                  name="allowRegistration"
                  checked={!!allowRegistration}
                  onChange={this.allowRegistrationChange.bind(this)}
                />
              </div>

              <div className="form-group">
                <label>Disable Balance On Add</label>{' '}
                <input
                  type="checkbox"
                  name="disableBalanceOnAdd"
                  checked={!!disableBalanceOnAdd}
                  onChange={this.disableBalanceOnAddChange.bind(this)}
                />
              </div>

              <div className="form-group">
                <label>Disable Balance On Edit</label>{' '}
                <input
                  type="checkbox"
                  name="disableBalanceOnEdit"
                  checked={!!disableBalanceOnEdit}
                  onChange={this.disableBalanceOnEditChange.bind(this)}
                />
              </div>

              <div className="form-group">
                <label>Running On Prod-Environment</label>{' '}
                <input
                  type="checkbox"
                  name="runningOnProdEnvironment"
                  checked={!!runningOnProdEnvironment}
                  onChange={this.changeEnvironmentSetting.bind(this)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Setting.propTypes = {
  settings: PropTypes.object.isRequired,
  setDisableBalanceOnAddAction: PropTypes.func.isRequired,
  setDisableBalanceOnEditAction: PropTypes.func.isRequired,
  setAllowRegistrationAction: PropTypes.func.isRequired,
  setRunningEnvironmentAction: PropTypes.func.isRequired
};



const mapStateToProps = state => ({
    settings: state.twm_setting
  });
  
  export default connect(mapStateToProps, 
                          { setAllowRegistrationAction, 
                            setDisableBalanceOnAddAction,
                            setDisableBalanceOnEditAction,
                            setRunningEnvironmentAction
                          }
                        )(requireAuth(Setting));