
const PreviewItem = ({ imageSource : newSrc, currentImageSource: currentSrc, isChanged } : {imageSource:string, currentImageSource: string, isChanged: boolean}) => {
  
    return (
        <div className="preview-item">
        <div className='item-title'>{isChanged ? 'Preview' : 'Original'}</div>
        <div className='item'>
           {isChanged ?  <img src={newSrc} alt='' /> : <img src={currentSrc} alt='' /> }
        </div>
        </div>
    );
};




export default PreviewItem;