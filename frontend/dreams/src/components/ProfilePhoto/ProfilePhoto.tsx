import React, { useRef, useState } from 'react';
import CameraIcon from '../../assets/profile-photo/profile-photo.svg';
import Editicon from '../../assets/profile-photo/edit-icon.svg';
import Delete from '../../assets/profile-photo/delete-icon.svg';
import {
    MainContainer,
    Container,
    Background,
    ImageRow,
    ImgInput,
    ImageBox,
    Title,
    SvgIcon,
    Dropdown,
    DropdownItem,
    EditIcon,
    DeleteIcon,
    EditButton,
} from './ProfilePhotosStyle';

const PhotoInput: React.FC = () => {
    const [selectedPhotos, setSelectedPhotos] = useState<(string | null)[]>([
        null,
        null,
        null,
        null,
        null,
    ]);
    const inputRefs: React.RefObject<HTMLInputElement>[] = Array.from({ length: 5 }, () =>
        useRef<HTMLInputElement>(null)
    );
    const handlePhotoChange = (
        index: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            const newSelectedPhotos = [...selectedPhotos];
            newSelectedPhotos[index] = url;
            setSelectedPhotos(newSelectedPhotos);
        }
    };

    const handleDeletePhoto = (index: number) => {
        const newSelectedPhotos = [...selectedPhotos];
        newSelectedPhotos[index] = null;
        setSelectedPhotos(newSelectedPhotos);
    };

    const handleEditPhoto = (index: number) => {
        const input = inputRefs[index];
        if (input && input.current) {
            input.current.click();
        }
    };

    return (
        <MainContainer>
            <Container>
                <Title>Profile Photos</Title>
                <ImageBox background={selectedPhotos[0]} width="378px" height="201px">
                    <SvgIcon visible={!selectedPhotos[0]}>
                        <img src={CameraIcon} alt="" />
                    </SvgIcon>
                    <Dropdown visible={selectedPhotos[0]}>
                        <DropdownItem onClick={() => handleEditPhoto(0)}>
                            <EditIcon>
                                <img src={Editicon} alt="" />
                            </EditIcon>
                            Edit
                        </DropdownItem>
                        <DropdownItem onClick={() => handleDeletePhoto(0)}>
                            <DeleteIcon>
                                <img src={Delete} alt="" />
                            </DeleteIcon>
                            Delete
                        </DropdownItem>
                    </Dropdown>
                    <EditButton
                        visible={selectedPhotos[0]}
                        onClick={() => handleEditPhoto(0)}
                    >
                        <EditIcon>
                            <img src={Editicon} alt="" />
                        </EditIcon>
                    </EditButton>
                    <span>{selectedPhotos[0] ? '' : 'Add image'}</span>
                    <ImgInput
                        type="file"
                        accept="image/*"
                        onChange={(event) => handlePhotoChange(0, event)}
                        ref={inputRefs[0]}
                    />
                </ImageBox>
                <ImageRow>
                    {selectedPhotos.slice(1, 3).map((photo, index) => (
                        <Background key={index}>
                            <ImageBox background={photo} width="176px" height="101px">
                                <SvgIcon visible={!photo}>
                                    <img src={CameraIcon} alt="" />
                                </SvgIcon>
                                <Dropdown visible={photo}>
                                    <DropdownItem onClick={() => handleEditPhoto(index + 1)}>
                                        <EditIcon>
                                            <img src={Editicon} alt="" />
                                        </EditIcon>
                                        Edit
                                    </DropdownItem>
                                    <DropdownItem onClick={() => handleDeletePhoto(index + 1)}>
                                        <DeleteIcon>
                                            <img src={Delete} alt="" />
                                        </DeleteIcon>
                                        Delete
                                    </DropdownItem>
                                </Dropdown>
                                <EditButton
                                    visible={photo}
                                    onClick={() => handleEditPhoto(index + 1)}
                                >
                                    <EditIcon>
                                        <img src={Editicon} alt="" />
                                    </EditIcon>
                                </EditButton>
                                <span>{photo ? '' : 'Add image'}</span>
                                <ImgInput
                                    type="file"
                                    accept="image/*"
                                    onChange={(event) => handlePhotoChange(index + 1, event)}
                                    ref={inputRefs[index + 1]}
                                />
                            </ImageBox>
                        </Background>
                    ))}
                </ImageRow>
                <ImageRow>
                    {selectedPhotos.slice(3, 5).map((photo, index) => (
                        <Background key={index}>
                            <ImageBox background={photo} width="176px" height="101px">
                                <SvgIcon visible={!photo}>
                                    <img src={CameraIcon} alt="" />
                                </SvgIcon>
                                <Dropdown visible={photo}>
                                    <DropdownItem onClick={() => handleEditPhoto(index + 3)}>
                                        <EditIcon>
                                            <img src={Editicon} alt="" />
                                        </EditIcon>
                                        Edit
                                    </DropdownItem>
                                    <DropdownItem onClick={() => handleDeletePhoto(index + 3)}>
                                        <DeleteIcon>
                                            <img src={Delete} alt="" />
                                        </DeleteIcon>
                                        Delete
                                    </DropdownItem>
                                </Dropdown>
                                <EditButton
                                    visible={photo}
                                    onClick={() => handleEditPhoto(index + 3)}
                                >
                                    <EditIcon>
                                        <img src={Editicon} alt="" />
                                    </EditIcon>
                                </EditButton>
                                <span>{photo ? '' : 'Add image'}</span>
                                <ImgInput
                                    type="file"
                                    accept="image/*"
                                    onChange={(event) => handlePhotoChange(index + 3, event)}
                                    ref={inputRefs[index + 3]}
                                />
                            </ImageBox>
                        </Background>
                    ))}
                </ImageRow>
            </Container>
        </MainContainer>
    );
};


export default PhotoInput;
