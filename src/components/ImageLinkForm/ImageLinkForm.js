import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit }) =>{
	return (
		<div>
		<p className='f3'>
        {'This Magic Brain will detect faces in your pictures, give it a try.'}
		</p>
		<div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='bg-lightest-blue hover-bg-black hover-white pa2 f4 w-120 center br3' type='text' 
          onChange={onInputChange}/>
          <button className='w-30 tc b grow pointer br3 f4 ml2 link ph3 pb2 dib black btn'
          onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
	</div>
	);
}

export default ImageLinkForm;