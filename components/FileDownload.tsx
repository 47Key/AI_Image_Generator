import React, { useState, useEffect } from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';

const FileDownload = () => {
    const [ImageCheck, setImageCheck] = useState<Boolean>();
    const [ImageBlob, setImageBlob] =useState<Blob>();

    const imageDownloadHandler:any = () => {
        setImageCheck(true);
    }

    useEffect(() => {
        const blob = new Blob([]);

    }, [ImageCheck])

    return (
        <div className="flex flex-col items-center justify-center p-0.5 bg-gradient-to-r from-purple-400 to-rose-400">
            <a href="https://stablediffusion.0gku54smtinjm.us-east-1.cs.amazonlightsail.com/static/images/image.png" target="_blank" rel="noopener noreferrer" download="image.jpeg">
                <button onClick={imageDownloadHandler} className="flex items-center justify-center bg-gray-900">
                    <MdOutlineFileDownload size={50} />
                </button>
            </a>
        </div>
    );
}

export default FileDownload;