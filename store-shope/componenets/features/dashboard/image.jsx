import React from 'react';
import ImageUploading from "react-images-uploading";



export default function Image_profile(props) {
    const {images, setImages} = props;
    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
      };
      console.log(props);

    return (
        <div>
            <ImageUploading
                              multiple
                              value={images}
                              onChange={onChange}
                              maxNumber={1}
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
                                <div className="row">
                                  <button
                                    style={
                                      isDragging ? { color: "red" } : undefined
                                    }
                                    onClick={onImageUpload}
                                    {...dragProps}
                                  >
                                   {true ? <img
                                      src="/images/imagePicker/image-picker.PNG"
                                      alt=""
                                    />: ''}
                                  </button>
                                  &nbsp;
                                  <div className="d-flex justify-content-center ">
                                    {imageList.map((image, index) => (
                                      <div key={index} className="pr-3 pt-2">
                                        <img
                                          src={image["data_url"]}
                                          alt=""
                                          style={{
                                            width: "180px",
                                            height: "150px",
                                          }}
                                          className="rounded mx-auto d-block img-fluid img-thumbnail"
                                        />
                                        <div className="image-item__btn-wrapper" style={{textAlign:"center"}}>
                                          <button
                                            className="edit-vente-color"
                                            onClick={() => onImageUpdate(index)}
                                          >
                                            <i className="icon-edit"></i>
                                          </button>
                                          <button
                                            className="edit-vente-color"
                                            onClick={() => onImageRemove(index)}
                                          >
                                            <i className="icon-close"></i>
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </ImageUploading>
        </div>
    )
}
