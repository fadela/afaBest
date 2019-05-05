import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';

class ImageUpload1 extends Component {
    onClick(ev) {
      console.log("Sending a GET API Call !!!");
      axios.get('http://127.0.0.1:8000')
      .then(res => {
              console.log(res);
      }).then(response => {
          console.log(JSON.stringify(response));
      })    
  }
  
  /*uploadImage(){
    axios('http://127.0.0.1:8000',{
      method: "POST",
      //body: file,
    })
    .then( response => response.json())
    .then(success => {
      
    })
    .catch(error => console.log(error)
    )
  }
  */
  constructor(props) {
    super(props);
     this.state = { pictures: [] };
     this.onDrop = this.onDrop.bind(this);
  }
  
  onDrop(picture) {
    this.setState({
            pictures: this.state.pictures.concat(picture),
        });
  }
  
    render() {
      return (
        <div >
          <button type="button" onClick={this.onClick}>Send GET /products </button>
          <ImageUploader
                  withIcon={true}
                  buttonText='Choose images'
                  onChange={this.onDrop}
                  imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
          style={{ maxWidth: '1500px', margin: "20px auto" }}
          withPreview={true}
              />
        <button type="button" onClick={this.uploadImage}>Upload Image</button>
        </div>
      );
    }
  }
  
  export default ImageUpload1;
  