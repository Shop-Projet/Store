import React from 'react';
import ImageUploading from 'react-images-uploading';

export function ImagePicker() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 3;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div >
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
             <img src="/images/imagePicker/image-picker.PNG" alt=""  />
            </button>
            &nbsp;
            <div className="d-flex justify-content-center ">
            {imageList.map((image, index) => (
              <div key={index}  className="pr-3 pt-2">
                <img src={image['data_url']} alt="" style={{width:"180px", height:"150px"}}  className="rounded mx-auto d-block img-fluid img-thumbnail"/>
                <div className="image-item__btn-wrapper">
                  <button className="edit-vente-color" onClick={() => onImageUpdate(index)}><i className="icon-edit"></i></button>
                  <button className="edit-vente-color" onClick={() => onImageRemove(index)}><i className="icon-close"></i></button>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
     
      </ImageUploading>
    </div>
  );
}