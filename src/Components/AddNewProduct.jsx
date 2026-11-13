

export default function AddNewProduct() {
    return (
        <div className="form-div">
            <h5>Add New Product</h5>
            <form className="form-element" >
                <input
                    className="form-input"
                    type="text"
                    name="id"
                    placeholder="Enter Id"
                />
                <input
                    className="form-input"
                    name="title"
                    placeholder="Enter Title"

                />
                <input
                    className="form-input"
                    name="price"
                    placeholder="Enter Price"
                />
                <input
                    className="form-input"
                    name="image"
                    placeholder="Paste Image Link"
                />
                <input
                    className="form-input"
                    name="isAvailable"
                    placeholder="Product is available"
                />
                <button type="submit">Add Item</button>
            </form>
        </div>
    )
}