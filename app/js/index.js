const searchBtn = document.querySelector("#search-btn")
const searchInput = document.querySelector("#search")
const errorMsg = document.querySelector("[data-error-msg]")

export const mainContents = document.querySelector("#main-contents");


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

        mainContents.innerHTML = `
        <div class="user-img">
                <img id="user-img" src="${avatar}" alt="${username}">
            </div>
            <div class="user-details">
                <div class="user-flex" id="user-flex">
                    <h1>${name}</h1>
                    <p class="primary">${username}</p>
                    <p class="last">${joinAt}</p>
                </div>
            </div>
            <div class="user-bio" id="users-bio">
                <p>${bio}</p>
            </div>
            <div class="users-repo flex flex-ai-c flex-jc-sb" id="users-repo">
                <div class="repo">
                    <h3>Repos</h3>
                    <p>${repos}</p>
                </div>
                <div class="repo">
                    <h3>Followers</h3>
                    <p>${followers}</p>
                </div>
                <div class="repo">
                    <h3>Following</h3>
                    <p>${following}</p>
                </div>
            </div>
            <div class="socials flex flex-ai-c flex-jc-sb">
                <div class="social flex flex-ai-c flex-fd-c">
                    <div class="soc flex flex-ai-c">
                        <img src="./assets/images/icon-location.svg" alt="Location">
                        <p>${location}</p>
                    </div>
                    <div class="soc flex flex-ai-c">
                        <img src="./assets/images/icon-website.svg" alt="Website">
                        <p>${blog}</p>
                    </div>
                </div>
                <div class="social flex flex-ai-c flex-fd-c">
                    <div class="soc flex flex-ai-c">
                        <img src="./assets/images/icon-twitter.svg" alt="Twitter">
                        <p>${twitter}</p>
                    </div>
                    <div class="soc flex flex-ai-c">
                        <img src="./assets/images/icon-company.svg" alt="Company">
                        <p>${company}</p>
                    </div>
                </div>
            </div>
        `

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
                usersBio.classList.toggle("white-text")
                userFlexLastP.classList.toggle("white-text")
                socP.forEach(p => p.classList.toggle("white-text"))

                if (usersRepo.classList.contains("darkmode")) {
                    console.log("ok")
                }
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

        mainContents.innerHTML = `
        <div class="user-img">
                <img id="user-img" src="${avatar}" alt="${username}">
            </div>
            <div class="user-details">
                <div class="user-flex" id="user-flex">
                    <h1>${name}</h1>
                    <p class="primary">${username}</p>
                    <p class="last">${joinAt}</p>
                </div>
            </div>
            <div class="user-bio" id="users-bio">
                <p>${bio}</p>
            </div>
            <div class="users-repo flex flex-ai-c flex-jc-sb" id="users-repo">
                <div class="repo">
                    <h3>Repos</h3>
                    <p>${repos}</p>
                </div>
                <div class="repo">
                    <h3>Followers</h3>
                    <p>${followers}</p>
                </div>
                <div class="repo">
                    <h3>Following</h3>
                    <p>${following}</p>
                </div>
            </div>
            <div class="socials flex flex-ai-c flex-jc-sb">
                <div class="social flex flex-ai-c flex-fd-c">
                    <div class="soc flex flex-ai-c">
                        <img src="./assets/images/icon-location.svg" alt="Location">
                        <p>${location}</p>
                    </div>
                    <div class="soc flex flex-ai-c">
                        <img src="./assets/images/icon-website.svg" alt="Website">
                        <p>${blog}</p>
                    </div>
                </div>
                <div class="social flex flex-ai-c flex-fd-c">
                    <div class="soc flex flex-ai-c">
                        <img src="./assets/images/icon-twitter.svg" alt="Twitter">
                        <p>${twitter}</p>
                    </div>
                    <div class="soc flex flex-ai-c">
                        <img src="./assets/images/icon-company.svg" alt="Company">
                        <p>${company}</p>
                    </div>
                </div>
            </div>
        `



    } catch (err) {
        console.log(err)
    }
}



getMe()

searchBtn.addEventListener("click", getUsers)


