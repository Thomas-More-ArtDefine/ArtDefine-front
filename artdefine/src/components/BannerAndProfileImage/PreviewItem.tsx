
const PreviewItem = ({ imageSource : src } : {imageSource:string}) => {
  
    return (
        <>
        <div className='item-title'>Original</div>
        <div className='item'>
            <img src={src} alt='Original' />
        </div>
        </>
    );
};




export default PreviewItem;