import AddNewProduct from "./AddNewProduct"


export default function SideNav() {



    return (

        <aside className="menu-container">
            <div className="menu show position-static">

                {/*Search Input Field */}
                <input className="search" type="text" name="search" placeholder="Search ..." />
                <span className="menu-text">Categories</span>

                <hr style={{ border: "0.2px dashed gray" }} />

                <a className="menu-item" href="#">View All</a>
                <a className="menu-item" href="#">Framework Laptop</a>
                <a className="menu-item" href="#">Mainboards</a>
                <a className="menu-item" href="#">Expansion cards</a>
                <a className="menu-item" href="#">Memory Storage</a>
                <a className="menu-item" href="#">Keyboards</a>
                <a className="menu-item" href="#">Parts</a>
                <a className="menu-item" href="#">Customization</a>
                <a className="menu-item" href="#">Tools</a>

            </div>

            <AddNewProduct />

        </aside>


    )
}