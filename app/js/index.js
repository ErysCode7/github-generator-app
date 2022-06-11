const searchBtn = document.querySelector("#search-btn")
const searchInput = document.querySelector("#search")
const errorMsg = document.querySelector("[data-error-msg]")

export const mainContents = document.querySelector("#main-contents");


const userImg = document.querySelector("#user-img")
const userName = document.querySelector("#user-name")
const userUserName = document.querySelector("#user-username")
const userjoinAt = document.querySelector("#join-at")
const userBio = document.querySelector("#user-bio")
const userRepo = document.querySelector("#user-repo")
const userFollowers = document.querySelector("#user-followers")
const userFollowing = document.querySelector("#user-following")
const userLocation = document.querySelector("#user-location")
const userBlog = document.querySelector("#user-blog")
const userTwitter = document.querySelector("#user-twitter")
const userCompany = document.querySelector("#user-company")

const API_URL = `https://api.github.com/users/`
const ME_URL = `https://api.github.com/users/Eryscode7`


const getMe = async () => {
    errorMsg.classList.remove("show")
    const query = searchInput.value
    try {
        const response = await fetch(ME_URL)
        const data = await response.json()

        if (data.message == "Not Found") {
            errorMsg.classList.add("show")
        }



        const name = data.name
        const username = data.login
        const bio = data.bio
        const avatar = data.avatar_url
        const joinAt = data.created_at

        const repos = data.public_repos

        const followers = data.followers
        const following = data.following

        let location = data.location
        let twitter = data.twitter_username
        let company = data.company
        let blog = data.blog


        if (location == '' || location == null) {
            location = "Not Available"
        }

        if (twitter == '' || twitter == null) {
            twitter = "Not Available"
        }

        if (company == '' || company == null) {
            company = "Not Available"
        }

        if (blog == '' || blog == null) {
            blog = "Not Available"
        }

        userImg.src = avatar
        userName.innerText = name
        userUserName.innerText = username
        userjoinAt.innerText = joinAt
        userBio.innerText = bio

        userRepo.innerText = repos

        userFollowers.innerText = followers
        userFollowing.innerText = following
        userLocation.innerText = location

        userBlog.innerText = blog
        userTwitter.innerText = twitter
        userCompany.innerText = company

        if (mainContents) {
            const moon = document.querySelector("#moon")
            const sun = document.querySelector("#sun")
            const darkmodeIcon = document.querySelectorAll("[data-darkmode-icon]")
            const searchBar = document.querySelector("#search-bar")
            const searchBarInput = document.querySelector("#search-bar input")
            const usersRepo = document.querySelector("#users-repo")
            const usersBio = document.querySelector("#users-bio p")
            const userFlexLastP = document.querySelector("#user-flex .last")
            const socP = document.querySelectorAll(".soc p")
            const body = document.body

            const darkmode = () => {
                moon.classList.toggle("hide")
                sun.classList.toggle("hide")
                body.classList.toggle("darkmode")
                searchBar.classList.toggle("darkmode")
                usersRepo.classList.toggle("darkmode")
                searchBarInput.classList.toggle("darkmode")
                mainContents.classList.toggle("main-contents-darkmode")
                userBio.classList.toggle("white-text")
                userFlexLastP.classList.toggle("white-text")
                socP.forEach(p => p.classList.toggle("white-text"))
            }

            darkmodeIcon.forEach(dark => {
                dark.addEventListener("click", darkmode)
            })
        }

    } catch (err) {
        console.log(err)
    }
}


const getUsers = async () => {
    errorMsg.classList.remove("show")
    const query = searchInput.value
    try {
        const response = await fetch(API_URL + query)
        const data = await response.json()

        if (data.message == "Not Found") {
            errorMsg.classList.add("show")
        }


        const name = data.name
        const username = data.login
        const bio = data.bio
        const avatar = data.avatar_url
        const joinAt = data.created_at

        const repos = data.public_repos

        const followers = data.followers
        const following = data.following

        let location = data.location
        let twitter = data.twitter_username
        let company = data.company
        let blog = data.blog


        if (location == '' || location == null) {
            location = "Not Available"
        }

        if (twitter == '' || twitter == null) {
            twitter = "Not Available"
        }

        if (company == '' || company == null) {
            company = "Not Available"
        }

        if (blog == '' || blog == null) {
            blog = "Not Available"
        }

        userImg.src = avatar
        userName.innerText = name
        userUserName.innerText = username
        userjoinAt.innerText = joinAt
        userBio.innerText = bio

        userRepo.innerText = repos

        userFollowers.innerText = followers
        userFollowing.innerText = following
        userLocation.innerText = location

        userBlog.innerText = blog
        userTwitter.innerText = twitter
        userCompany.innerText = company



    } catch (err) {
        console.log(err)
    }
}



getMe()

searchBtn.addEventListener("click", getUsers)

searchInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        getUsers()
    }
})


