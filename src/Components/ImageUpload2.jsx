import React, { Component } from 'react';
import axios from 'axios';
class ImageUpload2 extends Component {
    constructor(props) {
        super(props);
          this.state = {
            file: '',
          }
        }    
  handleChange = event => {
      let file = event.target.files[0];
      console.log(file);
      this.setState({
        file: URL.createObjectURL(event.target.files[0])
    })
  }

  fileUploadHandler = () => {
      console.log(this.state.file)
      const fd = new FormData();
      fd.append('image', this.state.file, this.state.file.name)
      axios.post('http://127.0.0.1:8000', fd)
      .then(res => {
          console.log(res);
      })
  }
    render() {
      return (
     <div>
         <input style={{display: 'none'}}
          type="file"
          onChange={this.handleChange} 
          ref= {fileInput => this.fileInput = fileInput} />  
         <button onClick={ () => this.fileInput.click()}>Pick File</button> 
         <button onClick={this.fileUploadHandler}>Upload</button>
          <div>
          <img src={this.state.file}/>
          </div>
         
     </div>
      );
    }
  }
  
  export default ImageUpload2;
  