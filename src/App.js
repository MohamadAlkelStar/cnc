import React, {Component} from 'react';
import './App.scss';
import Logo from './logo.png'
import Car from './car.jpg'
import Picker from 'react-mobile-picker';



class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      valueGroups: {
        firstName: 'Select Preferred Showroom',
        secondName: 'Select Car Model'
      }, 
      optionGroups: {
        firstName: ['Select Preferred Showroom', 'Petaling Jaya', 'Mutiara Damansara', 'Glenmarie',  'Cheras', 'City Store', 'Johor Bahru', 'Ipoh', 'Georgetown', 'Juru', 'Alor Setar'],
        secondName: ['Select Car Model','A-Class', 'C-Class' , 'CLA, E-Class', 'GLA', 'GLC', 'S-Class', 'Others']
      }
    };
  }
 
  // Update the value in response to user picking event
  handleChange = (name, value) => {
    this.setState(({valueGroups}) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));
  };
 
  render() {
    const {optionGroups, valueGroups} = this.state;
 
    return (
    <div className="warp">
      <div className="warpForm">

        <div className="warpHeader">
          <div className=" col-md-6">
            <img src={Logo} alt="logo" />
          </div>
          <div className=" col-md-6">
              <p>Telephone : +603 7866 1100 <br/> Email : aftersales@cyclecarriage.com.my</p>
          </div>
        </div>
        
        <div className="warpImage">
          <img src={Car} alt="car " />
        </div>

        <div className="warpInput">
          <p>I would like to know more about Mercedes-Benz Certified car.<br/>Fill in your details below:</p>
        </div>


        <div className="wrapper">
  <form>
    <div className="group">
      <input type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Name</label>
    </div>
    <div className="group">
      <input type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Email</label>
    </div>
    <div className="group">
      <input type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Phone Number</label>
    </div>
    
  </form>
    
    <Picker
        className="picker"
        optionGroups={optionGroups}
        valueGroups={valueGroups}
        onChange={this.handleChange} />
        <br/><br/>

<input class="styled-checkbox" id="styled-checkbox-4" type="checkbox" value="value4"/>
    <label className="hello" for="styled-checkbox-4">I hereby grant my consent for the data gathered in relation to this contact to be processed and used by Jardines Cycle & Carriage Group and Daimler Group for the purposes of advising and informing me about products, services and similar activities of the Daimler Group by telephone and e-mail.</label>
<h2 className="btnCnc"> Submit </h2>
</div>





      </div>
    </div>
  );
}
}
export default App;




