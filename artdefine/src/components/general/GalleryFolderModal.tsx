const GalleryFolderModal: React.FC<{openMenu: React.Dispatch<React.SetStateAction<boolean>>}> = ({ openMenu }) => {
    return (
        <div className="folder-modal">  
        <div
        className="modalbackground"
        onClick={() => {
            openMenu(false);
        }}
      ></div>
            <div className="slideout-modal">
                <div className="header flex align-center justify-spacebetween"><span className="title">Folders</span><i className="material-icons clickable" onClick={() => console.log("open edit folder window")}>brush</i></div>
                <div className="content flex align-center direction-column">
                    <div className="foldercard flex direction-column direction-column align-center justify-spacebetween">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Die_Gartenlaube_%281893%29_b_181.jpg/619px-Die_Gartenlaube_%281893%29_b_181.jpg?20210827153319" alt="" />
                        <div>folder title</div>
                    </div>
                    <div className="foldercard flex direction-column align-center justify-spacebetween">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Die_Gartenlaube_%281893%29_b_181.jpg/619px-Die_Gartenlaube_%281893%29_b_181.jpg?20210827153319" alt="" />
                        <div>folder title</div>
                    </div>
                    <div className="foldercard flex direction-column align-center justify-spacebetween">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Die_Gartenlaube_%281893%29_b_181.jpg/619px-Die_Gartenlaube_%281893%29_b_181.jpg?20210827153319" alt="" />
                        <div>folder title</div>
                    </div>
                    <div className="foldercard flex direction-column align-center justify-spacebetween">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Die_Gartenlaube_%281893%29_b_181.jpg/619px-Die_Gartenlaube_%281893%29_b_181.jpg?20210827153319" alt="" />
                        <div>folder title</div>
                    </div>
                    <div className="foldercard flex direction-column align-center justify-spacebetween">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Die_Gartenlaube_%281893%29_b_181.jpg/619px-Die_Gartenlaube_%281893%29_b_181.jpg?20210827153319" alt="" />
                        <div>folder title</div>
                    </div>
                    <div className="foldercard flex direction-column align-center justify-spacebetween">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Die_Gartenlaube_%281893%29_b_181.jpg/619px-Die_Gartenlaube_%281893%29_b_181.jpg?20210827153319" alt="" />
                        <div>folder title</div>
                    </div>
                    <div className="foldercard flex direction-column align-center justify-spacebetween">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Die_Gartenlaube_%281893%29_b_181.jpg/619px-Die_Gartenlaube_%281893%29_b_181.jpg?20210827153319" alt="" />
                        <div>folder title</div>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default GalleryFolderModal;