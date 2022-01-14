import React, {useRef, useState} from 'react';
import {
    AdrssCityContactInput, AdrssCityContactInputT,
    AdrssCityContainer,
    Button,
    ButtonContainer,
    ButtonImageContainer,
    Container, ContainerSave,
    Image,
    ImageContainer, Input,
    InputContainer, Save
} from "../Addnew/style";
import Img from "../../../../../assests/image_2021-11-08_19-42-30.png";
import {useHistory} from "react-router-dom";
import {requests, url} from "../../../../../api/requests";
import s from "sweetalert2";

const EditPartner = (props) => {
    const id =props.location.editProps.id
    const names =props.location.editProps.name
    console.log(id,names)
    let _imageInput = useRef();
    let [image, setImage] = useState();
    let [name, setName] = useState("");
    let [adress, setAdrss] = useState("");
    let history = useHistory();
    const editNameRef=useRef(null)
    let onImageUpload = async (e, index) => {
        if (e.target.files.length > 0) {
            let form = new FormData();
            form.append("files", e.target.files[0]);
            try {
                let res = await requests.uploads.uploadImage(form);
                setImage({
                    name: e.target.files[1],
                    image_url: `${url}/file-download/${res.data[0]}`,
                });
            } catch (error) {
                alert(error);
            }
        }
    }
    let onUpload = () => {
        _imageInput.current.click();
    };
    let onAddPartner = async () => {
        try {
            s.showLoading();
            let res = await requests.partners.editPartner({
                id:id,
                name: editNameRef.current.value,
                image: image.image_url
            })
            s.hideLoading();
            await s.fire(
                'Success',
                `${name} has been successfully edited`,
                'success'
            )
            history.push("/dashboard/patners")
        } catch (error) {
            console.log({ error });
        }
    }
    return (
        <>
            <Container>
                <ButtonImageContainer>
                    <ImageContainer>
                        <Image src={!!image ? image.image_url : Img} />
                        <input
                            style={{
                                display: 'none',
                            }}
                            ref={_imageInput}
                            type={"file"}
                            name='image'
                            id="image-upload"
                            onChange={onImageUpload}
                        />
                    </ImageContainer>
                    <ButtonContainer>
                        <Button>Reset</Button>
                        <Button onClick={onUpload}>Upload</Button>
                    </ButtonContainer>
                </ButtonImageContainer>
                <InputContainer>
                    <Input
                        placeholder="name"
                        ref={editNameRef}
                        defaultValue={names}

                    />
                    <Input
                        placeholder="adress"
                        // value={adress}
                    />
                </InputContainer>
            </Container>
            <AdrssCityContainer>
                <AdrssCityContactInput placeholder="city" />
                <AdrssCityContactInput placeholder="region" />
                <AdrssCityContactInputT placeholder="address" />
            </AdrssCityContainer>
            <ContainerSave>
                <Save onClick={onAddPartner}>Edit</Save>
            </ContainerSave>
        </>
    );
};

export default EditPartner;
