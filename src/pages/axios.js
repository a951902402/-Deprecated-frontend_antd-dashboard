import React, { Component } from 'react';
import axios from 'axios';

class TestMyself extends Component {
  constructor(props) {
    super(props)
    this.state = {
      devices: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    axios.get('http://localhost:80/antd-dashboard/test.php')
      .then(response => {
        this.setState({
          devices: response.data,
          isLoaded: true,
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          isLoaded: false,
          error: error,
        })
      })
  }
  render() {
    return (
      this.state.isLoaded ?
        this.state.devices.map((device) => {
          return (
            <tr key={device.id}>
              <td>{device.id} |</td>
              <td>{device.CPU} |</td>
              <td>{device.Memory} |</td>
              <td>{device.Disk} |</td>
              <td>{device.Platform} |</td>
            </tr>
          )
        }) : [<div>loading</div>]
    )
    
  }
}

export default TestMyself