export default function Users() {
    /* falsey values  false 0 "" NaN undeinfed null */

    let users = [
        { name: "ram", status: true },
        { name: "hari", status: true },
        { name: "sita", status: false },
        { name: "gita", status: true },
        { name: "rita", status: false },
        { name: "abc", status: false },
        { name: "xyz", status: true },
    ]

    return (
        <div>
            <h2>Users List</h2>
            {true}
            {false}
            <ul>
                {users.map((user) => {
                    return (
                        <li key={user.name}>
                            {user.name} ( {user.status ? "yes" : "no"} ){" "}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

// export default Users
