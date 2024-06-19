const Product = (props) => {  //prps = {product :{}}
    let { thumbnail, title, description, price } = props.product // { title,description.... }
    return (
        <>
            <div className="project">
                <img className="" src={thumbnail} alt="" />
                <p>{title}</p>
                <p>{description}</p>
                <p>${price}</p>
            </div>
        </>
    )
}

export default Product
