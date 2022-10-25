const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/'

//Post /api/users/register
export const registerUser = async (username, password) => {
  try {
    console.log(username, password)
    const response = await fetch(`${baseURL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          username,
          password
      })
    })
    const result = await response.json();
    console.log(result)
    return result;
  } catch(error) {
    console.error(error)
  }
}

//POST /api/users/login
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/login`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username,
          password
      })
    })
    
    const result = await response.json();
    return result;
    
  } catch(ex) {
    console.log(error)
  }
}

//GET /api/users/me
export const getUserDetails = async (token) => {
  try {
    const response = await fetch(`${baseURL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    
    const result = await response.json();
    return result;
    
  } catch(ex) {
    console.log('error getting users details')
  }
}

//GET /api/users/:username/routines
export const getAllRoutines = async () => {
  try {
    const response = await fetch(`${baseURL}/routines`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const results = await response.json();
    return results;
  } catch (ex) {
    console.error('error getting all routines')
  }
}

// export const getUserPublicRoutines = async (username) =>  {
//     const response = await fetch(`${baseURL}/routines`, {
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     });
//     const result = await response.json();
//     return results;
//    }catch (ex) {
//   console.error('error getting users public routines')
//  }
// }

//GET /api/activities
export const getAllActivities = async () => {
  try {
    const response = await fetch(`${baseURL}activities`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const results = await response.json();
    return results;
  } catch (ex) {
    console.error('error getting all activities')
  }
}

//POST /api/activities
export const createActivity = async (token, {name, description})=> {
  try {
    const response = await fetch(`${baseURL}/activities`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
          name,
          description
      })
    })
    
    const result = await response.json();
    return result;
  } catch(ex) {
    console.log('error creating activity')
  }
}

//PATCH /api/activities/:activityId
export const updateActivity = async (token, {activityId, activityName, description})=> {
  try { 
    const response = await fetch(`${baseURL}/activities/${activityId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          activityId,
          activityName,
          description
        }
      })
    })
    
    const result = await response.json();
    return result;  
  } catch(ex) {
    console.log('error updating post')
  }
}

//GET /api/activities/:activityId/routines
export const getActivities = async (username) =>  {
    const response = await fetch(`${baseURL}/activities`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const result = await response.json();
    return result;
};

//GET /api/routines
export const getRoutines = async(token) => {
  try {
    const response = await fetch(`${baseURL}/routines`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const results = await response.json();
    return results;
  } catch(error) {
    console.log('error getting all routines')
  }
}




// export const editActivity = async ({name, description}) => {
//   try {
//     const response = await fetch(`${baseURL}activities`
//   } catch(ex) {
//   }
// }


//POST /api/routines
export const createRoutine = async (token, { name, goal, isPublic }) => {
  try {
    const response = await fetch(`${baseURL}/routines`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
          name,
          goal,
          isPublic
      })
    })
    const result = await response.json();
    return result;
  } catch (ex) {
    console.error('error creating routine')
  }
}

//PATCH /api/routines/:routineId
export const updateRoutine = async (token, {routineId, isPublic, creatorId, routineName, goal})=> {
  try { 
    const response = await fetch(`${baseURL}/activities/${routineId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          routineId,
          creatorId,
          isPublic,
          routineName,
          goal
        }
      })
    })
    
    const result = await response.json();
    return result;  
  } catch(ex) {
    console.log('error updating post')
  }
}

//DELETE /api/routines/:routineId
// export const deleteRoutine = async (token, {id, name, goal, creatorId, isPublic}) => {
//   console.log(postID)
//   try{
//     const response = await fetch(`${baseURL}/routines/${userId}`, {
//       if(userId == routineId) {

//       }
//       method: "DELETE",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
// })
    
//     const data = await response.json();
//     return data;
//   } catch(ex) {
//     console.log(error)
//     console.log('error deleting post')
//   }
// }














// copied from Stranger's Things
// const baseURL = 'https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-PT'

// export const getPosts = async(token) => {
//   try {
//     const response = await fetch(`${baseURL}/posts`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     });
//     const results = await response.json();
//     return results;
//   } catch(error) {
//     console.log('error getting all posts')
//   }
// }


// export const registerUser = async (username, password) => {
//   try {
//     const response = await fetch(`${baseURL}/users/register`, {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         user: {
//           username: username,
//           password: password
//         }
//       })
//     })
//     const result = await response.json();
//     return result;
//   } catch(error) {
//     console.log('error registering user')
//   }
// }

// export const loginUser = async (username, password) => {
//   try {
//     const response = await fetch(`${baseURL}/users/login`,{
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         user: {
//           username,
//           password
//         }
//       })
//     })
    
//     const result = await response.json();
    
//     return result;
    
//   } catch(ex) {
//     console.log('error logging in user')
//   }
// }


// export const getUserDetails = async (token) => {
//   try {
//     const response = await fetch(`${baseURL}/users/me`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//     })
    
//     const result = await response.json();
//     return result;
    
//   } catch(ex) {
//     console.log('error getting users details')
//   }
// }


// export const createPost = async (token, {title, description, price, location, willDeliver})=> {
//   try {
//     const response = await fetch(`${baseURL}/posts`, {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify({
//         post: {
//           title,
//           description,
//           price,
//           location,
//           willDeliver
//         }
//       })
//     })
    
//     const result = await response.json();
//     return result;
//   } catch(ex) {
//     console.log('error creating a new post')
//   }
// }

// export const deletePost = async (token, postID) => {
//   console.log(postID)
//   try{
//     const response = await fetch(`${baseURL}/posts/${postID}`, {
//       method: "DELETE",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
// })
    
//     const data = await response.json();
//     return data;
//   } catch(ex) {
//     console.log(error)
//     console.log('error deleting post')
//   }
// }




// export const updatePost = async ({token, title, description, price, location, willDeliver, _id})=> {
//   try {
//     const response = await fetch(`${baseURL}/posts/${postID}`, {
//       method: "PATCH",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify({
//         post: {
//           title,
//           description,
//           price,
//           location,
//           willDeliver
//         }
//       })
//     })
    
//     const result = await response.json();
//     return result;  
//   } catch(ex) {
//     console.log('error updating post')
//   }
// }


// export const createMessage = async ({postID, token, message}) => {
//   try {
//     const respons = await fetch(`${baseURL}/posts/${postID}/messages`, {
//      method: 'POST',
//      headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`
//      },
//      body: JSON.stringify({
//       message
//      })
//     })
//   } catch(ex) {
//     console.log(ex)
//     console.log('error creating message')
//   }
// }