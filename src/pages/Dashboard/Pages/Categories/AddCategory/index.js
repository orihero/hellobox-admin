import React, {useRef} from 'react';
import {Container} from "../../Prodocts/style";
import {CanacelSaveContainer, Cancel, AllContainer, Input} from "../../Prodocts/Addnew/style";
import {NavLink, useHistory} from "react-router-dom";
import Swal from "sweetalert2";
import {requests} from "../../../../../api/requests";

const AddCategory = () => {
    const nameRef=useRef(null)
    let history = useHistory();
    let onSave = async () => {
        try {
            Swal.showLoading(Swal.getDenyButton());
            let res = await requests.category.createCategory({
                name: nameRef.current.value,
            });
            Swal.hideLoading();
            await Swal.fire(
                'Success',
                `${nameRef.current.value} has been successfully added`,
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

export default AddCategory;
