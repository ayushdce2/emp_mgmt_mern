
import { ToastContainer } from "react-toastify";
import useLogout from './hook/useLogout.jsx';
import useFetchUserDetails from "../pages/hook/useFetchUserDetails.jsx";


const Home = () => {

  const { loggedInUser, handleLogout } = useLogout();
  const { userProfileDetails } = useFetchUserDetails();

  return (
    <>

      <div>{loggedInUser}</div>
      <button onClick={handleLogout}>LOGOUT</button>

      <div>
        <ul>
          {
            userProfileDetails?.map((data, index) => {

              return (
                <>
                  <div key={index}>
                    <p>Name - {data.name} </p>
                    <p>Email - {data.email} </p>
                    <p>
                      Joined On - {new Date(data.joinedOn).toLocaleString("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}

                    </p>
                  </div>
                </>
              )

            })
          }
        </ul>
      </div>




      <ToastContainer />
    </>
  )
}

export default Home