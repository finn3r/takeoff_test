import React, {useState} from 'react';
import * as ST from "../../styled";
import def_img from "../../assets/DefaultContactImage.png";
import {ReactComponent as AddPhotoButton} from "../../assets/AddPhotoIcon.svg";
import ImageCrop from "./ImageCrop";

interface IProfileImageInputProps {
    croppedImage: string | undefined;

    setCroppedImage(image: string): void
}

const ProfileImageInput: React.FC<IProfileImageInputProps> = ({croppedImage, setCroppedImage}) => {
    const [uploadedImage, setUploadedImage] = useState<File>();

    return (
        <>
            <ImageCrop image={uploadedImage} setImage={setCroppedImage}
                       clearUploadImage={() => setUploadedImage(undefined)}/>
            <ST.ImageInputContainer>
                <ST.ImageInputContent>
                    <ST.ProfileImage src={croppedImage ? croppedImage : def_img}/>
                </ST.ImageInputContent>
                <ST.AddPhotoButtonContainer htmlFor={"upload-photo"}>
                    <AddPhotoButton/>
                </ST.AddPhotoButtonContainer>
                <ST.AddPhotoButtonInput
                    type="file" accept="image/*" id={"upload-photo"}
                    onChange={(e) => {
                        setUploadedImage(e.target.files?.[0]);
                        e.target.value = '';
                    }}
                />
            </ST.ImageInputContainer>
        </>
    );
};

export default ProfileImageInput;