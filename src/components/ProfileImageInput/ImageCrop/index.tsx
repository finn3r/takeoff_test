import React, {useEffect, useState} from 'react';
import ReactCrop, {Crop} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './ImageCrop.css';
import * as ST from '../../../styled';

interface IImageCropProps {
    image?: File,

    setImage(newImage: string): void,

    clearUploadImage(): void
}

const ImageCrop: React.FC<IImageCropProps> = ({image, setImage, clearUploadImage}) => {
    const [crop, setCrop] = useState<Crop>();

    useEffect(() => {
        setCrop(undefined);
    }, [image]);

    const cropImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (crop && image && crop.width !== 0) {
            let inputImage = new Image();
            inputImage.onload = () => {
                const ImageContainer = document.getElementById("image_crop_photo");
                const scale = inputImage.width / ImageContainer!.offsetWidth;
                const outputImage = document.createElement('canvas');
                const ctx = outputImage.getContext('2d');
                outputImage.height = crop.height * scale;
                outputImage.width = crop.width * scale;
                ctx!.drawImage(inputImage, crop.x * scale, crop.y * scale, crop.width * scale, crop.height * scale, 0, 0, crop.width * scale, crop.height * scale);
                setImage(outputImage.toDataURL("image/png"));
                clearUploadImage();
            }
            inputImage.src = URL.createObjectURL(image);
        } else clearUploadImage();
    }

    return (image ?
        <ST.ImageCropContainer>
            <ReactCrop crop={crop} onChange={c => setCrop(c)} aspect={1} circularCrop={true} minWidth={5} minHeight={5}>
                <ST.ImageCropPhoto src={URL.createObjectURL(image)} alt="" id={"image_crop_photo"}/>
            </ReactCrop>
            <ST.ImageCropButton onClick={cropImage}>Выбрать</ST.ImageCropButton>
        </ST.ImageCropContainer>
        : null);
};

export default ImageCrop;