import React, {PropTypes,Component} from 'react';
import replace from './../../node_modules/batch-replace';
import './../styles/main.scss';

class StyleMigrator extends Component {

  /**
   * RootComponent constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this._initStyleMigrator();
    this.state = {
      inputHTMLStr: '<button class="pe-btn pe-btn--primary">Primary</button>',
      convertedHTML: ''
    };
  }

  /**
   * Custom Function - Method binding to 'this'
   * @private
   */
  _initStyleMigrator() {
    this.convertHTML = this.convertHTML.bind(this);
    this.handleOnChangeV0 = this.handleOnChangeV0.bind(this);
  }

  /**
   * Life Cycle function - componentWillMount
   */
  componentWillMount() {
  }

  /**
   * Life Cycle function - componentDidMount
   */
  componentDidMount() {
  }

  /**
   * Life Cycle function - componentWillReceiveProps
   * @param newProps
   */
  componentWillReceiveProps(newProps) {
  }

  /**
   * Life Cycle function - shouldComponentUpdate
   * @param newProps
   * @param newState
   * @returns {boolean}
   */
  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  /**
   * Life Cycle function - componentWillUpdate
   * @param nextProps
   * @param nextState
   */
  componentWillUpdate(nextProps, nextState) {
  }

  /**
   * Life Cycle function - componentDidUpdate
   * @param prevProps
   * @param prevState
   */
  componentDidUpdate(prevProps, prevState) {
  }

  /**
   * Life Cycle function - componentWillUnmount
   */
  componentWillUnmount() {
  }


  /**
   *
   */
  convertHTML() {
    let convertedString = replace(/pe-btn--primary/g).with("pe-btn__primary")
      .and(/pe-btn--link/g).with("pe-link--btn")
      .and(/pe-btn--small/g).with("pe-btn--btn_small")
      .and(/pe-btn--large/g).with("pe-btn--btn_large")
      .in(this.state.inputHTMLStr);

    if (convertedString) {
      this.setState({
        convertedHTML: convertedString.trim()
      })
    }
  }


  /**
   *
   */
  handleOnChangeV0(evt) {
    this.setState({
      inputHTMLStr: evt.target.value
    });
  }

