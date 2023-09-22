import { useState } from "react"
import { useHistory } from "react-router-dom";

function Profile() {
    var history = useHistory();
    const [textbox, setBox] = useState({ username: window.sessionStorage.getItem("username"), usermobi: window.sessionStorage.getItem("usermobi"), userpin: window.sessionStorage.getItem("userpin") });
    const [currnetx, setCurrent] = useState({ userID: window.sessionStorage.getItem("userid"), username: window.sessionStorage.getItem("username"), usermobi: window.sessionStorage.getItem("usermobi"), userpin: window.sessionStorage.getItem("userpin") })
   

    var onTextChange = (args) => {
        var copyOfemp = { ...textbox };
        copyOfemp[args.target.name] = args.target.value;
        setBox(copyOfemp);
    }

    var refreshx = () => {
        setCurrent({ userID: window.sessionStorage.getItem("userid"), username: textbox.username, usermobi: textbox.usermobi, userpin: textbox.userpin })
    }
    var Logoutx=()=>
    {
        window.sessionStorage.setItem("isUserLoggedIn" , "false");
        window.sessionStorage.removeItem("userid")
        window.sessionStorage.removeItem("username")
        window.sessionStorage.removeItem("usermobi")
        window.sessionStorage.removeItem("userpin")

        history.push("/profile");
    }

    var updRcord = () => {
        var helper = new XMLHttpRequest();
        var data1 = {
            "custname": textbox.username,
            "mobileno": textbox.usermobi,
            "pin": textbox.userpin

        }
        helper.onreadystatechange =
            () => {

                if (helper.status == 200 && helper.readyState == 4) {
                    var data = JSON.parse(helper.responseText)
                    if (data.affectedRows > 0) {
                        console.log(data);


                        window.sessionStorage.setItem("username", textbox.username);
                        window.sessionStorage.setItem("usermobi", textbox.usermobi);
                        window.sessionStorage.setItem("userpin", textbox.userpin);
                        refreshx();
                        // setShow(true);
                        // setmsg("Update Successfully");
                        // refreshx();
                    }
                    else {
                        console.log(data);
                    }
                }
            }
        helper.open("PUT", "http://localhost:5000/login/" + window.sessionStorage.getItem("userid"))
        helper.setRequestHeader("content-type", "application/json");
        helper.send(JSON.stringify(data1));
    }

   

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td colSpan={2}>
                            Welcome {window.sessionStorage.getItem("username")}
                        </td>
                    </tr>
                    <tr>
                        <th>Fields</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Customer ID</td>
                        <td>{currnetx.userID}</td>
                    </tr>
                    <tr>
                        <td>Customer Name</td>
                        <td>{currnetx.username}</td>
                    </tr>
                    <tr>
                        <td>Mobile</td>
                        <td>{currnetx.usermobi}</td>
                    </tr>
                    <tr>
                        <td>PIN</td>
                        <td>{currnetx.userpin}</td>
                    </tr>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>


                    <tr>
                        <td>Customer Name</td>
                        <td><input type="text" value={textbox.username} name="username" onChange={onTextChange}></input></td>
                    </tr>
                    <tr>
                        <td>Mobile</td>
                        <td><input type="text" value={textbox.usermobi} name="usermobi" onChange={onTextChange}></input></td>
                    </tr>
                    <tr>
                        <td>PIN</td>
                        <td><input type="text" value={textbox.userpin} name="userpin" onChange={onTextChange}></input></td>
                    </tr>

                    <tr>
                        <td><button onClick={updRcord}>Update</button> <button onClick={Logoutx}>Logout</button></td>
                    </tr>


                </tbody>

            </table>
        </div>
    )
}
export default Profile