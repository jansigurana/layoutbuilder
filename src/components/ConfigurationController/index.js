// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'
const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleshowContent,
        onToggleshowLeftNavbar,
        onToggleshowRighttNavbar,
      } = value
      const onChangeContent = () => {
        onToggleshowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleshowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleshowRighttNavbar(event.target.value)
      }
      return (
        <div className="configuration-controls-container">
          <div className="responsive-controls-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  checked={showContent}
                  onChange={onChangeContent}
                  type="checkbox"
                  id="content"
                />
                <label className="label-text" htmlFor="context">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                  type="checkbox"
                  id="leftNavbar"
                />
                <label className="label-text" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input  
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                  type="checkbox"
                  id="rightNavbar"
                />
                <label className="label-text" htmlFor="rightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
