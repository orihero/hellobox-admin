import React, {useRef} from 'react';
import {AllContainer, CanacelSaveContainer, Cancel, Input} from "../../Prodocts/Addnew/style";
import {NavLink, useHistory} from "react-router-dom";
import {Container} from "../../Prodocts/style";
import Swal from "sweetalert2";
import {requests} from "../../../../../api/requests";

const EditCategory = (props) => {
    let history = useHistory();
    const id =props.location.editProps.id
    const name =props.location.editProps.name
    const nameRef=useRef(null)
    let onSave = async () => {
        try {
            Swal.showLoading(Swal.getDenyButton());
            let res = await requests.category.editCategory({
                id:id,
                name: nameRef.current.value,
            });

            Swal.hideLoading();
            await Swal.fire(
                'Success',
                `${nameRef.current.value} has been successfully edited`,
                'success'
            );
            history.push('/dashboard/categories');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <Container>
                <AllContainer>
                    <Input
                        placeholder='name'
                        defaultValue={name}
                        ref={nameRef}
                    />
                </AllContainer>
                <CanacelSaveContainer>
                    <Cancel><NavLink style={{textDecoration:"none"}} to="/dashboard/categories">Cancel</NavLink></Cancel>
                    <Cancel
                        onClick={onSave}
                    >Save</Cancel>
                </CanacelSaveContainer>
            </Container>
        </>
    );
};

export default EditCategory;
