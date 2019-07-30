import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';



function App(props) {

 const [login, setLogin] = useState('')
 const [avatar, setAvatar] = useState('')
 const [name, setName] = useState('')
 const [follow, setFollow] = useState('')
 const [bio, setBio] = useState('')
 const [location, setLocation] = useState('')
 const [orginizations, setOrginizations] = useState('')
 const [repos, setRepos] = useState([])
 const [id, setId] = useState('')
 const [number, setNumber] = useState('')
 const [followers, setFollowers] = useState('')
 const [following, setFollowing] = useState('')
 const [email, setEmail] = useState('')


 



 useEffect(() => {
  
  axios.get("https://api.github.com/users/Jimmers0/repos").then(resp => {

        setRepos(resp.data)
        
        
        
      })




 axios.get("https://api.github.com/users/Jimmers0").then(resp => {
        
        setLogin(resp.data.login)
        setAvatar(resp.data.avatar_url)
        setName(resp.data.name)
        setFollow(resp.data.following_url)
        setBio(resp.data.bio)
        setLocation(resp.data.location)
        setOrginizations(resp.data.organizations_url)
        setId(resp.data.full_name)
        setNumber(resp.data.public_repos)
        setFollowers(resp.data.followers)
        setFollowing(resp.data.following)
        setEmail(resp.data.email)
        
      })




}, []);




 
  
  return (

    <div>


    <div className="nav">
      <div className="cat"></div> 
      <div className="navcontainer">
      <input type="text" placeholder="Search or jump to..." className="search" ></input>
      <div className="pull">Pull requests</div>
      <div className="issues">Issues</div>
      <div className="market">Marketplace</div>
      <div className="explore">Explore</div>
      <div className="iconcontainer">
      <div><MaterialIcon icon="notifications" color={colorPalette.grey._50}/></div>
      <div><MaterialIcon icon="add" color={colorPalette.grey._50}/></div>
      <div><MaterialIcon icon="arrow_drop_down" color={colorPalette.grey._50}/></div>
      <div><img className="navavatar" src={avatar} alt="smallava"></img></div>
      <div><MaterialIcon icon="arrow_drop_down" color={colorPalette.grey._50}/></div>
      </div>
      </div>
      


    </div>

    <div className="maincontainer">
    
    <div className="usercontainer">


      <div className="avatarcontainer"  key={id}><img className="avatar" src={avatar} alt="avatar"/></div>
      
      <div className="username">{name}</div>
      <div className="loginname">{login}</div>
      <div className="loginname">{email}</div>
      <a className="link" href={follow}>
      <div className="follow">Follow</div>
      </a>
      <div className="bio">{bio}</div>
      
      <div className="location"> <MaterialIcon icon="location_on" color={colorPalette.grey._900} /> {location} </div>
      <a  className="link" href={orginizations}>
      <div className="org">Orginizations</div>
      </a>

      </div>

      <div className="repos">

        <div className="tabs">
          <div className="tab">Overview </div>
          <div className="tab">Repositories<div className="circle">{number}</div></div>
          <div className="tab">Projects<div className="circle">0</div></div>
          <div className="tab">Stars<div className="circle">0</div></div>
          <div className="tab">Followers<div className="circle">{followers}</div></div>
          <div className="tab">Following<div className="circle">{following}</div></div>
          
        </div>

        <div className="repoaction">
          <input className="searchrepo" type="text" placeholder="Find a repository...">
          </input>
          <div className="all">Type: All<MaterialIcon icon="arrow_drop_down" color={colorPalette.grey._500}/> </div>
          <div className="all">Language: All<MaterialIcon icon="arrow_drop_down" color={colorPalette.grey._500}/> </div>
          

        </div>

      
       {repos.map(result => (
                  
                  
                  
                  <div key={result.full_name} className="repocontainer" >
                    <ul>
                      <li>
                  <div><a className="reponame" href={result.html_url}> {result.name} </a></div>
                  <div className="description">{result.description}</div>

                  <div className="info">
                  <div className="language">{result.language}</div>
                  <div className="update">Last updated: {result.updated_at}</div>

                  </div>
                  <div className="star"><div className="thestar"><MaterialIcon icon="star_rate" color={colorPalette.grey._500}/></div><div className="staricon">Star</div></div>
                  </li>
                  </ul>
                  </div>

                  

                





                
               



               
                ))}
                </div>
      </div>
    </div>
    
  )
}

export default App