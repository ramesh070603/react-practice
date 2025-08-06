import axios from "axios"
import { useEffect, useState } from "react"

export const UserList = () => {

    let [users, setUsers] = useState([])
    let [usersData, setUsersData] = useState([])
    let searchBox = ''

    useEffect(() => {
        async function userData() {
            let { data } = await axios.get('https://dummyjson.com/users')
            setUsers(data.users)
            setUsersData(data.users)
        }
        userData()
    }, [])

    //Fliter
    function filterData(e) {
        searchBox = e.target.value

        let tempData = usersData.filter(person => person.firstName.toLowerCase().includes(searchBox.toLowerCase()))
        setUsers(tempData)
    }

    //Delete
    async function deleteData(person) {
        let apiData = await axios.delete('https://dummyjson.com/users/' + person.id)
        let tempData = users.filter(userD => userD.id != person.id)
        setUsers(tempData)
    }

    //Sort
    function sortData() {
        let tempData = users.sort((a, b) => {
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
                return 1
            }
            else {
                return -1
            }
        })
        setUsers([...tempData])
    }
    let [name, setName] = useState([])
    let [lastname, setLastName] = useState([])
    let [email, setEmail] = useState([])
    let [gender, setGender] = useState([])
    //Edit
    function editData(person) {
        setName(person.firstName)
        setLastName(person.lastName)
        setEmail(person.email)
        setGender(person.gender)
    }


    return (
        <>
            <div className="container-Fluid mt-5 shadow">
                <div className="col-4 shadow mb-5">
                    <input type="text" className="form-control" onChange={(e) => filterData(e)} />
                </div>
                <div className="row ">
                    <div className="col-9">
                        <table className=" table table-hover table-light table-striped">
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th onClick={() => sortData()}>FirstName</th>
                                    <th>LastName</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    users.map(person => (
                                        <tr>
                                            <td>{person.id}</td>
                                            <td>{person.firstName}</td>
                                            <td>{person.lastName}</td>
                                            <td>{person.email}</td>
                                            <td>{person.gender}</td>
                                            <td><button className="btn btn-warning" onClick={() => editData(person)}>Edit</button></td>
                                            <td><button className="btn btn-danger" onClick={() => deleteData(person)}>Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-3 shadow">
                        <label htmlFor="" className="label-form">Name</label>
                        <input type="text" className="form-control" value={name} />
                        <label htmlFor="" className="label-form">LastName</label>
                        <input type="text" className="form-control" value={lastname} />
                        <label htmlFor="" className="label-form">Email</label>
                        <input type="email" className="form-control" value={email} />
                        <label htmlFor="" className="label-form">Gender</label>
                        <input type="text" className="form-control" value={gender} />
                        <button className="btn btn-warning mt-4">Update</button>
                    </div>
                </div>
            </div>
        </>
    )
}