  /**
   * Life Cycle function - render
   * @returns {XML}
   */
  render() {
    return (

      <div className="container">
        <div className="jumbotron">
          <h1>pearson-elements-style-migrator</h1>
          <p>This is an <b>experiment</b> of introducing a <b style={{color:'green'}}>style migration approach</b> for pearson-elements, from &nbsp;
            <b><i>pearson-elements-v0</i></b> to <b><i>pearson-elements-v1.</i></b> Simply, you can copy the old markup and convert into the latest. :D</p>

          <div className="row">
            <div className="col-lg-5">
              <h4>CSS Classes Overview</h4>
              <h6>Here are the class changes this service will migrate</h6>
              <table className="table table-condensed">
                <tbody>
                <tr>
                  <td><a href="https://pearson-elements-v0.surge.sh/elements/" target="_blank">elements-v0</a>
                  </td>
                  <td><a href="https://pearson-elements-v1.surge.sh/elements/" target="_blank">elements-v1</a>
                  </td>
                </tr>
                <tr>
                  <td>.pe-btn--primary</td>
                  <td>.pe-btn__primary</td>
                </tr>
                <tr>
                  <td>.pe-btn--link</td>
                  <td>.pe-link--btn</td>
                </tr>

                <tr>
                  <td>.pe-btn--small</td>
                  <td>.pe-btn--btn_small</td>
                </tr>

                <tr>
                  <td>.pe-btn--medium</td>
                  <td style={{color:'red'}}>N/A</td>
                </tr>

                <tr>
                  <td>.pe-btn--large</td>
                  <td>.pe-btn--btn_large</td>
                </tr>


                <tr>
                  <td>.pe-error-text</td>
                  <td>.pe-input--error_message</td>
                </tr>

                <tr>
                  <td>.check</td>
                  <td>.check-lg-* , check-sm-*</td>
                </tr>

                <tr>
                  <td>.chevron-down</td>
                  <td>.dropdown-open-* , dropdown-open-sm-*</td>
                </tr>

                <tr>
                  <td>.chevron-up</td>
                  <td>.dropdown-close-* , dropdown-close-sm-*</td>
                </tr>

                <tr>
                  <td>.chevron-left</td>
                  <td>.chevron-back-* , chevron-back-sm-*</td>
                </tr>

                <tr>
                  <td>.chevron-right</td>
                  <td>.chevron-next-* , chevron-next-sm-*</td>
                </tr>

                <tr>
                  <td>.cog</td>
                  <td>.settings-*</td>
                </tr>

                <tr>
                  <td>.envelope</td>
                  <td>.email-*</td>
                </tr>

                <tr>
                  <td>.plus-circle</td>
                  <td>.item-add-*</td>
                </tr>

                <tr>
                  <td>.search</td>
                  <td>.search-lg-* , search-sm-*</td>
                </tr>

                <tr>
                  <td>.thumb-tack</td>
                  <td style={{color:'red'}}>N/A</td>
                </tr>

                <tr>
                  <td>.times</td>
                  <td>.remove-lg-* , remove-sm-*</td>
                </tr>

                <tr>
                  <td>.times-circle-o</td>
                  <td>.item-remove-*</td>
                </tr>

                <tr>
                  <td>.trash-o</td>
                  <td>.delete-*</td>
                </tr>

                <tr>
                  <td>.users</td>
                  <td>.group-*</td>
                </tr>

                <tr>
                  <td>.user</td>
                  <td>.person-*</td>
                </tr>

                <tr>
                  <td>.info-circle</td>
                  <td>.info-fill-* , info-outline-*</td>
                </tr>

                <tr>
                  <td>.file-o</td>
                  <td>.file-*</td>
                </tr>

                <tr>
                  <td>.calendar</td>
                  <td>.calendar-*</td>
                </tr>

                <tr>
                  <td>.square-o</td>
                  <td>.checkbox-off-*</td>
                </tr>

                <tr>
                  <td>.check square-o</td>
                  <td>.checkbox-on-*</td>
                </tr>

                <tr>
                  <td>.ban</td>
                  <td>.ban-*</td>
                </tr>

                <tr>
                  <td>.camera</td>
                  <td>.camera-*</td>
                </tr>

                <tr>
                  <td>.clock-o</td>
                  <td>.clock-*</td>
                </tr>

                <tr>
                  <td>.exclamation-circle</td>
                  <td>.warning-*</td>
                </tr>

                <tr>
                  <td>.bell</td>
                  <td>.notification-* , new-notification-9</td>
                </tr>

                <tr>
                  <td>.archive</td>
                  <td>.archive-*</td>
                </tr>

                <tr>
                  <td>.question-circle</td>
                  <td>.help-fill-*</td>
                </tr>
                <tr>
                  <td>.heart</td>
                  <td>.favorite-on-</td>
                </tr>
                <tr>
                  <td>.heart-o</td>
                  <td>.favorite-off-*</td>
                </tr>

                <tr>
                  <td>.laptop</td>
                  <td>.desktop-*</td>
                </tr>

                <tr>
                  <td>.book</td>
                  <td>.book-*</td>
                </tr>

                <tr>
                  <td>.list-ul</td>
                  <td>.view-list-*</td>
                </tr>

                <tr>
                  <td>.th-large</td>
                  <td>.view-tile-*</td>
                </tr>

                <tr>
                  <td>.newspaper-o</td>
                  <td style={{color:'red'}}>N/A</td>
                </tr>

                <tr>
                  <td>.suitcase</td>
                  <td>.archive-*</td>
                </tr>

                <tr>
                  <td>.video-camera</td>
                  <td>.camera-video-*</td>
                </tr>

                <tr>
                  <td>.picture-o</td>
                  <td>.image-*</td>
                </tr>

                <tr>
                  <td>.caret-right</td>
                  <td>.pivot-close-*</td>
                </tr>

                <tr>
                  <td>.caret-down</td>
                  <td>.pivot-open-*</td>
                </tr>

                <tr>
                  <td>.lightbulb-o</td>
                  <td>.tip-*</td>
                </tr>

                <tr>
                  <td>.shopping-cart</td>
                  <td style={{color:'red'}}>N/A</td>
                </tr>


                </tbody>
              </table>
            </div>

            <div className="col-lg-7">
              <div className="form-group">
                <h4><b><i>pearson-elements-v0 markup</i></b></h4>
                <p>
                  <textarea
                    className="form-control"
                    rows="12"
                    placeholder="Markup v0"
                    onChange={this.handleOnChangeV0}
                    value={this.state.inputHTMLStr}
                    style={{fontSize:16,padding:15}}
                    >
                  </textarea>
                </p>

                <button className="btn btn-primary btn-lg pull-right"
                        href="#" role="button"
                        onClick={this.convertHTML}
                        style={{width:'100%'}}>
                  Convert Now...BOOM !!!! :)
                </button>
                <br/><br/>

              </div>
              <hr/>
              <div className="form-group">
                <h4><b><i>pearson-elements-v1 markup</i></b></h4>
                <textarea
                  className="form-control"
                  rows="12"
                  placeholder="Converted markup goes here"
                  value={this.state.convertedHTML}
                  style={{fontSize:16,padding:15}}>
                </textarea>
              </div>

            </div>
          </div>
        </div>
      </div>


    );
  }
}

/**
 *
 * @type {{}}
 */
StyleMigrator.propTypes = {};

/**
 *
 * @type {{}}
 */
StyleMigrator.defaultProps = {};

export default StyleMigrator;
