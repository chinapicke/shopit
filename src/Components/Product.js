
function Product(props) {
    
    return (
        // <div className="bg-opacity-50 fixed bg-black backdrop-blur-sm flex-justify-center">
        //     <p>This is the modal that will be shown with the product information and pictures</p>
        //     <button onClick={props.close}>Close modal</button>

        // </div>
        <div>
            <p>Modal is opened</p>
            <button onClick={props.close}>Close</button>
        </div>

    )
}

export default Product