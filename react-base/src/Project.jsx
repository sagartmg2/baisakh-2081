function Project(props) {
    // console.log({ props })
    return (
        <div className="project">
            <h2 className="capitalize">
                {props.title} (Rs {props.price})
            </h2>
            <p>date: {props.date}</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus sapiente maiores beatae blanditiis architecto nobis
                natus eius voluptates praesentium veniam placeat perferendis
                dolores laudantium illo voluptate, unde aspernatur enim nam.
            </p>
        </div>
    )
}

export default Project