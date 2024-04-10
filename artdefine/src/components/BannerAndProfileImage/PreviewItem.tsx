
const PreviewItem: React.FC<{imageSource:string, currentImageSource: string, isChanged: boolean}> = ({ imageSource : newSrc, currentImageSource: currentSrc, isChanged } ) => {
  
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