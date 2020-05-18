import React, {useContext, useState} from "react";
import {Alert, Image, Modal} from "react-bootstrap";
import AuthContext from "../../contexts/Auth/authContext";
import UserContext from "../../contexts/User/userContext";


const PhotoUpload = (props) => {

    const authContext = useContext(AuthContext);
    const userContext = useContext(UserContext);
    const {user} = authContext;
    const [file, setFile] = useState("")
    const [model, setModel] = useState(false)
    const [alert, setAlert] = useState(false)
       console.log(user.image)
    const handel = (e) => {
        setFile(e.target.files[0]);
        setModel(true)
    }

    const uploadImage = () => {
        const formData = new FormData();

        formData.append(
            "image",
            file,
            file.name
        );

        if (file.type.startsWith('image')) {
            userContext.uploadImage(formData)
            setModel(false)
        } else setAlert(true)

    }
    return (
        <div>
            <Modal show={model} onHide={() => setModel(false)} className="modalz" dialogClassName="modal-width">
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title className="text-center w-100"><h2 className="font-weight-bolder modaltitle">Image
                        Confirmation </h2></Modal.Title>

                </Modal.Header>
                <Alert variant="danger" show={alert} onClose={() => setAlert(false)} className="alertz" dismissible>
                    invalid image type
                </Alert>
                <button onClick={uploadImage}>confirm</button>

            </Modal>

            {!(user.image === 'no-photo.jpg') ?
                <Image rounded style={{height: '80px'}} src={`./img/users/${user.image}`}/> :
                <div>
                    <label htmlFor="myInput">
                        <i className="fas fa-camera"/>
                    </label>
                    <input
                        id="myInput"
                        style={{display: 'none'}}
                        onChange={handel}
                        type="file"
                    />
                </div>
            }

        </div>)

}

export default PhotoUpload;